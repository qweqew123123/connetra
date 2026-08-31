"use client";

import Link from "next/link";
import "../../app/auth.css";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="auth-page-root">
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
