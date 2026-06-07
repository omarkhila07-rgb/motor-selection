"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const figueres = {
  coordinates: [2.96, 42.27] as [number, number],
};

const locations = [
  {
    name: "Holanda",
    detail: "Ámsterdam",
    flag: "🇳��",
    coordinates: [5.29, 52.13] as [number, number],
    labelX: -170,
    labelY: -85,
  },
  {
    name: "Alemania",
    detail: "Stuttgart / Múnich",
    flag: "",
    coordinates: [10.45, 51.16] as [number, number],
    labelX: 18,
    labelY: -24,
  },
  {
    name: "Bélgica",
    detail: "Bruselas",
    flag: "",
    coordinates: [4.47, 50.5] as [number, number],
    labelX: -185,
    labelY: -10,
  },
  {
    name: "Francia",
    detail: "París / Lyon",
    flag: "",
    coordinates: [2.35, 46.7] as [number, number],
    labelX: -185,
    labelY: 14,
  },
];

function MapBase({ mobile = false }: { mobile?: boolean }) {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        center: mobile ? [5.8, 48.7] : [5.8, 47.7],
        scale: mobile ? 850 : 1120,
      }}
      width={700}
      height={390}
      className="absolute inset-0 h-full w-full"
    >
      <Geographies geography={geoUrl}>
        {({ geographies }: any) =>
          geographies.map((geo: any) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="rgba(255,255,255,0.055)"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth={0.45}
              style={{
                default: { outline: "none" },
                hover: { outline: "none", fill: "rgba(239,68,68,0.14)" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {locations.map((location) => (
        <Line
          key={`line-${location.name}`}
          from={location.coordinates}
          to={figueres.coordinates}
          stroke={
            location.name === "Alemania" || location.name === "Francia"
              ? "rgba(239,68,68,0.85)"
              : "rgba(255,255,255,0.38)"
          }
          strokeWidth={mobile ? 2 : 1.6}
          strokeLinecap="round"
          strokeDasharray="6 7"
        />
      ))}

      {locations.map((location) => (
        <Marker key={location.name} coordinates={location.coordinates}>
          <circle r={mobile ? 6 : 5} fill="#ff3434" />
          <circle r={mobile ? 16 : 14} fill="rgba(239,68,68,0.18)" />

          {!mobile && (
            <foreignObject
              x={location.labelX}
              y={location.labelY}
              width={160}
              height={66}
            >
              <div className="rounded-2xl border border-white/10 bg-black/75 px-4 py-3 text-white shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span>{location.flag}</span>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em]">
                    {location.name}
                  </p>
                </div>
                <p className="mt-1 text-[11px] text-zinc-400">
                  {location.detail}
                </p>
              </div>
            </foreignObject>
          )}
        </Marker>
      ))}

      <Marker coordinates={figueres.coordinates}>
        <circle r={mobile ? 9 : 8} fill="#ff3434" />
        <circle r={mobile ? 24 : 22} fill="rgba(239,68,68,0.22)" />

        {!mobile && (
          <foreignObject x={18} y={-8} width={200} height={76}>
            <div className="rounded-2xl border border-red-500/30 bg-black/75 px-5 py-4 text-white shadow-[0_10px_50px_rgba(239,68,68,0.22)] backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em]">
                Figueres
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                Girona · Cataluña
              </p>
            </div>
          </foreignObject>
        )}
      </Marker>
    </ComposableMap>
  );
}


function FlagCSS({ code }: { code: string }) {
  const common =
    "inline-flex h-3.5 w-5 overflow-hidden rounded-[2px] border border-white/20 shrink-0";

  if (code === "NL") {
    return (
      <span className={`${common} flex-col`}>
        <span className="block h-1/3 w-full bg-[#AE1C28]" />
        <span className="block h-1/3 w-full bg-white" />
        <span className="block h-1/3 w-full bg-[#21468B]" />
      </span>
    );
  }

  if (code === "DE") {
    return (
      <span className={`${common} flex-col`}>
        <span className="block h-1/3 w-full bg-black" />
        <span className="block h-1/3 w-full bg-red-600" />
        <span className="block h-1/3 w-full bg-yellow-400" />
      </span>
    );
  }

  if (code === "BE") {
    return (
      <span className={common}>
        <span className="block h-full w-1/3 bg-black" />
        <span className="block h-full w-1/3 bg-yellow-400" />
        <span className="block h-full w-1/3 bg-red-600" />
      </span>
    );
  }

  if (code === "FR") {
    return (
      <span className={common}>
        <span className="block h-full w-1/3 bg-blue-700" />
        <span className="block h-full w-1/3 bg-white" />
        <span className="block h-full w-1/3 bg-red-600" />
      </span>
    );
  }

  return null;
}


export default function EuropeMap() {
  return (
    <>
      {/* DESKTOP ORIGINAL */}
      <div className="relative hidden h-[640px] overflow-hidden rounded-[2.7rem] border border-white/10 bg-[#050505] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.65)] lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_68%,rgba(239,68,68,0.32),transparent_34%),radial-gradient(circle_at_45%_35%,rgba(255,255,255,0.08),transparent_42%)]" />

        <div className="relative z-20 flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-500">
              Red europea
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-white">
              Búsqueda internacional
            </h3>
          </div>

          <div className="rounded-full border border-white/10 bg-black/55 px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-300 backdrop-blur-xl">
            EU → Girona
          </div>
        </div>

        <div className="absolute left-8 right-8 top-28 z-10 h-[365px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/35">
          <MapBase />
        </div>

        <div className="absolute bottom-8 left-8 right-8 z-20 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
            <p className="text-4xl font-semibold text-white">4</p>
            <p className="mt-1 text-sm text-zinc-500">Países de búsqueda</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
            <p className="text-4xl font-semibold text-white">360°</p>
            <p className="mt-1 text-sm text-zinc-500">Gestión completa</p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 shadow-[0_0_40px_rgba(239,68,68,0.12)] backdrop-blur-xl">
            <p className="text-4xl font-semibold text-white">24h</p>
            <p className="mt-1 text-sm text-zinc-500">Primera orientación</p>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#050505] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.55)] lg:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(239,68,68,0.22),transparent_38%),radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.08),transparent_42%)]" />

        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            Red europea
          </p>

          <div className="mt-4 flex items-start justify-between gap-4">
            <h3 className="text-3xl font-semibold leading-tight text-white">
              Importación desde Europa
            </h3>

            <div className="shrink-0 rounded-full border border-white/10 bg-black/60 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-300">
              EU → Girona
            </div>
          </div>

          <p className="mt-4 text-base leading-7 text-zinc-400">
            Buscamos unidades en mercados europeos y filtramos historial, kilometraje,
            estado y documentación antes de comprar.
          </p>
        </div>

        <div className="relative z-10 mt-7 grid gap-3">
          {[
            ["NL", "Holanda", "Ámsterdam"],
            ["DE", "Alemania", "Stuttgart / Múnich"],
            ["BE", "Bélgica", "Bruselas"],
            ["FR", "Francia", "París / Lyon"],
          ].map(([code, country, detail]) => (
            <div
              key={country}
              className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/45 p-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-black">
                  {code}
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                    {country}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{detail}</p>
                </div>
              </div>

              <span className="shrink-0 text-sm font-semibold text-red-400">
                Figueres
              </span>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-black/45 p-5">
            <p className="text-4xl font-semibold text-white">4</p>
            <p className="mt-1 text-sm text-zinc-500">Países</p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
            <p className="text-4xl font-semibold text-white">360°</p>
            <p className="mt-1 text-sm text-zinc-500">Gestión</p>
          </div>
        </div>
      </div>

    </>
  );
}
