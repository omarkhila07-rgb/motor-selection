import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const fields = {
      nombre: String(data.get("nombre") || ""),
      telefono: String(data.get("telefono") || ""),
      marca: String(data.get("marca") || ""),
      modelo: String(data.get("modelo") || ""),
      año: String(data.get("año") || ""),
      km: String(data.get("km") || ""),
      motor: String(data.get("motor") || ""),
      cambio: String(data.get("cambio") || ""),
      combustible: String(data.get("combustible") || ""),
      precio: String(data.get("precio") || ""),
      descripcion: String(data.get("descripcion") || ""),
    };

    const pdf = await PDFDocument.create();
    const page = pdf.addPage([595, 842]);
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

    let y = 790;

    page.drawText("Solicitud de venta de vehículo", {
      x: 50,
      y,
      size: 22,
      font: bold,
      color: rgb(0, 0, 0),
    });

    y -= 40;

    for (const [key, value] of Object.entries(fields)) {
      const label = key.charAt(0).toUpperCase() + key.slice(1);

      page.drawText(`${label}:`, {
        x: 50,
        y,
        size: 11,
        font: bold,
      });

      const safeValue = value || "-";
      const lines = page === page ? safeValue.match(/.{1,70}/g) || ["-"] : ["-"];

      page.drawText(lines[0], {
        x: 160,
        y,
        size: 11,
        font,
      });

      y -= 22;
    }

    const pdfBytes = await pdf.save();

    const files = data.getAll("fotos").filter((file) => file instanceof File) as File[];

console.log("FILES:", files.length);

for (const file of files) {
  console.log("FILE:", file.name, file.size, file.type);
}

    const attachments: {
      filename: string;
      content: string;
    }[] = [
      {
        filename: `venta-${fields.marca || "coche"}-${fields.modelo || ""}.pdf`,
        content: Buffer.from(pdfBytes).toString("base64"),
      },
    ];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer.toString("base64"),
      });
    }

    console.log("ATTACHMENTS:", attachments);

const result = await resend.emails.send({
      from: "Motor Selection <onboarding@resend.dev>",
      to: "motor.selection1@gmail.com",
      subject: `Solicitud venta coche: ${fields.marca} ${fields.modelo}`,
      html: `
        <h2>Nueva solicitud de venta</h2>
        <p><strong>Nombre:</strong> ${fields.nombre}</p>
        <p><strong>Teléfono:</strong> ${fields.telefono}</p>
        <p><strong>Coche:</strong> ${fields.marca} ${fields.modelo}</p>
        <p><strong>Año:</strong> ${fields.año}</p>
        <p><strong>KM:</strong> ${fields.km}</p>
        <p><strong>Motor:</strong> ${fields.motor}</p>
        <p><strong>Cambio:</strong> ${fields.cambio}</p>
        <p><strong>Combustible:</strong> ${fields.combustible}</p>
        <p><strong>Precio deseado:</strong> ${fields.precio}</p>
        <p><strong>Descripción:</strong> ${fields.descripcion}</p>
        <p>PDF y fotos adjuntas.</p>
      `,
      attachments: attachments.filter(
        (a) => a.content && a.content.length > 0
      ),
    });

    console.log("RESEND RESULT:", result);

    if (result.error) {
      console.error("RESEND ERROR:", result.error);
      return NextResponse.json(
        { ok: false, error: result.error.message || "Error de Resend", result },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, result });
  } catch (error: any) {
    console.error("ERROR API VENDER:", error);

    return NextResponse.json(
      {
        ok: false,
        error: error?.message || "Error enviando solicitud",
        details: error?.response?.data || error,
      },
      { status: 500 }
    );
  }
}
