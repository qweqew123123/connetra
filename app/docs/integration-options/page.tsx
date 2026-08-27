import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Integrations | Connetra Documentation",
  description: "Connetra documentation for Integrations.",
};

export default function IntegrationsPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Integrations"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Integrations" },
          { label: "Integrations" }
        ]}
        prevPage={{ title: "Single Sign-On", href: "/docs/authentication-access/single-sign-on" }}
        nextPage={{ title: "MCP Server", href: "/docs/features/mcp-server" }}
      >
<p className="docs-lead-paragraph">
          Connect third-party communications and automation tools to streamline alert notifications across your team.
        </p>

        <h2 id="slack-integration" className="docs-article-h2">
          Slack
        </h2>
        <p className="docs-article-p">
          With Connetra, you can use Slack to send alert notifications to be notified when alerts are firing, warning you of potential data validation fails. Slack needs to be enabled by each user in the workspace in order to use it as a method for communication.
        </p>

        <DocsImageBox
          src="assets/images/PNG/ss_slack.png"
          alt="Slack Integration Setup"
          caption="Slack Channel Notification Integration"
        />
      </DocsContent>
    </DocsLayout>
  );
}
