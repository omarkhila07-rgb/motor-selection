import Link from "next/link";
import { cars } from "../app/data/cars";

export default function Stock() {
  return (
    <section id="stock" className="border-y border-white/10 bg-white/[0.03] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Stock inicial
            </p>
            <h2 className="mt-3 text-4xl font-semibold">Vehículos destacados</h2>
          </div>

          <p className="max-w-xl text-zinc-300">
            Vehículos seleccionados y modelos disponibles bajo búsqueda personalizada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <Link
              key={car.slug}
              href={`/vehiculos/${car.slug}`}
              className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-900 transition duration-500 hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-[0_0_55px_rgba(255,255,255,0.06)]"
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-zinc-700 to-black">
                <img
                  src={car.image || car.images?.[0]}
                  alt={car.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
                    {car.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{car.title}</h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {car.year} · {car.km} · {car.gearbox}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xl font-bold">{car.price}</p>
                    <p className="text-sm text-red-400">{car.monthly}</p>
                  </div>

                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm transition group-hover:bg-white group-hover:text-neutral-950">
                    Ver coche
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/vehiculos"
            className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-neutral-950 transition hover:bg-zinc-200"
          >
            Mostrar todos los vehículos
          </Link>
        </div>
      </div>
    </section>
  );
}
