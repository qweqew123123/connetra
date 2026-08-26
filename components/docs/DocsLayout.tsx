"use client";

import { useState, useEffect } from "react";
import Nav from "../Nav";
import DocsSidebar from "./DocsSidebar";
import DocsTableOfContents from "./DocsTableOfContents";
import DocsSearch from "./DocsSearch";
import { Menu, Search } from "lucide-react";
import "./DocsLayout.css";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));
    }
  }, []);

  // Global keyboard shortcut for search (⌘K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile sidebar on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="docs-page-container">
      {/* Same Navigation Header as entire site */}
      <Nav />

      {/* Mobile Docs Quick Toolbar (visible only on smaller screens) */}
      <div className="docs-mobile-toolbar">
        <button
          type="button"
          className="docs-mobile-nav-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open documentation menu"
        >
          <Menu size={18} />
          <span>Menu</span>
        </button>

        <button
          type="button"
          className="docs-mobile-search-btn"
          onClick={() => setSearchOpen(true)}
          aria-label="Search documentation"
        >
          <Search size={15} />
          <span>Search docs...</span>
          <kbd>{isMac ? "⌘K" : "Ctrl K"}</kbd>
        </button>
      </div>

      {/* 3-Column Layout Container */}
      <div className="docs-layout-grid">
        {/* Left Sidebar (Desktop Fixed/Sticky + Mobile Drawer) */}
        <aside
          id="docs-sidebar"
          className={`docs-sidebar-column ${sidebarOpen ? "open" : ""}`}
          aria-label="Documentation navigation sidebar"
        >
          <div className="docs-sidebar-sticky-wrapper">
            <DocsSidebar
              onClose={() => setSidebarOpen(false)}
              onSearchClick={() => setSearchOpen(true)}
            />
          </div>
        </aside>

        {/* Center Main Content Reading Column */}
        <main className="docs-main-column" role="main">
          <div className="docs-main-inner">{children}</div>
        </main>

        {/* Right "On this page" Table of Contents */}
        <aside className="docs-toc-column" aria-label="On this page navigation">
          <div className="docs-toc-sticky-wrapper">
            <DocsTableOfContents />
          </div>
        </aside>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      <div
        className={`docs-drawer-overlay ${sidebarOpen ? "visible" : ""}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Global Documentation Search Modal */}
      <DocsSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}