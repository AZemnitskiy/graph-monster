import createMDX from "@next/mdx";

const withMDX = createMDX({});

export default withMDX({
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
});
