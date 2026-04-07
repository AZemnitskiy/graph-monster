import type { Metadata } from "next";
import ImageGallery from "@/components/ImageGallery";
import ContentTabs from "@/components/ContentTabs";
import Content from "./content.mdx";
import Tutorials from "./tutorials.mdx";

export const metadata: Metadata = {
  title: "Cayleidoscope — Graph Monster",
  description:
    "An interactive visualizer for finite groups. Explore Cayley diagrams, multiplication tables, subgroups, conjugacy classes, homomorphisms, and isomorphisms.",
};

export default function CayleidoscopePage() {
  return (
    <div className="space-y-10">
      {/* Title + link */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)", fontStyle: "italic" }}
          >
            Cayleidoscope
          </h2>
          <p className="mt-1 text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
            Finite Group Visualizer
          </p>
        </div>
        <div className="flex flex-row items-center gap-2 shrink-0">
          <a
            href="https://huggingface.co/spaces/azemnitskiy/cayleidoscope/tree/main"
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
            href="https://huggingface.co/spaces/azemnitskiy/cayleidoscope"
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
        href="https://huggingface.co/spaces/azemnitskiy/cayleidoscope"
        imgWidth={1888}
        imgHeight={892}
        slides={[
          { src: "/screenshots/group_explorer.png", alt: "Cayleidoscope — Cayley diagram view" },
          { src: "/screenshots/group_explorer_2.png", alt: "Cayleidoscope — alternating group view" },
        ]}
      />

      {/* Content */}
      <ContentTabs overview={<Content />} tutorials={<Tutorials />} />
    </div>
  );
}
