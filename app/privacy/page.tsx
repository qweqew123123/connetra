import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer/Footer";
import PrivacyHero from "../../components/privacy/PrivacyHero";
import PrivacyContent from "../../components/privacy/PrivacyContent";
import "./privacy.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Connetra",
  description:
    "Privacy Policy of www.connetra.com that outlines how Connetra collects, uses, discloses, and manages personal information of its users or visitors, ensuring transparency and compliance with relevant privacy laws and regulations.",
  keywords: [
    "Privacy Policy",
    "Connetra Privacy",
    "Data Protection",
    "GDPR Compliance",
    "Data Governance",
    "Data Management",
  ],
};

export default function PrivacyPage() {
  return (
    <div className="privacy-page-root">
      {/* Existing Global Navigation Header */}
      <Nav />

      {/* Hero / Page Overview Header */}
      <PrivacyHero />

      {/* Main Privacy Document Content with Sticky Sidebar Navigation */}
      <PrivacyContent />

      {/* Existing Global Footer */}
      <Footer />
    </div>
  );
}
