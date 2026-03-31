import type { Metadata } from "next";
import { Lora, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import TabNav from "@/components/TabNav";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Graph Monster",
  description:
    "Interactive visualization projects in mathematics — groups, graphs, and binary quadratic forms.",
  metadataBase: new URL("https://graph.monster"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${mono.variable} h-full`}>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "var(--bg)", fontFamily: "var(--font-serif)" }}>
        <header className="border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-4xl mx-auto px-8 pt-10 pb-0">
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/graph-monster.png"
                alt="Graph Monster logo"
                width={64}
                height={64}
                className="shrink-0"
                style={{ height: "auto", width: "auto", maxHeight: "64px", borderRadius: "50%", border: "2px solid #000" }}
                priority
              />
              <div>
                <h1
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--text-primary)",
                    fontStyle: "italic",
                  }}
                >
                  Graph Monster
                </h1>
                <p
                  className="mt-1 text-sm tracking-wide"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  graph.monster — mathematics visualization projects
                </p>
              </div>
            </div>
            <TabNav />
          </div>
        </header>
        <main className="flex-1 max-w-4xl w-full mx-auto px-8 py-12">{children}</main>
        <footer
          className="border-t py-6 text-center text-xs"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
        >
          graph.monster
        </footer>
      </body>
    </html>
  );
}
