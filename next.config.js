/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3.us-west-2.amazonaws.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};

module.exports = nextConfig;
