"use client";

import Link from "next/link";
import { Search, Menu, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface DocsHeaderProps {
  onSearchClick: () => void;
  onMenuClick: () => void;
}

export default function DocsHeader({ onSearchClick, onMenuClick }: DocsHeaderProps) {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));
    }
  }, []);

  return (
    <header className="docs-header" role="banner">
      <div className="docs-header-inner">
        {/* Left: Brand + Documentation badge */}
        <div className="docs-header-left">
          <button
            type="button"
            className="docs-mobile-toggle"
            onClick={onMenuClick}
            aria-label="Open documentation navigation"
          >
            <Menu size={20} />
          </button>

          <Link href="/" className="docs-header-brand" aria-label="Connetra Home">
            <img src="/Logo.svg" alt="Connetra" className="docs-header-logo" />
          </Link>

          <div className="docs-badge-divider" aria-hidden="true" />

          <Link href="/docs/intro" className="docs-product-badge">
            Documentation
          </Link>
        </div>

        {/* Center: Search Field */}
        <div className="docs-header-center">
          <button
            type="button"
            className="docs-search-input-btn"
            onClick={onSearchClick}
            aria-label={`Search documentation (${isMac ? "⌘K" : "Ctrl+K"})`}
          >
            <Search size={15} className="docs-search-btn-icon" aria-hidden="true" />
            <span className="docs-search-btn-placeholder">Search documentation...</span>
            <kbd className="docs-search-btn-shortcut">
              {isMac ? "⌘K" : "Ctrl K"}
            </kbd>
          </button>
        </div>

        {/* Right: Clean minimal SaaS links */}
        <div className="docs-header-right">
          <nav className="docs-header-nav" aria-label="Quick links">
            <Link href="/" className="docs-header-link">
              Home
            </Link>
            <Link href="/features" className="docs-header-link">
              Features
            </Link>
            <Link href="/roadmap" className="docs-header-link">
              Roadmap
            </Link>
            <Link href="/integrations" className="docs-header-link">
              Integrations
            </Link>
            <Link href="/pricing" className="docs-header-link">
              Pricing
            </Link>
            <Link href="/blog" className="docs-header-link">
              Blog
            </Link>
          </nav>

          <div className="docs-header-actions">
            <a href="https://app.connetra.com/login" className="docs-header-login">
              Log in
            </a>
            <a href="#cta" className="docs-header-cta">
              Sign up
              <ArrowRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}