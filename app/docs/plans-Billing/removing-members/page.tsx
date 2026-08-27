import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Removing Members | Connetra Documentation",
  description: "Connetra documentation for Removing Members.",
};

export default function RemovingMembersPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Removing Members"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Plans & Billing" },
          { label: "Removing Members" }
        ]}
        prevPage={{ title: "Adding Members", href: "/docs/plans-Billing/adding-members" }}
        nextPage={{ title: "Changing subscription plan from monthly to yearly", href: "/docs/plans-Billing/changing-subscription-plan-from-monthly-to-yearly" }}
      >
<p className="docs-lead-paragraph">
          You can remove members from a workspace by going to <strong>‘Settings’ -&gt; ‘Members’</strong> &amp; removing the email addresses you wish to remove.
        </p>

        <DocsImageBox
          src="assets/images/PNG/ss_removeingUser.png"
          alt="Removing Members"
          caption="Remove Workspace Members"
        />
      </DocsContent>
    </DocsLayout>
  );
}
