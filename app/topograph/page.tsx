import type { Metadata } from "next";
import ImageGallery from "@/components/ImageGallery";
import Content from "./content.mdx";

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
        <a
          href="https://topograph-explorer.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold transition-colors shrink-0"
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

      {/* Gallery */}
      <ImageGallery
        href="https://topograph-explorer.vercel.app/"
        slides={[
          { src: "/screenshots/topograph.png", alt: "Conway's Topograph — home triad view" },
          { src: "/screenshots/topograph_2.png", alt: "Conway's Topograph — Poincaré disc view" },
        ]}
      />

      {/* Content */}
      <Content />
    </div>
  );
}
