import { ArrowDown, ArrowRight, Database, GitBranch, Search, Table2 } from "lucide-react";

export function Ecosystem() {
  const nodes = [
    ["Snowflake","e1"],["PostgreSQL","e2"],["BigQuery","e3"],["Tableau","e4"],
    ["dbt","e5"],["Power BI","e6"],["MySQL","e7"],["Databricks","e8"]
  ];
  return <div className="ecosystem">
    <div className="eco-grid"></div>
    <div className="eco-line l1"></div><div className="eco-line l2"></div><div className="eco-line l3"></div>
    <div className="eco-core"><span className="core-dot"></span><b>CONNETRA</b><small>CONNECTED DATA</small></div>
    {nodes.map(([name,cl])=><div className={`eco-node ${cl}`} key={name}><span></span>{name}</div>)}
  </div>
}

export function ProductPanel() {
  return <div className="product-window">
    <div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>Connetra / Explore</span><div className="window-status">● Live</div></div>
    <div className="product-body">
      <aside><b>CONNETRA</b><a className="active">Overview</a><a>Explore</a><a>Search</a><a>Lineage</a><a>Alerts</a><a>Timeline</a><a>Integrations</a></aside>
      <div className="dash">
        <div className="dash-head"><div><small>EXPLORE DATA</small><h3>Your data ecosystem</h3></div><button><Search size={14}/> Search assets</button></div>
        <div className="stats"><div><span>DATA ASSETS</span><b>12,482</b><small>↑ 8.4% this month</small></div><div><span>SOURCES</span><b>24</b><small>Across 8 categories</small></div><div><span>ALERTS</span><b>08</b><small>2 need attention</small></div></div>
        <div className="table-head"><span>DATA ASSET</span><span>SOURCE</span><span>OWNER</span><span>STATUS</span></div>
        {["Customer Revenue","Sales Transactions","Customer Profile","Marketing Performance"].map((x,i)=><div className="table-row" key={x}><span><Database size={14}/><b>{x}</b></span><span>{["Snowflake","PostgreSQL","BigQuery","dbt"][i]}</span><span>{["Analytics","Finance","Data Team","Marketing"][i]}</span><span className={i===2?"warn":"ok"}>● {i===2?"Attention":"Healthy"}</span></div>)}
      </div>
    </div>
  </div>
}

export function SearchPanel() {
  return <div className="search-panel"><div className="search-bar"><Search size={14}/><span>customer revenue</span><kbd>⌘ K</kbd></div><div className="result"><Database size={15}/><div><b>Customer Revenue</b><small>Snowflake · Analytics · Updated 8m ago</small></div><span>Table</span></div><div className="result"><Table2 size={15}/><div><b>Revenue Dashboard</b><small>Tableau · Finance · Updated 22m ago</small></div><span>Dashboard</span></div></div>
}

export function Lineage({large=false}: {large?: boolean}) {
  return <div className={`lineage-ui ${large ? "large" : ""}`}>
    <div className="line-node top"><Database size={14}/><span>CRM</span></div>
    <div className="line-branch b1"></div><div className="line-branch b2"></div>
    <div className="line-node mid"><Table2 size={14}/><span>Customer Table</span></div>
    <div className="line-branch b3"></div>
    <div className="line-node model"><GitBranch size={14}/><span>Revenue Model</span></div>
    <div className="line-branch b4"></div>
    <div className="line-node dash"><span>Executive Dashboard</span><ArrowRight size={13}/></div>
    {large && <div className="line-meta"><b>Revenue Model</b><small>dbt · Updated 12 min ago</small><span>Owner: Analytics Team</span></div>}
  </div>
}