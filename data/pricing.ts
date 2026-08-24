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
    href: "https://app.connetra.com/createaccount",
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
    href: "https://app.connetra.com/createaccount",
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
  { id: "basic", name: "Basic", price: "₹0/mo", sub: "try for free", cta: "Get started", href: "https://app.connetra.com/createaccount", highlighted: false },
  { id: "starter", name: "Starter", price: "₹1,499/mo", sub: "billed yearly", cta: "Get started", href: "https://app.connetra.com/createaccount", highlighted: false },
  { id: "creator", name: "Creator", price: "₹4,649/mo", sub: "billed yearly", cta: "Get started", href: "https://app.connetra.com/createaccount", highlighted: true },
  { id: "enterprise", name: "Enterprise", price: "Custom", sub: "tailored pricing", cta: "Book demo", href: "mailto:contact@connetra.com?subject=Enterprise%20Plan", highlighted: false },
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
