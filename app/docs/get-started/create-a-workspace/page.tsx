import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Create a workspace | Connetra Documentation",
  description: "Connetra documentation for Create a workspace.",
};

export default function CreateaworkspacePage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Create a workspace"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Get started" },
          { label: "Create a workspace" }
        ]}
        prevPage={{ title: "Create an account", href: "/docs/get-started/create-an-account" }}
        nextPage={{ title: "Add data assets", href: "/docs/get-started/add-data-points" }}
      >
<p className="docs-lead-paragraph">
          There are five steps to create a new workspace. First you must create a Connetra account &amp; then there are four steps in the workspace setup wizard.
        </p>

        <p className="docs-article-p">
          Once you have a Connetra account &amp; you log-in you must complete the <strong>4-stage workspace</strong> set-up process. This consists of:
        </p>

        <h2 id="create-workspace-name" className="docs-article-h2">
          Create a workspace name
        </h2>
        <p className="docs-article-p">
          First you must enter the <strong>company name</strong> &amp; <strong>a team address</strong>.
        </p>
        <DocsImageBox
          src="assets/images/PNG/ss_workSpaceName.png"
          alt="Workspace Name"
          caption="Workspace Name &amp; Team Details"
        />

        <h2 id="add-members" className="docs-article-h2">
          Add members to a workspace
        </h2>
        <p className="docs-article-p">
          Next you will be asked to add members to this newly created workspace. There are a couple of ways to do this:
        </p>
        <p className="docs-article-p">
          By clicking the &apos;Add Member&apos; button you can type in the email address of the member you want to add. You will be asked which role to give this user. See <a href="/docs/get-started/roles-permissions">Roles &amp; Permissions</a> for an overview of the permissions differences between the workspace owner, admin &amp; user roles.
        </p>
        <DocsImageBox
          src="assets/images/PNG/ss_addMemberToWorkSpace.png"
          alt="Add Members"
          caption="Invite Members to Workspace"
        />

        <h2 id="add-data-connectors" className="docs-article-h2">
          Add data connectors to a workspace
        </h2>
        <p className="docs-article-p">
          Select the data connectors you wish to add to your workspace:
        </p>
        <ul className="docs-list">
          <li>MySQL</li>
          <li>MSSQL</li>
          <li>PostgreSQL</li>
          <li>Redshift</li>
          <li>Snowflake</li>
          <li>Google BigQuery</li>
          <li>MariaDB</li>
          <li>Oracle</li>
          <li>DBT</li>
          <li>Power BI</li>
          <li>Tableau</li>
          <li>Databricks</li>
          <li>Airflow</li>
        </ul>
        <p className="docs-article-p">
          See <a href="/docs/data-sources/overview">Data Sources</a> for a more in-depth view on how to add each data connector to your workspace.
        </p>
        <DocsImageBox
          src="assets/images/PNG/ss_dataConnectores.png"
          alt="Data Connectors"
          caption="Select Data Connectors"
        />

        <h2 id="add-breakdowns" className="docs-article-h2">
          Add breakdowns to a workspace
        </h2>
        <p className="docs-article-p">
          The final step required is to input the dimension breakdowns &amp; valid values. Each time that a member creates a new data asset, they will tag it according to these breakdowns.
        </p>
        <p className="docs-article-p">
          There are 4 breakdowns that are required for each workspace:
        </p>
        <ol className="docs-ordered-list">
          <li>Data Domain (e.g. Marketing, Sales, Finance, Engineering)</li>
          <li>Data Tier (e.g. Tier 1 Mission Critical, Tier 2 Operational, Tier 3 Analytical)</li>
          <li>Update Frequency (e.g. Real-time, Hourly, Daily, Weekly, Monthly)</li>
          <li>Data Owner (e.g. Analytics Team, Data Eng, Product Operations)</li>
        </ol>
        <DocsImageBox
          src="assets/images/PNG/ss_addBreakDown.png"
          alt="Add Breakdowns"
          caption="Configure Workspace Breakdowns"
        />
      </DocsContent>
    </DocsLayout>
  );
}
