/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space', 'product.hstatic.net', 'm.media-amazon.com', 'www.vienquangmobile.com', 'store.storeimages.cdn-apple.com', 'synnexfpt.com', 'footgearh.vn', 'www.readersdigest.ca', 'firebasestorage.googleapis.com', ''],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

module.exports = withPWA(nextConfig);