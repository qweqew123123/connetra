import HeroCopy from "./HeroCopy";
import ProductShowcase from "./ProductShowcase";

export default function ConnetraHero() {
  return (
    <section className="chero" aria-label="Connetra data discovery">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="hero-lines" aria-hidden="true"></div>
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