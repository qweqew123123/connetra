import {
  Bell,
  ChevronDown,
  Clock3,
  Database,
  GitBranch,
  LayoutGrid,
  PlugZap,
  Search,
  Settings2,
  Table2,
} from "lucide-react";

const sideLinks = [
  { label: "Overview", icon: LayoutGrid },
  { label: "Explore", icon: Search },
  { label: "Search", icon: Database },
  { label: "Lineage", icon: GitBranch },
  { label: "Alerts", icon: Bell },
  { label: "Timeline", icon: Clock3 },
  { label: "Integrations", icon: PlugZap },
];

const filters = ["Source", "Type", "Owner", "Updated"];

const rows = [
  { name: "Customer Revenue", source: "Snowflake", owner: "Analytics", updated: "8 min ago", status: "Healthy", good: true },
  { name: "Sales Transactions", source: "PostgreSQL", owner: "Finance", updated: "21 min ago", status: "Healthy", good: true },
  { name: "Customer Profile", source: "BigQuery", owner: "Data Team", updated: "1 hr ago", status: "Attention", good: false },
  { name: "Marketing Performance", source: "dbt", owner: "Marketing", updated: "2 hrs ago", status: "Healthy", good: true },
  { name: "Product Analytics", source: "Snowflake", owner: "Analytics", updated: "3 hrs ago", status: "Healthy", good: true },
];

export default function ExploreView() {
  return (
    <div className="explore-view" role="tabpanel" id="panel-explore" aria-label="Explore Data">
      <aside className="explore-side">
        <h4>CONNETRA</h4>
        {sideLinks.map(({ label, icon: Icon }, i) => (
          <a key={label} className={i === 0 ? "active" : ""}>
            <Icon size={15} />
            {label}
          </a>
        ))}
      </aside>

      <div className="explore-main">
        <div className="explore-head">
          <div>
            <h3>Explore your data</h3>
            <p>Discover assets across your entire ecosystem</p>
          </div>
          <div className="explore-search">
            <Search size={15} />
            Search data assets...
          </div>
        </div>

        <div className="explore-filters">
          {filters.map((f) => (
            <span className="filter-pill" key={f}>
              {f} <ChevronDown size={12} />
            </span>
          ))}
          <span className="filter-pill" style={{ marginLeft: "auto" }}>
            <Settings2 size={12} /> View
          </span>
        </div>

        <div className="explore-table">
          <div className="et-head">
            <span>ASSET</span>
            <span>SOURCE</span>
            <span>OWNER</span>
            <span>LAST UPDATED</span>
            <span>STATUS</span>
          </div>
          {rows.map((r, i) => (
            <div className="et-row" key={r.name}>
              <span className="et-asset">
                <span className={`db-ico ${i % 2 === 1 ? "alt" : ""}`}>
                  {r.source === "dbt" ? <Table2 size={15} /> : <Database size={15} />}
                </span>
                <b>{r.name}</b>
              </span>
              <span>{r.source}</span>
              <span>{r.owner}</span>
              <span>{r.updated}</span>
              <span className={`et-status ${r.good ? "ok" : "warn"}`}>
                ● {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}