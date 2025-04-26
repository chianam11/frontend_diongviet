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
        protocol: "http",
        hostname: "localhost",
        port: "3001", // Sửa thành giá trị cứng
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
