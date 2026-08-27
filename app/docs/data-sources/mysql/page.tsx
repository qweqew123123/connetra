import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "MySQL | Connetra Documentation",
  description: "Connetra documentation for MySQL.",
};

export default function MySQLPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="MySQL"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "MySQL" }
        ]}
        prevPage={{ title: "Overview", href: "/docs/data-sources/overview" }}
        nextPage={{ title: "MSSQL", href: "/docs/data-sources/mssql" }}
      >
<p className="docs-lead-paragraph">
          Use this connector to extract metadata, table structures, column definitions, and schemas from MySQL databases.
        </p>

        <h2 id="connection-inputs" className="docs-article-h2">
          Connection Inputs
        </h2>
        <p className="docs-article-p">
          For adding a MySQL data connector you need to provide the following inputs:
        </p>
        <ul className="docs-list">
          <li><strong>Configuration name:</strong> Members will see this as a dropdown option when on the ‘columns’/’preview’ tabs when creating a data asset.</li>
          <li><strong>Host/server:</strong> This is the hostname or IP address of the server where the MySQL database is hosted.</li>
          <li><strong>Port:</strong> The port number for the server (default: <code className="docs-inline-code">3306</code>).</li>
          <li><strong>Database Name:</strong> The specific database name to extract metadata from.</li>
          <li><strong>User:</strong> The dedicated database user account you will use to connect to MySQL.</li>
          <li><strong>Password:</strong> The password for the specified database user account.</li>
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
GRANT SELECT ON <schema_name>.* TO '<username>';
FLUSH PRIVILEGES;`}</code></pre>

        <h2 id="connection-setup-in-connetra" className="docs-article-h2">
          Connection Setup in Connetra
        </h2>
        <DocsImageBox
          src="assets/images/PNG/ss_mysql.png"
          alt="MySQL Connection Setup"
          caption="MySQL Connection Settings"
        />
      </DocsContent>
    </DocsLayout>
  );
}
