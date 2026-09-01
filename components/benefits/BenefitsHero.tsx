"use client";

import { useState } from "react";
import DotGrid from "../DotGrid/DotGrid";

export default function BenefitsHero({
  onVariantChange,
}: {
  onVariantChange?: (v: "var1" | "var2") => void;
}) {
  const [variant, setVariant] = useState<"var1" | "var2">("var1");

  const handleSelect = (v: "var1" | "var2") => {
    setVariant(v);
    if (onVariantChange) onVariantChange(v);
  };

  return (
    <section className={`ben-hero ${variant}`} aria-label="Connetra benefits hero">
      <div className="variant-switch" role="group" aria-label="Hero background variant">
        <button
          type="button"
          className={variant === "var1" ? "active" : ""}
          onClick={() => handleSelect("var1")}
        >
          Var 1
        </button>
        <button
          type="button"
          className={variant === "var2" ? "active" : ""}
          onClick={() => handleSelect("var2")}
        >
          Var 2
        </button>
      </div>

      {variant === "var1" ? (
        <div className="ben-hero-var1" aria-hidden="true">
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
            className="ben-hero-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="ben-hero-var1-glow" aria-hidden="true" />
          <div className="ben-hero-var1-fade" aria-hidden="true" />
        </div>
      ) : (
        <div className="ben-hero-var2" aria-hidden="true">
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
            className="ben-hero-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="ben-hero-var2-glow" aria-hidden="true" />
        </div>
      )}

      <div className="ben-container ben-hero-inner">
        <div className="eyebrow">
          <span className="dot" />
          <span>CONNETRA BENEFITS</span>
        </div>
        <h1>Benefits</h1>
        <p className="ben-hero-desc">
          Take control of your interconnected data universe and unlock the full potential of your data assets with Connetra.
        </p>
      </div>
    </section>
  );
}
