/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com'],
  }
}

const withVideos = require('next-videos')

module.exports = withVideos({
  ...nextConfig
})