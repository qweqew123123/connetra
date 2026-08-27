import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Cancel subscription | Connetra Documentation",
  description: "Connetra documentation for Cancel subscription.",
};

export default function CancelsubscriptionPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Cancel subscription"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Plans & Billing" },
          { label: "Cancel subscription" }
        ]}
        prevPage={{ title: "Change billing email/address", href: "/docs/plans-Billing/Change-billing-email-address" }}
        
      >
<p className="docs-lead-paragraph">
          If you wish to cancel a current subscription, then the workspace admin can go to the <strong>‘Settings’ -&gt; ‘Billing Info’</strong> &amp; click the <strong>‘Cancel Subscription’</strong> button.
        </p>
      </DocsContent>
    </DocsLayout>
  );
}
