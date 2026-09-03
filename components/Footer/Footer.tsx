"use client";

import FooterBottom from "./FooterBottom";
import FooterCTA from "./FooterCTA";
import FooterNavigation from "./FooterNavigation";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-frame">
        <FooterCTA />
        <FooterNavigation />
        <FooterBottom />
      </div>
    </footer>
  );
}