export interface DocLinkItem {
  title: string;
  href: string;
}

export interface DocSection {
  title: string;
  href?: string;
  items?: DocLinkItem[];
}

export const docsNavigation: DocSection[] = [
  {
    title: "Introduction",
    href: "/docs/intro",
  },
  {
    title: "Get started",
    items: [
      {
        title: "Create an account",
        href: "/docs/get-started/create-an-account",
      },
      {
        title: "Create a workspace",
        href: "/docs/get-started/create-a-workspace",
      },
      {
        title: "Add data assets",
        href: "/docs/get-started/add-data-points",
      },
      {
        title: "Add alerts",
        href: "/docs/get-started/add-alerts",
      },
      {
        title: "Roles and Permissions",
        href: "/docs/get-started/roles-permissions",
      },
    ],
  },
  {
    title: "Data Sources",
    items: [
      {
        title: "Overview",
        href: "/docs/data-sources/overview",
      },
      {
        title: "MySQL",
        href: "/docs/data-sources/mysql",
      },
      {
        title: "MSSQL",
        href: "/docs/data-sources/mssql",
      },
      {
        title: "PostgreSQL",
        href: "/docs/data-sources/postgreSQL",
      },
      {
        title: "Redshift",
        href: "/docs/data-sources/redshift",
      },
      {
        title: "Snowflake",
        href: "/docs/data-sources/snowflake",
      },
      {
        title: "Google BigQuery",
        href: "/docs/data-sources/google-bigquery",
      },
      {
        title: "MariaDB",
        href: "/docs/data-sources/mariaDB",
      },
      {
        title: "Oracle",
        href: "/docs/data-sources/oracle",
      },
      {
        title: "DBT",
        href: "/docs/data-sources/dbt",
      },
      {
        title: "Power BI",
        href: "/docs/data-sources/powerbi",
      },
      {
        title: "Tableau",
        href: "/docs/data-sources/tableau",
      },
      {
        title: "Databricks",
        href: "/docs/data-sources/databricks",
      },
      {
        title: "Airflow",
        href: "/docs/data-sources/airflow",
      },
    ],
  },
  {
    title: "Privacy & Security",
    href: "/docs/privacy-security",
  },
  {
    title: "Authentication & Access",
    items: [
      {
        title: "Two-Factor Authentication",
        href: "/docs/authentication-access/two-factor-authentication",
      },
      {
        title: "Single Sign-On",
        href: "/docs/authentication-access/single-sign-on",
      },
    ],
  },
  {
    title: "Integrations",
    href: "/docs/integration-options",
  },
  {
    title: "Features",
    items: [
      {
        title: "MCP Server",
        href: "/docs/features/mcp-server",
      },
    ],
  },
  {
    title: "Plans & Billing",
    items: [
      {
        title: "Billing Policy",
        href: "/docs/plans-Billing/billing-policy",
      },
      {
        title: "Adding Members",
        href: "/docs/plans-Billing/adding-members",
      },
      {
        title: "Removing Members",
        href: "/docs/plans-Billing/removing-members",
      },
      {
        title: "Changing subscription plan from monthly to yearly",
        href: "/docs/plans-Billing/changing-subscription-plan-from-monthly-to-yearly",
      },
      {
        title: "Changing subscription plan from yearly to monthly",
        href: "/docs/plans-Billing/changing-subscription-plan-from-yearly-to-monthly",
      },
      {
        title: "View Invoices",
        href: "/docs/plans-Billing/view-invoices",
      },
      {
        title: "Change billing email/address",
        href: "/docs/plans-Billing/Change-billing-email-address",
      },
      {
        title: "Cancel subscription",
        href: "/docs/plans-Billing/cancel-subscription",
      },
    ],
  },
];

export interface DocSearchRecord {
  title: string;
  section: string;
  url: string;
  excerpt: string;
  keywords?: string[];
}

export const docsSearchIndex: DocSearchRecord[] = [
  {
    title: "Introduction",
    section: "Getting Started",
    url: "/docs/intro#introduction",
    excerpt: "Welcome to Connetra, the data catalog tool that empowers organizations with complete visibility into their interconnected ecosystem of data.",
    keywords: ["intro", "welcome", "catalog", "ecosystem", "visibility", "search", "alerts"],
  },
  {
    title: "Overview of Connetra",
    section: "Introduction",
    url: "/docs/intro#overview-of-connetra",
    excerpt: "Connetra is a powerful data catalog tool designed to provide organizations with complete visibility into their interconnected data ecosystem.",
    keywords: ["overview", "snowflake", "mssql", "mysql", "redshift", "metadata", "discovery"],
  },
  {
    title: "Create an account",
    section: "Get started",
    url: "/docs/get-started/create-an-account",
    excerpt: "Get started with Connetra by creating your organization account and setting up initial access.",
    keywords: ["signup", "register", "onboarding", "account"],
  },
  {
    title: "Create a workspace",
    section: "Get started",
    url: "/docs/get-started/create-a-workspace",
    excerpt: "Create dedicated workspaces for your team data environments and projects.",
    keywords: ["workspace", "team", "organization", "project"],
  },
  {
    title: "Add data assets",
    section: "Get started",
    url: "/docs/get-started/add-data-points",
    excerpt: "Connect and catalog data assets, tables, pipelines, and warehouses across your infrastructure.",
    keywords: ["assets", "tables", "datasets", "points", "schema"],
  },
  {
    title: "Add alerts",
    section: "Get started",
    url: "/docs/get-started/add-alerts",
    excerpt: "Build complex automated alerts and monitor data pipeline health, drift, and accuracy.",
    keywords: ["alerts", "monitoring", "accuracy", "health", "notifications"],
  },
  {
    title: "Roles and Permissions",
    section: "Get started",
    url: "/docs/get-started/roles-permissions",
    excerpt: "Configure granular user roles, access control policies, and organizational permissions.",
    keywords: ["roles", "permissions", "access control", "rbac", "security"],
  },
  {
    title: "Data Sources Overview",
    section: "Data Sources",
    url: "/docs/data-sources/overview",
    excerpt: "Connect to major databases, warehouses, and data platforms supported by Connetra.",
    keywords: ["sources", "connectors", "databases", "warehouses"],
  },
  {
    title: "Snowflake Connector",
    section: "Data Sources",
    url: "/docs/data-sources/snowflake",
    excerpt: "Explore and understand metadata, schema changes, and lineage from Snowflake.",
    keywords: ["snowflake", "warehouse", "cloud", "data"],
  },
  {
    title: "MySQL Connector",
    section: "Data Sources",
    url: "/docs/data-sources/mysql",
    excerpt: "Connect MySQL instances and discover table definitions, relations, and metadata.",
    keywords: ["mysql", "database", "sql"],
  },
  {
    title: "MSSQL Connector",
    section: "Data Sources",
    url: "/docs/data-sources/mssql",
    excerpt: "Integrate Microsoft SQL Server databases for automated metadata discovery.",
    keywords: ["mssql", "sql server", "microsoft"],
  },
  {
    title: "PostgreSQL Connector",
    section: "Data Sources",
    url: "/docs/data-sources/postgreSQL",
    excerpt: "Sync PostgreSQL schemas, columns, types, and constraints into your Connetra catalog.",
    keywords: ["postgres", "postgresql", "database"],
  },
  {
    title: "Amazon Redshift Connector",
    section: "Data Sources",
    url: "/docs/data-sources/redshift",
    excerpt: "Connect Amazon Redshift clusters for unified data cataloging and governance.",
    keywords: ["redshift", "aws", "amazon", "cluster"],
  },
  {
    title: "Google BigQuery Connector",
    section: "Data Sources",
    url: "/docs/data-sources/google-bigquery",
    excerpt: "Discover datasets, tables, and partitions from Google Cloud BigQuery.",
    keywords: ["bigquery", "google cloud", "gcp"],
  },
  {
    title: "MCP Server",
    section: "Features",
    url: "/docs/features/mcp-server",
    excerpt: "Connetra Model Context Protocol (MCP) server integration for AI-powered metadata exploration.",
    keywords: ["mcp", "ai", "model context protocol", "server", "agent"],
  },
  {
    title: "Billing Policy & Subscriptions",
    section: "Plans & Billing",
    url: "/docs/plans-Billing/billing-policy",
    excerpt: "Learn about billing schedules, plan upgrades, team seat management, and invoice history.",
    keywords: ["billing", "plans", "invoices", "subscription", "members"],
  },
];
