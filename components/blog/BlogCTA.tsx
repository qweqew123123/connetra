"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function BlogCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="blog-bottom-cta">
      <div ref={ref} className="blog-bottom-cta-inner blog-reveal">
        <h2>Ready to make sense of your data?</h2>
        <p>Bring your data ecosystem together with Connetra.</p>
        <div className="blog-cta-actions">
          <a className="button" href="#cta">
            Get started <ArrowRight size={16} />
          </a>
          <a className="button ghost" href="#cta">
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
