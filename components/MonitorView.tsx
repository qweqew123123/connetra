import { AlertTriangle, Bell, Database } from "lucide-react";

const cards = [
  { name: "Revenue Dataset", src: "Snowflake · dbt", status: "Healthy", good: true, metric: "Daily Revenue", value: "$1.2M", icon: Database },
  { name: "Customer Records", src: "PostgreSQL", status: "Healthy", good: true, metric: "Row volume", value: "4.8M rows", icon: Database },
  { name: "Marketing Events", src: "BigQuery · Airflow", status: "Attention required", good: false, metric: "Event count", value: "1.1M", icon: Bell },
];

export default function MonitorView() {
  return (
    <div className="monitor-view" role="tabpanel" id="panel-monitor" aria-label="Monitor and Alerts">
      <div className="monitor-head">
        <h3>Data monitoring</h3>
        <span className="live-pill">
          <i /> Live
        </span>
      </div>

      <div className="monitor-grid">
        {cards.map((c) => (
          <div className="monitor-card" key={c.name}>
            <div className="mc-top">
              <c.icon size={18} />
              <span className={`mc-status ${c.good ? "ok" : "warn"}`}>● {c.status}</span>
            </div>
            <h4>{c.name}</h4>
            <span className="mc-src">{c.src}</span>
            <div className="mc-metric">
              <span>{c.metric}</span>
              <b>{c.value}</b>
            </div>
          </div>
        ))}
      </div>

      <div className="quality-alert">
        <div className="quality-alert-head">
          <AlertTriangle size={14} />
          DATA QUALITY ALERT
          <span className="qa-tag">Attention required</span>
        </div>
        <div className="quality-alert-body">
          <div className="qa-main">
            <h4>Revenue Dataset</h4>
            <span>Metric: Daily Revenue</span>
          </div>
          <div className="qa-metrics">
            <div>
              Expected
              <b>&gt; $1M</b>
            </div>
            <div>
              Current
              <b>$720K</b>
            </div>
            <div>
              Status
              <b className="warn">Attention required</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}