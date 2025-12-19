import Link from "next/link";
import type { GameCategory } from "@/lib/games";
import { getGamesByCategory } from "@/lib/games";
import GameCard from "@/components/games/GameCard";

type Props = {
  category: GameCategory;
  title: string;
  description: string;
  query?: string;
  basePath: string;
};

function normalizeQuery(value: string | undefined): string {
  return (value ?? "").trim().toLowerCase();
}

export default function GamesCollectionPage({
  category,
  title,
  description,
  query,
  basePath,
}: Props) {
  const q = normalizeQuery(query);
  const all = getGamesByCategory(category);
  const games = q
    ? all.filter((g) => {
        const haystack = `${g.name} ${g.tagline} ${g.description}`.toLowerCase();
        return haystack.includes(q);
      })
    : all;

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-8 lg:flex-row">
        <aside className="card-glass h-fit w-full rounded-3xl p-6 lg:sticky lg:top-24 lg:w-72">
          <div className="text-xs font-bold uppercase tracking-widest text-white/50">
            Collections
          </div>
          <div className="mt-3 flex flex-col gap-2 text-sm font-semibold">
            <Link
              href="/games/fps"
              className="rounded-xl px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white"
            >
              FPS Games
            </Link>
            <Link
              href="/games/shooter"
              className="rounded-xl px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white"
            >
              Shooter Games
            </Link>
            <Link
              href="/games/io"
              className="rounded-xl px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white"
            >
              .io Games
            </Link>
          </div>

          <div className="mt-6">
            <div className="text-xs font-bold uppercase tracking-widest text-white/50">
              Search
            </div>
            <form action={basePath} className="mt-2 flex gap-2">
              <input
                name="q"
                defaultValue={query ?? ""}
                placeholder="Search games…"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white/80 placeholder:text-white/35"
              />
              <button
                type="submit"
                className="neon-ring rounded-xl bg-white/5 px-3 py-2 text-sm font-bold text-cyan-100 hover:bg-white/10"
              >
                Go
              </button>
            </form>
          </div>

          <p className="mt-6 text-xs leading-5 text-white/45">
            Some providers block iframe embedding for security or policy
            reasons. If a game doesn’t load, use the Official site button on the
            play page.
          </p>
        </aside>

        <div className="flex-1">
          <div className="card-glass rounded-3xl p-6 sm:p-8">
            <h1 className="text-glow text-3xl font-black tracking-tight text-white sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
              {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/play/veck-io"
                className="neon-ring inline-flex items-center justify-center rounded-full bg-cyan-400/15 px-4 py-2 text-xs font-black text-cyan-100 hover:bg-cyan-400/20"
              >
                Play Veck.io
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/80 hover:bg-white/10 hover:text-white"
              >
                Read guides
              </Link>
            </div>
          </div>

          <section className="mt-8" aria-labelledby="collection-game-list-heading">
            <h2 id="collection-game-list-heading" className="sr-only">
              {title} list
            </h2>
            {games.length === 0 ? (
              <div className="card-glass rounded-3xl p-8 text-white/70">
                No games found for “{query}”.
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {games.map((game) => (
                  <GameCard key={game.slug} game={game} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
