import { Bell, Database, GitBranch } from "lucide-react";
import ConnetraHero from "../components/ConnetraHero";
import FeaturesSection from "../components/FeaturesSection";
import IntegrationsSection from "../components/IntegrationsSection";
import Nav from "../components/Nav";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Nav />

      <ConnetraHero />

      <section className="section intro" id="platform">
        <div className="section-copy">
          <div className="eyebrow">ONE CONNECTED DATA LAYER</div>
          <h2>Stop searching. <span>Understand your data.</span></h2>
          <p>
            Your data lives across warehouses, databases, BI tools and pipelines.
            Connetra brings those pieces together into a connected, searchable view
            of your data ecosystem.
          </p>
          <div className="mini-points">
            <div><Database size={18}/><span>Discover every important data asset</span></div>
            <div><GitBranch size={18}/><span>Trace relationships and lineage</span></div>
            <div><Bell size={18}/><span>Monitor changes and stay informed</span></div>
          </div>
        </div>
        <div className="intro-visual">
          <img src="/images/intro-dashboard.png" alt="Connetra dashboard" />
        </div>
      </section>

      <FeaturesSection />

      <IntegrationsSection />

      <Footer />
    </main>
  );
}