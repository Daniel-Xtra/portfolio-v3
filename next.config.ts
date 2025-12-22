import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper output for Vercel deployment
  output: 'standalone',

  // Turbopack configuration (empty to silence warnings)
  turbopack: {},

  // Performance optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable modern JavaScript output
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;
