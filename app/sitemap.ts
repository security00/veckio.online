import type { MetadataRoute } from "next";
import { GAMES } from "@/lib/games";
import { SITE_ORIGIN } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "/",
    "/privacy",
    "/terms",
    "/guides",
    "/games",
    "/games/fps",
    "/games/shooter",
    "/games/io",
    ...GAMES.map((g) => `/play/${g.slug}`),
  ];

  return routes.map((path) => ({
    url: `${SITE_ORIGIN}${path === "/" ? "/" : path}`,
    lastModified,
  }));
}
