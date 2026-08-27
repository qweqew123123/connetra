import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Billing Policy | Connetra Documentation",
  description: "Connetra documentation for Billing Policy.",
};

export default function BillingPolicyPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Billing Policy"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Plans & Billing" },
          { label: "Billing Policy" }
        ]}
        prevPage={{ title: "MCP Server", href: "/docs/features/mcp-server" }}
        nextPage={{ title: "Adding Members", href: "/docs/plans-Billing/adding-members" }}
      >
<p className="docs-lead-paragraph">
          At the start of each billing cycle the amount charged is determined by the number of members per workspace.
        </p>

        <p className="docs-article-p">
          <a href="/docs/plans-Billing/adding-members">Adding members</a> results in a prorated calculation. Removing users &amp; changing subscription plans will take effect on the subsequent billing cycle with appropriate prorated credit adjustments.
        </p>
      </DocsContent>
    </DocsLayout>
  );
}
