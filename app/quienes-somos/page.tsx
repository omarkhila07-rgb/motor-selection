import Navbar from "../../components/Navbar";
import GironaMap from "../../components/GironaMap";

export const metadata = {
  title: "Quiénes somos | Motor Selection Figueres Girona",
  description:
    "Motor Selection es una compraventa de coches en Figueres, Girona. Vehículos seleccionados, gestión de venta, importación y asesoramiento.",
};

const values = [
  [
    "Criterio real",
    "No enseñamos coches al azar. Filtramos unidades con sentido, estado coherente, documentación clara y precio razonable.",
  ],
  [
    "Acompañamiento",
    "Ayudamos antes, durante y después de la operación para que el cliente no tenga que decidir a ciegas.",
  ],
  [
    "Base local",
    "Trabajamos desde Figueres para clientes de Girona, Alt Empordà y alrededores.",
  ],
  [
    "Gestión completa",
    "Compra, venta, búsqueda personalizada, asesoramiento e importación bajo pedido.",
  ],
];

export default function QuienesSomosPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-neutral-950 text-white">
        <section className="relative px-5 pb-14 pt-24 lg:px-6 lg:pb-20 lg:pt-28">
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,white,transparent_55%)]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 lg:text-sm">
                Motor Selection · Figueres Girona
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[0.96] tracking-tight lg:mt-6 lg:text-7xl xl:text-8xl">
                Coches elegidos con criterio, no por casualidad.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
                Motor Selection nace en Figueres para ayudar a comprar y vender
                coches con más claridad. Revisamos, filtramos y acompañamos cada
                operación para que el cliente no tenga que decidir a ciegas.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/vehiculos"
                  className="rounded-full bg-white px-8 py-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-zinc-200"
                >
                  Ver vehículos
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
            </div>

            <div className="hidden lg:block">
              <GironaMap />
            </div>

            <div className="lg:hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
                Red local
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight">
                Figueres · Girona
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Base local en el Alt Empordà. Compra, venta, asesoramiento e
                importación para clientes de Girona y alrededores.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
                  Figueres
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
                  Girona
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
                  Alt Empordà
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:mt-14">
            {values.map(([title, text], index) => (
              <div
                key={title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 lg:p-8"
              >
                <p className="text-sm text-zinc-500">0{index + 1}</p>
                <h2 className="mt-5 text-3xl font-semibold">{title}</h2>
                <p className="mt-5 leading-8 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-5 py-14 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Zona de trabajo
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-semibold lg:text-5xl">
              Desde Figueres para toda Girona.
            </h2>

            <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
              Trabajamos con clientes que quieren comprar, vender o importar un
              coche con más seguridad. Nuestro objetivo es simplificar el proceso
              y filtrar mejor las opciones antes de tomar una decisión.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
