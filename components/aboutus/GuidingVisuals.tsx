"use client";

import { Search, Filter, Database, CheckCircle2, Sliders, Layers, Tag, Grid } from "lucide-react";

export function AccessibilityVisual({ inView }: { inView: boolean }) {
  return (
    <div className={`abt-visual-card ${inView ? "in" : ""}`}>
      <div className="abt-card-top">
        <div className="abt-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="abt-url">connetra.com/discovery</span>
      </div>
      <div className="abt-card-body">
        <div className="abt-search-mock">
          <Search size={16} className="text-accent" />
          <span className="abt-mock-input">Search datasets, lineage & metrics…</span>
          <Filter size={14} className="text-muted" />
        </div>
        <div className="abt-nodes-row">
          <div className="abt-node-pill active">
            <CheckCircle2 size={13} />
            <span>Intuitive Filter</span>
          </div>
          <div className="abt-node-pill active">
            <Database size={13} />
            <span>Instant Search</span>
          </div>
        </div>
        <div className="abt-metric-badge">
          <span>Non-technical Accessible</span>
        </div>
      </div>
    </div>
  );
}

export function CustomizationVisual({ inView }: { inView: boolean }) {
  return (
    <div className={`abt-visual-card ${inView ? "in" : ""}`}>
      <div className="abt-card-top">
        <div className="abt-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="abt-url">connetra.com/custom-schema</span>
      </div>
      <div className="abt-card-body">
        <div className="abt-custom-header">
          <Sliders size={16} className="text-accent" />
          <span className="abt-custom-title">Flexible Taxonomy Engine</span>
        </div>
        <div className="abt-block-grid">
          <div className="abt-block-item">
            <Tag size={13} />
            <span>Custom Labels</span>
          </div>
          <div className="abt-block-item">
            <Layers size={13} />
            <span>Org Metamodel</span>
          </div>
          <div className="abt-block-item">
            <Grid size={13} />
            <span>Tailored Analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const guidingVisualsMap = {
  accessibility: AccessibilityVisual,
  customization: CustomizationVisual,
};
