import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  distDir: './dist',
  images: {
    remotePatterns: [new URL('https://rickandmortyapi.com/api/character/avatar/**')]
  }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);