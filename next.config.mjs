/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dankoyuki/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "cdn1.iconfinder.com",
        port: "",
        pathname: "/data/icons/**",
      },
      {
        protocol: "https",
        hostname: "cdn4.iconfinder.com",
        port: "",
        pathname: "/data/icons/**",
      },
    ],
  },
};

export default nextConfig;
