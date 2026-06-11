import Link from "next/link";
import { cars } from "../app/data/cars";

const getCarGallery = (car: any) => {
  const images = Array.isArray(car.images) && car.images.length > 0
    ? car.images
    : car.image
      ? [car.image]
      : [];

  return images.filter(Boolean);
};

const activeCars = cars.slice(0, 3);

const carImages = [0, 1, 2].map((slot) =>
  activeCars
    .map((car) => {
      const gallery = getCarGallery(car);
      return gallery[slot] || gallery[0];
    })
    .filter(Boolean)
);

const hasHeroImages = carImages.some((gallery) => gallery.length > 0);

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-white/10 bg-neutral-950 px-5 pb-16 pt-28 text-white md:px-6 md:pb-20 md:pt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.13),transparent_35%)]" />

      {/* MOBILE */}
      <div className="relative mx-auto block max-w-xl md:hidden">
        <div className="inline-flex max-w-full rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
          Figueres · Girona · Compraventa
        </div>

        <h1 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-tight">
          Compra y vende tu coche con seguridad.
        </h1>

        {hasHeroImages && (
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3">
            <div className="grid grid-cols-[1.35fr_0.85fr] gap-3">
              <div className="relative h-40 overflow-hidden rounded-[1.4rem] bg-black">
                {carImages[0].map((src, index) => (
                  <img
                    key={`mobile-main-${src}-${index}`}
                    src={src}
                    alt="Vehículo Motor Selection"
                    className="hero-car-fade absolute inset-0 h-full w-full object-cover"
                    style={{ animationDelay: `${index * 3}s` }}
                  />
                ))}
              </div>

              <div className="grid gap-3">
                <div className="relative h-[4.65rem] overflow-hidden rounded-[1.2rem] bg-black">
                  {carImages[1].map((src, index) => (
                    <img
                      key={`mobile-top-${src}-${index}`}
                      src={src}
                      alt="Vehículo Motor Selection"
                      className="hero-car-fade absolute inset-0 h-full w-full object-cover"
                      style={{ animationDelay: `${index * 3}s` }}
                    />
                  ))}
                </div>

                <div className="relative h-[4.65rem] overflow-hidden rounded-[1.2rem] bg-black">
                  {carImages[2].map((src, index) => (
                    <img
                      key={`mobile-bottom-${src}-${index}`}
                      src={src}
                      alt="Vehículo Motor Selection"
                      className="hero-car-fade absolute inset-0 h-full w-full object-cover"
                      style={{ animationDelay: `${index * 3}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <p className="mt-6 text-base leading-7 text-zinc-300">
          Vehículos seleccionados, gestión de venta y búsqueda personalizada en Figueres y Girona.
        </p>

        <div className="mt-8 grid gap-3">
          <Link
            href="/vehiculos"
            className="rounded-full bg-white px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-neutral-950"
          >
            Ver vehículos
          </Link>

          <Link
            href="/vender-mi-coche"
            className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white"
          >
            Vender mi coche
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
          <div>
            <p className="text-3xl font-semibold">Stock</p>
            <p className="mt-1 text-xs text-zinc-500">Seleccionado</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">360°</p>
            <p className="mt-1 text-xs text-zinc-500">Gestión</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">Girona</p>
            <p className="mt-1 text-xs text-zinc-500">Base local</p>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="relative mx-auto hidden max-w-7xl items-center gap-14 md:grid lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-zinc-300">
            Figueres · Girona · Compraventa de vehículos
          </div>

          <h1 className="mt-7 max-w-4xl text-6xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
            Compra y vende tu coche con más seguridad.
          </h1>

          {hasHeroImages && (
            <div className="mt-8 max-w-[42rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3">
              <div className="grid grid-cols-3 gap-4">
                {carImages.map((gallery, slot) => (
                  <div
                    key={slot}
                    className="relative h-36 overflow-hidden rounded-[1.3rem] bg-black"
                  >
                    {gallery.map((src, index) => (
                      <img
                        key={`desktop-${slot}-${src}-${index}`}
                        src={src}
                        alt="Vehículo Motor Selection"
                        className="hero-car-fade absolute inset-0 h-full w-full object-cover"
                        style={{ animationDelay: `${index * 3}s` }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Vehículos seleccionados, gestión de venta y búsqueda personalizada en Figueres y Girona.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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

          <div className="mt-12 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-4xl font-semibold">Stock</p>
              <p className="mt-2 text-sm text-zinc-500">Vehículos seleccionados</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">360°</p>
              <p className="mt-2 text-sm text-zinc-500">Gestión completa</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">Girona</p>
              <p className="mt-2 text-sm text-zinc-500">Base local</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-[2.7rem] border border-white/10 bg-gradient-to-br from-slate-900 to-black p-8 shadow-2xl">
          <div className="absolute -inset-4 rounded-[3rem] bg-white/5 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-black/35 p-7">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Motor Selection
            </p>

            <h2 className="mt-4 text-5xl font-semibold leading-tight">
              Compraventa profesional
            </h2>

            <div className="mt-10 grid gap-4">
              {[
                "Compra de vehículos seleccionados",
                "Venta de tu coche con gestión profesional",
                "Asesoramiento",
                "Matriculación e importación bajo pedido",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-zinc-300"
                >
                  ✓ {item}
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-white p-6 text-black">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Servicio principal
              </p>
              <p className="mt-3 text-3xl font-bold">
                Compra y venta de coches en Figueres
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
