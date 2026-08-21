"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { integrationCategories, integrationDirectory } from "../../data/integrations";
import IntegrationCard from "./IntegrationCard";

export default function IntegrationGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing =
        target.tagName === "INPUT" || target.tagName === "TEXTAREA";
      if (
        (e.key === "/" && !typing) ||
        ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const q = query.trim().toLowerCase();
  const filtered = integrationDirectory.filter((item) => {
    const inCategory = category === "All" || item.category === category;
    if (!inCategory) return false;
    if (!q) return true;
    return (
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });

  const clear = () => {
    setQuery("");
    setCategory("All");
  };

  const categoryCounts: Record<string, number> = {
    All: integrationDirectory.length,
  };
  for (const cat of integrationCategories) {
    categoryCounts[cat] = integrationDirectory.filter(
      (i) => i.category === cat
    ).length;
  }

  return (
    <section id="directory" className="itg-directory">
      <div className="itg-container">
        <div className="itg-search" role="search">
          <Search size={18} aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search integrations..."
            aria-label="Search integrations"
          />
          {query ? (
            <button
              type="button"
              className="itg-clear"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          ) : (
            <kbd className="itg-kbd" aria-hidden="true">
              ⌘K
            </kbd>
          )}
        </div>

        <div className="itg-filters" role="group" aria-label="Filter integrations by category">
          {["All", ...integrationCategories].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`itg-pill ${category === cat ? "active" : ""}`}
              aria-pressed={category === cat}
              onClick={() => setCategory(cat)}
            >
              {cat}
              <span className="itg-pill-count">{categoryCounts[cat]}</span>
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="itg-grid">
            {filtered.map((item) => (
              <IntegrationCard key={item.slug} item={item} />
            ))}
          </div>
        ) : (
          <div className="itg-empty">
            <div className="itg-empty-icon">
              <Search size={22} aria-hidden="true" />
            </div>
            <h3>No integrations found</h3>
            <p>Try another search or browse all available integrations.</p>
            <button type="button" className="button" onClick={clear}>
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}