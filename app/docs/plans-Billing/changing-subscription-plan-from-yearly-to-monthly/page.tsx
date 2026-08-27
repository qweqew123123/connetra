import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Changing subscription plan from yearly to monthly | Connetra Documentation",
  description: "Connetra documentation for Changing subscription plan from yearly to monthly.",
};

export default function ChangingsubscriptionplanfromyearlytomonthlyPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Changing subscription plan from yearly to monthly"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Plans & Billing" },
          { label: "Changing subscription plan from yearly to monthly" }
        ]}
        prevPage={{ title: "Changing subscription plan from monthly to yearly", href: "/docs/plans-Billing/changing-subscription-plan-from-monthly-to-yearly" }}
        nextPage={{ title: "View Invoices", href: "/docs/plans-Billing/view-invoices" }}
      >
<p className="docs-lead-paragraph">
          You can change the subscription plan by going to <strong>‘Settings’ -&gt; ‘Billing Info’</strong> &amp; clicking on <strong>‘Change Subscription’</strong>.
        </p>

        <p className="docs-article-p">
          When you change the subscription plan we apply prorated credit that is applied on the subsequent invoice.
        </p>

        <DocsImageBox
          src="assets/images/PNG/ss_changingSubscriptionyTom.png"
          alt="Changing subscription plan from yearly to monthly"
          caption="Switch Plan to Monthly Billing"
        />
      </DocsContent>
    </DocsLayout>
  );
}
