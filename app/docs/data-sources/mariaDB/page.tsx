import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "MariaDB | Connetra Documentation",
  description: "Connetra documentation for MariaDB.",
};

export default function MariaDBPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="MariaDB"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "MariaDB" }
        ]}
        prevPage={{ title: "Google BigQuery", href: "/docs/data-sources/google-bigquery" }}
        nextPage={{ title: "Oracle", href: "/docs/data-sources/oracle" }}
      >
<p className="docs-lead-paragraph">
          Use this connector to extract metadata from MariaDB databases.
        </p>

        <h2 id="connection-inputs" className="docs-article-h2">
          Connection Inputs
        </h2>
        <p className="docs-article-p">
          For adding a MariaDB data connector you need to provide the following inputs:
        </p>
        <ul className="docs-list">
          <li><strong>Configuration name:</strong> Members will see this as a dropdown option when on the ‘columns’/’preview’ tabs when creating a data asset.</li>
          <li><strong>Host/server:</strong> The hostname or IP address of the MariaDB server.</li>
          <li><strong>Port:</strong> The port number for the server (default: <code className="docs-inline-code">3306</code>).</li>
          <li><strong>Database Name:</strong> The name of the database where your data is stored.</li>
          <li><strong>User:</strong> The database user account for Connetra.</li>
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

        <pre className="docs-code-block"><code>{`CREATE USER '<username>' IDENTIFIED BY '<password>';
GRANT SELECT ON <database_name>.* TO '<username>';
FLUSH PRIVILEGES;`}</code></pre>

        <h2 id="connection-setup-in-connetra" className="docs-article-h2">
          Connection Setup in Connetra
        </h2>
        <DocsImageBox
          src="assets/images/PNG/ss_mariaDb.png"
          alt="MariaDB Connection Setup"
          caption="MariaDB Connection Settings"
        />
      </DocsContent>
    </DocsLayout>
  );
}
