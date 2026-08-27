import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Databricks | Connetra Documentation",
  description: "Connetra documentation for Databricks.",
};

export default function DatabricksPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Databricks"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "Databricks" }
        ]}
        prevPage={{ title: "Tableau", href: "/docs/data-sources/tableau" }}
        nextPage={{ title: "Airflow", href: "/docs/data-sources/airflow" }}
      >
<p className="docs-lead-paragraph">
          This guide explains how to connect Databricks to Connetra. Once configured, Connetra can discover Databricks tables, jobs, notebooks, and dashboards.
        </p>

        <h2 id="step-1-create-access-token" className="docs-article-h2">
          Step 1: Create an Asset Token
        </h2>
        <p className="docs-article-p">In your Databricks workspace:</p>
        <ol className="docs-ordered-list">
          <li>Go to <strong>User Settings</strong>.</li>
          <li>Navigate to the <strong>Developer</strong> tab and click <strong>Access tokens -&gt; Manage</strong>.</li>
          <li>Click <strong>Generate new token</strong>.</li>
          <li>Save the token; you will use it during setup in Connetra.</li>
        </ol>
        <p className="docs-article-p">
          For query history and popularity metrics, the token should have <strong>admin-level access</strong>.
        </p>

        <h2 id="step-2-grant-permissions" className="docs-article-h2">
          Step 2: Grant Required Permissions
        </h2>
        <p className="docs-article-p">
          <strong>SQL Warehouse Permissions:</strong> Ensure the user associated with the token has <strong>Can Use</strong> permissions on the target SQL Warehouse or cluster.
        </p>
        <p className="docs-article-p">
          <strong>Unity Catalog / Data Permissions:</strong> Ensure the user has <code className="docs-inline-code">USE CATALOG</code>, <code className="docs-inline-code">USE SCHEMA</code>, and <code className="docs-inline-code">SELECT</code> permissions on the schemas and tables to be cataloged.
        </p>

        <h2 id="step-3-configure-connetra" className="docs-article-h2">
          Step 3: Configure in Connetra
        </h2>
        <p className="docs-article-p">
          In Connetra, go to <strong>Settings -&gt; Data Connectors -&gt; Databricks</strong> and enter your Workspace URL (e.g., <code className="docs-inline-code">https://adb-xxxx.azuredatabricks.net</code>), Access Token, and optional HTTP Path.
        </p>
      </DocsContent>
    </DocsLayout>
  );
}
