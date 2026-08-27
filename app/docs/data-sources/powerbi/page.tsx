import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Power BI | Connetra Documentation",
  description: "Connetra documentation for Power BI.",
};

export default function PowerBIPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Power BI"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "Power BI" }
        ]}
        prevPage={{ title: "DBT", href: "/docs/data-sources/dbt" }}
        nextPage={{ title: "Tableau", href: "/docs/data-sources/tableau" }}
      >
<p className="docs-lead-paragraph">
          This guide explains exactly how to enable and configure the Power BI connection in Connetra.
        </p>

        <p className="docs-article-p">
          Following these steps allows Connetra to:
        </p>
        <ul className="docs-list">
          <li>Discover Power BI workspaces, datasets, and reports</li>
          <li>Extract enhanced dataset metadata using Power BI Admin APIs</li>
          <li>Build lineage between data warehouse tables (e.g. Snowflake, BigQuery) and Power BI dataset models</li>
        </ul>

        <p className="docs-article-p">
          ⚠️ <strong>Power BI Admin access is required</strong> to complete this setup. Without Admin API access, Connetra can only show lineage within Power BI (for example, report -&gt; dataset).
        </p>

        <h2 id="step-1-create-an-azure-ad-application" className="docs-article-h2">
          Step 1: Create an Azure AD Application
        </h2>
        <ol className="docs-ordered-list">
          <li>Open the <strong>Azure Portal</strong>.</li>
          <li>Navigate to <strong>Azure Active Directory (Microsoft Entra ID) -&gt; App registrations</strong>.</li>
          <li>Click <strong>New registration</strong>.</li>
          <li>Enter a name (e.g. &quot;Connetra Power BI Connector&quot;) and click <strong>Register</strong>.</li>
          <li>Copy the <strong>Application (client) ID</strong> and <strong>Directory (tenant) ID</strong>.</li>
          <li>Go to <strong>Certificates &amp; secrets -&gt; New client secret</strong>, create a secret, and copy the <strong>Value</strong>.</li>
        </ol>

        <h2 id="step-2-create-a-security-group" className="docs-article-h2">
          Step 2: Create a Security Group in Azure AD
        </h2>
        <p className="docs-article-p">
          Create a security group (e.g. &quot;PowerBI-Admin-API-Access&quot;) and add your newly registered Azure AD application as a member.
        </p>

        <h2 id="step-3-enable-power-bi-admin-apis" className="docs-article-h2">
          Step 3: Enable Power BI Admin APIs
        </h2>
        <p className="docs-article-p">
          In the Power BI Admin Portal, go to <strong>Tenant settings -&gt; Developer settings -&gt; Allow service principals to use Power BI APIs</strong>. Enable this setting for the security group created in Step 2.
        </p>

        <h2 id="step-4-configure-connetra" className="docs-article-h2">
          Step 4: Configure in Connetra
        </h2>
        <p className="docs-article-p">
          In Connetra, navigate to <strong>Settings -&gt; Data Connectors -&gt; Power BI</strong> and enter your Tenant ID, Client ID, and Client Secret.
        </p>
      </DocsContent>
    </DocsLayout>
  );
}
