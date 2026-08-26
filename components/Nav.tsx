"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prevent = (e: React.MouseEvent<HTMLElement>) => {
    const link = (e.target as HTMLElement).closest("a");
    if (link && link.getAttribute("href")?.startsWith("#")) e.preventDefault();
  };

  return (
    <header
      className={`nav ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}
      onClick={prevent}
    >
      <div className="nav-inner">
        <a className="brand" href="/">
          <img src="/Logo.svg" alt="Connetra logo" />
        </a>
        <nav className="nav-links" aria-label="Main navigation">
<div className="nav-drop">
             <a href="#platform">
               Platform <ChevronDown size={14} />
             </a>
             <div className="nav-drop-menu">
               <a href="/features">Features</a>
               <a href="#">Roadmap</a>
             </div>
           </div>
            <a
              href="/integrations"
              className={pathname === "/integrations" ? "active" : ""}
            >
              Integrations
            </a>
            <a
              href="/pricing"
              className={pathname === "/pricing" ? "active" : ""}
            >
              Pricing
            </a>
            <div className="nav-drop">
             <a href="#resources">
               Resources <ChevronDown size={14} />
             </a>
             <div className="nav-drop-menu">
               <a
                 href="/docs/intro"
                 className={pathname.startsWith("/docs") ? "active" : ""}
               >
                 Documentation
               </a>
               <a
                 href="/blog"
                 className={pathname === "/blog" ? "active" : ""}
               >
                 Blog
               </a>
               <a href="#">Support</a>
             </div>
           </div>
        </nav>
        <div className="nav-actions">
          <a className="login" href="#">
            Log in
          </a>
          <a className="button small" href="#cta">
            Sign up <ArrowRight size={14} />
          </a>
        </div>
        <button
          className="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="mobile-panel">
          <a href="#platform">Platform</a>
          <a
            href="/integrations"
            className={pathname === "/integrations" ? "active" : ""}
          >
            Integrations
          </a>
          <a
            href="/pricing"
            className={pathname === "/pricing" ? "active" : ""}
          >
            Pricing
          </a>
          <a
            href="/docs/intro"
            className={pathname.startsWith("/docs") ? "active" : ""}
          >
            Documentation
          </a>
          <a
            href="/blog"
            className={pathname === "/blog" ? "active" : ""}
          >
            Blog
          </a>
          <a className="button small" href="#cta">
            Sign up <ArrowRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}