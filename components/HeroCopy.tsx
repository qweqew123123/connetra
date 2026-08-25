import { ArrowRight } from "lucide-react";

export default function HeroCopy() {
  return (
    <>
      <div className="eyebrow">DATA DISCOVERY & AI</div>
      <h1 className="chero-h1">
        <span className="strong">Discover your data.</span>
        <span className="strong">Ask anything.</span>
      </h1>
      <p className="chero-desc">
        Connetra connects your entire data ecosystem into one intelligent view, so your team can discover, understand,
        and monitor data — or simply ask the AI agent to find the answers you need.
      </p>
      <div className="chero-cta">
        <a className="button" href="#cta">
          Start free trial <ArrowRight size={16} />
        </a>
      </div>
      {/* Trust section commented out (previously "BUILT FOR MODERN DATA TEAMS")
      <div className="chero-trust">
        <span className="chero-trust-label">BUILT FOR MODERN DATA TEAMS</span>
        <div className="chero-trust-items">
          <span>Data Discovery</span>
          <span>Data Lineage</span>
          <span>Data Monitoring</span>
        </div>
      </div>
      */}
    </>
  );
}