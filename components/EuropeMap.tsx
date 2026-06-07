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
    code: "NL",
    name: "Holanda",
    detail: "Ámsterdam",
    coordinates: [5.29, 52.13] as [number, number],
    labelX: -150,
    labelY: -68,
  },
  {
    code: "DE",
    name: "Alemania",
    detail: "Stuttgart / Múnich",
    coordinates: [10.45, 51.16] as [number, number],
    labelX: 18,
    labelY: -18,
  },
  {
    code: "BE",
    name: "Bélgica",
    detail: "Bruselas",
    coordinates: [4.47, 50.5] as [number, number],
    labelX: -150,
    labelY: -5,
  },
  {
    code: "FR",
    name: "Francia",
    detail: "París / Lyon",
    coordinates: [2.35, 46.7] as [number, number],
    labelX: -150,
    labelY: 12,
  },
];

function Flag({ code }: { code: string }) {
  const base =
    "inline-flex h-3.5 w-5 shrink-0 overflow-hidden rounded-[2px] border border-white/25 bg-white";

  if (code === "NL") {
    return (
      <span className={`${base} flex-col`}>
        <span className="block h-1/3 w-full bg-[#AE1C28]" />
        <span className="block h-1/3 w-full bg-white" />
        <span className="block h-1/3 w-full bg-[#21468B]" />
      </span>
    );
  }

  if (code === "DE") {
    return (
      <span className={`${base} flex-col`}>
        <span className="block h-1/3 w-full bg-black" />
        <span className="block h-1/3 w-full bg-[#DD0000]" />
        <span className="block h-1/3 w-full bg-[#FFCE00]" />
      </span>
    );
  }

  if (code === "BE") {
    return (
      <span className={base}>
        <span className="block h-full w-1/3 bg-black" />
        <span className="block h-full w-1/3 bg-[#FAE042]" />
        <span className="block h-full w-1/3 bg-[#ED2939]" />
      </span>
    );
  }

  if (code === "FR") {
    return (
      <span className={base}>
        <span className="block h-full w-1/3 bg-[#0055A4]" />
        <span className="block h-full w-1/3 bg-white" />
        <span className="block h-full w-1/3 bg-[#EF4135]" />
      </span>
    );
  }

  return null;
}

function CountryLabel({
  code,
  name,
  detail,
}: {
  code: string;
  name: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/85 px-4 py-3 text-white shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <Flag code={code} />
        <p className="text-[11px] font-bold uppercase tracking-[0.22em]">
          {name}
        </p>
      </div>
      <p className="mt-1 text-[11px] text-zinc-400">{detail}</p>
    </div>
  );
}

function MapBase() {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        center: [5.8, 47.7],
        scale: 1120,
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
              stroke="rgba(255,255,255,0.15)"
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
            location.code === "DE" || location.code === "FR"
              ? "rgba(239,68,68,0.85)"
              : "rgba(255,255,255,0.38)"
          }
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeDasharray="6 7"
        />
      ))}

      {locations.map((location) => (
        <Marker key={location.name} coordinates={location.coordinates}>
          <circle r={5} fill="#ff3434" />
          <circle r={13} fill="rgba(239,68,68,0.18)" />

          <foreignObject
            x={location.labelX}
            y={location.labelY}
            width={175}
            height={72}
          >
            <CountryLabel
              code={location.code}
              name={location.name}
              detail={location.detail}
            />
          </foreignObject>
        </Marker>
      ))}

      <Marker coordinates={figueres.coordinates}>
        <circle r={8} fill="#ff3434" />
        <circle r={21} fill="rgba(239,68,68,0.22)" />

        <foreignObject x={15} y={-8} width={205} height={74}>
          <div className="rounded-2xl border border-red-500/30 bg-black/85 px-5 py-4 text-white shadow-[0_10px_50px_rgba(239,68,68,0.22)] backdrop-blur-xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em]">
              Figueres
            </p>
            <p className="mt-1 text-xs text-zinc-400">Girona · Cataluña</p>
          </div>
        </foreignObject>
      </Marker>
    </ComposableMap>
  );
}

export default function EuropeMap() {
  return (
    <>
      {/* DESKTOP */}
      <div className="relative hidden overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] p-7 shadow-[0_30px_120px_rgba(0,0,0,0.65)] lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_70%,rgba(239,68,68,0.22),transparent_36%),radial-gradient(circle_at_45%_35%,rgba(255,255,255,0.08),transparent_42%)]" />

        <div className="relative z-20 flex items-start justify-between gap-8">
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

        <div className="relative z-10 mt-6 h-[315px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/35">
          <MapBase />
        </div>

        <div className="relative z-20 mt-5 grid grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-xl">
            <p className="text-4xl font-semibold leading-none text-white">4</p>
            <p className="mt-2 text-sm leading-5 text-zinc-500">Países de búsqueda</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-xl">
            <p className="text-4xl font-semibold leading-none text-white">360°</p>
            <p className="mt-2 text-sm leading-5 text-zinc-500">Gestión completa</p>
          </div>

          <div className="rounded-2xl border border-red-500/25 bg-red-500/10 p-5 shadow-[0_0_40px_rgba(239,68,68,0.10)] backdrop-blur-xl">
            <p className="text-4xl font-semibold leading-none text-white">24h</p>
            <p className="mt-2 text-sm leading-5 text-zinc-500">Primera orientación</p>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] lg:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,rgba(239,68,68,0.16),transparent_42%),radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.07),transparent_40%)]" />

        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
            Red europea
          </p>

          <h3 className="mt-3 text-3xl font-semibold leading-tight text-white">
            Alemania · Bélgica · Holanda · Francia
          </h3>

          <p className="mt-4 text-base leading-7 text-zinc-400">
            Buscamos unidades reales y filtramos historial, kilometraje, estado,
            precio y documentación.
          </p>
        </div>

        <div className="relative z-10 mt-6 grid gap-3">
          {locations.map((location) => (
            <div
              key={location.code}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-4"
            >
              <Flag code={location.code} />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                  {location.name}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{location.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
