"use client";

import { useEffect, useRef, useState } from "react";
import ShowcaseTabs, { type ShowcaseTab } from "./ShowcaseTabs";

const showcaseTabs: ShowcaseTab[] = [
  { id: "explore", label: "Explore" },
  { id: "lineage", label: "Time" },
  { id: "monitor", label: "Search" },
];

const tabImages: Record<string, string> = {
  explore: "/images/tab-explore.png",
  lineage: "/images/tab-timeline.png",
  monitor: "/images/tab-search.png",
};

const tabAlts: Record<string, string> = {
  explore: "Connetra Explore view showing connected data assets",
  lineage: "Connetra Timeline view showing data lineage",
  monitor: "Connetra Search view showing data discovery results",
};

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("explore");
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = card.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.9;
      const end = vh * 0.4;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      const scale = 1 - 0.0833 * progress;
      card.style.transform = `scale(${scale.toFixed(4)})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="showcase-card" ref={cardRef}>
      <div className="showcase-panel">
        <ShowcaseTabs
          tabs={showcaseTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
        <div className="showcase-view" key={activeTab}>
          <div className="showcase-image">
            <img src={tabImages[activeTab]} alt={tabAlts[activeTab]} />
          </div>
        </div>
      </div>
    </div>
  );
}