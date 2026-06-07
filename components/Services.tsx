const services = [
  {
    title: "Venta de coches seleccionados",
    text: "Vehículos revisados, escogidos con criterio y preparados para ofrecer seguridad, imagen y confianza desde el primer día.",
  },
  {
    title: "Importación a la carta",
    text: "Buscamos tu coche en Alemania, Bélgica u Holanda, revisando historial, estado, kilometraje y documentación antes de comprar.",
  },
  {
    title: "Matriculación y gestión completa",
    text: "Nos ocupamos del proceso administrativo para que puedas recibir tu vehículo listo para circular en España.",
  },
  {
    title: "Asesoramiento personalizado",
    text: "Te ayudamos a elegir el coche adecuado según presupuesto, uso, fiabilidad, coste de mantenimiento y valor de reventa.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Servicios</p>
          <h2 className="mt-3 text-4xl font-semibold">Compra con más seguridad, menos dudas y mejor criterio.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={service.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-8 text-sm text-zinc-500">0{index + 1}</p>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
