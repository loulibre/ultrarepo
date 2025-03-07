/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  distDir: '.next', // Ensures Next.js outputs to .next inside renderer
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      react: require.resolve("react"),
      "react-dom": require.resolve("react-dom"),
    };
    return config;
  },
}