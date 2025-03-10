import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: "/fiel-news",
  images: {
    unoptimized: true,
    domains: ['img.youtube.com'],
  },
};

export default nextConfig;
