import type { Metadata } from "next";
import Image from "next/image";

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
            className="text-2xl font-bold"
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

      {/* Screenshot */}
      <a
        href="https://huggingface.co/spaces/azemnitskiy/group-explorer"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg overflow-hidden border transition-opacity hover:opacity-90"
        style={{ borderColor: "var(--border)" }}
      >
        <Image
          src="/screenshots/group_explorer.png"
          alt="Group Explorer screenshot"
          width={1200}
          height={680}
          className="w-full h-auto"
          priority
        />
      </a>

      {/* Description */}
      <div className="space-y-8 text-lg leading-loose" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-serif)" }}>
        <p>
          An interactive visualizer for finite groups. Explore Cayley diagrams, multiplication
          tables, subgroups, conjugacy classes, homomorphisms, and isomorphisms — with a built-in
          tutorial system that walks through the standard abstract algebra curriculum.
        </p>

        {/* Cayley Diagram View */}
        <Section title="Cayley Diagram View">
          <FeatureList
            items={[
              "Cayley diagram — nodes for each group element, colored arrows for each generator",
              "Multiplication table — styled HTML panel with highlighted rows/columns and product cell",
              "Element selection — pick g₁ and g₂ to see their product, order, and inverse",
              "Subgroup highlight — shade the cyclic subgroup ⟨g₁⟩ in the diagram",
              "Conjugacy class highlight — shade the conjugacy class of g₁",
              "Abelian check — computed live for the active group",
              "Animations — particle streams, orbit tracer, and node pulse rings (toggle via ⚙ button)",
            ]}
          />
        </Section>

        {/* Morphism View */}
        <Section title="Morphism View">
          <FeatureList
            items={[
              "Bipartite diagram — source group on the left, target group on the right, arrows colored by fiber",
              "All homomorphisms — enumerate every φ: G → H; navigate with ◀ ▶",
              "Fiber coloring — elements sharing the same image get the same color, making coset structure visible",
              "Properties panel — kernel, image, injectivity, surjectivity, and type (isomorphism / homomorphism / trivial)",
              "Animated particles — flow along each G → H arrow, same animation controls as Cayley view",
              "Target group selector — independently choose any supported group as the target",
            ]}
          />
        </Section>

        {/* Cube Lab */}
        <Section title="Cube Lab">
          <p className="mb-3">
            An interactive Rubik&apos;s Cube sandbox that connects hands-on cube manipulation to
            abstract algebra. The 3D cube (Three.js) and 2D face net update live as you enter move
            sequences; a properties panel computes the relevant algebraic data automatically.
          </p>
          <p className="mb-3">Five modes, each focusing on a different group-theoretic concept:</p>
          <FeatureList
            items={[
              "Conjugation — enter a sequence s and a move g; the lab applies g s g⁻¹ and shows how conjugation relocates the effect of s to a different part of the cube. Demonstrates why conjugate elements have the same order.",
              "Commutator — pick two moves g and h; the lab computes [g, h] = g h g⁻¹ h⁻¹ and highlights which pieces move. Shows that commutators always have even parity and that adjacent face moves produce small targeted permutations (the Sexy Move [R, U]).",
              "Order — enter a sequence and step through it one application at a time with Apply ×1; the step counter n shows when the cube returns to solved. The properties panel computes the theoretical order instantly via the LCM of cycle lengths.",
              "Parity — shows the parity (even/odd) of any sequence via the homomorphism φ: G → ℤ₂. A move-parity grid labels all 18 standard moves E/O. Three Impossible State buttons create states that violate the cube's invariants.",
              "Generators — toggle which face moves are active; BFS counts exactly how many states are reachable using only those moves. Demonstrates subgroup structure and Lagrange's theorem — every count divides |G| ≈ 4.3 × 10¹⁹.",
            ]}
          />
        </Section>

        {/* Supported Groups */}
        <Section title="Supported Groups">
          <div className="overflow-x-auto">
            <table
              className="w-full text-xs border-collapse"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)", color: "var(--text-muted)" }}>
                  <Th>Selector</Th>
                  <Th>Group</Th>
                  <Th>Order</Th>
                  <Th>Abelian</Th>
                  <Th>Notes</Th>
                </tr>
              </thead>
              <tbody>
                <Tr cells={["Cyclic Zₙ", "ℤₙ", "n (2–14)", "Yes", "Integers mod n under addition"]} />
                <Tr cells={["Dihedral Dₙ", "Dₙ", "2n (n=3–8)", "No (n≥3)", "Symmetries of a regular n-gon"]} />
                <Tr cells={["Symmetric S₃", "S₃", "6", "No", "All permutations of {1,2,3}; isomorphic to D₃"]} />
                <Tr cells={["Klein V₄", "V₄ ≅ ℤ₂×ℤ₂", "4", "Yes", "Smallest non-cyclic abelian group"]} />
              </tbody>
            </table>
          </div>
        </Section>

        {/* Things to Try */}
        <Section title="Things to Try">
          <p className="mb-2 font-medium" style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>
            Cayley diagram:
          </p>
          <FeatureList
            items={[
              "Z₆, g₁=2, enable subgroup → ⟨2⟩={0,2,4}, order 3 — Lagrange's theorem in action",
              "D₄, g₁=r, g₂=s, note the product; swap g₁↔g₂ → different result (non-abelian)",
              "S₃, find all element orders (1, 2, 3) — each divides |G|=6",
              "V₄, every non-identity element has order 2; no element generates the whole group",
            ]}
          />
          <p
            className="mt-4 mb-2 font-medium"
            style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}
          >
            Morphism view:
          </p>
          <FeatureList
            items={[
              "Z₆ → Z₃: 3 homomorphisms — two surjective (2-to-1 fibers) and one trivial",
              "Z₃ → Z₆: injective embedding into the subgroup {0,2,4}",
              "S₃ → Z₂: the sign homomorphism; kernel = A₃ (alternating group)",
              "S₃ → D₃: 6 isomorphisms — confirms S₃ ≅ D₃",
              "Z₄ → V₄: no isomorphism exists; element order invariant distinguishes them",
            ]}
          />
        </Section>

        {/* General */}
        <Section title="General">
          <FeatureList
            items={[
              "Resizable panels — drag the sidebar or tutorial panel edges to resize",
              "Tutorial system — step through curated lesson sequences that auto-configure both views; switch between Cayley, Morphism, and Cube Lab freely during a tutorial",
              "Tutorial files — JSON files in tutorials/ loaded automatically on startup; use the dropdown to switch or the folder button to load from disk",
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
