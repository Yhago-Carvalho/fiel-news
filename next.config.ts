/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/fiel-news",
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['img.youtube.com'],
  },
};

export default nextConfig;
