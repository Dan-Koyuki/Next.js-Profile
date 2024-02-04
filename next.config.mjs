/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dankoyuki/image/upload/v1706862368/Custom%20Card',
      },
    ],
  },
};

export default nextConfig;
