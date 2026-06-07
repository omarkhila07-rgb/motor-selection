export default function ImportSection() {
  return (
    <section id="importacion" className="bg-white py-24 text-neutral-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Importación a la carta</p>
          <h2 className="mt-3 text-5xl font-semibold tracking-tight">Alemania, Bélgica y Holanda.</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-700">
            Localizamos unidades con sentido: buen historial, configuración atractiva, precio competitivo y documentación correcta. Tú nos dices qué buscas y nosotros filtramos las opciones antes de que pongas dinero sobre la mesa.
          </p>
        </div>
        <div className="rounded-[2rem] bg-neutral-950 p-8 text-white">
          <h3 className="text-2xl font-semibold">Proceso de trabajo</h3>
          <div className="mt-8 space-y-5">
            {[
              "Definimos presupuesto, modelo y requisitos.",
              "Buscamos unidades en mercados europeos.",
              "Revisamos historial, estado y documentación.",
              "Gestionamos compra, transporte y matriculación.",
            ].map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-neutral-950">{index + 1}</span>
                <p className="text-sm leading-6 text-zinc-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
