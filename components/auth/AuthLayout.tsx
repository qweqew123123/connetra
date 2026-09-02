"use client";

import Link from "next/link";
import DotGrid from "../DotGrid/DotGrid";
import "../../app/auth.css";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="auth-page-root">
      {/* Background Interactive DotGrid Canvas */}
      <div className="auth-dotgrid-wrap" aria-hidden="true">
        <DotGrid
          dotSize={3}
          gap={28}
          baseColor="#c2d6ff"
          activeColor="#3559C7"
          proximity={140}
          speedTrigger={80}
          shockRadius={240}
          shockStrength={4}
          maxSpeed={4000}
          resistance={800}
          returnDuration={1.4}
          className="auth-dotgrid"
          style={{ position: "absolute", inset: 0 }}
        />
        <div className="auth-dotgrid-glow" aria-hidden="true" />
      </div>

      {/* Top Header with Connetra Logo */}
      <header className="auth-header">
        <Link href="/" className="auth-brand-logo" aria-label="Connetra Home">
          <img src="/Logo_Footer.svg" alt="Connetra logo" />
        </Link>
      </header>

      {/* Center Auth Card Container */}
      <main className="auth-main-content" role="main">
        {children}
      </main>
    </div>
  );
}
