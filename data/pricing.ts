export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice: number;
  yearlyPrice: number;
  credits: string;
  creditsNote?: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "monthly",
    name: "Starter",
    badge: "Most popular",
    monthlyPrice: 40,
    yearlyPrice: 34.17,
    credits: "1000 + 5000",
    creditsNote: "AI credits",
    features: [
      "Data lineage exploration",
      "Data alerting & monitoring",
      "Customizable data classification breakdowns",
      "Intuitive searching & filtering",
      "Integrations (MySQL, MSSQL, Snowflake, Redshift, Slack, Postgresql, Google BigQuery, MariaDB, Oracle, DBT, Power BI, Tableau, Databricks, Airflow)",
      "Import/Export functionality",
      "Flexible timeline view",
      "Email support",
    ],
    cta: "Try 14 day free trial",
    href: "/createaccount",
    highlighted: true,
  },
  {
    id: "yearly",
    name: "Growth",
    monthlyPrice: 35,
    yearlyPrice: 29,
    credits: "1000",
    creditsNote: "AI credits",
    features: [
      "Data lineage exploration",
      "Data alerting & monitoring",
      "Customizable data classification breakdowns",
      "Intuitive searching & filtering",
      "Integrations (MySQL, MSSQL, Snowflake, Redshift, Slack, Postgresql, Google BigQuery, MariaDB, Oracle, DBT, Power BI, Tableau, Databricks, Airflow)",
      "Import/Export functionality",
      "Flexible timeline view",
      "Email support",
    ],
    cta: "Try 14 day free trial",
    href: "/createaccount",
  },
];

export const customPlan = {
  name: "Custom Plan",
  description: "Have specific requirements? Let us know and we'll build a plan for you.",
  features: ["Custom AI credits", "Custom support", "Custom usage limits", "Add-ons"],
  cta: "Mail us for custom request",
  href: "mailto:contact@connetra.com?subject=Custom%20Plan%20Request&body=I%20would%20like%20to%20discuss%20a%20custom%20plan.",
  note: "Our team will get back to you within 1 business day.",
};

export const pricingOverviewPlans = [
  { id: "basic", name: "Basic", price: "₹0/mo", sub: "try for free", cta: "Get started", href: "/createaccount", highlighted: false },
  { id: "starter", name: "Starter", price: "₹1,499/mo", sub: "billed yearly", cta: "Get started", href: "/createaccount", highlighted: false },
  { id: "creator", name: "Creator", price: "₹4,649/mo", sub: "billed yearly", cta: "Get started", href: "/createaccount", highlighted: true },
  { id: "enterprise", name: "Enterprise", price: "Custom", sub: "tailored pricing", cta: "Book demo", href: "mailto:contact@connetra.com?subject=Enterprise%20Plan", highlighted: false },
];

export interface DetailedItem {
  title: string;
  description: string;
}

export interface DetailedCategory {
  category: string;
  items: DetailedItem[];
}

export const detailedCategories: DetailedCategory[] = [
  {
    category: "USAGE",
    items: [
      {
        title: "Unlimited Data Sources",
        description:
          "Connect as many database and warehouse sources as your organization requires. Connetra supports direct connection to MySQL, MSSQL, Snowflake, Redshift, PostgreSQL, Google BigQuery, MariaDB, Oracle, DBT, Power BI, Tableau, Databricks, and Airflow with no artificial caps or connector limits.",
      },
      {
        title: "Unlimited Data Assets",
        description:
          "Catalog every table, view, schema, dashboard, analysis, and data document across your entire ecosystem. Whether managing hundreds or tens of millions of assets, your workspace scales seamlessly with no restrictions.",
      },
      {
        title: "Unlimited Alerts",
        description:
          "Create as many proactive monitoring alerts as needed across your connected data assets. Set up notifications for schema drift, structural table changes, and freshness anomalies to ensure data reliability across teams.",
      },
    ],
  },
  {
    category: "PAGES",
    items: [
      {
        title: "Explore: Fully Flexible Data Lineage View",
        description:
          "An interactive visual canvas that maps upstream and downstream table relationships and dependencies. Easily trace where data originates, how it transforms, and which downstream dashboards and reports rely on it.",
      },
      {
        title: "Timeline: Display Data In Chronological Order With Filtering & Breakdown Functionality",
        description:
          "A dedicated timeline interface that displays your metadata history in chronological order. Apply multi-attribute filters and classification breakdowns to track schema changes, table updates, and dataset evolution over time.",
      },
      {
        title: "Search: Tabular Results Of Data Assets",
        description:
          "A fast, intuitive tabular search engine that allows teams to search across all data assets, inspect table metadata, review descriptions, filter by domain, and find trusted data instantly.",
      },
      {
        title: "Add: Input Data Assets & Create Alerts",
        description:
          "A streamlined workflow to connect new data sources, register catalog assets, configure custom classification tags, and immediately attach real-time monitoring rules.",
      },
    ],
  },
  {
    category: "FEATURES",
    items: [
      {
        title: "Integrations (MySQL, MSSQL, Snowflake, Redshift, Slack, Postgresql, Google BigQuery, MariaDB, Oracle, DBT, Power BI, Tableau, Databricks)",
        description:
          "Native pre-built integrations for modern databases, warehouses, BI platforms, and orchestration tools including MySQL, MSSQL, Snowflake, Amazon Redshift, PostgreSQL, Google BigQuery, MariaDB, Oracle, DBT, Power BI, Tableau, Databricks, Airflow, and Slack.",
      },
      {
        title: "Embed Preview Of Documents From Google Drive/Box/OneDrive",
        description:
          "Embed and preview live data documentation, dictionaries, and project specifications directly alongside cataloged tables using seamless integrations with Google Drive, Box, and Microsoft OneDrive.",
      },
      {
        title: "Customizable Breakdowns To Allow For Easy Discovery",
        description:
          "Define custom multi-tiered classification hierarchies and tagging schemas to group data assets by business domain, project, team, or lifecycle stage for intuitive team discovery and governance.",
      },
      {
        title: "Simple Alert Creation To Allow For Data Monitoring",
        description:
          "Easily configure condition-based and threshold-based monitoring rules on active data connectors to detect schema alterations, column removals, and data pipeline delays with instant team notifications.",
      },
      {
        title: "Metadata & Preview Of Tables",
        description:
          "Inspect table schema definitions, column data types, row counts, and sample records directly in the interface without needing to write warehouse queries or run external scripts.",
      },
      {
        title: "Import/Export (CSV)",
        description:
          "Export asset catalogs and metadata definitions to CSV for offline reporting, or bulk import existing documentation and tag taxonomies directly into your Connetra workspace.",
      },
      {
        title: "Email Support",
        description:
          "Direct email support from our engineering and product team to assist with workspace setup, data connector configuration, and custom catalog requirements.",
      },
    ],
  },
];

export const comparisonSections = [
  {
    title: "USAGE",
    rows: [
      { label: "Unlimited data sources", basic: true, starter: true, growth: true, custom: true },
      { label: "Unlimited data assets", basic: true, starter: true, growth: true, custom: true },
      { label: "Unlimited alerts", basic: true, starter: true, growth: true, custom: true },
    ],
  },
  {
    title: "PAGES",
    rows: [
      { label: "Explore: Fully flexible data lineage view", basic: true, starter: true, growth: true, custom: true },
      { label: "Timeline: Display Data in Chronological Order With Filtering & Breakdown", basic: true, starter: true, growth: true, custom: true },
      { label: "Search: Tabular results of data assets", basic: true, starter: true, growth: true, custom: true },
      { label: "Add: input data assets & create alerts", basic: true, starter: true, growth: true, custom: true },
    ],
  },
  {
    title: "FEATURES",
    rows: [
      { label: "Integrations (MySQL, MSSQL, Snowflake, Redshift, Slack, Postgresql, Google BigQuery, MariaDB, Oracle, DBT, Power BI, Tableau, Databricks)", basic: true, starter: true, growth: true, custom: true },
      { label: "Embed preview of documents from Google Drive/Box/OneDrive", basic: true, starter: true, growth: true, custom: true },
      { label: "Customizable breakdowns to allow for easy discovery", basic: true, starter: true, growth: true, custom: true },
      { label: "Simple alert creation to allow for data monitoring", basic: true, starter: true, growth: true, custom: true },
      { label: "Metadata & preview of tables", basic: true, starter: true, growth: true, custom: true },
      { label: "Import/export (CSV)", basic: true, starter: true, growth: true, custom: true },
      { label: "Email support", basic: true, starter: true, growth: true, custom: true },
    ],
  },
];

export const faqs = [
  {
    q: "What are the set-up steps for creating a workspace?",
    a: "There are five steps to create a new workspace. First you must create a Connetra account & then there are four steps in the initialisation of the new workspace. Once you have a Connetra account & you log-in you must complete the 4-stage workspace set-up process. This consists of: Create workspace name, Invite team members, Integrate data sources, Customize breakdowns.",
  },
  {
    q: "What data connectors are available?",
    a: "Currently, available data connectors are: MySQL, MSSQL, Redshift, Snowflake, Postgresql, Google BigQuery, MariaDB, Oracle, DBT, Power BI, Tableau, Databricks, Airflow. Let us know at contact@connetra.com if we are missing any data connectors you would like added!",
  },
  {
    q: "When I add a member to my workspace, how do I get charged?",
    a: "When you add a new member to an existing workspace you will be charged a prorated fee for the remainder of the subscription period (either month or year depending on the subscription plan).",
  },
  {
    q: "What happens at the end of the trial period?",
    a: "Once the free trial period has ended, should the workspace owner wish to continue using Connetra they will be required to join a subscription plan (either monthly or yearly) so that users can continue to access their workspace.",
  },
  {
    q: "What are your accepted payment options?",
    a: "We accept major credit & debit card brands, such as Visa, MasterCard & American Express.",
  },
  {
    q: "How secure is Connetra?",
    a: "We use encryption in transit & at rest, a CI Service Provider Level 1 payment processor, regular backups & AWS web hosting to keep your data safe.",
  },
];
