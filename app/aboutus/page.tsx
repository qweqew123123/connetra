import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer/Footer";
import AboutHero from "../../components/aboutus/AboutHero";
import WhyWeAreHereSection from "../../components/aboutus/WhyWeAreHereSection";
import GuidingPrinciples from "../../components/aboutus/GuidingPrinciples";
import "./aboutus.css";

export const metadata: Metadata = {
  title: "About Us — Connetra | Why We're Here",
  description:
    "Welcome to Connetra. We are dedicated to providing a comprehensive and user-friendly platform for managing and accessing data.",
};

export default function AboutUsPage() {
  return (
    <main className="abt-page">
      <Nav />
      <AboutHero />
      <WhyWeAreHereSection />
      <GuidingPrinciples />
      <Footer />
    </main>
  );
}
