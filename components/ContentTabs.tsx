"use client";

import { useState } from "react";

const TABS = ["Overview", "Tutorials"] as const;
type Tab = (typeof TABS)[number];

export default function ContentTabs({
  overview,
  tutorials,
}: {
  overview: React.ReactNode;
  tutorials?: React.ReactNode;
}) {
  const [active, setActive] = useState<Tab>("Overview");

  return (
    <div>
      <nav className="flex gap-0" role="tablist" style={{ borderBottom: "1px solid var(--border)" }}>
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className="relative px-5 py-3 text-sm font-medium tracking-wide transition-colors"
            style={{
              fontFamily: "var(--font-mono)",
              color: active === tab ? "var(--text-primary)" : "var(--text-muted)",
              backgroundColor: active === tab ? "var(--tab-active)" : "transparent",
              borderRadius: "4px 4px 0 0",
              borderBottom: active === tab ? "2px solid var(--accent)" : "2px solid transparent",
              marginBottom: "-1px",
              cursor: "pointer",
              outline: "none",
            }}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="pt-6">
        {active === "Overview" && overview}
        {active === "Tutorials" && tutorials}
      </div>
    </div>
  );
}
