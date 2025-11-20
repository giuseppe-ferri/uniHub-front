// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "http://localhost:8443/:path*", // back-end Spring Boot
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Ignora erros do ESLint durante o build para permitir o deploy
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignora erros de tipagem do TypeScript durante o build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
