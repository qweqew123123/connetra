export interface FeatureItem {
  id: string;
  tabLabel: string;
  iconName: "SlidersHorizontal" | "Bell" | "Layers";
  heading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  video: string;
  badge?: string;
  urlPreview?: string;
  points?: string[];
  scheduleData?: any;
}

export const features: FeatureItem[] = [
  {
    id: "filter",
    tabLabel: "Filtering",
    iconName: "SlidersHorizontal",
    heading: "Filter your data with ease.",
    description:
      "Connetra makes understanding data a breeze with customizable data breakdowns. Navigate through your data with ease, uncovering insights and patterns that were once buried in the depths of your ecosystem.",
    ctaText: "Explore filtering",
    ctaLink: "#platform",
    video: "/videos/filtering.mp4",
    badge: "Custom breakdowns",
    urlPreview: "app.connetra.com/explore/filtering",
    points: ["Customizable breakdowns", "Navigate with ease", "Uncover patterns"],
  },
  {
    id: "alerts",
    tabLabel: "Alerts",
    iconName: "Bell",
    heading: "Create alerts that keep you ahead.",
    description:
      "Set up custom alerts based on dimension and metric criteria to keep tabs on data accuracy. When alerts fail, you'll receive handy notifications via email or Slack — so you can take action swiftly.",
    ctaText: "Create an alert",
    ctaLink: "#platform",
    video: "/videos/alerts.mp4",
    badge: "Real-time monitoring",
    urlPreview: "app.connetra.com/alerts/rules",
    points: ["Alerts by metric & dimension", "Email or Slack notifications", "Act swiftly"],
  },
  {
    id: "details",
    tabLabel: "Details",
    iconName: "Layers",
    heading: "Zoom in for the details you need.",
    description:
      "Click on any data asset to unveil a treasure trove of extra details — previews, descriptions and full metadata — right at your fingertips.",
    ctaText: "Dive into details",
    ctaLink: "#platform",
    video: "/videos/details.mp4",
    badge: "Rich metadata",
    urlPreview: "app.connetra.com/assets/details",
    points: ["Preview your data", "Rich descriptions", "All metadata, one click"],
  },
];

export const eventFeatures = features;
export type Feature = FeatureItem;