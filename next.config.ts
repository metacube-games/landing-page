import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'felts.xyz',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Add empty turbopack config to acknowledge Turbopack usage in Next.js 16
  turbopack: {},
  // Enable React Compiler for automatic optimizations (top-level in Next.js 16)
  reactCompiler: true,
  // Enable compression
  compress: true,
  // Optimize production builds
  poweredByHeader: false,
  // Generate ETags for pages
  generateEtags: true,
};

// Import next-videos as ESM
const withVideos = require('next-videos');

export default withNextIntl(withVideos(nextConfig));
