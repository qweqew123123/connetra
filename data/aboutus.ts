export interface GuidingPrinciple {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  visualType: "accessibility" | "customization";
}

export const aboutUsHeroData = {
  eyebrow: "ABOUT CONNETRA",
  title: "About Connetra",
  subtitle:
    "Discover our mission, guiding principles, and vision for empowering teams with seamless data discovery.",
};

export const whyWeAreHereData = {
  eyebrow: "OUR MISSION",
  title: "Why we’re here",
  content:
    "Welcome to Connetra! We are dedicated to providing a comprehensive and user-friendly platform for managing and accessing data. We understand that data is the backbone of modern businesses, and we are committed to helping you unlock its full potential.",
  image: "/about_us_team_stock.jpg",
};

export const guidingPrinciplesTitle =
  "At the heart of our company are these guiding principles:";

export const guidingPrinciplesData: GuidingPrinciple[] = [
  {
    number: "01",
    eyebrow: "ACCESSIBILITY",
    title: "Accessibility",
    description:
      "We believe that everyone should have access to the data they need, regardless of their technical expertise. That’s why we’ve designed our platform to be intuitive and easy to use, with search & filter features that enable users to quickly find the data they need.",
    visualType: "accessibility",
  },
  {
    number: "02",
    eyebrow: "CUSTOMIZATION",
    title: "Customization",
    description:
      "We recognize that every business is unique, with its own specific data needs. That’s why we’ve made our platform highly customizable, with a range of options for organizing, labeling, and analyzing data.\n\nIn today’s digital age, data has become the backbone of every company. Businesses collect and analyze large amounts of data to gain insights into customer behavior, market trends, and other key factors that influence their operations. However, this data is only useful if it can be easily accessed, understood, and shared across teams. At Connetra, we’ve built a tool that enables easier data discovery, allowing teams to work together more efficiently and make better-informed decisions.",
    visualType: "customization",
  },
];

export const companyDataContext =
  "In today’s digital age, data has become the backbone of every company. Businesses collect and analyze large amounts of data to gain insights into customer behavior, market trends, and other key factors that influence their operations. However, this data is only useful if it can be easily accessed, understood, and shared across teams. At Connetra, we’ve built a tool that enables easier data discovery, allowing teams to work together more efficiently and make better-informed decisions.";
