/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/queue',
    assetPrefix: '/queue',
    // Disable strict typescript checking during production builds if needed
    typescript: {
      ignoreBuildErrors: true,
    },
    // Disable eslint checking during production builds
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
  module.exports = nextConfig;