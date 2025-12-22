import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper output for Vercel deployment
  output: 'standalone',
};

export default nextConfig;
