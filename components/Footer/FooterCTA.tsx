import { ArrowRight } from "lucide-react";
import DotGrid from "../DotGrid/DotGrid";

export default function FooterCTA() {
  return (
    <div className="foot-cta" id="cta">
      <div className="foot-cta-glow" aria-hidden="true"></div>
      <div className="foot-cta-orb" aria-hidden="true"></div>
      <DotGrid
        dotSize={3}
        gap={28}
        baseColor="#1e2e6b"
        activeColor="#3559C7"
        proximity={140}
        speedTrigger={80}
        shockRadius={240}
        shockStrength={4}
        maxSpeed={4000}
        resistance={800}
        returnDuration={1.4}
        className="foot-cta-dotgrid"
        style={{ position: "absolute", inset: 0 }}
      />
      <div className="foot-cta-content">
        <span className="foot-cta-eyebrow">CONNETRA</span>
        <h2 className="foot-cta-title">
          Ready to make sense
          <br />
          of your data?
        </h2>
        <p className="foot-cta-desc">
          Connect your data, understand what it means, and make better decisions with Connetra.
        </p>
        <a className="foot-cta-btn" href="#">
          Explore Connetra <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}