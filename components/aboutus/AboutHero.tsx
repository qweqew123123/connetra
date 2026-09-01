"use client";

import { useState } from "react";
import DotGrid from "../DotGrid/DotGrid";
import { aboutUsHeroData } from "../../data/aboutus";

export default function AboutHero({
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
    <section className={`abt-hero ${variant}`} aria-label="About Connetra Hero">
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
        <div className="abt-hero-var1" aria-hidden="true">
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
            className="abt-hero-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="abt-hero-var1-glow" aria-hidden="true" />
          <div className="abt-hero-var1-fade" aria-hidden="true" />
        </div>
      ) : (
        <div className="abt-hero-var2" aria-hidden="true">
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
            className="abt-hero-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="abt-hero-var2-glow" aria-hidden="true" />
        </div>
      )}

      <div className="abt-container abt-hero-inner">
        <div className="eyebrow">
          <span className="dot" />
          <span>{aboutUsHeroData.eyebrow}</span>
        </div>
        <h1>{aboutUsHeroData.title}</h1>
        <p className="abt-hero-subtitle">{aboutUsHeroData.subtitle}</p>
      </div>
    </section>
  );
}
