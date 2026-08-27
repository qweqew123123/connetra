import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Tableau | Connetra Documentation",
  description: "Connetra documentation for Tableau.",
};

export default function TableauPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Tableau"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "Tableau" }
        ]}
        prevPage={{ title: "Power BI", href: "/docs/data-sources/powerbi" }}
        nextPage={{ title: "Databricks", href: "/docs/data-sources/databricks" }}
      >
<p className="docs-lead-paragraph">
          This guide explains how to connect Tableau to Connetra using a Tableau Personal Access Token (PAT). Once configured, Connetra can discover Tableau workbooks, dashboards, data sources, and build lineage between Tableau assets and upstream data warehouse tables.
        </p>

        <h2 id="step-1-enable-metadata-api" className="docs-article-h2">
          Step 1: Enable the Tableau Metadata API (Tableau Server only)
        </h2>
        <p className="docs-article-p">
          ⚠️ <strong>Skip this step if you are using Tableau Online / Tableau Cloud.</strong>
        </p>
        <p className="docs-article-p">
          If you are running Tableau Server, the Metadata API must be enabled by a Tableau administrator:
        </p>
        <ol className="docs-ordered-list">
          <li>Open a command prompt as an administrator on the initial Tableau Server node (where TSM is installed).</li>
          <li>Run the following command:</li>
        </ol>
        <pre className="docs-code-block"><code>{`tsm maintenance metadata-services enable`}</code></pre>

        <h2 id="step-2-create-personal-access-token" className="docs-article-h2">
          Step 2: Create a Tableau Personal Access Token (PAT)
        </h2>
        <p className="docs-article-p">
          To generate a token in Tableau Server or Tableau Cloud:
        </p>
        <ol className="docs-ordered-list">
          <li>Log in to Tableau Server or Tableau Cloud.</li>
          <li>Click your profile icon in the top right and go to <strong>My Account Settings</strong>.</li>
          <li>Under <strong>Personal Access Tokens</strong>, enter a Token Name (e.g. &quot;Connetra&quot;) and click <strong>Create Token</strong>.</li>
          <li>Copy the <strong>Token Secret</strong> immediately (it will only be displayed once).</li>
        </ol>

        <h2 id="step-3-configure-connetra" className="docs-article-h2">
          Step 3: Configure in Connetra
        </h2>
        <p className="docs-article-p">
          In Connetra, navigate to <strong>Settings -&gt; Data Connectors -&gt; Tableau</strong> and enter your Server URL, Site Name, Token Name, and Token Secret.
        </p>
      </DocsContent>
    </DocsLayout>
  );
}
