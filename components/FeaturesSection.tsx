"use client";

import { useEffect, useRef, useState } from "react";
import { features } from "../data/features";
import FeatureContent from "./FeatureContent";
import FeatureVideo from "./FeatureVideo";

const backgrounds = ["#09122A", "#09122A", "#09122A"];

export default function FeaturesSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState<"sticky" | "stacked">("sticky");
  const [sectionInView, setSectionInView] = useState(false);

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
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting),
      { threshold: 0.18, rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
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
    <section ref={sectionRef} className="features-wrap" id="features">
      {mode === "sticky" ? (
        <div className="features-scroll" ref={wrapRef}>
          <div
            className="features-viewport"
            data-active={active}
            data-theme={sectionInView ? "dark" : "light"}
            style={{
              backgroundColor: sectionInView ? backgrounds[active] : "#ffffff",
            }}
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
        <div className="features-stacked" data-theme={sectionInView ? "dark" : "light"}>
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