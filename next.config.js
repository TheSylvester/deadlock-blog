/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'nextjs.org',
      },
      {
        protocol: 'https',
        hostname: 'project8-data.community.forum',
      }
    ],
  },
}

module.exports = nextConfig
