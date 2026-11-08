import type { NextConfig } from "next";

/**
 * GitHub Pages serves this project site from a sub-path (/MyPortfolio).
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
