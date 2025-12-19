import Link from "next/link";

const SHOW_LIBRARY_NAV = false;

const NAV_LINKS = [
  { href: "/#play", label: "Play" },
  ...(SHOW_LIBRARY_NAV
    ? [
        { href: "/games", label: "Games" },
        { href: "/guides", label: "Guides" },
      ]
    : []),
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur supports-[backdrop-filter]:bg-black/25">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#content"
          className="sr-only rounded-lg bg-black/80 px-3 py-2 text-sm font-bold text-white focus:not-sr-only"
        >
          Skip to content
        </a>

        <Link href="/" className="group flex items-center gap-3">
          <span className="neon-ring grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5">
            <span className="text-glow text-sm font-black tracking-wider text-cyan-200">
              V
            </span>
          </span>
          <span className="leading-none">
            <span className="text-glow block text-sm font-black uppercase tracking-[0.26em] text-white group-hover:text-cyan-100">
              Veckio
            </span>
            <span className="block text-xs text-white/55">
              Instant FPS hub
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-white/70 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <details className="group relative sm:hidden">
          <summary className="list-none rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white">
            <span className="sr-only">Open menu</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <div className="card-glass absolute right-0 mt-3 w-56 rounded-2xl p-2">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
