import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "DBT | Connetra Documentation",
  description: "Connetra documentation for DBT.",
};

export default function DBTPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="DBT"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "DBT" }
        ]}
        prevPage={{ title: "Oracle", href: "/docs/data-sources/oracle" }}
        nextPage={{ title: "Power BI", href: "/docs/data-sources/powerbi" }}
      >
<p className="docs-lead-paragraph">
          The DBT integration allows Connetra to ingest transformation metadata directly from DBT Cloud or DBT Core, enriching your warehouse assets with models, tests, documentation, and lineage.
        </p>

        <h2 id="dbt-cloud" className="docs-article-h2">
          DBT Cloud
        </h2>
        <h3 id="dbt-cloud-overview" className="docs-article-h3">
          Overview
        </h3>
        <p className="docs-article-p">
          The DBT Cloud integration allows Connetra to ingest transformation metadata directly from DBT Cloud using the DBT Cloud REST API. This enriches your warehouse assets with models, tests, documentation, and lineage produced by DBT Cloud projects.
        </p>
        <p className="docs-article-p">
          DBT Cloud is a secondary integration in Connetra. You must first connect a supported data warehouse or relational database (such as Snowflake, BigQuery, Postgres, or Redshift) before enabling DBT Cloud.
        </p>

        <h3 id="what-metadata-connetra-extracts" className="docs-article-h3">
          What Metadata Connetra Extracts from DBT Cloud
        </h3>
        <p className="docs-article-p">Connetra uses the DBT Cloud API to extract:</p>
        <ul className="docs-list">
          <li>DBT models and sources</li>
          <li>Model-to-table mappings</li>
          <li>Tests and test results</li>
          <li>Column descriptions and model documentation</li>
          <li>Upstream and downstream transformation lineage graphs</li>
        </ul>

        <h3 id="dbt-cloud-prerequisites" className="docs-article-h3">
          Prerequisites
        </h3>
        <p className="docs-article-p">Before configuring the integration, ensure you have:</p>
        <ul className="docs-list">
          <li>An active DBT Cloud account (Developer, Team, or Enterprise plan)</li>
          <li>A Service Account Token or User API Token with access to read jobs and runs</li>
          <li>Your DBT Cloud Account ID</li>
          <li>One or more DBT Cloud Jobs that produce catalog and manifest artifacts</li>
        </ul>

        <h3 id="dbt-cloud-step-by-step" className="docs-article-h3">
          Step-by-Step Setup
        </h3>
        <ol className="docs-ordered-list">
          <li>
            <strong>Generate an API Token in DBT Cloud:</strong> Go to Account Settings -&gt; API Tokens -&gt; Service Account Tokens, create a token with Read permissions, and copy the token value.
          </li>
          <li>
            <strong>Locate your DBT Cloud Account ID:</strong> Find your Account ID in your DBT Cloud URL (e.g., https://cloud.getdbt.com/deploy/<strong>12345</strong>/...).
          </li>
          <li>
            <strong>Configure in Connetra:</strong> In Connetra, go to Settings -&gt; Data Connectors -&gt; DBT, select DBT Cloud, and enter your Account ID, API Token, and select your Job IDs.
          </li>
        </ol>

        <h2 id="dbt-core" className="docs-article-h2">
          DBT Core
        </h2>
        <p className="docs-article-p">
          For DBT Core projects, Connetra can read manifest.json and catalog.json artifacts directly from an Amazon S3 bucket, Google Cloud Storage, or Azure Blob Storage.
        </p>

        <h3 id="dbt-core-s3-iam-policy" className="docs-article-h3">
          AWS S3 Bucket IAM Policy
        </h3>
        <pre className="docs-code-block"><code>{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetObject",
        "s3:GetObjectAcl"
      ],
      "Resource": [
        "arn:aws:s3:::<your-bucket-name>",
        "arn:aws:s3:::<your-bucket-name>/*"
      ]
    }
  ]
}`}</code></pre>
      </DocsContent>
    </DocsLayout>
  );
}
