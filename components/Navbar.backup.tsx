import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-[0.22em] text-white"
        >
          MOTOR <span className="text-zinc-400">SELECTION</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <Link href="/" className="transition hover:text-white">
            Inicio
          </Link>

          <Link href="/vehiculos" className="transition hover:text-white">
            Vehículos
          </Link>

          <a href="/#servicios" className="transition hover:text-white">
            Servicios
          </a>

          <a href="/importacion" className="transition hover:text-white">
            Importación
          </a>

          <a href="/quienes-somos"
          >
            Quiénes somos
          </a>

          <a
            href="/#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </nav>

        <a
          href="https://wa.me/34641476356"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-zinc-200"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
