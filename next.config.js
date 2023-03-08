/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'doginals.com',
        port: '',
        pathname: '/content/**',
      },
    ],
  },
}

module.exports = nextConfig
