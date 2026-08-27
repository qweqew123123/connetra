import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Create an account | Connetra Documentation",
  description: "Connetra documentation for Create an account.",
};

export default function CreateanaccountPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Create an account"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Get started" },
          { label: "Create an account" }
        ]}
        prevPage={{ title: "Introduction", href: "/docs/intro" }}
        nextPage={{ title: "Create a workspace", href: "/docs/get-started/create-a-workspace" }}
      >
<p className="docs-lead-paragraph">
          To create an account you must enter a first &amp; last name as well as an email address &amp; password.
          You will be sent an <strong>email verification</strong> email that you need to confirm before you can log into this newly created account.
        </p>

        <DocsImageBox
          src="assets/images/PNG/ss_createaccount.png"
          alt="Create Account"
          caption="Account Registration"
        />
      </DocsContent>
    </DocsLayout>
  );
}
