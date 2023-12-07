/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wonky-ord.dogeord.io',
        port: '',
        pathname: '/content/**',
      },
    ],
  },
}

module.exports = nextConfig
