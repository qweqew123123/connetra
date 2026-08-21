import FeatureMarquee from "./FeatureMarquee";

export default function FeaturesHero() {
  return (
    <section className="fp-hero">
      <div className="fp-hero-grid" aria-hidden="true"></div>
      <div className="fp-hero-glow" aria-hidden="true"></div>
      <div className="fp-container fp-hero-inner">
        <div className="eyebrow">CONNETRA FEATURES</div>
        <h1>Everything you need to understand your data.</h1>
        <p>
          Discover, monitor, and stay on top of your data ecosystem with
          Connetra.
        </p>

        {/* <FeatureMarquee /> */}
      </div>
    </section>
  );
}