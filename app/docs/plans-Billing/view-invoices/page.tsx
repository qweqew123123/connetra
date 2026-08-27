import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "View Invoices | Connetra Documentation",
  description: "Connetra documentation for View Invoices.",
};

export default function ViewInvoicesPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="View Invoices"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Plans & Billing" },
          { label: "View Invoices" }
        ]}
        prevPage={{ title: "Changing subscription plan from yearly to monthly", href: "/docs/plans-Billing/changing-subscription-plan-from-yearly-to-monthly" }}
        nextPage={{ title: "Change billing email/address", href: "/docs/plans-Billing/Change-billing-email-address" }}
      >
<p className="docs-lead-paragraph">
          If you go to <strong>‘Settings’ -&gt; ‘Billing Info’</strong> here you can see the billing history of all payments made for the current workspace.
        </p>

        <p className="docs-article-p">
          For each payment you can download the appropriate invoice. Billing invoices will also be attached to the payment confirmation emails.
        </p>
      </DocsContent>
    </DocsLayout>
  );
}
