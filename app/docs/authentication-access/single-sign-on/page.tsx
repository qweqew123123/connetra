import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Single Sign-On | Connetra Documentation",
  description: "Connetra documentation for Single Sign-On.",
};

export default function SingleSignOnPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Single Sign-On"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Authentication & Access" },
          { label: "Single Sign-On" }
        ]}
        prevPage={{ title: "Two-Factor Authentication", href: "/docs/authentication-access/two-factor-authentication" }}
        nextPage={{ title: "Integrations", href: "/docs/integration-options" }}
      >
<p className="docs-lead-paragraph">
          Connetra supports Single Sign-On (SSO) via SAML, enabling seamless and secure access to your workspaces. By integrating with Identity Providers (IdP) such as Google, Azure AD, Okta, and Auth0, Workspace Owners can centralize authentication, improve security, and simplify user management.
        </p>

        <h2 id="configuring-sso-in-connetra" className="docs-article-h2">
          Configuring SSO in Connetra
        </h2>
        <p className="docs-article-p">
          To set up SSO for your workspace, follow these steps:
        </p>
        <ol className="docs-ordered-list">
          <li>
            Navigate to your <strong>Workspace Settings</strong> and select the <strong>SSO</strong> tab.
          </li>
          <li>
            Choose your SAML Identity Provider from the available options (e.g., Google, Azure AD, Okta, Auth0).
          </li>
          <li>
            You will be provided with Connetra&apos;s <strong>Service Metadata</strong>:
            <ul className="docs-list">
              <li><strong>Identifier (Entity ID):</strong> The URL used to identify Connetra to your IdP.</li>
              <li><strong>Reply URL (ACS URL):</strong> The destination where the IdP will send the SAML assertion.</li>
              <li><strong>Logout URL:</strong> The URL used for Single Logout (SLO).</li>
            </ul>
          </li>
          <li>
            Configure your Identity Provider using the provided Service Metadata.
          </li>
          <li>
            Once configured on the IdP side, enter the IdP details into Connetra (SSO Endpoint URL, Entity ID, and X.509 Certificate).
          </li>
        </ol>
      </DocsContent>
    </DocsLayout>
  );
}
