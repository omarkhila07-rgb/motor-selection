import Navbar from "../../components/Navbar";
import EuropeMap from "../../components/EuropeMap";

export const metadata = {
  title: "Importación de coches en Figueres Girona | Motor Selection",
  description:
    "Importación de coches desde Alemania, Bélgica, Holanda y Francia. Servicio personalizado en Figueres, Girona: búsqueda, revisión, transporte y matriculación.",
};

const benefits = [
  "Historial revisado",
  "Kilómetros coherentes",
  "Gestión completa",
  "Matriculación incluida",
  "Asesoramiento en Girona",
];

const countries = [
  ["Alemania", "Gran oferta de vehículos bien equipados y mantenidos."],
  ["Bélgica", "Mercado interesante para configuraciones premium."],
  ["Holanda", "Buenas oportunidades en coches eficientes y deportivos."],
  ["Francia", "Mercado cercano con transporte más ágil y buenas opciones."],
];

const steps = [
  "Definimos presupuesto, modelo, motor, año y requisitos.",
  "Buscamos unidades en Alemania, Bélgica, Holanda y Francia.",
  "Filtramos anuncios sospechosos, historiales dudosos y precios irreales.",
  "Revisamos documentación, coherencia de kilómetros y estado general.",
  "Te presentamos las mejores opciones antes de decidir.",
  "Gestionamos compra, transporte, matriculación y entrega.",
];

export default function ImportacionPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-neutral-950 text-white">
        {/* HERO DESKTOP */}
        <section className="relative hidden border-b border-white/10 px-6 pb-14 pt-20 lg:block">
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,white,transparent_55%)]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                Importación premium · Figueres Girona
              </p>

              <h1 className="mt-6 text-8xl font-semibold leading-[0.95] tracking-tight">
                Importamos tu coche desde Europa con criterio.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
                Buscamos vehículos en Alemania, Bélgica, Holanda y Francia, filtrando
                historial, estado real, kilometraje, documentación, precio y configuración.
                Evita comprar por impulso: te ayudamos a elegir una unidad seria.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="#formulario-importacion"
                  className="rounded-full bg-red-500 px-8 py-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white shadow-2xl shadow-red-500/30 transition hover:bg-red-600"
                >
                  Rellenar formulario
                </a>

                <a
                  href="https://wa.me/34641476356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-8 py-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
                >
                  Hablar por WhatsApp
                </a>
              </div>

              <p className="mt-5 text-sm text-zinc-500">
                Tardas menos de 1 minuto. Te respondemos por WhatsApp con una primera orientación.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <EuropeMap />
          </div>
        </section>

        {/* HERO MOBILE */}
        <section className="relative border-b border-white/10 px-5 pb-8 pt-6 lg:hidden">
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,white,transparent_55%)]" />
          </div>

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">
              Importación premium · Figueres Girona
            </p>

            <h1 className="mt-5 text-[3.35rem] font-semibold leading-[0.95] tracking-tight">
              Importamos tu coche desde Europa.
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Buscamos unidades en Alemania, Bélgica, Holanda y Francia. Filtramos historial,
              kilometraje, estado, documentación y precio antes de que compres.
            </p>

            <div className="mt-8 grid gap-4">
              <a
                href="#formulario-importacion"
                className="rounded-full bg-red-500 px-7 py-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white"
              >
                Rellenar formulario
              </a>

              <a
                href="https://wa.me/34641476356"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-7 py-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
                Red europea
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight">
                Alemania · Bélgica · Holanda · Francia
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Seleccionamos opciones reales y descartamos anuncios dudosos antes de avanzar.
              </p>

              <div className="mt-6 grid gap-3">
                {["Alemania", "Bélgica", "Holanda", "Francia"].map((country) => (
                  <div
                    key={country}
                    className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-zinc-200"
                  >
                    {country}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAÍSES */}
        <section className="hidden px-5 py-12 md:block lg:px-6 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {countries.map(([country, text]) => (
              <div
                key={country}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] lg:p-8"
              >
                <h2 className="text-3xl font-semibold">{country}</h2>
                <p className="mt-5 leading-7 text-zinc-400">{text}</p>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Mercado europeo
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESO + FORMULARIO */}
        <section className="relative px-5 py-8 lg:px-6 lg:py-16">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.18),transparent_55%)] lg:block" />

          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                Proceso
              </p>

              <h2 className="mt-4 text-5xl font-semibold leading-tight">
                Compra mejor.
                <br />
                Sin prisas.
                <br />
                Sin sorpresas.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                La importación no consiste solo en encontrar un coche barato. Consiste
                en detectar una buena unidad, comprobar que todo encaja y evitar errores
                caros antes de pagar.
              </p>

              <div className="mt-6 space-y-4 lg:mt-8 lg:space-y-5">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-5 rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05] lg:p-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white font-bold text-black">
                      {index + 1}
                    </div>
                    <p className="max-w-md leading-7 text-zinc-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 hidden rounded-[3rem] bg-gradient-to-br from-red-500/25 via-white/10 to-transparent blur-2xl lg:block" />

              <div
                id="formulario-importacion"
                className="relative scroll-mt-32 rounded-[2rem] border border-white/10 bg-white p-6 text-black shadow-[0_30px_100px_rgba(0,0,0,0.35)] lg:rounded-[2.5rem] lg:border-red-500/40 lg:bg-gradient-to-br lg:from-white lg:via-white lg:to-red-50 lg:p-10"
              >
                <div className="mb-7 border-b border-black/10 pb-7 lg:mb-8 lg:flex lg:items-center lg:justify-between lg:gap-4 lg:pb-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-red-500">
                      Búsqueda personalizada
                    </p>
                    <h2 className="mt-3 text-4xl font-semibold lg:text-5xl">
                      Solicita tu coche ideal
                    </h2>
                  </div>

                  <div className="mt-5 rounded-2xl bg-black px-5 py-4 text-sm font-semibold text-white lg:mt-0">
                    Respuesta por WhatsApp
                  </div>
                </div>

                <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                  Cuanto más concreto seas, mejor podremos filtrar opciones reales.
                  Rellena los datos principales y te responderemos con orientación inicial.
                </p>

                <form className="mt-8 grid gap-5 lg:mt-10">
                  <div className="grid gap-5 md:grid-cols-2">
                    <input className="rounded-2xl border border-neutral-200 bg-white px-6 py-5 outline-none transition focus:border-red-500" placeholder="Nombre" />
                    <input className="rounded-2xl border border-neutral-200 bg-white px-6 py-5 outline-none transition focus:border-red-500" placeholder="Teléfono" />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <input className="rounded-2xl border border-neutral-200 bg-white px-6 py-5 outline-none transition focus:border-red-500" placeholder="Marca deseada" />
                    <input className="rounded-2xl border border-neutral-200 bg-white px-6 py-5 outline-none transition focus:border-red-500" placeholder="Modelo deseado" />
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    <input className="rounded-2xl border border-neutral-200 bg-white px-6 py-5 outline-none transition focus:border-red-500" placeholder="Año mínimo" />
                    <input className="rounded-2xl border border-neutral-200 bg-white px-6 py-5 outline-none transition focus:border-red-500" placeholder="KM máximo" />
                    <input className="rounded-2xl border border-neutral-200 bg-white px-6 py-5 outline-none transition focus:border-red-500" placeholder="Presupuesto" />
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    <input className="rounded-2xl border border-neutral-200 bg-white px-6 py-5 outline-none transition focus:border-red-500" placeholder="Combustible" />
                    <input className="rounded-2xl border border-neutral-200 bg-white px-6 py-5 outline-none transition focus:border-red-500" placeholder="Cambio" />
                    <input className="rounded-2xl border border-neutral-200 bg-white px-6 py-5 outline-none transition focus:border-red-500" placeholder="País preferido" />
                  </div>

                  <textarea
                    className="min-h-40 rounded-2xl border border-neutral-200 bg-white px-6 py-5 outline-none transition focus:border-red-500"
                    placeholder="Motor, acabado, extras, color, uso del coche, dudas o preferencias"
                  />

                  <a
                    href="https://wa.me/34641476356?text=Hola%20Motor%20Selection,%20quiero%20solicitar%20una%20b%C3%BAsqueda%20de%20importaci%C3%B3n%20a%20la%20carta."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 rounded-full bg-red-500 px-8 py-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white shadow-2xl shadow-red-500/30 transition hover:bg-red-600"
                  >
                    Enviar solicitud por WhatsApp
                  </a>

                  <div className="grid gap-3 pt-2 text-sm text-zinc-500 md:grid-cols-3">
                    <p>✓ Sin compromiso</p>
                    <p>✓ Primera orientación</p>
                    <p>✓ Atención desde Figueres/Girona</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-5 py-16 lg:px-6 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              SEO local
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-semibold">
              Importación de coches en Figueres, Girona y toda Cataluña.
            </h2>

            <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
              Motor Selection ofrece un servicio de importación de coches para clientes
              de Figueres, Girona, Alt Empordà y Cataluña. Te ayudamos a encontrar
              vehículos en Europa con revisión previa, asesoramiento, transporte,
              matriculación y acompañamiento durante el proceso.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
