"use client";

import { useEffect, useState } from "react";
import { Clock, RefreshCw } from "lucide-react";

type Freshness = "fresh" | "updated" | "stale";

const rows: { name: string; type: string; fresh: Freshness }[] = [
  { name: "Customer DB", type: "DATABASE", fresh: "fresh" },
  { name: "Revenue Model", type: "MODEL", fresh: "fresh" },
  { name: "Sales Dashboard", type: "DASHBOARD", fresh: "updated" },
  { name: "Marketing Data", type: "DATASET", fresh: "stale" },
];

const badges: Record<Freshness, string> = {
  fresh: "Fresh",
  updated: "Updated",
  stale: "Stale",
};

export default function FreshnessVisual({ entered }: { entered: boolean }) {
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (!entered) return;
    const t = setTimeout(() => setUpdated(true), 1100);
    return () => clearTimeout(t);
  }, [entered]);

  return (
    <div className="fp-visual-card fp-fresh">
      <div className="fp-fresh-top">
        <span className="fp-mon-title">
          <Clock size={14} aria-hidden="true" />
          Asset freshness
        </span>
        <span className="fp-fresh-filters" aria-hidden="true">
          <b>All</b>
          <span>Fresh</span>
          <span>Updated</span>
          <span>Stale</span>
        </span>
      </div>

      <div className="fp-fresh-list">
        {rows.map((row, i) => {
          const stamp =
            row.fresh === "stale"
              ? "Updated 2 days ago"
              : i === 0
                ? updated
                  ? "Updated 2 min ago"
                  : "Updated 15 min ago"
                : row.fresh === "fresh"
                  ? i === 1
                    ? "Updated 8 min ago"
                    : "Updated 4 min ago"
                  : "Updated 24 min ago";
          return (
            <div className="fp-fresh-row" key={row.name}>
              <span className={`fp-fresh-icon ${row.fresh}`} aria-hidden="true">
                <RefreshCw size={14} />
              </span>
              <span className="fp-fresh-main">
                <b>{row.name}</b>
                <small>{row.type}</small>
              </span>
              <span className="fp-fresh-stamp">
                {i === 0 && (
                  <span className={`fp-fresh-swap ${updated ? "new" : ""}`}>
                    <span>Updated 15 min ago</span>
                    <span>Updated 2 min ago</span>
                  </span>
                )}
                {i !== 0 && stamp}
              </span>
              <span className={`fp-fresh-badge ${row.fresh}`}>
                <i aria-hidden="true" />
                {badges[row.fresh]}
              </span>
            </div>
          );
        })}
      </div>

      <div className="fp-fresh-foot">
        Connetra surfaces the freshest sources first.
      </div>
    </div>
  );
}