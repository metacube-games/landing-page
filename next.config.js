/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  // Add empty turbopack config to acknowledge Turbopack usage in Next.js 16
  turbopack: {},
  // Enable React Compiler for automatic optimizations (top-level in Next.js 16)
  reactCompiler: true,
}

const withVideos = require('next-videos')

module.exports = withVideos({
  ...nextConfig
})