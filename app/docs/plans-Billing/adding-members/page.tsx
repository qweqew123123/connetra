import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Adding Members | Connetra Documentation",
  description: "Connetra documentation for Adding Members.",
};

export default function AddingMembersPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Adding Members"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Plans & Billing" },
          { label: "Adding Members" }
        ]}
        prevPage={{ title: "Billing Policy", href: "/docs/plans-Billing/billing-policy" }}
        nextPage={{ title: "Removing Members", href: "/docs/plans-Billing/removing-members" }}
      >
<p className="docs-lead-paragraph">
          You can add members to a workspace by going to <strong>‘Settings’ -&gt; ‘Members’</strong> &amp; typing in the email addresses of the members you wish to add.
        </p>

        <DocsImageBox
          src="assets/images/PNG/ss_addingUser.png"
          alt="Adding Members"
          caption="Invite Members to Workspace"
        />
      </DocsContent>
    </DocsLayout>
  );
}
