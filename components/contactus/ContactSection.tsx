"use client";

import ContactVisual from "./ContactVisual";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="cnt-section" aria-label="Contact Us section">
      <div className="cnt-container">
        <div className="cnt-grid">
          {/* Left Column — Visual & Info */}
          <div className="cnt-col-left">
            <ContactVisual />
          </div>

          {/* Right Column — Form */}
          <div className="cnt-col-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
