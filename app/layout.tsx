import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import "./hero.css";
import "./features.css";
import "./integrations.css";
import "./footer.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: "Connetra — Your entire data ecosystem. Finally visible.",
  description:
    "Connetra connects your data ecosystem so teams can discover data, understand lineage, and monitor what matters.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={albertSans.variable}>
      <body>{children}</body>
    </html>
  );
}