import type { Metadata } from "next";
import ImageGallery from "@/components/ImageGallery";
import ContentTabs from "@/components/ContentTabs";
import Content from "./content.mdx";
import Tutorials from "./tutorials.mdx";

export const metadata: Metadata = {
  title: "Conway's Topograph — Graph Monster",
  description:
    "An interactive visualizer for binary quadratic forms. Explore the Conway topograph, the river, Pell solutions, equivalence of forms, and the Poincaré disc.",
};

export default function TopographPage() {
  return (
    <div className="space-y-10">
      {/* Title + link */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)", fontStyle: "italic" }}
          >
            Conway&apos;s Topograph
          </h2>
          <p className="mt-1 text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
            Binary Quadratic Form Explorer
          </p>
        </div>
        <div className="flex flex-row items-center gap-2 shrink-0">
          <a
            href="https://github.com/AZemnitskiy/topograph"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold transition-colors"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-mono)",
              textDecoration: "none",
            }}
          >
            Source Code ↗
          </a>
          <a
            href="https://topograph-explorer.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold transition-colors"
            style={{
              backgroundColor: "var(--accent)",
              color: "#fff",
              fontFamily: "var(--font-mono)",
              textDecoration: "none",
            }}
          >
            Open App ↗
          </a>
        </div>
      </div>

      {/* Gallery */}
      <ImageGallery
        href="https://topograph-explorer.vercel.app/"
        imgWidth={1901}
        imgHeight={961}
        slides={[
          { src: "/screenshots/topograph.png", alt: "Conway's Topograph — home triad view" },
          { src: "/screenshots/topograph_2.png", alt: "Conway's Topograph — Poincaré disc view" },
        ]}
      />

      {/* Content */}
      <ContentTabs overview={<Content />} tutorials={<Tutorials />} />
    </div>
  );
}
