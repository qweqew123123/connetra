import { ArrowRight, Check } from "lucide-react";
import type { Feature } from "../data/features";

interface FeatureContentProps {
  feature: Feature;
  active?: boolean;
  offset?: number;
  stacked?: boolean;
}

export default function FeatureContent({
  feature,
  active = true,
  offset = 0,
  stacked = false,
}: FeatureContentProps) {
  return (
    <div
      className={`feature-content ${active ? "active" : ""} ${stacked ? "stacked" : ""}`}
      style={!stacked ? { transform: `translateY(${offset}px)` } : undefined}
    >
      <div className="feature-num">{feature.label}</div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-desc">{feature.description}</p>
      <a className="feature-cta" href="#features">
        {feature.cta} <ArrowRight size={16} />
      </a>
      <ul className="feature-points">
        {feature.points.map((p) => (
          <li key={p}>
            <Check size={14} /> {p}
          </li>
        ))}
      </ul>
    </div>
  );
}