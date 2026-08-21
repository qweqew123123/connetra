import type { IntegrationItem } from "../data/integrations";

export default function IntegrationCard({ item }: { item: IntegrationItem }) {
  return (
    <div className="integration-card" aria-label={item.name}>
      <span className="integration-icon" aria-hidden="true">
        <img src={`/logos/${item.icon}.svg`} alt="" width={38} height={38} loading="lazy" />
      </span>
      <span className="integration-name">{item.name}</span>
    </div>
  );
}