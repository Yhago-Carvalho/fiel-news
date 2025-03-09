import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    domains: ['img.youtube.com'],
  },
};

export default nextConfig;
