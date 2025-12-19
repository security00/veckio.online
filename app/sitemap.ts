import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "/",
    "/privacy",
    "/terms",
  ];

  return routes.map((path) => ({
    url: `${SITE_ORIGIN}${path === "/" ? "/" : path}`,
    lastModified,
  }));
}
