"use client";

import Image from "next/image";
import { whyWeAreHereData } from "../../data/aboutus";

export default function WhyWeAreHereSection() {
  return (
    <section className="abt-why-section" aria-label="Why we are here">
      <div className="abt-container">
        <div className="abt-why-grid">
          {/* Left Column — Image */}
          <div className="abt-why-media">
            <div className="abt-why-image-card">
              <Image
                src={whyWeAreHereData.image}
                alt="Connetra Data Management Platform"
                width={600}
                height={450}
                className="abt-why-img"
                priority
              />
            </div>
          </div>

          {/* Right Column — Content */}
          <div className="abt-why-content">
            <div className="abt-why-eyebrow">{whyWeAreHereData.eyebrow}</div>
            <h2>{whyWeAreHereData.title}</h2>
            <p>{whyWeAreHereData.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
