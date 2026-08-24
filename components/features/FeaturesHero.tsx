import DotGrid from "../DotGrid/DotGrid";

export default function FeaturesHero() {
  return (
    <section className="fp-hero var2" aria-label="Connetra features hero">
      <div className="fp-hero-var2" aria-hidden="true">
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
          className="fp-hero-dotgrid"
          style={{ position: "absolute", inset: 0 }}
        />
        <div className="fp-hero-var2-glow" aria-hidden="true" />
        <div className="fp-hero-var2-fade" aria-hidden="true" />
      </div>

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
