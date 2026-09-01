"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { contactUsData } from "../../data/contactus";

export default function ContactVisual() {
  return (
    <div className="cnt-visual-card">
      <div className="cnt-image-frame">
        <Image
          src="/contact_office_phone.jpg"
          alt="Connetra Contact & Support Team"
          width={600}
          height={400}
          className="cnt-stock-img"
          priority
        />
      </div>

      {/* Contact Info Footer Block */}
      <div className="cnt-info-box">
        <div className="cnt-info-brand">{contactUsData.company.name}</div>
        <a
          href={`mailto:${contactUsData.company.email}`}
          className="cnt-info-email"
        >
          <Mail size={16} className="icon" />
          <span>{contactUsData.company.email}</span>
        </a>
      </div>
    </div>
  );
}
