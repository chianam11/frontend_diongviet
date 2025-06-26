import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "didongviet.vn",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "didongviet-api.onrender.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
       {
        protocol: "http",
        hostname: "localhost",
        port:"3001",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
