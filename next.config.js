/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeimg.com', 'api.lorem.space', 'product.hstatic.net', 'm.media-amazon.com', 'www.vienquangmobile.com', 'store.storeimages.cdn-apple.com', 'synnexfpt.com', 'footgearh.vn', 'www.readersdigest.ca', 'firebasestorage.googleapis.com', ''],
  },
  reactStrictMode: true,
  // env: {
  //   customKey: 'customValue',
  // },
  // basePath: "/dist",
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: '/hello',
  //       permanent: true,
  //     },
  //   ]
  // }
};

module.exports = nextConfig;