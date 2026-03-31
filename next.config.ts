import createMDX from "@next/mdx";

const withMDX = createMDX({});

export default withMDX({
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    // Rust-based MDX compiler with GFM mode — enables tables, strikethrough, etc.
    // Uses only serializable options so Turbopack can handle it.
    mdxRs: { mdxType: "gfm" },
  },
});
