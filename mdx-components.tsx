import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2
        className="text-xl font-bold mt-10 mb-4"
        style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--text-primary)" }}
      >
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p
        className="text-lg leading-loose mb-4"
        style={{ fontFamily: "var(--font-serif)", color: "var(--text-secondary)" }}
      >
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul
        className="space-y-1.5 mb-4 text-lg leading-loose"
        style={{ fontFamily: "var(--font-serif)", color: "var(--text-secondary)" }}
      >
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="flex gap-2">
        <span className="shrink-0" style={{ color: "var(--text-muted)" }}>—</span>
        <span>{children}</span>
      </li>
    ),
    strong: ({ children }) => (
      <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>{children}</strong>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table
          className="w-full text-sm border-collapse"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {children}
        </table>
      </div>
    ),
    tbody: (props) => <tbody {...props} suppressHydrationWarning />,
    th: ({ children }) => (
      <th
        className="text-left py-2 pr-8 font-medium border-b"
        style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
      >
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td
        className="py-2 pr-8 border-b"
        style={{ color: "var(--text-secondary)", borderColor: "var(--border)" }}
      >
        {children}
      </td>
    ),
    ...components,
  };
}
