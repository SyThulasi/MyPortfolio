/** Base path the site is served from (e.g. "/MyPortfolio" on GitHub Pages). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Absolute site URL, used for metadata, sitemap and structured data. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sythulasi.github.io/MyPortfolio"
).replace(/\/$/, "");

/** Prefixes a path to a file in /public with the base path. */
export function asset(path: `/${string}`): string {
  return `${basePath}${path}`;
}
