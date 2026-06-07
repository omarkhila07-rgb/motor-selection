import Link from "next/link";
import Header from "../../../components/Header";
import { client } from "../../../sanity/lib/client";
import { cars as localCars } from "../../data/cars";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getSanityCar(slug: string) {
  return client.fetch(
    `
    *[_type=="car" && slug.current==$slug][0]{
      title, year, km, fuel, gearbox, power, price, status, location,
      description, equipment,
      "images": images[].asset->url
    }
    `,
    { slug }
  );
}

export default async function CarPage({ params }: Props) {
  const { slug } = await params;

  const sanityCar = await getSanityCar(slug);
  const localCar = localCars.filter(Boolean).find((car) => car.slug === slug);
  const car = sanityCar || localCar;

  if (!car) notFound();

  const images = car.images || [];
  const whatsappText = encodeURIComponent(
    `Hola Motor Selection, me interesa el ${car.title}.`
  );

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f6f2e9] px-6 py-28 text-black">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/vehiculos"
            className="mb-6 inline-block text-sm font-medium text-black/60 hover:text-black"
          >
            ← Volver a vehículos
          </Link>

          <div className="grid items-start gap-8 lg:grid-cols-[360px_1fr]">
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-black/10 bg-white/80 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl">
                <span className="rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
                  {car.status || "Disponible"}
                </span>

                <h1 className="mt-6 text-3xl font-bold leading-tight">
                  {car.title}
                </h1>

                <div className="mt-4 flex items-center gap-3">
                  <p className="text-3xl font-bold">{car.price || "Consultar"}</p>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    ["Año", car.year],
                    ["Kilómetros", car.km],
                    ["Combustible", car.fuel],
                    ["Cambio", car.gearbox],
                    ["Potencia", car.power],
                    ["Zona", car.location],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-[#f3eee4] p-4">
                      <p className="text-xs font-medium text-black/45">{label}</p>
                      <p className="mt-1 text-sm font-semibold">{value || "Consultar"}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/34641476356?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block rounded-full bg-black px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
                >
                  Me interesa este coche
                </a>
              </div>
            </aside>

            <section>
              <div className="rounded-[2rem] border border-black/10 bg-white/75 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
                <div className="grid gap-4 lg:grid-cols-[1.45fr_0.75fr]">
                  <img
                    src={images[0]}
                    alt={car.title}
                    className="h-[430px] w-full rounded-[1.5rem] object-cover"
                  />

                  <div className="grid gap-4">
                    {images.slice(1, 3).map((img: string) => (
                      <img
                        key={img}
                        src={img}
                        alt={car.title}
                        className="h-[207px] w-full rounded-[1.5rem] object-cover"
                      />
                    ))}
                  </div>
                </div>

                {images.length > 3 && (
                  <details className="mt-4">
                    <summary className="cursor-pointer list-none rounded-full bg-black px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800">
                      Ver más imágenes
                    </summary>

                    <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {images.slice(3).map((img: string) => (
                        <img
                          key={img}
                          src={img}
                          alt={car.title}
                          className="h-64 w-full rounded-[1.4rem] object-cover"
                        />
                      ))}
                    </div>
                  </details>
                )}
              </div>

              <div className="mt-8 rounded-[2rem] border border-black/10 bg-white/75 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
                <h2 className="text-2xl font-bold">Descripción</h2>
                <p className="mt-4 leading-8 text-black/70">{car.description}</p>
              </div>

              {car.equipment?.length > 0 && (
                <div className="mt-8 rounded-[2rem] border border-black/10 bg-white/75 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
                  <h2 className="text-2xl font-bold">Equipamiento</h2>

                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {car.equipment.map((item: string) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-[#f3eee4] p-4 text-black/75"
                      >
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
