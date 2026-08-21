import { ArrowRight } from "lucide-react";

export default function HeroCopy() {
  return (
    <>
      <div className="eyebrow">DATA DISCOVERY & VISIBILITY</div>
      <h1 className="chero-h1">
        <span className="strong">Discover your data landscape.</span>
      </h1>
      <p className="chero-desc">
        Connetra brings your data ecosystem into one connected view, giving your
        team the visibility and control to discover, understand, and monitor
        data.
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