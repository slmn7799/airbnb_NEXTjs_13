/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com"
    ]
  },
  // env: {
  //   NEXTAUTH_URL: 'http://localhost:3000',
  // },
}

module.exports = nextConfig
