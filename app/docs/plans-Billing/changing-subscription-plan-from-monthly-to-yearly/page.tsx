import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Changing subscription plan from monthly to yearly | Connetra Documentation",
  description: "Connetra documentation for Changing subscription plan from monthly to yearly.",
};

export default function ChangingsubscriptionplanfrommonthlytoyearlyPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Changing subscription plan from monthly to yearly"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Plans & Billing" },
          { label: "Changing subscription plan from monthly to yearly" }
        ]}
        prevPage={{ title: "Removing Members", href: "/docs/plans-Billing/removing-members" }}
        nextPage={{ title: "Changing subscription plan from yearly to monthly", href: "/docs/plans-Billing/changing-subscription-plan-from-yearly-to-monthly" }}
      >
<p className="docs-lead-paragraph">
          You can change the subscription plan by going to <strong>‘Settings’ -&gt; ‘Billing Info’</strong> &amp; clicking on <strong>‘Change Subscription’</strong>.
        </p>

        <p className="docs-article-p">
          When you change the subscription plan we apply prorated credit that is applied on the subsequent invoice.
        </p>

        <DocsImageBox
          src="assets/images/PNG/ss_changingSubscriptionmToy.png"
          alt="Changing subscription plan from monthly to yearly"
          caption="Switch Plan to Annual Billing"
        />
      </DocsContent>
    </DocsLayout>
  );
}
