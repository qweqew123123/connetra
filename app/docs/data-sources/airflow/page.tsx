import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Airflow | Connetra Documentation",
  description: "Connetra documentation for Airflow.",
};

export default function AirflowPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Airflow"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Data Sources" },
          { label: "Airflow" }
        ]}
        prevPage={{ title: "Databricks", href: "/docs/data-sources/databricks" }}
        nextPage={{ title: "Privacy & Security", href: "/docs/privacy-security" }}
      >
<p className="docs-lead-paragraph">
          Use the Apache Airflow connector to extract metadata, execution lineage, and pipeline run histories. Connetra supports two connection methods for Airflow: <strong>REST API</strong> and <strong>OpenLineage</strong>.
        </p>

        <h2 id="connection-method-rest-api" className="docs-article-h2">
          Connection Method: REST API
        </h2>
        <p className="docs-article-p">
          The REST API method connects directly to your Airflow webserver to pull metadata. When adding this data connector in Connetra, provide the following details:
        </p>
        <ul className="docs-list">
          <li><strong>Configuration name:</strong> A user-friendly label for this connection to help identify the Airflow instance within Connetra.</li>
          <li><strong>Host/server:</strong> The full URL of your Airflow webserver/API (e.g., <code className="docs-inline-code">https://airflow.yourdomain.com</code>).</li>
          <li><strong>User:</strong> The username of an account with sufficient API access to read DAG and run data.</li>
          <li><strong>Password:</strong> The password associated with the Airflow user account.</li>
        </ul>
        <p className="docs-article-p">
          <em>Before you can save the data connector you must first test the connection.</em>
        </p>

        <h2 id="connection-method-openlineage" className="docs-article-h2">
          Connection Method: OpenLineage
        </h2>
        <p className="docs-article-p">
          The OpenLineage connection method allows your Airflow instance to push lineage events dynamically to Connetra as tasks execute. This is the recommended approach for real-time observability.
        </p>
        <p className="docs-article-p">
          When you select the OpenLineage method in Connetra, it will automatically generate the credentials necessary to configure your Airflow environment:
        </p>
        <ul className="docs-list">
          <li><strong>Configuration name:</strong> A user-friendly label for this connection.</li>
          <li><strong>API Token:</strong> A generated token used by Airflow to authenticate its requests to Connetra. You will need to copy this value into your Airflow configuration.</li>
          <li><strong>Events Endpoint:</strong> The endpoint path Connetra provides (e.g., <code className="docs-inline-code">/v1/openlineage/events</code>).</li>
          <li><strong>Events URL:</strong> The base URL where Connetra listens for incoming OpenLineage events.</li>
        </ul>

        <h3 id="step-1-install-openlineage-provider" className="docs-article-h3">
          Step 1: Install the OpenLineage Provider
        </h3>
        <p className="docs-article-p">
          Ensure that the OpenLineage provider package is installed in your Airflow environment:
        </p>
        <pre className="docs-code-block"><code>{`pip install apache-airflow-providers-openlineage`}</code></pre>

        <h3 id="step-2-configure-openlineage-transport" className="docs-article-h3">
          Step 2: Configure OpenLineage Transport
        </h3>
        <p className="docs-article-p">
          Provide a Transport configuration so that OpenLineage knows where to send the events. Keep the API Token, Events URL, and Events Endpoint handy from the previous step.
        </p>
        <p className="docs-article-p">
          Within your <code className="docs-inline-code">airflow.cfg</code> file:
        </p>
        <pre className="docs-code-block"><code>{`[openlineage]
transport = {"type": "http", "url": "<Events URL>", "endpoint": "<Events Endpoint>", "auth": {"type": "api_key", "api_key": "<API Token>"}}`}</code></pre>

        <p className="docs-article-p">
          Or with the <code className="docs-inline-code">AIRFLOW__OPENLINEAGE__TRANSPORT</code> environment variable:
        </p>
        <pre className="docs-code-block"><code>{`export AIRFLOW__OPENLINEAGE__TRANSPORT='{"type": "http", "url": "<Events URL>", "endpoint": "<Events Endpoint>", "auth": {"type": "api_key", "api_key": "<API Token>"}}'`}</code></pre>

        <p className="docs-article-p">
          Once your Airflow environment is configured and restarted, trigger a DAG run in Airflow. You will begin to see metadata and lineage events populating automatically within Connetra.
        </p>
      </DocsContent>
    </DocsLayout>
  );
}
