import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer/Footer";
import BenefitsHero from "../../components/benefits/BenefitsHero";
import BenefitsList from "../../components/benefits/BenefitsList";
import "./benefits.css";

export const metadata: Metadata = {
  title: "Benefits — Connetra | Take Control of Your Data Universe",
  description:
    "Discover the benefits of Connetra: improved efficiency, enhanced control, better decision-making, increased collaboration, and cost savings.",
};

export default function BenefitsPage() {
  return (
    <main className="ben-page">
      <Nav />
      <BenefitsHero />
      <BenefitsList />
      <Footer />
    </main>
  );
}
