"use client";

import { useState } from "react";
import { integrationDirectory } from "../../data/integrations";
import DotGrid from "../DotGrid/DotGrid";

export default function IntegrationHero() {
  const [variant, setVariant] = useState<"var1" | "var2">("var1");
  const track = [...integrationDirectory, ...integrationDirectory];

  return (
    <section className={`itg-hero ${variant}`} aria-label="Connetra integrations hero">
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
        <div className="itg-hero-var2" aria-hidden="true">
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
            className="itg-hero-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="itg-hero-var2-glow" aria-hidden="true" />
          <div className="itg-hero-var2-fade" aria-hidden="true" />
        </div>
      ) : (
        <div className="itg-hero-var2-new" aria-hidden="true">
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
            className="itg-hero-var2-new-dotgrid"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="itg-hero-var2-new-glow" aria-hidden="true" />
        </div>
      )}

      <div className="itg-container itg-hero-inner">
        <div className="eyebrow">INTEGRATIONS</div>
        <h1>Your data stack, seamlessly connected.</h1>
        <p>
          Connetra is designed to seamlessly integrate with a wide range of
          warehouses and databases, empowering your organization to harness the
          full potential of your data assets.
        </p>

        <div className="itg-hero-card">
          <div className="itg-hero-marquee">
            <div className="itg-hero-marquee-track">
              {track.map((logo, i) => (
                <span className="itg-hero-logo" key={`${logo.slug}-${i}`} aria-hidden="true">
                  <img src={logo.icon} alt="" width={26} height={26} />
                  <span className="itg-hero-logo-name">{logo.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}