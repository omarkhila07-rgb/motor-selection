import Link from "next/link";
import Header from "../../components/Header";
import { client } from "../../sanity/lib/client";
import { cars as localCars } from "../data/cars";

export const dynamic = "force-dynamic";

type SanityCar = {
  _id: string;
  title: string;
  slug?: { current?: string };
  year?: string;
  km?: string;
  gearbox?: string;
  price?: string;
  status?: string;
  image?: string;
};

async function getSanityCars(): Promise<SanityCar[]> {
  return client.fetch(`
    *[_type == "car"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      year,
      km,
      gearbox,
      price,
      status,
      "image": images[0].asset->url
    }
  `);
}

export default async function VehiculosPage() {
  const sanityCars = await getSanityCars();

  const cmsCars = sanityCars
    .filter((car) => car?.slug?.current)
    .map((car) => ({
      id: car._id,
      title: car.title,
      slug: car.slug?.current || "",
      year: car.year || "",
      km: car.km || "",
      gearbox: car.gearbox || "",
      price: car.price || "Consultar",
      status: car.status || "Disponible",
      image: car.image || "",
    }));

  const hardcodedCars = localCars.filter(Boolean).map((car) => ({
    id: car.slug,
    title: car.title,
    slug: car.slug,
    year: car.year,
    km: car.km,
    gearbox: car.gearbox,
    price: car.price,
    status: car.status,
    image: car.images?.[0] || car.image,
  }));

  const cars = [...cmsCars, ...hardcodedCars];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Motor Selection
            </p>

            <h1 className="mt-3 text-5xl font-semibold">Vehículos</h1>

            <p className="mt-4 max-w-2xl text-zinc-400">
              Stock seleccionado y vehículos disponibles bajo búsqueda personalizada.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <Link
                key={car.id}
                href={`/vehiculos/${car.slug}`}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 transition duration-300 hover:-translate-y-1 hover:bg-neutral-800"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-zinc-700 to-black">
                  {car.image ? (
                    <img
                      src={car.image}
                      alt={car.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  ) : null}

                  <div className="absolute left-6 top-6">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
                      {car.status || "Disponible"}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-semibold">{car.title}</h2>

                  <p className="mt-3 text-zinc-400">
                    {car.year} · {car.km} · {car.gearbox}
                  </p>

                  <div className="mt-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-2xl font-bold">{car.price || "Consultar"}</p>
                    </div>

                    <span className="rounded-full border border-white/10 px-4 py-2 text-sm transition group-hover:bg-white group-hover:text-black">
                      Ver coche
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.03] px-8 py-14 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Búsqueda personalizada
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              ¿Buscas algo en particular?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Dinos qué coche estás buscando y nos encargamos de encontrarlo para ti.
              Trabajamos vehículos nacionales, importación y búsqueda bajo pedido.
            </p>

            <a
              href="/#contacto"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-zinc-200"
            >
              Solicitar búsqueda
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
