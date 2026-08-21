import type { IntegrationItem } from "../data/integrations";
import IntegrationCard from "./IntegrationCard";

interface IntegrationColumnProps {
  column: string;
  direction: "up" | "down";
  items: IntegrationItem[];
}

export default function IntegrationColumn({ column, direction, items }: IntegrationColumnProps) {
  return (
    <div className={`integration-column ${column}`}>
      <div className={`integration-track ${direction}`}>
        <div className="integration-group">
          {items.map((it, i) => (
            <IntegrationCard key={`${it.name}-a-${i}`} item={it} />
          ))}
        </div>
        <div className="integration-group">
          {items.map((it, i) => (
            <IntegrationCard key={`${it.name}-b-${i}`} item={it} />
          ))}
        </div>
      </div>
    </div>
  );
}
