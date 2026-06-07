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

const girona = {
  coordinates: [2.82, 41.98] as [number, number],
};

const locations = [
  {
    name: "Figueres",
    detail: "Base Motor Selection",
    coordinates: figueres.coordinates,
    labelX: 18,
    labelY: -10,
    color: "#ff3434",
  },
  {
    name: "Girona",
    detail: "Provincia",
    coordinates: girona.coordinates,
    labelX: -175,
    labelY: 10,
    color: "#ffffff",
  },
];

export default function GironaMap() {
  return (
    <div className="relative h-[640px] overflow-hidden rounded-[2.7rem] border border-white/10 bg-[#050505] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_68%,rgba(239,68,68,0.32),transparent_34%),radial-gradient(circle_at_45%_35%,rgba(255,255,255,0.08),transparent_42%)]" />

      <div className="relative z-20 flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-500">
            Red local
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white">
            Figueres · Girona
          </h3>
        </div>

        <div className="rounded-full border border-white/10 bg-black/55 px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-300 backdrop-blur-xl">
          Alt Empordà → Girona
        </div>
      </div>

      <div className="absolute left-8 right-8 top-28 z-10 h-[365px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/35">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [2.9, 42.13],
            scale: 18500,
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

          <Line
            from={figueres.coordinates}
            to={girona.coordinates}
            stroke="rgba(239,68,68,0.85)"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeDasharray="6 7"
          />

          {locations.map((location) => (
            <Marker key={location.name} coordinates={location.coordinates}>
              <circle r={6} fill={location.color} />
              <circle
                r={18}
                fill={
                  location.name === "Figueres"
                    ? "rgba(239,68,68,0.22)"
                    : "rgba(255,255,255,0.13)"
                }
              />

              <foreignObject
                x={location.labelX}
                y={location.labelY}
                width={200}
                height={76}
              >
                <div
                  className={
                    location.name === "Figueres"
                      ? "rounded-2xl border border-red-500/30 bg-black/75 px-5 py-4 text-white shadow-[0_10px_50px_rgba(239,68,68,0.22)] backdrop-blur-xl"
                      : "rounded-2xl border border-white/10 bg-black/75 px-5 py-4 text-white shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                  }
                >
                  <p className="text-sm font-bold uppercase tracking-[0.25em]">
                    {location.name}
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    {location.detail}
                  </p>
                </div>
              </foreignObject>
            </Marker>
          ))}
        </ComposableMap>
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-20 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
          <p className="text-4xl font-semibold text-white">+35</p>
          <p className="mt-1 text-sm text-zinc-500">Coches vendidos</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
          <p className="text-4xl font-semibold text-white">360°</p>
          <p className="mt-1 text-sm text-zinc-500">Gestión completa</p>
        </div>

        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 shadow-[0_0_40px_rgba(239,68,68,0.12)] backdrop-blur-xl">
          <p className="text-4xl font-semibold text-white">Girona</p>
          <p className="mt-1 text-sm text-zinc-500">Base local</p>
        </div>
      </div>
    </div>
  );
}
