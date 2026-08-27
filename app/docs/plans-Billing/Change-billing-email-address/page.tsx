import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Change billing email/address | Connetra Documentation",
  description: "Connetra documentation for Change billing email/address.",
};

export default function ChangebillingemailaddressPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Change billing email/address"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Plans & Billing" },
          { label: "Change billing email/address" }
        ]}
        prevPage={{ title: "View Invoices", href: "/docs/plans-Billing/view-invoices" }}
        nextPage={{ title: "Cancel subscription", href: "/docs/plans-Billing/cancel-subscription" }}
      >
<p className="docs-lead-paragraph">
          If you would like to alter the billing address for your workspace please email us at <strong>contact@connetra.com</strong>.
        </p>

        <p className="docs-article-p">
          If you want to change the billing email for the workspace, the workspace owner can go to <strong>‘Settings’ -&gt; ‘Billing Info’</strong> and update the designated billing contact email.
        </p>
      </DocsContent>
    </DocsLayout>
  );
}
