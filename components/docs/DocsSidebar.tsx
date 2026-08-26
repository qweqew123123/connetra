"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, ChevronRight, Search, X } from "lucide-react";
import { docsNavigation, DocSection, DocLinkItem } from "../../data/docs-navigation";

interface DocsSidebarProps {
  onClose?: () => void;
  onSearchClick?: () => void;
}

export default function DocsSidebar({ onClose, onSearchClick }: DocsSidebarProps) {
  const pathname = usePathname();
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));
    }
  }, []);

  // Initialize expanded sections: all sections with items start expanded for easy discovery, or collapsible on click
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const state: Record<string, boolean> = {};
    docsNavigation.forEach((sec: DocSection) => {
      if (sec.items) {
        state[sec.title] = true;
      }
    });
    return state;
  });

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <nav className="docs-sidebar-nav" aria-label="Documentation Sidebar">
      {/* Sidebar Top: Search Trigger and Mobile Close */}
      <div className="docs-sidebar-top-bar">
        {onSearchClick && (
          <button
            type="button"
            className="docs-sidebar-search-btn"
            onClick={onSearchClick}
            aria-label={`Search documentation (${isMac ? "⌘K" : "Ctrl+K"})`}
          >
            <Search size={14} className="docs-sidebar-search-icon" aria-hidden="true" />
            <span className="docs-sidebar-search-placeholder">Search docs...</span>
            <kbd className="docs-sidebar-search-kbd">
              {isMac ? "⌘K" : "Ctrl K"}
            </kbd>
          </button>
        )}

        {onClose && (
          <button
            type="button"
            className="docs-sidebar-close-btn"
            onClick={onClose}
            aria-label="Close documentation menu"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <div className="docs-sidebar-inner">
        <ul className="docs-sidebar-tree" role="tree">
          {docsNavigation.map((section: DocSection) => {
            const hasChildren = Boolean(section.items && section.items.length > 0);
            const isExpanded = expandedSections[section.title] ?? false;
            const isSingleActive = section.href ? pathname === section.href : false;

            if (!hasChildren && section.href) {
              return (
                <li key={section.title} className="docs-tree-item" role="treeitem">
                  <Link
                    href={section.href}
                    className={`docs-tree-link ${isSingleActive ? "active" : ""}`}
                    onClick={handleLinkClick}
                    aria-current={isSingleActive ? "page" : undefined}
                  >
                    <span className="docs-tree-link-indicator" aria-hidden="true" />
                    <span className="docs-tree-link-text">{section.title}</span>
                  </Link>
                </li>
              );
            }

            return (
              <li
                key={section.title}
                className="docs-tree-group"
                role="treeitem"
                aria-expanded={isExpanded}
              >
                <button
                  type="button"
                  className="docs-tree-group-btn"
                  onClick={() => toggleSection(section.title)}
                  aria-label={`${isExpanded ? "Collapse" : "Expand"} ${section.title}`}
                >
                  <span className="docs-tree-group-arrow">
                    {isExpanded ? (
                      <ChevronDown size={14} aria-hidden="true" />
                    ) : (
                      <ChevronRight size={14} aria-hidden="true" />
                    )}
                  </span>
                  <span className="docs-tree-group-title">{section.title}</span>
                </button>

                {isExpanded && section.items && (
                  <ul className="docs-tree-sublist" role="group">
                    {section.items.map((subItem: DocLinkItem) => {
                      const isSubActive = pathname === subItem.href;
                      return (
                        <li key={subItem.href} className="docs-tree-subitem" role="treeitem">
                          <Link
                            href={subItem.href}
                            className={`docs-tree-sublink ${isSubActive ? "active" : ""}`}
                            onClick={handleLinkClick}
                            aria-current={isSubActive ? "page" : undefined}
                          >
                            <span className="docs-tree-sublink-text">
                              {subItem.title}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}