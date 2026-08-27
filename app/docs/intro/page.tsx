import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "Introduction | Connetra Documentation",
  description: "Connetra documentation for Introduction.",
};

export default function IntroductionPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="Introduction"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Introduction" }
        ]}
        
        nextPage={{ title: "Create an account", href: "/docs/get-started/create-an-account" }}
      >
<p className="docs-lead-paragraph">
          Welcome to Connetra, the data catalog tool that empowers organizations
          with complete visibility into their interconnected ecosystem of data.
          With Connetra, you can quickly and easily search, explore data
          breakdowns, build complex alerts, and gain insights into data accuracy.
          This application documentation will guide you through the features and
          functionalities of Connetra, helping you make the most of this
          powerful tool.
        </p>

        <h2 id="overview-of-connetra" className="docs-article-h2">
          Overview of Connetra
        </h2>

        <p className="docs-article-p">
          Connetra is a powerful data catalog tool designed to provide
          organizations with complete visibility into their interconnected data
          ecosystem. With Connetra, users can explore and understand the
          metadata of various data sources, including Snowflake, MSSQL, MySQL,
          and Amazon Redshift. The tool allows for easy search and discovery,
          empowering users to make better decisions based on accurate and
          up-to-date information.
        </p>
      </DocsContent>
    </DocsLayout>
  );
}
