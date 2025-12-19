export const SITE_ORIGIN = "https://veckio.online";
export const SITE_NAME = "Veckio Online";
export const SITE_DESCRIPTION =
  "Play Veck.io instantly in your browser — plus a curated collection of FPS/shooter .io games, fast guides, and pro tips. No download required.";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

