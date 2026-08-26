"use client";

import { useState } from "react";
import DotGrid from "../DotGrid/DotGrid";

export default function PricingHero() {
  const [variant, setVariant] = useState<"var1" | "var2">("var1");

  return (
    <section className={`pricing-hero ${variant}`} aria-label="Connetra pricing hero">
      <div className="variant-switch" role="group" aria-label="Hero background variant">
        <button
          type="button"
          className={variant === "var1" ? "active" : ""}
          onClick={() => setVariant("var1")}
        >
          Var 1
        </button>
        <button
          type="button"
          className={variant === "var2" ? "active" : ""}
          onClick={() => setVariant("var2")}
        >
          Var 2
        </button>
      </div>

      {variant === "var1" ? (
        <div className="pricing-hero-var2" aria-hidden="true">
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
            className="pricing-hero-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="pricing-hero-var2-glow" aria-hidden="true" />
          <div className="pricing-hero-var2-fade" aria-hidden="true" />
        </div>
      ) : (
        <div className="pricing-hero-var2-new" aria-hidden="true">
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
            className="pricing-hero-var2-new-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="pricing-hero-var2-new-glow" aria-hidden="true" />
        </div>
      )}

      <div className="pricing-container">
        <div className="eyebrow">CONNETRA PRICING</div>
        <h1>Ready to start using Connetra?</h1>
        <p className="pricing-hero-desc">
          Get a complete view of your data ecosystem with Connetra. Connect your data sources, discover insights, and
          monitor what matters — all with a 14-day free trial and no credit card required.
        </p>
      </div>
    </section>
  );
}
