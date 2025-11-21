// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Se você quer que o front converse direto com o back, remova os rewrites OU
//   // aponte para a variável de ambiente correta.
//   async rewrites() {
//     // Só mantenha isso se você realmente precisar proxyar requisições pelo Next.js
//     // Caso contrário, pode retornar um array vazio: return [];
//     return process.env.NEXT_PUBLIC_API_URL
//       ? [
//           {
//             source: "/api/spring/:path*", // Sugiro usar um prefixo diferente para não conflitar com o /api do Next
//             destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
//           },
//         ]
//       : [];
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removemos os rewrites fixos para localhost.
  // Se precisar de proxy, use apenas se a variável estiver definida.
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) return [];

    return [
      {
        source: "/api/proxy/:path*",
        destination: `${apiUrl}/:path*`,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
