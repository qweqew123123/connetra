"use client";

import { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer/Footer";
import PricingHero from "../../components/pricing/PricingHero";
import PricingCards from "../../components/pricing/PricingCards";
import PricingComparison from "../../components/pricing/PricingComparison";
import PricingFAQ from "../../components/pricing/PricingFAQ";
import "./pricing.css";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <main className="pricing-page var2">
      <Nav />
      <PricingHero />
      <PricingCards billing={billing} onBillingChange={setBilling} />
      <PricingComparison />
      <PricingFAQ />

      <Footer />
    </main>
  );
}
