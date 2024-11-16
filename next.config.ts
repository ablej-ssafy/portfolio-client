import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['storage.googleapis.com', 'static.wanted.co.kr', 'storage.surfit.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wanted.co.kr',
      },
      {
        protocol: 'https',
        hostname: 'storage.surfit.io',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
