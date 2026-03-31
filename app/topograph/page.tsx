import type { Metadata } from "next";
import Image from "next/image";

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

      {/* Screenshot */}
      <a
        href="https://topograph-explorer.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg overflow-hidden border transition-opacity hover:opacity-90"
        style={{ borderColor: "var(--border)" }}
      >
        <Image
          src="/screenshots/topograph.png"
          alt="Conway's Topograph screenshot"
          width={1200}
          height={680}
          className="w-full h-auto"
          priority
        />
      </a>

      {/* Description */}
      <div className="space-y-8 text-lg leading-loose" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-serif)" }}>
        <p>
          An interactive visualizer for binary quadratic forms built with Next.js and React. Explore
          the Conway topograph, the river, Pell solutions, equivalence of forms, and the Poincaré
          disc — with a built-in tutorial system covering the theory from the ground up.
        </p>

        {/* Topograph View */}
        <Section title="Topograph View">
          <FeatureList
            items={[
              "SVG topograph — BFS-grown trivalent tree with lax vectors placed at superbase barycentres",
              "Sign map — faces colored green (positive), red (negative), grey (zero) with live updates as you drag the a, b, c sliders",
              "Home triad — the three seed values Q(1,0), Q(0,1), Q(−1,−1) highlighted at the root",
              "Vector labels — toggle (p, q) coordinates on every face",
              "Depth slider — grow or shrink the tree from depth 1 to 7",
              "Animations — directional particles along tree edges and pulse rings on selected nodes (toggle via ⚙ button)",
            ]}
          />
        </Section>

        {/* Modes */}
        <Section title="Modes">
          <p className="mb-3">Two top-level tabs:</p>
          <div className="overflow-x-auto mb-4">
            <table
              className="w-full text-xs border-collapse"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)", color: "var(--text-muted)" }}>
                  <Th>Tab</Th>
                  <Th>Description</Th>
                </tr>
              </thead>
              <tbody>
                <Tr cells={["Topograph", "Main view with three sub-tabs and layout controls"]} />
                <Tr cells={["Equivalence", "Side-by-side comparison of two forms with a live equivalence check"]} />
              </tbody>
            </table>
          </div>
          <p className="mb-3">Sub-tabs within Topograph:</p>
          <div className="overflow-x-auto mb-4">
            <table
              className="w-full text-xs border-collapse"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)", color: "var(--text-muted)" }}>
                  <Th>Sub-tab</Th>
                  <Th>Description</Th>
                </tr>
              </thead>
              <tbody>
                <Tr cells={["Plain", "Standard topograph with optional sign coloring"]} />
                <Tr cells={["River trace", "Gold wavy edges mark the river (sign-change boundary); blue gradient lakes highlight zero-value faces"]} />
                <Tr cells={["Pell solutions", "River trace plus amber star glyphs on cells with value 1; dashed arcs connect consecutive solutions; solution list overlaid in the graph corner"]} />
              </tbody>
            </table>
          </div>
          <p className="mb-3">Layout buttons (available in all Topograph sub-tabs):</p>
          <div className="overflow-x-auto">
            <table
              className="w-full text-xs border-collapse"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)", color: "var(--text-muted)" }}>
                  <Th>Layout</Th>
                  <Th>Description</Th>
                </tr>
              </thead>
              <tbody>
                <Tr cells={["Tree ⊕", "Standard trivalent tree layout"]} />
                <Tr cells={["Radial ◉", "Circular/radial arrangement of the tree"]} />
                <Tr cells={["Poincaré disc ◎", "Renders the form within the hyperbolic disc model"]} />
              </tbody>
            </table>
          </div>
        </Section>

        {/* Tutorial System */}
        <Section title="Tutorial System">
          <FeatureList
            items={[
              "8 pre-built JSON tutorials covering the Conway topograph from first principles",
              "Each tutorial step auto-configures the form, depth, mode, and display options",
              "Reading mode (full-screen text), activity prompts, and multiple-choice quizzes per step",
            ]}
          />
        </Section>

        {/* Things to Try */}
        <Section title="Things to Try">
          <FeatureList
            items={[
              "Set a=1, b=0, c=−1 (discriminant 4 > 0) → switch to River trace: a single straight river separates all positive from all negative faces",
              "Set a=1, b=2, c=−1 → switch to Pell solutions: find the repeating pattern of cells with value 1; these are solutions to the associated Pell equation x² + 2xy − y² = 1",
              "Set a=1, b=0, c=1 (discriminant −4 < 0) → the form is positive-definite: no river, all faces positive",
              "Set a=2, b=2, c=−1 → Equivalence mode: compare with a=1, b=0, c=−2; both have discriminant 12 and reduce to the same form",
              "Switch to Poincaré disc for any indefinite form and watch the river become a geodesic",
            ]}
          />
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3
        className="text-xl font-bold mb-4"
        style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontStyle: "italic" }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span style={{ color: "var(--text-muted)" }} className="shrink-0">
            —
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left py-2 pr-6 font-medium" style={{ color: "var(--text-muted)" }}>
      {children}
    </th>
  );
}

function Tr({ cells }: { cells: string[] }) {
  return (
    <tr style={{ borderBottom: "1px solid var(--border)" }}>
      {cells.map((c, i) => (
        <td key={i} className="py-2 pr-6" style={{ color: "var(--text-secondary)" }}>
          {c}
        </td>
      ))}
    </tr>
  );
}
