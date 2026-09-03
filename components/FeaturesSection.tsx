"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bell,
  Layers,
  SlidersHorizontal,
} from "lucide-react";
import { features, type FeatureItem } from "../data/features";
import FeatureShowcaseCard from "./FeatureShowcaseCard";

const iconMap = {
  SlidersHorizontal: SlidersHorizontal,
  Bell: Bell,
  Layers: Layers,
};

const AUTO_SWITCH_INTERVAL = 6500; // 6.5 seconds per feature

export default function FeaturesSection() {
  const [activeTabId, setActiveTabId] = useState<string>(features[0].id);
  const [videoDuration, setVideoDuration] = useState<number>(6.5);

  const handleNextFeature = () => {
    setActiveTabId((prevId) => {
      const currentIndex = features.findIndex((f) => f.id === prevId);
      const nextIndex = (currentIndex + 1) % features.length;
      return features[nextIndex].id;
    });
  };

  const handleTabClick = (id: string) => {
    setActiveTabId(id);
  };

  const activeFeature =
    features.find((f) => f.id === activeTabId) || features[0];

  return (
    <section className="features-redesign-section" id="features" aria-label="Connetra Core Features">
      <div className="features-container">
        {/* Main Section Header */}
        <div className="features-main-heading">
          <div className="eyebrow">PLATFORM FEATURES</div>
          <h2>Build your ultimate data experience</h2>
        </div>

        {/* Unified Master Card containing both sidebar list and right content + video */}
        <div className="features-master-card">
          {/* Left Column: Feature Navigation Sidebar */}
          <aside className="features-sidebar-pane" aria-label="Features navigation">
            <nav className="features-nav-list" role="tablist">
              {features.map((item) => {
                const IconComponent = iconMap[item.iconName] || SlidersHorizontal;
                const isActive = item.id === activeTabId;

                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`tab-${item.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${item.id}`}
                    className={`feature-nav-item ${isActive ? "active" : ""}`}
                    onClick={() => handleTabClick(item.id)}
                  >
                    <div className="nav-item-icon-wrap">
                      <IconComponent size={18} className="nav-item-icon" />
                    </div>
                    <span className="nav-item-label">{item.tabLabel}</span>

                    {/* Active Right-Pointing Pointer Arrow Callout */}
                    {isActive && (
                      <span className="active-arrow-indicator" aria-hidden="true">
                        <svg
                          width="12"
                          height="20"
                          viewBox="0 0 12 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 0L10.5858 8.58579C11.3668 9.36684 11.3668 10.6332 10.5858 11.4142L0 20V0Z"
                            fill="#ffffff"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Column: Content & Video Showcase Area */}
          <main
            className="features-content-pane"
            role="tabpanel"
            id={`panel-${activeFeature.id}`}
            aria-labelledby={`tab-${activeFeature.id}`}
          >
            {/* Top Text Content Area */}
            <div className="feature-text-block">
              <h3 className="feature-headline">{activeFeature.heading}</h3>
              <p className="feature-description-text">{activeFeature.description}</p>

              <div className="feature-cta-row">
                <a href={activeFeature.ctaLink} className="feature-cta-link">
                  <span>{activeFeature.ctaText}</span>
                  <ArrowRight size={15} className="cta-arrow" />
                </a>
              </div>

              {/* Accent Progress Line: rising line fills smoothly for every video over its exact duration */}
              <div className="feature-accent-line" aria-hidden="true">
                <div
                  key={`${activeTabId}-${videoDuration}`}
                  className="accent-active-segment"
                  style={{ animationDuration: `${videoDuration}s` }}
                />
              </div>
            </div>

            {/* Bottom Visual Showcase (Video Window Frame) */}
            <div className="feature-video-wrapper">
              <FeatureShowcaseCard
                feature={activeFeature}
                onVideoEnded={handleNextFeature}
                onDurationChange={(d) => setVideoDuration(d)}
              />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}