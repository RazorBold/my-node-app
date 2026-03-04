/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  serverRuntimeConfig: {
    port: 5028,
  },
}

module.exports = nextConfig
