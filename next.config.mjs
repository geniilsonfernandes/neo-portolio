import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
  pageExtensions: ["js", "ts", "jsx", "tsx", "mdx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});
// Merge MDX config with Next.js config
export default withMDX(nextConfig);
