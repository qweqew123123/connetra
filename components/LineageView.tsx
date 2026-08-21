import { CheckCircle2, Database, GitBranch, Table2 } from "lucide-react";

const flow = [
  { name: "CRM", meta: "Salesforce", badge: "source", icon: Database },
  { name: "Customer Database", meta: "PostgreSQL", badge: "staging", icon: Database },
  { name: "Customer Table", meta: "Raw → Clean", badge: "model", icon: Table2 },
  { name: "Revenue Model", meta: "dbt · Analytics", badge: "model", solid: true, icon: GitBranch },
  { name: "Analytics Dataset", meta: "Snowflake", badge: "dataset", icon: Database },
  { name: "Executive Dashboard", meta: "Tableau", badge: "report", icon: Table2 },
];

export default function LineageView() {
  return (
    <div className="lineage-view" role="tabpanel" id="panel-lineage" aria-label="Data Lineage">
      <div className="lineage-flow">
        <div className="lineage-grid-bg" />
        <span className="lineage-title">DATA LINEAGE — SOURCE TO INSIGHT</span>
        {flow.map((node, i) => (
          <div key={node.name} style={{ display: "contents" }}>
            {i > 0 && <div className="l-conn" />}
            <div className="l-node">
              <node.icon size={16} />
              <span>{node.name}</span>
              <span className="l-badge">{node.badge}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="lineage-meta">
        <h4>Revenue Model</h4>
        <span className="lm-sub">Selected node · where did it come from?</span>
        <dl>
          <div className="lm-row">
            <dt>Source</dt>
            <dd>dbt</dd>
          </div>
          <div className="lm-row">
            <dt>Owner</dt>
            <dd>Analytics Team</dd>
          </div>
          <div className="lm-row">
            <dt>Updated</dt>
            <dd>12 minutes ago</dd>
          </div>
          <div className="lm-row">
            <dt>Downstream</dt>
            <dd className="safe">3 consumers</dd>
          </div>
        </dl>
        <div className="lm-badge-list">
          <span>
            <CheckCircle2 size={14} /> Tested & documented
          </span>
          <span>
            <CheckCircle2 size={14} /> No blocking issues
          </span>
        </div>
      </div>
    </div>
  );
}