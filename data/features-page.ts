export type FeatureVisualKind = "search" | "monitoring" | "freshness";

export interface FeaturesPageFeature {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  visual: FeatureVisualKind;
  video: string;
}

export const featuresPage: FeaturesPageFeature[] = [
  {
    number: "01",
    eyebrow: "INTUITIVE SEARCHING",
    title: "Intuitive Searching",
    description:
      "A user-friendly interface enables you to effortlessly find what you need or enjoy the thrill of browsing and stumbling upon unexpected discoveries. This capability accelerates data discovery, reduces the time spent searching for information, and increases productivity across your organization.",
    cta: "Explore Intuitive Searching",
    visual: "search",
    video: "/videos/intuitive_searching.mp4",
  },
  {
    number: "02",
    eyebrow: "DATA MONITORING",
    title: "Data Monitoring",
    description:
      "Easily spot data inaccuracies and ensure you fully understand their downstream implications. By tracing data lineage, Connetra helps you comprehend how inaccuracies in one dataset may impact other connected datasets and downstream analyses. This knowledge empowers you to address not only the immediate inaccuracies but also their wider implications, ensuring the data integrity across your entire data ecosystem.",
    cta: "Explore Data Monitoring",
    visual: "monitoring",
    video: "/videos/data_monitoring.mp4",
  },
  {
    number: "03",
    eyebrow: "KEEP UP TO DATE",
    title: "Keep up to date",
    description:
      "We know that data can become outdated and stale in the blink of an eye. That's why we make it a breeze to locate the most up-to-date data sources and analyses. With just a few clicks, you'll be able to effortlessly track down the freshest information, ensuring you stay on top of your ever-evolving data landscape.",
    cta: "Explore Keep up to date",
    visual: "freshness",
    video: "/videos/keep-up-to-date.mp4",
  },
];