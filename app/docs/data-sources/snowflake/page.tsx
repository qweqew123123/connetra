import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Snowflake | Connetra Documentation",
  description: "Connetra documentation for Snowflake.",
};

export default function SnowflakePage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Snowflake"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "Snowflake" }
        ]}
        prevPage={{ title: "Redshift", href: "/docs/data-sources/redshift" }}
        nextPage={{ title: "Google BigQuery", href: "/docs/data-sources/google-bigquery" }}
      >
<p className="docs-lead-paragraph">
          Use this connector to extract metadata, query histories, tables, views, and automated data lineage from Snowflake warehouses.
        </p>

        <h2 id="connection-inputs" className="docs-article-h2">
          Connection Inputs
        </h2>
        <p className="docs-article-p">
          For adding a Snowflake data connector you need to provide the following inputs:
        </p>
        <ul className="docs-list">
          <li><strong>Configuration name:</strong> Members will see this as a dropdown option when on the ‘columns’/’preview’ tabs when creating a data asset.</li>
          <li><strong>Host/server:</strong> Your Snowflake Account Identifier URL (e.g., <code className="docs-inline-code">xy12345.us-east-1.snowflakecomputing.com</code>).</li>
          <li><strong>Port:</strong> The port number (default: <code className="docs-inline-code">443</code>).</li>
          <li><strong>Warehouse:</strong> The Snowflake virtual warehouse used for metadata queries.</li>
          <li><strong>Database Name:</strong> The Snowflake database to index.</li>
          <li><strong>User:</strong> The Snowflake user created for Connetra.</li>
          <li><strong>Password:</strong> The password for the specified user.</li>
        </ul>
        <p className="docs-article-p">
          <em>Before you can save the data connector you must first test the connection.</em>
        </p>

        <h2 id="create-user-grant-permissions" className="docs-article-h2">
          Create User &amp; Grant Permissions
        </h2>
        <p className="docs-article-p">
          Run the following SQL commands in Snowflake as ACCOUNTADMIN or SECURITYADMIN:
        </p>

        <pre className="docs-code-block"><code>{`CREATE ROLE connetra_role;
GRANT USAGE ON WAREHOUSE <warehouse_name> TO ROLE connetra_role;
GRANT USAGE ON DATABASE <database_name> TO ROLE connetra_role;
GRANT USAGE ON ALL SCHEMAS IN DATABASE <database_name> TO ROLE connetra_role;
GRANT SELECT ON ALL TABLES IN DATABASE <database_name> TO ROLE connetra_role;
GRANT SELECT ON ALL VIEWS IN DATABASE <database_name> TO ROLE connetra_role;

CREATE USER connetra_user PASSWORD = '<password>' DEFAULT_ROLE = connetra_role;
GRANT ROLE connetra_role TO USER connetra_user;`}</code></pre>

        <h2 id="connection-setup-in-connetra" className="docs-article-h2">
          Connection Setup in Connetra
        </h2>
        <DocsImageBox
          src="assets/images/PNG/ss_snowflake.png"
          alt="Snowflake Connection Setup"
          caption="Snowflake Connection Settings"
        />
      </DocsContent>
    </DocsLayout>
  );
}
