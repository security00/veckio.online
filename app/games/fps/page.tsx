import type { Metadata } from "next";
import GamesCollectionPage from "@/components/games/GamesCollectionPage";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "FPS Games",
  description:
    "A curated list of FPS games you can play in your browser. Dedicated pages include an embedded player, quick controls, and tips.",
  alternates: {
    canonical: `${SITE_ORIGIN}/games/fps`,
  },
};

export default function FpsGamesPage({
  searchParams,
}: {
  searchParams?: { q?: string | string[] };
}) {
  const query = typeof searchParams?.q === "string" ? searchParams.q : undefined;

  return (
    <GamesCollectionPage
      category="fps"
      title="FPS Games"
      description="Fast, aim-first games for short sessions. Open a title to play with an embedded iframe and quick tips."
      query={query}
      basePath="/games/fps"
    />
  );
}

