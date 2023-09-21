/** @type {import('next').NextConfig} */
const isDeploying = process.env.DEPLOYING_MODE === 'true'
const isProd = process.env.NODE_ENV === 'production'
const envImageUnoptimize = isProd ? true : false

const nextConfig = {
  output: isDeploying ? 'export' : undefined,
  assetPrefix: isProd ? '/next-template-app' : undefined,
  images: {
    unoptimized: envImageUnoptimize,
  },
}

module.exports = nextConfig
