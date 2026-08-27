import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer/Footer";
import RoadmapClient from "@/components/roadmap/RoadmapClient";
import "./roadmap.css";

export const metadata: Metadata = {
  title: "Roadmap | Connetra",
  description: "Explore product requests, track progress, and vote for the improvements you'd like to see next for Connetra.",
};

export default function RoadmapPage() {
  return (
    <main className="roadmap-page">
      <Nav />
      <RoadmapClient />
      <Footer />
    </main>
  );
}
