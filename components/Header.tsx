import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Vehículos", href: "/vehiculos" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Importación", href: "/importacion" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 md:px-6 lg:py-6">
        <Link
          href="/#inicio"
          className="min-w-0 text-xl font-bold uppercase leading-tight tracking-[0.24em] sm:text-2xl sm:tracking-[0.3em] lg:text-2xl lg:tracking-[0.32em]"
        >
          <span>Motor</span>
          <span className="ml-2 text-zinc-400">Selection</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-200 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold">
            IG
          </a>

          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold">
            TT
          </a>

          <a
            href="https://wa.me/34641476356"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition hover:bg-zinc-200"
          >
            WhatsApp
          </a>
        </div>

        <a
          href="https://wa.me/34641476356"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-white px-5 py-3 text-sm font-bold text-black sm:px-6 sm:text-base lg:hidden"
        >
          WhatsApp
        </a>
      </div>

      <div className="border-t border-white/10 bg-black/80 lg:hidden">
        <nav className="flex gap-3 overflow-x-auto px-5 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-zinc-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
