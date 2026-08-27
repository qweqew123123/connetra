export type RoadmapStatus = "All" | "To do" | "In Progress" | "Done";

export interface RoadmapItem {
  id: string;
  title: string;
  votes: number;
  status: "To do" | "In Progress" | "Done";
}

export const roadmapItems: RoadmapItem[] = [
  {
    id: "postgres-connector",
    title: "Add PostgreSQL data connector",
    votes: 1,
    status: "Done"
  },
  {
    id: "bigquery-connector",
    title: "Google BigQuery data connector",
    votes: 1,
    status: "Done"
  },
  {
    id: "alert-granularities",
    title: "Add different granularities for alerts (weekly/monthly etc)",
    votes: 1,
    status: "Done"
  },
  {
    id: "alert-check",
    title: "Alert check before alert creation",
    votes: 0,
    status: "Done"
  },
  {
    id: "mariadb-connector",
    title: "MariaDB data-connector",
    votes: 0,
    status: "Done"
  },
  {
    id: "oracle-connector",
    title: "Add Oracle Data connector",
    votes: 2,
    status: "In Progress"
  },
  {
    id: "timezone-management",
    title: "Manage time zones of different countries for alerts",
    votes: 0,
    status: "To do"
  },
  {
    id: "explore-node-size",
    title: "Size dimension for nodes on explore page",
    votes: 1,
    status: "To do"
  },
  {
    id: "custom-query-alerts",
    title: "Create alerts based on custom query across multiple data points",
    votes: 0,
    status: "To do"
  }
];
