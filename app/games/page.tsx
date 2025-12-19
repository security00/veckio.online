import type { Metadata } from "next";
import Link from "next/link";
import GameCard from "@/components/games/GameCard";
import { GAMES } from "@/lib/games";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Games",
  description:
    "Browse a curated list of browser FPS, shooter, and .io games. Open each game on a dedicated page with an embedded player and quick tips.",
  alternates: {
    canonical: `${SITE_ORIGIN}/games`,
  },
};

type Props = {
  searchParams?: {
    q?: string | string[];
  };
};

function normalizeQuery(value: Props["searchParams"]): string {
  const raw = value?.q;
  if (typeof raw === "string") return raw.trim().toLowerCase();
  if (Array.isArray(raw) && typeof raw[0] === "string")
    return raw[0].trim().toLowerCase();
  return "";
}

export default function GamesPage({ searchParams }: Props) {
  const query = normalizeQuery(searchParams);
  const games = query
    ? GAMES.filter((g) => {
        const haystack = `${g.name} ${g.tagline} ${g.description}`.toLowerCase();
        return haystack.includes(query);
      })
    : GAMES;

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6">
      <div className="card-glass rounded-3xl p-6 sm:p-8">
        <h1 className="text-glow text-3xl font-black tracking-tight text-white sm:text-4xl">
          Games
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
          Curated FPS and shooter picks with dedicated pages, embedded players,
          and fast guides to keep you in the action.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/games/fps"
            className="neon-ring rounded-full bg-white/5 px-4 py-2 text-xs font-bold text-cyan-100 hover:bg-white/10"
          >
            FPS
          </Link>
          <Link
            href="/games/shooter"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/80 hover:bg-white/10 hover:text-white"
          >
            Shooter
          </Link>
          <Link
            href="/games/io"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/80 hover:bg-white/10 hover:text-white"
          >
            .io
          </Link>
        </div>

        <form action="/games" className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            name="q"
            defaultValue={
              typeof searchParams?.q === "string" ? searchParams?.q : ""
            }
            placeholder="Search games…"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 placeholder:text-white/35"
          />
          <button
            type="submit"
            className="neon-ring rounded-2xl bg-cyan-400/15 px-5 py-3 text-sm font-black text-cyan-100 hover:bg-cyan-400/20"
          >
            Search
          </button>
        </form>

        <p className="mt-4 text-xs leading-5 text-white/45">
          Some providers block iframe embedding for security or policy reasons.
          If a game doesn’t load, use the Official site button on the play page.
        </p>
      </div>

      <section className="mt-8" aria-labelledby="game-list-heading">
        <h2 id="game-list-heading" className="sr-only">
          Game list
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
  );
}
