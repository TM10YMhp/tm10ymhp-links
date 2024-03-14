/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // NOTE: https://github.com/vercel/next.js/issues/54482
    unoptimized: true,
  },
  onDemandEntries: {
    pagesBufferLength: 0,
  },
  cacheMaxMemorySize: 0,
};

module.exports = nextConfig;
