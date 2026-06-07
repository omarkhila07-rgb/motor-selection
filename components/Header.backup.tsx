const phone = "641476356";
const whatsappLink = `https://wa.me/34${phone}?text=Hola%20Motor%20Selection,%20quiero%20información`;

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/#inicio" className="text-xl font-semibold tracking-[0.22em] text-white">
          MOTOR <span className="text-zinc-400">SELECTION</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="/vehiculos" className="transition hover:text-white">Vehículos</a>
          <a href="/#servicios" className="transition hover:text-white">Servicios</a>
          <a href="/importacion" className="transition hover:text-white">Importación</a>
          <a href="/quienes-somos" className="transition hover:text-white">Quiénes somos</a>
          <a href="/#contacto" className="transition hover:text-white">Contacto</a>
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://www.instagram.com/motor.selection?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Motor Selection"
              className="text-white/80 transition hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@motor.selection?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Motor Selection"
              className="text-white/80 transition hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.6 5.82c-.98-.66-1.66-1.73-1.81-2.95h-3.08v12.34a2.62 2.62 0 1 1-1.85-2.5V9.57a5.72 5.72 0 1 0 4.93 5.66V8.76a7.12 7.12 0 0 0 4.17 1.34V7.02a4.04 4.04 0 0 1-2.36-1.2z" />
              </svg>
            </a>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-950 transition duration-300 hover:bg-neutral-200 hover:scale-[1.03]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
