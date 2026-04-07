"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Cayleidoscope", href: "/cayleidoscope" },
  { label: "Topograph", href: "/topograph" },
];

export default function TabNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-0" role="tablist">
      {tabs.map((tab) => {
        const active = pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href));
        return (
          <Link
            key={tab.href}
            href={tab.href}
            role="tab"
            aria-selected={active}
            className="relative px-5 py-3 text-sm font-medium tracking-wide transition-colors"
            style={{
              fontFamily: "var(--font-mono)",
              color: active ? "var(--text-primary)" : "var(--text-muted)",
              backgroundColor: active ? "var(--tab-active)" : "transparent",
              borderRadius: "4px 4px 0 0",
              textDecoration: "none",
              borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
            }}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
