export interface BenefitItem {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  visualType: "efficiency" | "control" | "decision" | "collaboration" | "savings";
}

export const benefitsData: BenefitItem[] = [
  {
    number: "01",
    eyebrow: "IMPROVED EFFICIENCY",
    title: "Improved Efficiency",
    description:
      "With Connetra's easy filtering and intuitive searching, you can quickly locate the data you need, reducing the time spent searching and improving overall productivity.",
    visualType: "efficiency",
  },
  {
    number: "02",
    eyebrow: "ENHANCED CONTROL",
    title: "Enhanced Control",
    description:
      "Connetra gives you complete control over your data assets. Take charge of your interconnected data universe with comprehensive tools and features designed to bring transparency and control to your fingertips.",
    visualType: "control",
  },
  {
    number: "03",
    eyebrow: "BETTER DECISION-MAKING",
    title: "Better Decision-making",
    description:
      "Make better informed decisions with Connetra's data monitoring functionality. Monitor data quality and performance metrics to identify patterns and trends, allowing you to make data-driven decisions.",
    visualType: "decision",
  },
  {
    number: "04",
    eyebrow: "INCREASED COLLABORATION",
    title: "Increased Collaboration",
    description:
      "Share and collaborate with team members seamlessly using Connetra. By providing a centralized platform for data management, Connetra promotes collaboration and ensures everyone has access to reliable and up-to-date information.",
    visualType: "collaboration",
  },
  {
    number: "05",
    eyebrow: "COST SAVINGS",
    title: "Cost Savings",
    description:
      "By streamlining your data management processes and improving efficiency, Connetra helps you save valuable time and resources, ultimately leading to cost savings for your organization.\n\nWith Connetra, you can take control of your interconnected data universe and unlock the full potential of your data assets. Empower your team with transparency, efficiency, and better decision-making. Get started with Connetra today and revolutionize the way you manage your data.\n\nFor more information and a demo, visit our website or contact our sales team.",
    visualType: "savings",
  },
];

export const benefitsClosingData = {
  paragraph1:
    "With Connetra, you can take control of your interconnected data universe and unlock the full potential of your data assets. Empower your team with transparency, efficiency, and better decision-making. Get started with Connetra today and revolutionize the way you manage your data.",
  paragraph2:
    "For more information and a demo, visit our website or contact our sales team.",
};
