/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  distDir: "_static",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
