import type { NextConfig } from "next";

/**
 * GitHub Pages serves project sites from a sub-path; the user site (sythulasi.github.io) uses none.
 * The deploy workflow sets NEXT_PUBLIC_BASE_PATH; locally it is empty.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
