import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Roles and Permissions | Connetra Documentation",
  description: "Connetra documentation for Roles and Permissions.",
};

export default function RolesandPermissionsPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Roles and Permissions"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Get started" },
          { label: "Roles and Permissions" }
        ]}
        prevPage={{ title: "Add alerts", href: "/docs/get-started/add-alerts" }}
        nextPage={{ title: "Overview", href: "/docs/data-sources/overview" }}
      >
<p className="docs-lead-paragraph">
          Below is an overview of the permission differences between the different roles of workspace owner, admins &amp; user:
        </p>

        <DocsImageBox
          src="assets/images/PNG/ss_role-permissions.png"
          alt="Roles and Permissions"
          caption="Workspace Roles &amp; Permissions Overview"
        />

        <h2 id="roles-summary" className="docs-article-h2">
          Role Capabilities
        </h2>
        <ul className="docs-list">
          <li>
            <strong>Workspace Owner:</strong> Full administration privileges including workspace deletion, billing management, inviting/removing admins, setting up SSO, and enforcing Two-Factor Authentication.
          </li>
          <li>
            <strong>Workspace Admin:</strong> Manage data connectors, create and edit catalog assets, configure automated alerts, and invite new members.
          </li>
          <li>
            <strong>Workspace Member / User:</strong> Search the data catalog, inspect schema definitions, view lineage graphs, and view alert history.
          </li>
        </ul>
      </DocsContent>
    </DocsLayout>
  );
}
