import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Google BigQuery | Connetra Documentation",
  description: "Connetra documentation for Google BigQuery.",
};

export default function GoogleBigQueryPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Google BigQuery"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "Google BigQuery" }
        ]}
        prevPage={{ title: "Snowflake", href: "/docs/data-sources/snowflake" }}
        nextPage={{ title: "MariaDB", href: "/docs/data-sources/mariaDB" }}
      >
<p className="docs-lead-paragraph">
          Use this connector to extract metadata from Google BigQuery datasets using a Google Cloud Service Account.
        </p>

        <h2 id="create-user-grant-permissions" className="docs-article-h2">
          Create User &amp; Grant Permissions
        </h2>
        <p className="docs-article-p">
          Follow these steps to configure a dedicated GCP Service Account:
        </p>
        <ol className="docs-ordered-list">
          <li>Go to the <strong>GCP Console -&gt; IAM &amp; Admin -&gt; Service Accounts</strong>.</li>
          <li>Click <strong>Create Service Account</strong> (e.g., &quot;connetra-metadata-reader&quot;).</li>
          <li>Assign the <strong>BigQuery Metadata Viewer</strong> and <strong>BigQuery Data Viewer</strong> roles to the Service Account.</li>
          <li>Under the <strong>Keys</strong> tab, click <strong>Add Key -&gt; Create new key (JSON)</strong>. Download the generated JSON key file.</li>
        </ol>

        <h2 id="connection-setup-in-connetra" className="docs-article-h2">
          Connection Setup in Connetra
        </h2>
        <p className="docs-article-p">
          In Connetra, provide your <strong>Configuration Name</strong>, <strong>GCP Project ID</strong>, and paste the contents of your <strong>Service Account JSON Key</strong>. Test the connection and save.
        </p>
        <DocsImageBox
          src="assets/images/PNG/ss_googleBigQuery.png"
          alt="Google BigQuery Connection Setup"
          caption="Google BigQuery Connection Settings"
        />
      </DocsContent>
    </DocsLayout>
  );
}
