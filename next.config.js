/** @type {import('next').NextConfig} */
const envImageUnoptimize = process.env.NODE_ENV === 'production' ? true : false

const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '/github-pages' : undefined,
  images: {
    unoptimized: envImageUnoptimize,
  },
}

module.exports = nextConfig
