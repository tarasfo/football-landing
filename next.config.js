/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  output: "export",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ua",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/contacts",
        destination: "/contacts",
        permanent: true,
      },
      {
        source: "/ua/contacts",
        destination: "/contacts",
        permanent: true,
      },
      {
        source: "/ua/terms",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/en/terms",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/ua/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/en/privacy",
        destination: "/privacy",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
