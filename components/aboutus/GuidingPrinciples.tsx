"use client";

import {
  guidingPrinciplesTitle,
  guidingPrinciplesData,
} from "../../data/aboutus";

export default function GuidingPrinciples() {
  return (
    <section className="abt-principles-section" aria-label="Guiding Principles">
      <div className="abt-container abt-principles-grid">
        {/* Left Sticky Column — Heading */}
        <div className="abt-principles-sticky-col">
          <div className="eyebrow-small">GUIDING PRINCIPLES</div>
          <h2>{guidingPrinciplesTitle}</h2>
        </div>

        {/* Right Scrollable Column — Accessibility & Customization */}
        <div className="abt-principles-scroll-col">
          {guidingPrinciplesData.map((principle) => (
            <div key={principle.number} className="abt-principle-card">
                <h2>{principle.title}</h2>
                {principle.description.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
