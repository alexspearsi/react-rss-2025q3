/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist',
  images: {
    remotePatterns: [new URL('https://rickandmortyapi.com/api/character/avatar/**')]
  }
}
 
export default nextConfig