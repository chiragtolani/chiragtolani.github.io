/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  // This is important for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
