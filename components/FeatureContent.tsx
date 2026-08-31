import { ArrowRight, Check } from "lucide-react";
import type { FeatureItem } from "../data/features";

interface FeatureContentProps {
  feature: FeatureItem;
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
      <div className="feature-num">{feature.tabLabel}</div>
      <h3 className="feature-title">{feature.heading}</h3>
      <p className="feature-desc">{feature.description}</p>
      <a className="feature-cta" href={feature.ctaLink || "#features"}>
        {feature.ctaText} <ArrowRight size={16} />
      </a>
      {feature.points && feature.points.length > 0 && (
        <ul className="feature-points">
          {feature.points.map((p: string) => (
            <li key={p}>
              <Check size={14} /> {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}