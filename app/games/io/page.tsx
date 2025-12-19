import type { Metadata } from "next";
import GamesCollectionPage from "@/components/games/GamesCollectionPage";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: ".io Shooter Games",
  description:
    "A curated list of .io shooter games you can play in your browser. Dedicated pages include embedded play and quick tips.",
  alternates: {
    canonical: `${SITE_ORIGIN}/games/io`,
  },
};

export default function IoGamesPage({
  searchParams,
}: {
  searchParams?: { q?: string | string[] };
}) {
  const query = typeof searchParams?.q === "string" ? searchParams.q : undefined;

  return (
    <GamesCollectionPage
      category="io"
      title=".io Shooter Games"
      description="Quick-loading .io FPS and shooter picks. Click a game to open a dedicated play page with an embedded iframe."
      query={query}
      basePath="/games/io"
    />
  );
}

