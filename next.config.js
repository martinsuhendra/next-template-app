/** @type {import('next').NextConfig} */
const isDeploying = process.env.DEPLOYING_MODE === 'true'
const isProd = process.env.NODE_ENV === 'production'
const REPO_URL = 'next-template-app'

const nextConfig = {
  output: isDeploying ? 'export' : undefined,
  assetPrefix: isProd ? REPO_URL : undefined,
  images: {
    unoptimized: isProd ? true : false,
  },
}

module.exports = nextConfig
