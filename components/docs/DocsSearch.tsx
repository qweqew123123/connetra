"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, X, FileText, CornerDownLeft } from "lucide-react";
import { docsSearchIndex, DocSearchRecord } from "../../data/docs-navigation";

interface DocsSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DocsSearch({ isOpen, onClose }: DocsSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  // Reset query and selection index when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Filter records based on search query
  const filteredResults: DocSearchRecord[] = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return docsSearchIndex.slice(0, 5); // show featured / top docs when empty
    }

    return docsSearchIndex.filter((item: DocSearchRecord) => {
      const matchTitle = item.title.toLowerCase().includes(trimmed);
      const matchSection = item.section.toLowerCase().includes(trimmed);
      const matchExcerpt = item.excerpt.toLowerCase().includes(trimmed);
      const matchKeywords = item.keywords?.some((k: string) => k.toLowerCase().includes(trimmed));
      return Boolean(matchTitle || matchSection || matchExcerpt || matchKeywords);
    });
  }, [query]);

  // Keyboard shortcut listener for arrow navigation, enter, esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredResults.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredResults.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredResults[selectedIndex]) {
          handleSelect(filteredResults[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current && listRef.current.children[selectedIndex]) {
      const el = listRef.current.children[selectedIndex] as HTMLElement;
      el.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  const handleSelect = (item: DocSearchRecord) => {
    onClose();
    router.push(item.url);
  };

  // Helper to highlight matching text in title/excerpt
  const renderHighlighted = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={i} className="docs-search-mark">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="docs-search-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="docs-search-title"
    >
      <div
        className="docs-search-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="docs-search-input-header">
          <Search size={18} className="docs-search-header-icon" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            className="docs-search-field"
            placeholder="Search documentation (Introduction, Overview, Connectors...)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            aria-label="Search documentation input"
          />
          {query && (
            <button
              type="button"
              className="docs-search-clear-btn"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              aria-label="Clear query"
            >
              <X size={15} />
            </button>
          )}
          <button
            type="button"
            className="docs-search-esc-btn"
            onClick={onClose}
            aria-label="Close search dialog"
          >
            <kbd>ESC</kbd>
          </button>
        </div>

        {/* Results List */}
        <div className="docs-search-results-wrapper">
          <div className="docs-search-results-label">
            {query.trim() ? "Search Results" : "Suggested Pages"}
          </div>

          {filteredResults.length === 0 ? (
            <div className="docs-search-no-results">
              <p>No documentation found for <strong>&ldquo;{query}&rdquo;</strong></p>
              <small>Try searching for keywords like &ldquo;overview&rdquo;, &ldquo;metadata&rdquo;, or &ldquo;data sources&rdquo;</small>
            </div>
          ) : (
            <ul className="docs-search-results-list" ref={listRef} role="listbox">
              {filteredResults.map((item: DocSearchRecord, idx: number) => {
                const isSelected = idx === selectedIndex;
                return (
                  <li
                    key={`${item.url}-${idx}`}
                    className={`docs-search-result-item ${isSelected ? "selected" : ""}`}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                  >
                    <div className="docs-search-item-left">
                      <div className="docs-search-item-icon-box">
                        <FileText size={15} />
                      </div>
                      <div className="docs-search-item-info">
                        <div className="docs-search-item-header">
                          <span className="docs-search-item-title">
                            {renderHighlighted(item.title, query)}
                          </span>
                          <span className="docs-search-item-badge">
                            {item.section}
                          </span>
                        </div>
                        <p className="docs-search-item-excerpt">
                          {renderHighlighted(item.excerpt, query)}
                        </p>
                      </div>
                    </div>
                    <div className="docs-search-item-arrow" aria-hidden="true">
                      <CornerDownLeft size={13} />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Search Footer Shortcuts */}
        <div className="docs-search-footer">
          <div className="docs-search-footer-shortcuts">
            <span className="docs-search-shortcut-item">
              <kbd>↑</kbd> <kbd>↓</kbd> Navigate
            </span>
            <span className="docs-search-shortcut-item">
              <kbd>↵</kbd> Select
            </span>
            <span className="docs-search-shortcut-item">
              <kbd>ESC</kbd> Close
            </span>
          </div>
          <span className="docs-search-footer-brand">
            Connetra Docs
          </span>
        </div>
      </div>
    </div>
  );
}