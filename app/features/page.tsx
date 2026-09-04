import Nav from "../../components/Nav";
import Footer from "../../components/Footer/Footer";
import FeaturesHero from "../../components/features/FeaturesHero";
import FeaturesShowcase from "../../components/features/FeaturesShowcase";
import FeaturesIntegrations from "../../components/features/FeaturesIntegrations";
import "./features.css";

export default function FeaturesPage() {
  return (
    <main className="fp-page">
      <Nav />
      <FeaturesHero />
      <FeaturesShowcase />
      <FeaturesIntegrations />
      <Footer />
    </main>
  );
}
