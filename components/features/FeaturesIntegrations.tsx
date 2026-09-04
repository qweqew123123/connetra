"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const row1Logos = [
  { name: "MySQL", icon: "/logos/mysql.svg" },
  { name: "Snowflake", icon: "/logos/snowflake.svg" },
  { name: "PostgreSQL", icon: "/logos/postgresql.svg" },
  { name: "Slack", icon: "/logos/slack.svg" },
  { name: "Google BigQuery", icon: "/logos/googlebigquery.svg" },
  { name: "Microsoft SQL Server", icon: "/logos/microsoftsqlserver.svg" },
  { name: "Tableau", icon: "/logos/tableau.svg" },
  { name: "Databricks", icon: "/logos/databricks.svg" },
];

const row2Logos = [
  { name: "Apache Airflow", icon: "/logos/apacheairflow.svg" },
  { name: "Amazon Redshift", icon: "/logos/amazonredshift.svg" },
  { name: "Power BI", icon: "/logos/powerbi.svg" },
  { name: "dbt", icon: "/logos/dbt.svg" },
  { name: "MariaDB", icon: "/logos/mariadb.svg" },
  { name: "Oracle", icon: "/logos/oracle.svg" },
  { name: "Apache Superset", icon: "/logos/apachesuperset.svg" },
  { name: "Apache Druid", icon: "/logos/apachedruid.svg" },
];

export default function FeaturesIntegrations() {
  const row1Items = [...row1Logos, ...row1Logos, ...row1Logos];
  const row2Items = [...row2Logos, ...row2Logos, ...row2Logos];

  return (
    <section className="fp-integrations-section" aria-label="Integrations">
      <div className="fp-container">
        {/* Header Content matching Homepage 1-to-1 */}
        <div className="fp-integrations-head">
          <div className="eyebrow">CONNECT YOUR DATA STACK</div>
          <h2>Everything in your stack, connected in one place.</h2>
          <p>
            Bring your databases, warehouses, BI tools, and data pipelines together for a complete view of your data ecosystem.
          </p>
          <a className="button" href="/integrations">
            Explore integrations <ArrowRight size={16} />
          </a>
        </div>

        {/* Dual Marquee Rows */}
        <div className="fp-dual-marquee-container">
          <div className="fp-marquee-fade-left" aria-hidden="true" />
          <div className="fp-marquee-fade-right" aria-hidden="true" />

          {/* Row 1: Left to Right Scroll */}
          <div className="fp-marquee-row">
            <div className="fp-row-left-to-right">
              {row1Items.map((item, idx) => (
                <div key={`row1-${item.name}-${idx}`} className="fp-marquee-card">
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="fp-marquee-icon"
                  />
                  <span className="fp-marquee-label">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left Scroll */}
          <div className="fp-marquee-row">
            <div className="fp-row-right-to-left">
              {row2Items.map((item, idx) => (
                <div key={`row2-${item.name}-${idx}`} className="fp-marquee-card">
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="fp-marquee-icon"
                  />
                  <span className="fp-marquee-label">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
