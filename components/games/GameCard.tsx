import Link from "next/link";
import type { Game, GameCategory } from "@/lib/games";

function categoryLabel(category: GameCategory): string {
  switch (category) {
    case "fps":
      return "FPS";
    case "shooter":
      return "Shooter";
    case "io":
      return ".io";
    default:
      return category;
  }
}

export default function GameCard({ game }: { game: Game }) {
  return (
    <article className="card-glass group relative overflow-hidden rounded-3xl p-5">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-20 -top-24 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-black tracking-tight text-white">
              {game.name}
            </h3>
            <p className="mt-1 text-sm leading-6 text-white/65">
              {game.tagline}
            </p>
          </div>
          <Link
            href={`/play/${game.slug}`}
            className="neon-ring inline-flex shrink-0 items-center justify-center rounded-full bg-white/5 px-3 py-1.5 text-xs font-bold text-cyan-100 hover:bg-white/10"
          >
            Play
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {game.categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-white/70"
            >
              {categoryLabel(category)}
            </span>
          ))}
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/60">
          {game.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <a
            href={game.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-white/55 hover:text-white"
          >
            Official site
          </a>
          <Link
            href={`/play/${game.slug}#how-to-play`}
            className="text-xs font-semibold text-cyan-200 hover:text-cyan-100"
          >
            How to play →
          </Link>
        </div>
      </div>
    </article>
  );
}

