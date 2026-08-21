import { ArrowRight } from "lucide-react";
import { integrationColumns } from "../data/integrations";
import IntegrationColumn from "./IntegrationColumn";

const directions = ["up", "down", "up"] as const;

export default function IntegrationsSection() {
  return (
    <section className="section integrations" id="integrations">
      <div className="integrations-grid">
        <div className="integration-copy">
          <div className="eyebrow">YOUR DATA STACK, CONNECTED</div>
          <h2>
            Works with the tools <span>your team already uses.</span>
          </h2>
          <p>
            Connect the databases, warehouses, BI tools and data pipelines that power your
            organization.
          </p>
          <a className="button" href="/integrations">
            Explore integrations <ArrowRight size={16} />
          </a>
        </div>
        <div className="integration-wall">
          <div className="wall-glow" aria-hidden="true"></div>
          {integrationColumns.map((items, i) => (
            <IntegrationColumn
              key={i}
              column={`column-${i + 1}`}
              direction={directions[i]}
              items={items}
            />
          ))}
          <div className="wall-mask wall-mask-top" aria-hidden="true"></div>
          <div className="wall-mask wall-mask-bottom" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
