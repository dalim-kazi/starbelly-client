/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cristianonew.ukrdevs.com",
      "i.ibb.co",
      "starbelly-react.vercel.app",
    ],
  },
  env: {
    BaseAPI:"http://localhost:5000/starbelly/v1/",
  },
};

export default nextConfig;
