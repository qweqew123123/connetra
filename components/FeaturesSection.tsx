"use client";

import { useEffect, useRef, useState } from "react";
import { features } from "../data/features";
import FeatureContent from "./FeatureContent";
import FeatureVideo from "./FeatureVideo";

const backgrounds = ["#06101f", "#081323", "#0a1728"];

export default function FeaturesSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState<"sticky" | "stacked">("sticky");

  useEffect(() => {
    const mqStack = window.matchMedia("(max-width: 1079px)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const check = () => setMode(mqStack.matches || mqReduced.matches ? "stacked" : "sticky");
    check();
    mqStack.addEventListener("change", check);
    mqReduced.addEventListener("change", check);
    return () => {
      mqStack.removeEventListener("change", check);
      mqReduced.removeEventListener("change", check);
    };
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || mode !== "sticky") return;
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      setProgress(p);
      setActive(Math.min(features.length - 1, Math.floor(p * features.length)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [mode]);

  return (
    <section className="features-wrap" id="features">
      {mode === "sticky" ? (
        <div className="features-scroll" ref={wrapRef}>
          <div
            className="features-viewport"
            style={{ backgroundColor: backgrounds[active] }}
          >
            <div className="features-stage">
              <div className="feature-slides">
                {features.map((f, i) => (
                  <FeatureContent
                    key={f.id}
                    feature={f}
                    active={i === active}
                    offset={i === active ? 0 : i > active ? 24 : -24}
                  />
                ))}
              </div>
              <div className="feature-videos">
                {features.map((f, i) => (
                  <FeatureVideo key={f.id} feature={f} active={i === active} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="features-stacked">
          {features.map((f) => (
            <article className="feature-stacked" key={f.id}>
              <div className="feature-stacked-grid">
                <FeatureContent feature={f} active stacked />
                <FeatureVideo feature={f} active />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}