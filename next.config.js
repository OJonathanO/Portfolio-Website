/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true, // Ensure Server Actions are enabled
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
