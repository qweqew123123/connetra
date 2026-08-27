import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Privacy & Security | Connetra Documentation",
  description: "Connetra documentation for Privacy & Security.",
};

export default function PrivacySecurityPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Privacy & Security"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Privacy & Security" },
          { label: "Privacy & Security" }
        ]}
        prevPage={{ title: "Airflow", href: "/docs/data-sources/airflow" }}
        nextPage={{ title: "Two-Factor Authentication", href: "/docs/authentication-access/two-factor-authentication" }}
      >
<p className="docs-lead-paragraph">
          Connetra is engineered with strict security standards to ensure your metadata, secrets, and architecture remain completely protected.
        </p>

        <h2 id="encryption" className="docs-article-h2">
          Encryption
        </h2>
        <p className="docs-article-p">
          We use industry-standard encryption technology to protect your data when it is transmitted over the internet (TLS 1.3). This means that any information you send to us, such as your login credentials or metadata requests, is encrypted and protected from interception by third parties.
        </p>
        <p className="docs-article-p">
          Data at rest, including all connection credentials, access tokens, and passwords, is securely encrypted using AES-256 standard encryption.
        </p>

        <h2 id="metadata-only-architecture" className="docs-article-h2">
          Metadata-Only Architecture
        </h2>
        <p className="docs-article-p">
          Connetra operates on a metadata-only basis. Our connectors query schema definitions, table catalogs, data dictionaries, and execution logs. Connetra never extracts, copies, or stores your organization&apos;s customer data.
        </p>
      </DocsContent>
    </DocsLayout>
  );
}
