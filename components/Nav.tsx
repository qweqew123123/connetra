"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const prevent = (e: React.MouseEvent<HTMLElement>) => {
    const link = (e.target as HTMLElement).closest("a");
    if (link && link.getAttribute("href")?.startsWith("#")) e.preventDefault();
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
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
              <a href="#platform" className={pathname === "/features" || pathname === "/roadmap" ? "active" : ""}>
                Platform <ChevronDown size={14} />
              </a>
              <div className="nav-drop-menu">
                <a href="/features" className={pathname === "/features" ? "active" : ""}>Features</a>
                <a href="/roadmap" className={pathname === "/roadmap" ? "active" : ""}>Roadmap</a>
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
              <a href="#resources" className={pathname.startsWith("/docs") || pathname === "/blog" ? "active" : ""}>
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
              </div>
            </div>
          </nav>
          <div className="nav-actions">
            <a className="login" href="/login">
              Log in
            </a>
            <a className="button small" href="/createaccount">
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
      </header>

      {/* Full-Page Mobile Drawer Overlay */}
      {open && (
        <div className="mobile-full-overlay">
          <div className="mobile-overlay-header">
            <a className="brand" href="/" onClick={closeMenu}>
              <img src="/Logo.svg" alt="Connetra logo" />
            </a>
            <button
              type="button"
              className="mobile-close-btn"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-overlay-body">
            {/* Platform Accordion */}
            <div className="mobile-nav-group">
              <button
                type="button"
                className={`mobile-nav-parent ${platformOpen ? "open" : ""} ${
                  pathname === "/features" || pathname === "/roadmap" ? "active" : ""
                }`}
                onClick={() => setPlatformOpen((prev) => !prev)}
              >
                <span>Platform</span>
                <ChevronDown size={18} className="chevron" />
              </button>
              {platformOpen && (
                <div className="mobile-nav-sublinks">
                  <a
                    href="/features"
                    className={`mobile-nav-sublink ${pathname === "/features" ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    Features
                  </a>
                  <a
                    href="/roadmap"
                    className={`mobile-nav-sublink ${pathname === "/roadmap" ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    Roadmap
                  </a>
                </div>
              )}
            </div>

            {/* Integrations Link */}
            <a
              href="/integrations"
              className={`mobile-nav-link ${pathname === "/integrations" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Integrations
            </a>

            {/* Pricing Link */}
            <a
              href="/pricing"
              className={`mobile-nav-link ${pathname === "/pricing" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Pricing
            </a>

            {/* Resources Accordion */}
            <div className="mobile-nav-group">
              <button
                type="button"
                className={`mobile-nav-parent ${resourcesOpen ? "open" : ""} ${
                  pathname.startsWith("/docs") || pathname === "/blog" ? "active" : ""
                }`}
                onClick={() => setResourcesOpen((prev) => !prev)}
              >
                <span>Resources</span>
                <ChevronDown size={18} className="chevron" />
              </button>
              {resourcesOpen && (
                <div className="mobile-nav-sublinks">
                  <a
                    href="/docs/intro"
                    className={`mobile-nav-sublink ${pathname.startsWith("/docs") ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    Documentation
                  </a>
                  <a
                    href="/blog"
                    className={`mobile-nav-sublink ${pathname === "/blog" ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    Blog
                  </a>
                </div>
              )}
            </div>

            {/* Bottom Actions Group */}
            <div className="mobile-actions-group">
              <a
                href="/login"
                className="login-link"
                onClick={closeMenu}
              >
                Log in
              </a>
              <a
                href="/createaccount"
                className="signup-btn"
                onClick={closeMenu}
              >
                <span>Sign up</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}