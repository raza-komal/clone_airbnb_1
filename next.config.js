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
      },
      {
        protocol:'https',
        hostname:"links.papareact.com"
      }
    ],
  },
}

module.exports = nextConfig
