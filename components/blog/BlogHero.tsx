import DotGrid from "../DotGrid/DotGrid";

export default function BlogHero() {
  return (
    <section className="blog-hero var2" aria-label="Connetra blog hero">
      <div className="blog-hero-var2" aria-hidden="true">
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
          className="blog-hero-dotgrid"
          style={{ position: "absolute", inset: 0 }}
        />
        <div className="blog-hero-var2-glow" aria-hidden="true" />
        <div className="blog-hero-var2-fade" aria-hidden="true" />
      </div>

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
