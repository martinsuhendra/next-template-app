/** @type {import('next').NextConfig} */
const envImageUnoptimize = process.env.NODE_ENV === 'production' ? true : false
const REPO_NAME = '/next-template-app'

const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? REPO_NAME : undefined,
  images: {
    unoptimized: envImageUnoptimize,
  },
}

module.exports = nextConfig
