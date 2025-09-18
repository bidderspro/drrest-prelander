import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Remove turbopack config as it's no longer needed in newer Next.js versions
  distDir: 'out', // Specify the build output directory
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
