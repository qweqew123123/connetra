"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { FeaturesPageFeature } from "../../data/features-page";
import SearchVisual from "./SearchVisual";
import MonitoringVisual from "./MonitoringVisual";
import FreshnessVisual from "./FreshnessVisual";
import FeatureVideo from "./FeatureVideo";

const visuals = {
  search: SearchVisual,
  monitoring: MonitoringVisual,
  freshness: FreshnessVisual,
};

export default function FeatureSection({
  feature,
  reverse,
}: {
  feature: FeaturesPageFeature;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px 15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Visual = visuals[feature.visual];

  return (
    <section
      ref={ref}
      className={`fp-section ${reverse ? "fp-section-reverse" : ""} ${
        inView ? "in" : ""
      }`}
      data-tone={feature.number === "02" ? "dark" : "light"}
    >
      <div className="fp-container fp-section-grid">
        <div className="fp-section-copy">
          <div className="fp-eyebrow">{feature.eyebrow}</div>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
          <a className="fp-text-cta" href="#">
            {feature.cta} <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="fp-section-visual">
          <div className="fp-visual-bg" aria-hidden="true"></div>
          {feature.video ? (
            <FeatureVideo src={feature.video} label={feature.title} entered={inView} />
          ) : (
            <Visual entered={inView} />
          )}
        </div>
      </div>
    </section>
  );
}