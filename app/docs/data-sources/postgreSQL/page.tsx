import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "PostgreSQL | Connetra Documentation",
  description: "Connetra documentation for PostgreSQL.",
};

export default function PostgreSQLPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="PostgreSQL"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "PostgreSQL" }
        ]}
        prevPage={{ title: "MSSQL", href: "/docs/data-sources/mssql" }}
        nextPage={{ title: "Redshift", href: "/docs/data-sources/redshift" }}
      >
<p className="docs-lead-paragraph">
          Use this connector to extract metadata, table relations, constraints, and schemas from PostgreSQL databases.
        </p>

        <h2 id="connection-inputs" className="docs-article-h2">
          Connection Inputs
        </h2>
        <p className="docs-article-p">
          For adding a PostgreSQL data connector you need to provide the following inputs:
        </p>
        <ul className="docs-list">
          <li><strong>Configuration name:</strong> Members will see this as a dropdown option when on the ‘columns’/’preview’ tabs when creating a data asset.</li>
          <li><strong>Host/server:</strong> The hostname or IP address of the PostgreSQL server.</li>
          <li><strong>Port:</strong> The port number for the server (default: <code className="docs-inline-code">5432</code>).</li>
          <li><strong>Database Name:</strong> The target database name.</li>
          <li><strong>User:</strong> The database role you will use to connect to PostgreSQL.</li>
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
GRANT CONNECT ON DATABASE <your_database> TO connetra;
GRANT USAGE ON SCHEMA public TO connetra;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO connetra;`}</code></pre>

        <h2 id="connection-setup-in-connetra" className="docs-article-h2">
          Connection Setup in Connetra
        </h2>
        <DocsImageBox
          src="assets/images/PNG/ss_PostgreSQL.png"
          alt="PostgreSQL Connection Setup"
          caption="PostgreSQL Connection Settings"
        />
      </DocsContent>
    </DocsLayout>
  );
}
