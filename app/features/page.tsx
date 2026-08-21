import Nav from "../../components/Nav";
import Footer from "../../components/Footer/Footer";
import FeaturesHero from "../../components/features/FeaturesHero";
import FeatureSection from "../../components/features/FeatureSection";
import IntegrationsSection from "../../components/IntegrationsSection";
import { featuresPage } from "../../data/features-page";
import "./features.css";

export default function FeaturesPage() {
  return (
    <main className="fp-page">
      <Nav />
      <FeaturesHero />
      {featuresPage.map((feature, i) => (
        <FeatureSection key={feature.number} feature={feature} reverse={i === 1} />
      ))}
      <IntegrationsSection />
      <Footer />
    </main>
  );
}