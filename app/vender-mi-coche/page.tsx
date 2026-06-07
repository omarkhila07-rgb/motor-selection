"use client";

import { useState } from "react";
import Header from "../../components/Header";

export default function VenderMiCochePage() {
  const [loading, setLoading] = useState(false);
  const [fileCount, setFileCount] = useState(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const marca = String(formData.get("marca") || "");
    const modelo = String(formData.get("modelo") || "");

    try {
      const res = await fetch("/api/vender", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        alert("No se ha podido enviar la solicitud. Revisa los datos o inténtalo otra vez.");
        return;
      }

      const text = encodeURIComponent(
        `Hola Motor Selection, acabo de enviar por la web la solicitud para vender mi coche: ${marca} ${modelo}.`
      );

      alert("✅ Solicitud enviada correctamente. Hemos recibido tu vehículo por correo. Ahora se abrirá WhatsApp para avisarnos directamente.");

      window.location.href = `https://wa.me/34641476356?text=${text}`;
    } catch (error) {
      alert("No se ha podido enviar la solicitud. Inténtalo otra vez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 px-6 py-32 text-white">
        <section className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Vender mi coche
          </p>

          <h1 className="mt-5 text-5xl font-semibold leading-tight md:text-7xl">
            Envíanos tu coche y lo valoramos.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Rellena los datos principales, añade fotos del vehículo y recibiremos la solicitud por email.
            Después se abrirá WhatsApp para avisarnos directamente.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input name="nombre" required placeholder="Nombre" className="rounded-2xl border border-white/10 bg-black/35 px-6 py-5 outline-none" />
              <input name="telefono" required placeholder="Teléfono" className="rounded-2xl border border-white/10 bg-black/35 px-6 py-5 outline-none" />
              <input name="marca" required placeholder="Marca" className="rounded-2xl border border-white/10 bg-black/35 px-6 py-5 outline-none" />
              <input name="modelo" required placeholder="Modelo" className="rounded-2xl border border-white/10 bg-black/35 px-6 py-5 outline-none" />
              <input name="año" placeholder="Año" className="rounded-2xl border border-white/10 bg-black/35 px-6 py-5 outline-none" />
              <input name="km" placeholder="Kilómetros" className="rounded-2xl border border-white/10 bg-black/35 px-6 py-5 outline-none" />
              <input name="motor" placeholder="Motor" className="rounded-2xl border border-white/10 bg-black/35 px-6 py-5 outline-none" />
              <input name="cambio" placeholder="Cambio" className="rounded-2xl border border-white/10 bg-black/35 px-6 py-5 outline-none" />
              <input name="combustible" placeholder="Combustible" className="rounded-2xl border border-white/10 bg-black/35 px-6 py-5 outline-none" />
              <input name="precio" placeholder="Precio deseado" className="rounded-2xl border border-white/10 bg-black/35 px-6 py-5 outline-none" />
            </div>

            <textarea
              name="descripcion"
              placeholder="Estado, extras, mantenimiento, ITV, defectos, observaciones..."
              className="mt-5 min-h-40 w-full rounded-2xl border border-white/10 bg-black/35 px-6 py-5 outline-none"
            />

            <div className="mt-5 rounded-2xl border border-dashed border-white/20 bg-black/30 p-6">
              <p className="font-semibold">Fotos del coche</p>
              <p className="mt-2 text-sm text-zinc-400">
                Añade fotos exteriores, interiores, kilómetros, documentación o cualquier detalle importante.
              </p>

              <label className="mt-5 inline-flex cursor-pointer rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-zinc-200">
                Añadir fotos
                <input
                  type="file"
                  name="fotos"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setFileCount(e.target.files?.length || 0)}
                />
              </label>

              <p className="mt-3 text-sm text-zinc-400">
                {fileCount > 0 ? `${fileCount} foto(s) seleccionada(s)` : "Ninguna foto seleccionada"}
              </p>
            </div>

            <button
              disabled={loading}
              className="mt-8 w-full rounded-full bg-white px-8 py-5 text-sm font-bold uppercase tracking-[0.22em] text-black transition hover:bg-zinc-200 disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar solicitud"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
