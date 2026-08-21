const integrations = [
  { name: "Snowflake", color: "#29B5E8" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "BigQuery", color: "#4285F4" },
  { name: "MySQL", color: "#00758F" },
  { name: "dbt", color: "#FF694B" },
  { name: "Tableau", color: "#E97627" },
  { name: "Power BI", color: "#F2C811" },
  { name: "Databricks", color: "#FF3621" },
  { name: "Airflow", color: "#017CEE" },
  { name: "Slack", color: "#4A154B" },
];

export default function IntegrationsView() {
  return (
    <div className="integrations-view" role="tabpanel" id="panel-integrations" aria-label="Integrations">
      <h3>Connect your data stack</h3>
      <p className="sub">
        Databases, warehouses, BI tools and pipelines — connected in minutes.
      </p>
      <div className="integ-grid">
        {integrations.map(({ name, color }) => (
          <div className="integ-card" key={name}>
            <span className="integ-mono" style={{ background: color }}>
              {name.slice(0, 2).toUpperCase()}
            </span>
            <div className="integ-info">
              <b>{name}</b>
              <span>Connected</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}