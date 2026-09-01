"use client";

import { companyDataContext } from "../../data/aboutus";
import DotGrid from "../DotGrid/DotGrid";

export default function DataContextSection() {
  return (
    <section className="abt-context-section" aria-label="Data Context">
      <div className="abt-container">
        <div className="abt-context-card">
          <DotGrid
            dotSize={3}
            gap={28}
            baseColor="#b8ccff"
            activeColor="#3559C7"
            proximity={140}
            speedTrigger={80}
            shockRadius={240}
            shockStrength={4}
            maxSpeed={4000}
            resistance={800}
            returnDuration={1.4}
            className="abt-context-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="abt-context-glow" aria-hidden="true" />

          <div className="abt-context-content">
            <p className="abt-context-text">{companyDataContext}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
