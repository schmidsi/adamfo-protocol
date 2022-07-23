/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["adamfo-wallet-contracts"]);

const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
