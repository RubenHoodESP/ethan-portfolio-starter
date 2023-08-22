/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: 'public',
});

module.exports = withPWA({
  pwa: {
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  swcMinify: true,
});
