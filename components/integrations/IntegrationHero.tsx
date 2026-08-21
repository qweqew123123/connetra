import { integrationDirectory } from "../../data/integrations";

export default function IntegrationHero() {
  const track = [...integrationDirectory, ...integrationDirectory];

  return (
    <section className="itg-hero">
      <div className="itg-hero-grid" aria-hidden="true"></div>
      <div className="itg-hero-glow" aria-hidden="true"></div>
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