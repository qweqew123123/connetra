import { ArrowRight } from "lucide-react";
import type { IntegrationDirectoryItem } from "../../data/integrations";

export default function IntegrationCard({ item }: { item: IntegrationDirectoryItem }) {
  return (
    <article className="itg-card">
      <div className="itg-card-top">
        <span className="itg-card-logo">
          <img src={item.icon} alt={`${item.name} logo`} width={44} height={44} loading="lazy" />
        </span>
        <span className="itg-card-category">{item.category}</span>
      </div>
      <h3 className="itg-card-name">{item.name}</h3>
      <p className="itg-card-desc">{item.description}</p>
      <a className="itg-card-link" href="#" data-slug={item.slug}>
        Learn more <ArrowRight size={15} />
      </a>
    </article>
  );
}