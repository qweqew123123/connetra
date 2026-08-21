export interface Feature {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  video: string;
  points: string[];
}

export const features: Feature[] = [
  {
    id: "filter",
    number: "01",
    label: "FILTERING",
    title: "Filter your data\nwith ease.",
    description:
      "Connetra makes understanding data a breeze with customizable data breakdowns. Navigate through your data with ease, uncovering insights and patterns that were once buried in the depths of your ecosystem.",
    cta: "Explore filtering",
    video: "/videos/filtering.mp4",
    points: ["Customizable breakdowns", "Navigate with ease", "Uncover patterns"],
  },
  {
    id: "alerts",
    number: "02",
    label: "ALERTS",
    title: "Create alerts that\nkeep you ahead.",
    description:
      "Set up custom alerts based on dimension and metric criteria to keep tabs on data accuracy. When alerts fail, you'll receive handy notifications via email or Slack — so you can take action swiftly.",
    cta: "Create an alert",
    video: "/videos/alerts.mp4",
    points: ["Alerts by metric & dimension", "Email or Slack notifications", "Act swiftly"],
  },
  {
    id: "details",
    number: "03",
    label: "DETAILS",
    title: "Zoom in for the\ndetails you need.",
    description:
      "Click on any data asset to unveil a treasure trove of extra details — previews, descriptions and full metadata — right at your fingertips.",
    cta: "Dive into details",
    video: "/videos/details.mp4",
    points: ["Preview your data", "Rich descriptions", "All metadata, one click"],
  },
];