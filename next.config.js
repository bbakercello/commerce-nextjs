/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        domains:[i.imgur.com]
      },
    ],
  },

  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
