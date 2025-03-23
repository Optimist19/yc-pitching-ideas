import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "http", // Use "https" for secure URLs
        hostname: "res.cloudinary.com", // Only the domain, no protocol or path
      },
    ],

  },
};

export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https", // Use "https" for secure URLs
//         hostname: "res.cloudinary.com", // Only the domain, no protocol or path
//       },
//     ],
//   },
// };

// export default nextConfig;