import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <div className="foot-cta" id="cta">
      <div className="foot-cta-glow" aria-hidden="true"></div>
      <div className="foot-cta-orb" aria-hidden="true"></div>
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