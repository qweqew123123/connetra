"use client";

import { useEffect, useState } from "react";
import {
  Database,
  Folder,
  GitBranch,
  LayoutDashboard,
  Search,
  Table2,
} from "lucide-react";

const results = [
  {
    name: "Customer Revenue",
    type: "DASHBOARD",
    meta: "Finance · updated 2m ago",
    icon: LayoutDashboard,
  },
  {
    name: "Revenue Model",
    type: "MODEL",
    meta: "dbt · 6 transforms",
    icon: GitBranch,
  },
  {
    name: "Customer DB",
    type: "DATABASE",
    meta: "PostgreSQL · 128 tables",
    icon: Database,
  },
  {
    name: "Sales Performance",
    type: "DASHBOARD",
    meta: "Sales · updated 14m ago",
    icon: LayoutDashboard,
  },
  {
    name: "Monthly Revenue",
    type: "TABLE",
    meta: "Warehouse · 1.2M rows",
    icon: Table2,
  },
];

export default function SearchVisual({ entered }: { entered: boolean }) {
  const [phase, setPhase] = useState<"idle" | "typing" | "results">("idle");

  useEffect(() => {
    if (!entered) return;
    const t1 = setTimeout(() => setPhase("typing"), 250);
    const t2 = setTimeout(() => setPhase("results"), 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [entered]);

  return (
    <div className="fp-visual-card fp-search">
      <div className="fp-browser-bar">
        <span className="fp-dot" />
        <span className="fp-dot" />
        <span className="fp-dot" />
        <span className="fp-browser-url">app.connetra.com/explore</span>
      </div>
      <div className="fp-search-body">
        <div className="fp-search-input">
          <Search size={17} aria-hidden="true" />
          <span
            className={`fp-query ${phase !== "idle" ? "typed" : ""}`}
          >
            customer revenue
          </span>
          <span className="fp-placeholder">Search your data...</span>
          {phase !== "idle" && <span className="fp-caret" aria-hidden="true" />}
        </div>

        <div className={`fp-results ${phase === "results" ? "show" : ""}`}>
          {results.map((r, i) => {
            const Icon = r.icon;
            return (
              <div className="fp-result" style={{ animationDelay: `${i * 90}ms` }} key={r.name}>
                <span className="fp-result-icon">
                  <Icon size={15} aria-hidden="true" />
                </span>
                <span className="fp-result-main">
                  <b>{r.name}</b>
                  <small>{r.meta}</small>
                </span>
                <span className="fp-result-type">{r.type}</span>
              </div>
            );
          })}
        </div>

        <div className="fp-search-foot">
          <Folder size={13} aria-hidden="true" />
          5 assets found · Sorted by relevance
        </div>
      </div>
    </div>
  );
}