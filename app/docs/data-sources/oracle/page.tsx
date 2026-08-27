import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Oracle | Connetra Documentation",
  description: "Connetra documentation for Oracle.",
};

export default function OraclePage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Oracle"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "Oracle" }
        ]}
        prevPage={{ title: "MariaDB", href: "/docs/data-sources/mariaDB" }}
        nextPage={{ title: "DBT", href: "/docs/data-sources/dbt" }}
      >
<p className="docs-lead-paragraph">
          Use this connector to extract metadata, data dictionaries, materialized views, and table catalogs from Oracle databases.
        </p>

        <h2 id="connection-inputs" className="docs-article-h2">
          Connection Inputs
        </h2>
        <p className="docs-article-p">
          For adding an Oracle data connector you need to provide the following inputs:
        </p>
        <ul className="docs-list">
          <li><strong>Configuration name:</strong> Members will see this as a dropdown option when on the ‘columns’/’preview’ tabs when creating a data asset.</li>
          <li><strong>Host/server:</strong> The hostname or IP address of the Oracle database server.</li>
          <li><strong>Port:</strong> The Oracle listener port (default: <code className="docs-inline-code">1521</code>).</li>
          <li><strong>Service Name / SID:</strong> The Oracle service name or SID.</li>
          <li><strong>User:</strong> The dedicated Oracle user created for Connetra.</li>
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

        <pre className="docs-code-block"><code>{`CREATE USER connetra IDENTIFIED BY '<password>';
GRANT CREATE SESSION TO connetra;
GRANT SELECT_CATALOG_ROLE TO connetra;
GRANT SELECT ANY TABLE TO connetra;`}</code></pre>

        <h2 id="connection-setup-in-connetra" className="docs-article-h2">
          Connection Setup in Connetra
        </h2>
        <DocsImageBox
          src="assets/images/PNG/ss_oracle.png"
          alt="Oracle Connection Setup"
          caption="Oracle Connection Settings"
        />
      </DocsContent>
    </DocsLayout>
  );
}
