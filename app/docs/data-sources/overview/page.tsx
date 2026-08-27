import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Overview | Connetra Documentation",
  description: "Connetra documentation for Overview.",
};

export default function OverviewPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Overview"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "Overview" }
        ]}
        prevPage={{ title: "Roles and Permissions", href: "/docs/get-started/roles-permissions" }}
        nextPage={{ title: "MySQL", href: "/docs/data-sources/mysql" }}
      >
<p className="docs-lead-paragraph">
          Data connectors are used by Connetra to connect to your database/warehouse in order to make metadata searchable and to allow for alert creation.
        </p>

        <h2 id="how-to-add-connectors" className="docs-article-h2">
          How to Add Data Connectors
        </h2>
        <p className="docs-article-p">
          There are two ways to add data connectors:
        </p>
        <ol className="docs-ordered-list">
          <li>
            <strong>During Workspace Setup:</strong> If you are initializing a new workspace, then in Step 3 of the set-up wizard you can add new data connectors.
          </li>
          <li>
            <strong>From Workspace Settings:</strong> If the workspace already exists, you can add data connectors by going to <strong>‘Settings’ -&gt; ‘Data Connectors’</strong> &amp; clicking on the <strong>‘Add Data Connector’</strong> button.
          </li>
        </ol>

        <h2 id="permissions-and-best-practices" className="docs-article-h2">
          Permissions &amp; Best Practices
        </h2>
        <p className="docs-article-p">
          Note that the roles that can create a new data connection are <strong>‘Workspace Owner’</strong> and <strong>‘Admin’</strong>. A standard ‘User’ does not have the required permissions to create or modify a data connection.
        </p>
        <p className="docs-article-p">
          <strong>Best Practice:</strong> We recommend creating a dedicated read-only Connetra service account on the specific database or warehouse you plan to connect, and using these credentials in the connection parameters.
        </p>

        <h2 id="available-data-sources" className="docs-article-h2">
          Supported Data Sources
        </h2>
        <p className="docs-article-p">
          Connetra provides dedicated native connectors for:
        </p>
        <ul className="docs-list">
          <li><a href="/docs/data-sources/mysql">MySQL</a></li>
          <li><a href="/docs/data-sources/mssql">Microsoft SQL Server (MSSQL)</a></li>
          <li><a href="/docs/data-sources/postgreSQL">PostgreSQL</a></li>
          <li><a href="/docs/data-sources/redshift">Amazon Redshift</a></li>
          <li><a href="/docs/data-sources/snowflake">Snowflake</a></li>
          <li><a href="/docs/data-sources/google-bigquery">Google BigQuery</a></li>
          <li><a href="/docs/data-sources/mariaDB">MariaDB</a></li>
          <li><a href="/docs/data-sources/oracle">Oracle</a></li>
          <li><a href="/docs/data-sources/dbt">DBT (Cloud &amp; Core)</a></li>
          <li><a href="/docs/data-sources/powerbi">Power BI</a></li>
          <li><a href="/docs/data-sources/tableau">Tableau</a></li>
          <li><a href="/docs/data-sources/databricks">Databricks</a></li>
          <li><a href="/docs/data-sources/airflow">Apache Airflow</a></li>
        </ul>
      </DocsContent>
    </DocsLayout>
  );
}
