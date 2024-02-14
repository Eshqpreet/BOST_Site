/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  resolve: {
    modules: ['node_modules', './icons'],
    // other resolve configurations...
  },
};

module.exports = nextConfig;
