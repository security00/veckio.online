import type { Metadata } from "next";
import GamesCollectionPage from "@/components/games/GamesCollectionPage";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shooter Games",
  description:
    "A curated list of shooter games with dedicated pages, embedded players, and quick guides to keep you in matches longer.",
  alternates: {
    canonical: `${SITE_ORIGIN}/games/shooter`,
  },
};

export default function ShooterGamesPage({
  searchParams,
}: {
  searchParams?: { q?: string | string[] };
}) {
  const query = typeof searchParams?.q === "string" ? searchParams.q : undefined;

  return (
    <GamesCollectionPage
      category="shooter"
      title="Shooter Games"
      description="Curated shooters focused on clean loops: spawn, fight, improve, repeat. Each game has a dedicated play page and tips."
      query={query}
      basePath="/games/shooter"
    />
  );
}

