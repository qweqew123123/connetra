import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "MSSQL | Connetra Documentation",
  description: "Connetra documentation for MSSQL.",
};

export default function MSSQLPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="MSSQL"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "MSSQL" }
        ]}
        prevPage={{ title: "MySQL", href: "/docs/data-sources/mysql" }}
        nextPage={{ title: "PostgreSQL", href: "/docs/data-sources/postgreSQL" }}
      >
<p className="docs-lead-paragraph">
          Use this connector to extract metadata, views, table schemas, and data dictionaries from Microsoft SQL Server.
        </p>

        <h2 id="connection-inputs" className="docs-article-h2">
          Connection Inputs
        </h2>
        <p className="docs-article-p">
          For adding an MSSQL data connector you need to provide the following inputs:
        </p>
        <ul className="docs-list">
          <li><strong>Configuration name:</strong> Members will see this as a dropdown option when on the ‘columns’/’preview’ tabs when creating a data asset.</li>
          <li><strong>Host/server:</strong> The hostname, IP address, or server instance address where SQL Server is running.</li>
          <li><strong>Port:</strong> The port number for the server (default: <code className="docs-inline-code">1433</code>).</li>
          <li><strong>Database Name:</strong> The name of the database where your data is stored.</li>
          <li><strong>User:</strong> The database login account you will use to connect to SQL Server.</li>
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

        <pre className="docs-code-block"><code>{`CREATE LOGIN connetra WITH PASSWORD = '<password>';
CREATE USER connetra FOR LOGIN connetra;
GRANT VIEW ANY DEFINITION TO connetra;
GRANT SELECT ON DATABASE::<yourdbname> TO connetra;`}</code></pre>

        <h2 id="connection-setup-in-connetra" className="docs-article-h2">
          Connection Setup in Connetra
        </h2>
        <DocsImageBox
          src="assets/images/PNG/ss_mssql.png"
          alt="MSSQL Connection Setup"
          caption="Microsoft SQL Server Connection Settings"
        />
      </DocsContent>
    </DocsLayout>
  );
}
