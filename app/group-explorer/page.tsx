import type { Metadata } from "next";
import ImageGallery from "@/components/ImageGallery";
import ContentTabs from "@/components/ContentTabs";
import Content from "./content.mdx";
import Tutorials from "./tutorials.mdx";

export const metadata: Metadata = {
  title: "Group Explorer — Graph Monster",
  description:
    "An interactive visualizer for finite groups. Explore Cayley diagrams, multiplication tables, subgroups, conjugacy classes, homomorphisms, and isomorphisms.",
};

export default function GroupExplorerPage() {
  return (
    <div className="space-y-10">
      {/* Title + link */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)", fontStyle: "italic" }}
          >
            Group Explorer
          </h2>
          <p className="mt-1 text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
            Abstract Algebra Visualizer
          </p>
        </div>
        <a
          href="https://huggingface.co/spaces/azemnitskiy/group-explorer"
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
        href="https://huggingface.co/spaces/azemnitskiy/group-explorer"
        imgWidth={1888}
        imgHeight={892}
        slides={[
          { src: "/screenshots/group_explorer.png", alt: "Group Explorer — Cayley diagram view" },
          { src: "/screenshots/group_explorer_2.png", alt: "Group Explorer — alternating group view" },
        ]}
      />

      {/* Content */}
      <ContentTabs overview={<Content />} tutorials={<Tutorials />} />
    </div>
  );
}
