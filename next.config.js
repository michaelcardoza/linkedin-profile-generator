/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    cohere: {
      apiKey: process.env.COHERE_API_KEY,
    },
  },
};

module.exports = nextConfig;
