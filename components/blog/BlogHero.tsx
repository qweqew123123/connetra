"use client";

import { useState } from "react";
import DotGrid from "../DotGrid/DotGrid";

export default function BlogHero() {
  const [variant, setVariant] = useState<"var1" | "var2">("var1");

  return (
    <section className={`blog-hero ${variant}`} aria-label="Connetra blog hero">
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
        <div className="blog-hero-var2" aria-hidden="true">
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
            className="blog-hero-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="blog-hero-var2-glow" aria-hidden="true" />
          <div className="blog-hero-var2-fade" aria-hidden="true" />
        </div>
      ) : (
        <div className="blog-hero-var2-new" aria-hidden="true">
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
            className="blog-hero-var2-new-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="blog-hero-var2-new-glow" aria-hidden="true" />
        </div>
      )}

      <div className="blog-container">
        <div className="eyebrow">CONNETRA BLOG</div>
        <h1>Insights for a smarter data ecosystem</h1>
        <p className="blog-hero-desc">
          Explore ideas, strategies, and insights to help your team discover,
          understand, and get more from its data.
        </p>
      </div>
    </section>
  );
}
