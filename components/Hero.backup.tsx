import Link from "next/link";

const carSlots = [
  [
    "/cars/peugeot-308-2015/1.jpg",
    "/cars/volkswagen-touran-2011/1.jpg",
    "/cars/volkswagen-golf-2011/1.jpg",
  ],
  [
    "/cars/volkswagen-touran-2011/2.jpg",
    "/cars/peugeot-308-2015/2.jpg",
    "/cars/volkswagen-golf-2011/2.jpg",
  ],
  [
    "/cars/volkswagen-golf-2011/3.jpg",
    "/cars/peugeot-308-2015/3.jpg",
    "/cars/volkswagen-touran-2011/3.jpg",
  ],
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-white/10 bg-neutral-950 px-5 pb-12 pt-20 text-white md:px-6 md:pb-16 md:pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.12),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-zinc-300">
            Figueres · Girona · Vehículos seleccionados
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Compra y vende tu coche con más seguridad.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Vehículos seleccionados, gestión de venta y búsqueda personalizada en Figueres y Girona.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/vehiculos"
              className="rounded-full bg-white px-8 py-5 text-center text-sm font-bold uppercase tracking-[0.18em] text-neutral-950 transition hover:bg-zinc-200"
            >
              Ver vehículos
            </Link>

            <Link
              href="/vender-mi-coche"
              className="rounded-full border border-white/15 px-8 py-5 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
            >
              Vender mi coche
            </Link>
          </div>

          <div className="mt-9 grid max-w-3xl grid-cols-3 gap-5 border-t border-white/10 pt-7">
            <div>
              <p className="text-3xl font-semibold md:text-4xl">Stock</p>
              <p className="mt-2 text-sm text-zinc-500">Seleccionado</p>
            </div>
            <div>
              <p className="text-3xl font-semibold md:text-4xl">360°</p>
              <p className="mt-2 text-sm text-zinc-500">Gestión</p>
            </div>
            <div>
              <p className="text-3xl font-semibold md:text-4xl">Girona</p>
              <p className="mt-2 text-sm text-zinc-500">Base local</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[3rem] bg-white/[0.04] blur-2xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl">
            <div className="grid grid-cols-[1.25fr_0.9fr] gap-4">
              <div className="relative h-[25rem] overflow-hidden rounded-[2rem] bg-black">
                {carSlots[0].map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt="Vehículo Motor Selection"
                    className="hero-car-fade absolute inset-0 h-full w-full object-cover"
                    style={{ animationDelay: `${index * 3}s` }}
                  />
                ))}
              </div>

              <div className="grid gap-4">
                <div className="relative h-[12rem] overflow-hidden rounded-[1.7rem] bg-black">
                  {carSlots[1].map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt="Vehículo Motor Selection"
                      className="hero-car-fade absolute inset-0 h-full w-full object-cover"
                      style={{ animationDelay: `${index * 3}s` }}
                    />
                  ))}
                </div>

                <div className="relative h-[12rem] overflow-hidden rounded-[1.7rem] bg-black">
                  {carSlots[2].map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt="Vehículo Motor Selection"
                      className="hero-car-fade absolute inset-0 h-full w-full object-cover"
                      style={{ animationDelay: `${index * 3}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[1.8rem] border border-white/10 bg-black/35 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Motor Selection
              </p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  "Compra con más seguridad",
                  "Venta con gestión profesional",
                  "Búsqueda personalizada",
                  "Importación bajo pedido",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-300"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
