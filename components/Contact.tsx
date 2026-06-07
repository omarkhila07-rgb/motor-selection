const phone = "641476356";
const whatsappLink = `https://wa.me/34${phone}?text=Hola%20Motor%20Selection,%20quiero%20informaci%C3%B3n%20sobre%20un%20veh%C3%ADculo`;

export default function Contact() {
  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Contacto</p>
          <h2 className="mt-3 text-4xl font-semibold">Hablemos de tu próximo coche.</h2>
          <p className="mt-5 text-zinc-300">
            Estamos en Figueres, Girona. Escríbenos por WhatsApp y cuéntanos qué vehículo buscas o qué coche quieres vender.
          </p>
          <div className="mt-8 space-y-3 text-zinc-300">
            <p><span className="text-white">Teléfono:</span> 641 476 356</p>
            <p><span className="text-white">Zona:</span> Figueres · Girona</p>
            <p><span className="text-white">Especialidad:</span> venta e importación de vehículos seleccionados</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <form className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-white/30" placeholder="Nombre" />
              <input className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-white/30" placeholder="Teléfono" />
            </div>
            <input className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-white/30" placeholder="Modelo que buscas" />
            <textarea className="min-h-36 rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-white/30" placeholder="Cuéntanos presupuesto, uso, preferencias o dudas" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-7 py-4 text-center text-sm font-bold uppercase tracking-wide text-neutral-950 transition hover:bg-zinc-200">
              Enviar por WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
