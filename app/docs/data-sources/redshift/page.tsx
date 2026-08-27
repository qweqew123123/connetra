import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Redshift | Connetra Documentation",
  description: "Connetra documentation for Redshift.",
};

export default function RedshiftPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Redshift"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "Redshift" }
        ]}
        prevPage={{ title: "PostgreSQL", href: "/docs/data-sources/postgreSQL" }}
        nextPage={{ title: "Snowflake", href: "/docs/data-sources/snowflake" }}
      >
<p className="docs-lead-paragraph">
          Use this connector to extract metadata, database tables, and analytical views from Amazon Redshift clusters.
        </p>

        <h2 id="connection-inputs" className="docs-article-h2">
          Connection Inputs
        </h2>
        <p className="docs-article-p">
          For adding a Redshift data connector you need to provide the following inputs:
        </p>
        <ul className="docs-list">
          <li><strong>Configuration name:</strong> Members will see this as a dropdown option when on the ‘columns’/’preview’ tabs when creating a data asset.</li>
          <li><strong>Host/server:</strong> The cluster endpoint URL (e.g., <code className="docs-inline-code">cluster-name.xxxxxx.region.redshift.amazonaws.com</code>).</li>
          <li><strong>Port:</strong> The port number for Redshift (default: <code className="docs-inline-code">5439</code>).</li>
          <li><strong>Database Name:</strong> The name of the database where your data is stored.</li>
          <li><strong>User:</strong> The database account you will use to connect to Redshift.</li>
          <li><strong>Password:</strong> The password for the user specified above.</li>
        </ul>
        <p className="docs-article-p">
          <em>Before you can save the data connector you must first test the connection.</em>
        </p>

        <h2 id="create-user-grant-permissions" className="docs-article-h2">
          Create User &amp; Grant Permissions
        </h2>
        <p className="docs-article-p">
          Run the following SQL commands to create a dedicated user and grant the required read-only permissions:
        </p>

        <pre className="docs-code-block"><code>{`CREATE USER connetra PASSWORD '<password>';
GRANT USAGE ON SCHEMA public TO connetra;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO connetra;`}</code></pre>

        <h2 id="connection-setup-in-connetra" className="docs-article-h2">
          Connection Setup in Connetra
        </h2>
        <DocsImageBox
          src="assets/images/PNG/ss_redshift.png"
          alt="Amazon Redshift Connection Setup"
          caption="Amazon Redshift Connection Settings"
        />
      </DocsContent>
    </DocsLayout>
  );
}
