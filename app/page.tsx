import type { Metadata } from "next";
import GameFrame from "@/components/games/GameFrame";
import { VECK_EMBED_URL } from "@/lib/games";
import { SITE_DESCRIPTION, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Veckio Online — Play Veck.io Instantly",
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_ORIGIN}/`,
  },
};

export default function Home() {
  return (
    <section id="play" className="mx-auto max-w-screen-2xl px-4 pb-12 sm:px-6">
      <h1 className="sr-only">Veckio Online</h1>
      <GameFrame title="Veck.io" src={VECK_EMBED_URL} startMode="auto" />
    </section>
  );
}
