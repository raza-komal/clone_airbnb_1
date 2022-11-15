/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      
      },
      {
        protocol:'https',
        hostname:"plus.unsplash.com"
      }
    ],
  },
}

module.exports = nextConfig
