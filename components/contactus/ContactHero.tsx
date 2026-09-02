"use client";

import { useState } from "react";
import { contactUsData } from "../../data/contactus";
import DotGrid from "../DotGrid/DotGrid";

export default function ContactHero() {
  const [variant, setVariant] = useState<"var1" | "var2">("var2");

  return (
    <section
      className={`cnt-hero ${variant}`}
      aria-label="Contact Us hero section"
    >
      {/* 
      <div
        className="variant-switch"
        role="group"
        aria-label="Hero background variant"
      >
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
        <div className="cnt-hero-var1" aria-hidden="true">
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
            className="cnt-hero-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="cnt-hero-var1-glow" aria-hidden="true" />
        </div>
      ) : (
        <div className="cnt-hero-var2" aria-hidden="true">
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
            className="cnt-hero-var2-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="cnt-hero-var2-glow" aria-hidden="true" />
        </div>
      )}

      <div className="cnt-container cnt-hero-inner">
        <div className="cnt-hero-eyebrow">{contactUsData.hero.eyebrow}</div>
        <h1>{contactUsData.hero.title}</h1>
        <p className="cnt-hero-subtitle">{contactUsData.hero.subtitle}</p>
      </div>
    </section>
  );
}
