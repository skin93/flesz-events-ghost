module.exports = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGES_DOMAIN],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    path: '/_next/image',
    loader: 'default'
  }
}
