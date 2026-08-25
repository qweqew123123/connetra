"use client";

import { useState } from "react";
import HeroCopy from "./HeroCopy";
import ProductShowcase from "./ProductShowcase";
import DotGrid from "./DotGrid/DotGrid";

export default function ConnetraHero() {
  const [variant, setVariant] = useState<"var1" | "var2">("var1");

  return (
    <section className={`chero ${variant}`} aria-label="Connetra data discovery">
      <div className="variant-switch" role="group" aria-label="Hero background variant">
        <button type="button" className={variant === "var1" ? "active" : ""} onClick={() => setVariant("var1")}>
          Var 1
        </button>
        <button type="button" className={variant === "var2" ? "active" : ""} onClick={() => setVariant("var2")}>
          Var 2
        </button>
      </div>

      {variant === "var1" ? (
        <div className="hero-var3" aria-hidden="true">
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
            className="hero-var3-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="hero-var3-glow" aria-hidden="true" />
          <div className="hero-var3-fade" aria-hidden="true" />
        </div>
      ) : (
        <div className="hero-var2-new" aria-hidden="true">
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
            className="hero-var2-new-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="hero-var2-new-glow" aria-hidden="true" />
          <div className="hero-var2-new-fade" aria-hidden="true" />
        </div>
      )}

      <div className="chero-inner">
        <div className="chero-grid">
          <HeroCopy />
        </div>
      </div>

      <div className="chero-showcase">
        <ProductShowcase />
      </div>
    </section>
  );
}
