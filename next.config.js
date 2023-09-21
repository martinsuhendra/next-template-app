/** @type {import('next').NextConfig} */
const isStandalone = process.env.STANDALONE_MODE === 'true'
const isProd = process.env.NODE_ENV === 'production'
const envImageUnoptimize = isProd ? true : false

const nextConfig = {
  output: isStandalone,
  assetPrefix: isProd ? '/next-template-app' : undefined,
  images: {
    unoptimized: envImageUnoptimize,
  },
}

module.exports = nextConfig
