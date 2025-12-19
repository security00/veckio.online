import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GameCard from "@/components/games/GameCard";
import GameFrame from "@/components/games/GameFrame";
import ShareBar from "@/components/games/ShareBar";
import { GAMES, getGameBySlug, getRelatedGames } from "@/lib/games";
import { absoluteUrl, SITE_ORIGIN } from "@/lib/site";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return GAMES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = getGameBySlug(params.slug);
  if (!game) return {};

  const canonical = `${SITE_ORIGIN}/play/${game.slug}`;

  return {
    title: `Play ${game.name}`,
    description: game.tagline,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: `Play ${game.name}`,
      description: game.tagline,
    },
  };
}

export default function PlayGamePage({ params }: Props) {
  const game = getGameBySlug(params.slug);
  if (!game) notFound();

  const canonical = absoluteUrl(`/play/${game.slug}`);
  const frameSrc = game.embedUrl ?? game.officialUrl;
  const related = getRelatedGames(game.slug, 6);

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.38fr] lg:items-start">
        <main className="space-y-6">
          <header className="card-glass rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-glow text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {game.name}
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
                  {game.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={game.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/80 hover:bg-white/10 hover:text-white"
                >
                  Official site
                </a>
                <Link
                  href="/games"
                  className="neon-ring rounded-full bg-white/5 px-4 py-2 text-xs font-bold text-cyan-100 hover:bg-white/10"
                >
                  More games
                </Link>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {game.categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70"
                >
                  {c.toUpperCase()}
                </span>
              ))}
            </div>
          </header>

          <GameFrame title={game.name} src={frameSrc} startMode="auto" />

          <ShareBar title={game.name} url={canonical} />

          <section
            id="how-to-play"
            className="card-glass scroll-mt-28 rounded-3xl p-6 sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-glow text-2xl font-black text-white sm:text-3xl">
                  How to Play
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Quick controls and practical tips — optimized to keep you in
                  matches longer.
                </p>
              </div>
              <Link
                href="/guides"
                className="text-sm font-bold text-cyan-200 hover:text-cyan-100"
              >
                Full guides →
              </Link>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Controls
                </div>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-white/75">
                  {game.controls.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Pro tips
                </div>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-white/75">
                  {game.tips.map((t) => (
                    <li key={t}>• {t}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm font-black text-white">
                Why this page keeps you playing
              </div>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Most aggregator sites dump you into a list. We pair the player
                with a short plan, quick tips, and related picks — so you always
                have a next click.
              </p>
            </div>
          </section>
        </main>

        <aside className="space-y-6 lg:sticky lg:top-24">
          <div className="card-glass rounded-3xl p-6">
            <div className="text-xs font-bold uppercase tracking-widest text-white/50">
              Next up
            </div>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Keep your session fresh with related games.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/games/fps"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/80 hover:bg-white/10 hover:text-white"
              >
                Browse FPS →
              </Link>
              <Link
                href="/games/shooter"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/80 hover:bg-white/10 hover:text-white"
              >
                Browse shooter →
              </Link>
              <Link
                href="/games/io"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/80 hover:bg-white/10 hover:text-white"
              >
                Browse .io →
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {related.map((g) => (
              <GameCard key={g.slug} game={g} />
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-6 text-xs leading-5 text-white/45">
            Embed note: Some providers block iframe embedding for security or
            policy reasons. If the game doesn’t load, use the Official site
            button above.
          </div>
        </aside>
      </div>
    </div>
  );
}
