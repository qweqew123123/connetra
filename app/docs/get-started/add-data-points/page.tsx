import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Add data assets | Connetra Documentation",
  description: "Connetra documentation for Add data assets.",
};

export default function AdddataassetsPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Add data assets"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Get started" },
          { label: "Add data assets" }
        ]}
        prevPage={{ title: "Create a workspace", href: "/docs/get-started/create-a-workspace" }}
        nextPage={{ title: "Add alerts", href: "/docs/get-started/add-alerts" }}
      >
<p className="docs-lead-paragraph">
          To add a new data asset to a workspace you should go to the <strong>&apos;Add&apos;</strong> Page &amp; click on <strong>&apos;Data asset&apos;</strong>. Then you will see:
        </p>

        <ul className="docs-list">
          <li>
            <strong>Columns :</strong> This tab is only available if you select a data connector from the data tools breakdown.
          </li>
          <li>
            <strong>Preview :</strong> Here you can add a url link or sample preview.
          </li>
          <li>
            <strong>Queries :</strong> If there are any commonly-used queries related to this data asset that may be of use to other members, you can add them here.
          </li>
          <li>
            <strong>Lineage :</strong> If this data asset relies on other already-created data assets either upstream or downstream then add them to the lineage.
          </li>
        </ul>
      </DocsContent>
    </DocsLayout>
  );
}
