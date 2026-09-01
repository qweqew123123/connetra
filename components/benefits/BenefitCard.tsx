"use client";

import { useEffect, useRef, useState } from "react";
import type { BenefitItem } from "../../data/benefits";
import { visualComponents } from "./BenefitVisuals";

export default function BenefitCard({
  benefit,
  index,
}: {
  benefit: BenefitItem;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isReverse = index % 2 !== 0;
  const VisualComponent = visualComponents[benefit.visualType];

  return (
    <section
      ref={ref}
      className={`ben-section ${isReverse ? "ben-reverse" : ""} ${
        inView ? "in" : ""
      }`}
      id={`benefit-${benefit.number}`}
    >
      <div className="ben-container ben-card-grid">
        {/* Text Content Column */}
        <div className="ben-copy-col">
          <div className="ben-card-num-pill">
            <span>{benefit.number}</span>
          </div>
          <div className="ben-eyebrow-text">{benefit.eyebrow}</div>
          <h2>{benefit.title}</h2>
          <p>{benefit.description}</p>
        </div>

        {/* Supporting Visual Column */}
        <div className="ben-visual-col">
          <VisualComponent inView={inView} />
        </div>
      </div>
    </section>
  );
}
