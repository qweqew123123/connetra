import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Add alerts | Connetra Documentation",
  description: "Connetra documentation for Add alerts.",
};

export default function AddalertsPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Add alerts"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Get started" },
          { label: "Add alerts" }
        ]}
        prevPage={{ title: "Add data assets", href: "/docs/get-started/add-data-points" }}
        nextPage={{ title: "Roles and Permissions", href: "/docs/get-started/roles-permissions" }}
      >
<p className="docs-lead-paragraph">
          To add a new alert to a workspace you should go to the <strong>&apos;Add&apos;</strong> Page &amp; click on <strong>&apos;Alert&apos;</strong>. Then you will be given the option to choose which data asset you want to create an alert for. You can only select data assets that have data connectors attached (as Connetra needs to use that connection to run the alert).
        </p>

        <p className="docs-article-p">
          Once you have selected the data asset for which you want to create an alert, you need to select the date column on which you want the alert to run.
        </p>

        <p className="docs-article-p">
          There is the &apos;Other Filter&apos; option if you want to add an additional dimension criteria to your alert.
        </p>

        <p className="docs-article-p">
          In order to help you with the alert creation, in the top right corner you will see a preview of the selected table for which the alert is running.
        </p>

        <p className="docs-article-p">
          Secondly, once you have added the appropriate alert conditions, you will be required to &apos;Check Alert&apos; prior to setting the alert live.
        </p>

        <p className="docs-article-p">
          The x-axis is the granularity selected, with the number of bars indicated by the timeframe considered. The y-axis is the metric value or record count.
        </p>

        <DocsImageBox
          src="assets/images/PNG/ss_addAlert.png"
          alt="Add Alert Screen"
          caption="Configure Automated Data Quality Alert"
        />
      </DocsContent>
    </DocsLayout>
  );
}
