"use client";

import {
  Search,
  Filter,
  CheckCircle2,
  Database,
  Network,
  ShieldCheck,
  LineChart,
  Activity,
  Users,
  Share2,
  Zap,
  TrendingDown,
  Clock,
  Layers,
} from "lucide-react";

export function EfficiencyVisual({ inView }: { inView: boolean }) {
  return (
    <div className={`benefit-visual-card ${inView ? "in" : ""}`}>
      <div className="bv-window-bar">
        <div className="bv-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="bv-title-url">app.connetra.com/search</span>
      </div>
      <div className="bv-body bv-efficiency-body">
        <div className="bv-search-bar">
          <Search size={16} className="text-accent" />
          <span className="bv-search-input-text">filter: warehouse status: active</span>
          <Filter size={14} className="bv-filter-icon" />
        </div>
        <div className="bv-pills-list">
          <div className="bv-pill active">
            <CheckCircle2 size={13} />
            <span>Snowflake Prod (0.04s)</span>
          </div>
          <div className="bv-pill active">
            <CheckCircle2 size={13} />
            <span>PostgreSQL Lineage</span>
          </div>
          <div className="bv-pill active">
            <CheckCircle2 size={13} />
            <span>dbt Models Verified</span>
          </div>
        </div>
        <div className="bv-stats-row">
          <div className="bv-stat">
            <span className="bv-stat-label">Search Speed</span>
            <strong className="bv-stat-value">&lt; 50ms</strong>
          </div>
          <div className="bv-stat">
            <span className="bv-stat-label">Time Saved</span>
            <strong className="bv-stat-value">85% Faster</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ControlVisual({ inView }: { inView: boolean }) {
  return (
    <div className={`benefit-visual-card ${inView ? "in" : ""}`}>
      <div className="bv-window-bar">
        <div className="bv-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="bv-title-url">app.connetra.com/governance</span>
      </div>
      <div className="bv-body bv-control-body">
        <div className="bv-orbit-canvas">
          <div className="bv-orbit-ring" />
          <div className="bv-core-node">
            <Network size={22} />
            <span>Data Core</span>
          </div>
          <div className="bv-node n-top">
            <Database size={14} />
            <span>Warehouses</span>
          </div>
          <div className="bv-node n-right">
            <ShieldCheck size={14} />
            <span>Access Control</span>
          </div>
          <div className="bv-node n-bottom">
            <Layers size={14} />
            <span>Pipelines</span>
          </div>
          <div className="bv-node n-left">
            <CheckCircle2 size={14} />
            <span>Compliance</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DecisionVisual({ inView }: { inView: boolean }) {
  return (
    <div className={`benefit-visual-card ${inView ? "in" : ""}`}>
      <div className="bv-window-bar">
        <div className="bv-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="bv-title-url">app.connetra.com/metrics</span>
      </div>
      <div className="bv-body bv-decision-body">
        <div className="bv-metrics-header">
          <div>
            <span className="bv-meta-label">Data Health Score</span>
            <strong className="bv-score-val">99.8%</strong>
          </div>
          <div className="bv-badge-success">
            <Activity size={13} />
            <span>Live Monitor</span>
          </div>
        </div>
        <div className="bv-chart-bars">
          <div className="bv-bar-col">
            <div className="bv-bar-fill" style={{ height: "65%" }} />
            <span>Mon</span>
          </div>
          <div className="bv-bar-col">
            <div className="bv-bar-fill" style={{ height: "82%" }} />
            <span>Tue</span>
          </div>
          <div className="bv-bar-col">
            <div className="bv-bar-fill" style={{ height: "74%" }} />
            <span>Wed</span>
          </div>
          <div className="bv-bar-col">
            <div className="bv-bar-fill active" style={{ height: "98%" }} />
            <span>Thu</span>
          </div>
          <div className="bv-bar-col">
            <div className="bv-bar-fill" style={{ height: "90%" }} />
            <span>Fri</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CollaborationVisual({ inView }: { inView: boolean }) {
  return (
    <div className={`benefit-visual-card ${inView ? "in" : ""}`}>
      <div className="bv-window-bar">
        <div className="bv-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="bv-title-url">app.connetra.com/workspace</span>
      </div>
      <div className="bv-body bv-collab-body">
        <div className="bv-users-row">
          <div className="bv-user-avatar u1">
            <Users size={14} />
          </div>
          <div className="bv-user-avatar u2">
            <Share2 size={14} />
          </div>
          <div className="bv-user-avatar u3">
            <Database size={14} />
          </div>
          <span className="bv-collab-label">+18 Team Members Connected</span>
        </div>
        <div className="bv-feed-card">
          <div className="bv-feed-item">
            <CheckCircle2 size={14} className="text-success" />
            <div>
              <strong>Analytics Team</strong>
              <small>Synced updated revenue lineage 2m ago</small>
            </div>
          </div>
          <div className="bv-feed-item">
            <Zap size={14} className="text-accent" />
            <div>
              <strong>Data Engineering</strong>
              <small>Shared verified Snowflake asset with team</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SavingsVisual({ inView }: { inView: boolean }) {
  return (
    <div className={`benefit-visual-card ${inView ? "in" : ""}`}>
      <div className="bv-window-bar">
        <div className="bv-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="bv-title-url">app.connetra.com/roi</span>
      </div>
      <div className="bv-body bv-savings-body">
        <div className="bv-savings-hero">
          <div className="bv-savings-icon">
            <TrendingDown size={24} />
          </div>
          <div>
            <span className="bv-meta-label">Resource Waste Reduction</span>
            <strong className="bv-savings-val">-42% Overhead</strong>
          </div>
        </div>
        <div className="bv-flow-row">
          <div className="bv-flow-item">
            <Clock size={15} />
            <span>Automated Cataloging</span>
          </div>
          <div className="bv-flow-item">
            <Zap size={15} />
            <span>Zero Redundant Queries</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const visualComponents = {
  efficiency: EfficiencyVisual,
  control: ControlVisual,
  decision: DecisionVisual,
  collaboration: CollaborationVisual,
  savings: SavingsVisual,
};
