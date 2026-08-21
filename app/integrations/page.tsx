import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer/Footer";
import IntegrationHero from "../../components/integrations/IntegrationHero";
import IntegrationGrid from "../../components/integrations/IntegrationGrid";
import "./integrations.css";

export const metadata: Metadata = {
  title: "Integrations — Connetra",
  description:
    "Connect Connetra to the databases, warehouses, BI tools, and data workflows where your organization's data lives.",
};

export default function IntegrationsPage() {
  return (
    <main className="itg-page">
      <Nav />
      <IntegrationHero />
      <IntegrationGrid />
      <Footer />
    </main>
  );
}