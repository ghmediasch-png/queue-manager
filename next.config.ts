import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/queue',
  // This ensures assets (images/css) load correctly from the subdirectory
  assetPrefix: '/queue', 
};

export default nextConfig;