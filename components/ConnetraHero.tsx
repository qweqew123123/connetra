import HeroCopy from "./HeroCopy";
import ProductShowcase from "./ProductShowcase";
import DotGrid from "./DotGrid/DotGrid";

export default function ConnetraHero() {
  return (
    <section className="chero var3" aria-label="Connetra data discovery">
      <div className="hero-var3" aria-hidden="true">
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
          className="hero-var3-dotgrid"
          style={{ position: "absolute", inset: 0 }}
        />
        <div className="hero-var3-glow" aria-hidden="true" />
        <div className="hero-var3-fade" aria-hidden="true" />
      </div>

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
