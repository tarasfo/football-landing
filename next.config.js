/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "_static",
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ["en", "ua"],
    defaultLocale: "ua",
    localeDetection: false,
  },
};

module.exports = nextConfig;
