"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { featuresPage } from "../../data/features-page";
import FeatureVideo from "./FeatureVideo";
import SearchVisual from "./SearchVisual";
import MonitoringVisual from "./MonitoringVisual";
import FreshnessVisual from "./FreshnessVisual";

const visualComponents = {
  search: SearchVisual,
  monitoring: MonitoringVisual,
  freshness: FreshnessVisual,
};

export default function FeaturesShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;

    const handleScroll = () => {
      const rect = trackEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = rect.height - viewportHeight;

      if (totalScrollable <= 0) return;

      // Calculate progress from 0 to 1 as track scrolls through viewport
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // 3 features: 0..0.33 -> index 0, 0.33..0.66 -> index 1, 0.66..1 -> index 2
      let newIndex = 0;
      if (progress >= 0.66) {
        newIndex = 2;
      } else if (progress >= 0.33) {
        newIndex = 1;
      }

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeFeature = featuresPage[activeIndex];
  const VisualComponent = visualComponents[activeFeature.visual];

  return (
    <section className="fp-showcase-track" ref={trackRef} aria-label="Feature Showcase">
      <div className="fp-sticky-viewport">
        <div className="fp-container fp-showcase-inner">
          {/* Main 2-Column Content Grid */}
          <div className="fp-section-grid fp-showcase-grid">
            {/* Left Content Column */}
            <div className="fp-section-copy fp-showcase-copy" key={`copy-${activeFeature.number}`}>
              <div className="fp-eyebrow-badge">
                <span className="dot" />
                <span>{activeFeature.eyebrow}</span>
              </div>
              <h2>{activeFeature.title}</h2>
              <p>{activeFeature.description}</p>
              <a className="fp-text-cta" href="/integrations">
                {activeFeature.cta} <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            {/* Right Visual / Video Column */}
            <div className="fp-section-visual fp-showcase-visual" key={`visual-${activeFeature.number}`}>
              {activeFeature.video ? (
                <FeatureVideo
                  key={activeFeature.number}
                  src={activeFeature.video}
                  label={activeFeature.title}
                  entered={true}
                />
              ) : (
                <VisualComponent key={activeFeature.number} entered={true} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
