import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer/Footer";
import ContactHero from "../../components/contactus/ContactHero";
import ContactSection from "../../components/contactus/ContactSection";
import "./contactus.css";

export const metadata: Metadata = {
  title: "Contact Us — Connetra | Get in Touch",
  description:
    "Connetra is a data catalog tool that allows organizations to get complete visibility into their interconnected ecosystem of data & set alerts to better understand data accuracy.",
};

export default function ContactUsPage() {
  return (
    <main className="cnt-page">
      <Nav />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  );
}
