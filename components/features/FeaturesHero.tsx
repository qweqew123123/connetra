"use client";

import { useState } from "react";
import DotGrid from "../DotGrid/DotGrid";

export default function FeaturesHero() {
  const [variant, setVariant] = useState<"var1" | "var2">("var2");

  return (
    <section className={`fp-hero ${variant}`} aria-label="Connetra features hero">
      {/* 
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
      */}

      {variant === "var1" ? (
        <div className="fp-hero-var2" aria-hidden="true">
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
            className="fp-hero-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="fp-hero-var2-glow" aria-hidden="true" />
          <div className="fp-hero-var2-fade" aria-hidden="true" />
        </div>
      ) : (
        <div className="fp-hero-var2-new" aria-hidden="true">
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
            className="fp-hero-var2-new-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="fp-hero-var2-new-glow" aria-hidden="true" />
        </div>
      )}

      <div className="fp-container fp-hero-inner">
        <div className="eyebrow">CONNETRA FEATURES</div>
        <h1>Everything you need to understand your data.</h1>
        <p>
          Discover, monitor, and stay on top of your data ecosystem with
          Connetra.
        </p>
      </div>
    </section>
  );
}
