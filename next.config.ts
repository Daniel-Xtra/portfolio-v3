import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper output for Vercel deployment
  output: 'standalone',

  // Explicitly enable Turbopack for consistency
  experimental: {
    turbo: {},
  },
};

export default nextConfig;
