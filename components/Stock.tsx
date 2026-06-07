import Link from "next/link";
import { cars } from "../app/data/cars";

export default function Stock() {
  return (
    <section id="stock" className="border-y border-white/10 bg-white/[0.03] px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Stock inicial
            </p>
            <h2 className="mt-3 text-4xl font-semibold md:text-4xl">
              Vehículos destacados
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-zinc-300">
            Vehículos seleccionados y modelos disponibles bajo búsqueda personalizada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <Link
              key={car.slug}
              href={`/vehiculos/${car.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 transition duration-300 hover:-translate-y-1 hover:bg-neutral-800"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black md:h-64 md:aspect-auto">
                <img
                  src={car.image}
                  alt={car.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />

                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
                  {car.status}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-semibold leading-tight md:text-2xl">
                  {car.title}
                </h3>

                <p className="mt-4 text-base leading-6 text-zinc-400 md:text-sm">
                  {car.year} · {car.km} · {car.gearbox}
                </p>

                <div className="mt-7 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-2xl font-bold md:text-xl">{car.price}</p>
                  </div>

                  <span className="rounded-full border border-white/10 px-5 py-3 text-sm transition group-hover:bg-white group-hover:text-neutral-950 md:px-4 md:py-2">
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
            className="w-full rounded-full bg-white px-8 py-5 text-center text-sm font-bold uppercase tracking-wide text-neutral-950 transition hover:bg-zinc-200 md:w-auto"
          >
            Mostrar todos los vehículos
          </Link>
        </div>
      </div>
    </section>
  );
}
