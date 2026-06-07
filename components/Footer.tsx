export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-zinc-500 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Motor Selection · Figueres, Girona</p>

        <div className="flex flex-wrap items-center gap-5">
          <a href="https://www.instagram.com/motor.selection?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            Instagram
          </a>

          <a href="https://www.tiktok.com/@motor.selection?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            TikTok
          </a>

          <a href="/privacidad" className="transition hover:text-white">
            Política de Privacidad
          </a>

          <a href="/cookies" className="transition hover:text-white">
            Política de Cookies
          </a>

          <a href="/aviso-legal" className="transition hover:text-white">
            Aviso Legal
          </a>
        </div>
      </div>
    </footer>
  );
}
