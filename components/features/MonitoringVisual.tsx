"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Database,
  FileText,
  LayoutDashboard,
  RefreshCw,
} from "lucide-react";

const nodes = [
  {
    name: "Customer DB",
    type: "DATABASE",
    status: "warning" as const,
    label: "Warning",
    icon: Database,
  },
  {
    name: "Revenue Model",
    type: "MODEL",
    status: "healthy" as const,
    label: "Healthy",
    icon: RefreshCw,
  },
  {
    name: "Sales Dashboard",
    type: "DASHBOARD",
    status: "healthy" as const,
    label: "Healthy",
    icon: LayoutDashboard,
  },
  {
    name: "Executive Report",
    type: "REPORT",
    status: "healthy" as const,
    label: "Healthy",
    icon: FileText,
  },
];

const statusSequence = [
  { label: "Data accuracy", value: "98%", tone: "ok" },
  { label: "Monitoring", value: "…", tone: "ok" },
  { label: "Attention required", value: "", tone: "warn" },
] as const;

export default function MonitoringVisual({ entered }: { entered: boolean }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!entered) return;
    const t1 = setTimeout(() => setStep(1), 700);
    const t2 = setTimeout(() => setStep(2), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [entered]);

  const current = statusSequence[step];

  return (
    <div className="fp-visual-card fp-mon">
      <div className="fp-mon-top">
        <span className="fp-mon-title">
          <Activity size={14} aria-hidden="true" />
          Lineage & monitoring
        </span>
        <span className="fp-mon-live">
          <i aria-hidden="true" />
          Live
        </span>
      </div>

      <div className="fp-mon-body">
        <div className="fp-lineage" aria-hidden="true">
          {nodes.map((n, i) => {
            const Icon = n.icon;
            const warnLine = i === 1; // Customer DB -> Revenue Model
            return (
              <div className="fp-lineage-item" key={n.name}>
                <div className="fp-lineage-node">
                  <span className="fp-lineage-icon">
                    <Icon size={15} />
                  </span>
                  <span className="fp-lineage-info">
                    <b>{n.name}</b>
                    <small>{n.type}</small>
                  </span>
                  <span className={`fp-status fp-status-${n.status}`}>
                    {n.status === "warning" ? (
                      <AlertTriangle size={13} aria-hidden="true" />
                    ) : (
                      <CheckCircle2 size={13} aria-hidden="true" />
                    )}
                    {n.label}
                  </span>
                </div>
                {i < nodes.length - 1 && (
                  <div className={`fp-line-connector ${warnLine ? "warn" : ""}`}>
                    <span />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="fp-status-card" aria-live="polite">
          <span className={`fp-status-big ${current.tone}`}>
            {current.label}
          </span>
          {current.value && <span className="fp-status-value">{current.value}</span>}
          <div className="fp-status-track">
            {[0, 1, 2].map((i) => (
              <i className={i === step ? "on" : ""} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}