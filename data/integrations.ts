export interface IntegrationItem {
  name: string;
  icon: string;
}

const item = (name: string, icon: string): IntegrationItem => ({ name, icon });

export const integrationColumns: IntegrationItem[][] = [
  [
    item("MySQL", "mysql"),
    item("Snowflake", "snowflake"),
    item("Slack", "slack"),
    item("PostgreSQL", "postgresql"),
    item("Tableau", "tableau"),
    item("Oracle", "oracle"),
    item("Databricks", "databricks"),
  ],
  [
    item("Google BigQuery", "googlebigquery"),
    item("Microsoft SQL Server", "microsoftsqlserver"),
    item("Apache Airflow", "apacheairflow"),
    item("Amazon Redshift", "amazonredshift"),
    item("Power BI", "powerbi"),
    item("Apache Superset", "apachesuperset"),
    item("MariaDB", "mariadb"),
  ],
  [
    item("PostgreSQL", "postgresql"),
    item("Databricks", "databricks"),
    item("Oracle", "oracle"),
    item("Slack", "slack"),
    item("Google BigQuery", "googlebigquery"),
    item("Tableau", "tableau"),
    item("Apache Airflow", "apacheairflow"),
    item("Apache Druid", "apachedruid"),
  ],
];

/* --- Integrations directory (dedicated /integrations page) ---------------- */

export type IntegrationCategory =
  | "Databases"
  | "Data Warehouses"
  | "BI & Analytics"
  | "Data Tools"
  | "Collaboration"
  | "Workflow";

export interface IntegrationDirectoryItem {
  name: string;
  slug: string;
  category: IntegrationCategory;
  description: string;
  icon: string;
}

const dirItem = (
  name: string,
  slug: string,
  category: IntegrationCategory,
  description: string,
  icon: string
): IntegrationDirectoryItem => ({ name, slug, category, description, icon });

export const integrationCategories: IntegrationCategory[] = [
  "Databases",
  "Data Warehouses",
  "BI & Analytics",
  "Data Tools",
  "Collaboration",
  "Workflow",
];

export const integrationDirectory: IntegrationDirectoryItem[] = [
  dirItem(
    "MySQL",
    "mysql",
    "Databases",
    "Connect MySQL to catalog and discover metadata across your data ecosystem.",
    "/logos/mysql.svg"
  ),
  dirItem(
    "Microsoft SQL Server",
    "mssql",
    "Databases",
    "Connect Microsoft SQL Server and make its data assets searchable in Connetra.",
    "/logos/microsoftsqlserver.svg"
  ),
  dirItem(
    "PostgreSQL",
    "postgresql",
    "Databases",
    "Bring PostgreSQL metadata into Connetra for easier discovery and visibility.",
    "/logos/postgresql.svg"
  ),
  dirItem(
    "Amazon Redshift",
    "redshift",
    "Data Warehouses",
    "Connect Amazon Redshift and discover warehouse assets across your organization.",
    "/logos/amazonredshift.svg"
  ),
  dirItem(
    "Snowflake",
    "snowflake",
    "Data Warehouses",
    "Connect Snowflake to make warehouse metadata easier to discover and understand.",
    "/logos/snowflake.svg"
  ),
  dirItem(
    "Slack",
    "slack",
    "Collaboration",
    "Receive Connetra alert notifications directly through Slack.",
    "/logos/slack.svg"
  ),
  dirItem(
    "Google BigQuery",
    "bigquery",
    "Data Warehouses",
    "Connect Google BigQuery and bring your warehouse metadata into Connetra.",
    "/logos/googlebigquery.svg"
  ),
  dirItem(
    "MariaDB",
    "mariadb",
    "Databases",
    "Connect MariaDB and make database metadata searchable across your ecosystem.",
    "/logos/mariadb.svg"
  ),
  dirItem(
    "Oracle",
    "oracle",
    "Databases",
    "Connect Oracle databases and bring their metadata into your connected data landscape.",
    "/logos/oracle.svg"
  ),
  dirItem(
    "dbt",
    "dbt",
    "Data Tools",
    "Connect dbt to understand and discover your data transformation assets.",
    "/logos/dbt.svg"
  ),
  dirItem(
    "Power BI",
    "powerbi",
    "BI & Analytics",
    "Connect Power BI and discover the data assets behind your dashboards and reports.",
    "/logos/powerbi.svg"
  ),
  dirItem(
    "Tableau",
    "tableau",
    "BI & Analytics",
    "Connect Tableau and make your analytics ecosystem easier to explore.",
    "/logos/tableau.svg"
  ),
  dirItem(
    "Databricks",
    "databricks",
    "Data Warehouses",
    "Connect Databricks and discover data assets across your lakehouse environment.",
    "/logos/databricks.svg"
  ),
  dirItem(
    "Apache Airflow",
    "airflow",
    "Workflow",
    "Connect Apache Airflow to bring workflow and pipeline context into your data ecosystem.",
    "/logos/apacheairflow.svg"
  ),
];
