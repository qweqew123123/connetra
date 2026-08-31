"use client";

import { Calendar, Shield, Globe, Printer } from "lucide-react";

export default function PrivacyHero() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section className="privacy-hero">
      <div className="privacy-hero-bg-glow" />
      <div className="privacy-hero-inner">
        <div className="privacy-eyebrow">
          <span className="privacy-pulse" />
          <span>LEGAL &amp; COMPLIANCE</span>
        </div>

        <h1 className="privacy-title">Privacy Overview</h1>

        <p className="privacy-subtitle">
          Privacy Policy of www.connetra.com that outlines how Connetra collects, uses, discloses, and manages personal information of its users or visitors, ensuring transparency and compliance with relevant privacy laws and regulations.
        </p>

        <div className="privacy-meta-bar">
          <div className="privacy-meta-item">
            <Calendar size={15} className="privacy-meta-icon" />
            <span>Latest update: <strong>April 20, 2023</strong></span>
          </div>
          <div className="privacy-meta-divider">·</div>
          <div className="privacy-meta-item">
            <Globe size={15} className="privacy-meta-icon" />
            <span>Scope: <strong>www.connetra.com</strong></span>
          </div>
          <div className="privacy-meta-divider">·</div>
          <div className="privacy-meta-item">
            <Shield size={15} className="privacy-meta-icon" />
            <span>Official Policy Document</span>
          </div>
          <div className="privacy-meta-actions">
            <button
              type="button"
              className="privacy-print-btn"
              onClick={handlePrint}
              title="Print this policy document"
            >
              <Printer size={14} />
              <span>Print Policy</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
