import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6">
      <div className="card-glass rounded-3xl p-10 text-center">
        <div className="text-glow text-2xl font-black text-white sm:text-3xl">
          Page not found
        </div>
        <p className="mt-3 text-sm leading-6 text-white/65">
          The page you’re looking for doesn’t exist (or moved). Try the links
          below.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="neon-ring inline-flex items-center justify-center rounded-full bg-cyan-400/15 px-6 py-3 text-sm font-black text-cyan-100 hover:bg-cyan-400/20"
          >
            Go home
          </Link>
          <Link
            href="/games"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white/80 hover:bg-white/10 hover:text-white"
          >
            Browse games
          </Link>
          <Link
            href="/play/veck-io"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white/80 hover:bg-white/10 hover:text-white"
          >
            Play Veck.io
          </Link>
        </div>
      </div>
    </div>
  );
}
