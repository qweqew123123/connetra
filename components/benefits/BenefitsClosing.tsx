"use client";

import { ArrowRight, Mail } from "lucide-react";
import { benefitsClosingData } from "../../data/benefits";
import DotGrid from "../DotGrid/DotGrid";

export default function BenefitsClosing() {
  return (
    <section className="ben-closing-section">
      <div className="ben-container">
        <div className="ben-closing-card">
          <DotGrid
            dotSize={3}
            gap={28}
            baseColor="#c2d6ff"
            activeColor="#3559C7"
            proximity={140}
            speedTrigger={80}
            shockRadius={240}
            shockStrength={4}
            maxSpeed={4000}
            resistance={800}
            returnDuration={1.4}
            className="ben-closing-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="ben-closing-glow" aria-hidden="true" />

          <div className="ben-closing-content">
            <span className="ben-closing-eyebrow">
              <span className="dot" />
              CONNETRA
            </span>

            <p className="ben-closing-p1">{benefitsClosingData.paragraph1}</p>

            <p className="ben-closing-p2">{benefitsClosingData.paragraph2}</p>

            <div className="ben-closing-actions">
              <a className="ben-closing-btn primary" href="/createaccount">
                Get started today <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="ben-closing-btn secondary" href="mailto:support@connetra.com">
                <Mail size={16} aria-hidden="true" /> Contact sales team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
