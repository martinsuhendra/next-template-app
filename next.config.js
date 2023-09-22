/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false
const isProd = process.env.NODE_ENV === 'production'

let assetPrefix = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
}

const nextConfig = {
  reactStrictMode: true,
  output: isGithubActions ? 'export' : undefined,
  distDir: 'dist',
  assetPrefix,
  images: {
    unoptimized: isProd ? true : false,
  },
}

module.exports = nextConfig
