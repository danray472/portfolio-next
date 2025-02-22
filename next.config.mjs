/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true, // Enables the App Router
    },
    output: "standalone", // Required for Vercel deployment
  };
  
  export default nextConfig;
  