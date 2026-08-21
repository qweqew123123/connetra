export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
}

export const blogs: BlogPost[] = [
  {
    id: "harnessing-data-power",
    title: "Harnessing Data Power",
    description:
      "In an age where data is the lifeblood of any organization, the ability to integrate seamlessly with various data sources and technologies becomes pivotal. Connetra, a leading data management platform, exemplifies this by offering comprehensive integration capabilities with a myriad of databases and technologies. This article delves into why these integrations are crucial for modern data management platforms.",
    category: "DATA MANAGEMENT",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
    href: "/blog/harnessing-data-power",
  },
  {
    id: "data-discovery-modern-era",
    title: "Data Discovery for the Modern Era",
    description:
      "In the rapidly evolving digital landscape, the ability to efficiently manage and interpret vast amounts of data is critical. Connetra emerges as a pivotal tool in this context, offering unparalleled capabilities in data discovery and management.",
    category: "DATA DISCOVERY",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    href: "/blog/data-discovery-modern-era",
  },
  {
    id: "efficient-database-scalability",
    title: "Efficient Database Scalability",
    description:
      "In the rapidly evolving digital landscape, database scalability has become a cornerstone for businesses striving to stay agile and responsive. As data volumes grow exponentially, organizations face the challenge of scaling their databases efficiently to meet increasing demands. Connetra's innovative solutions are tailored to address these challenges, offering a path to efficient database scalability.",
    category: "DATA MANAGEMENT",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    href: "/blog/efficient-database-scalability",
  },
  {
    id: "revolutionizing-data-accuracy",
    title: "Revolutionizing Data Accuracy",
    description:
      "In an era where data is the new oil, its accuracy is not just critical – it's a business imperative. Connetra, a leader in data management solutions, introduces a revolutionary alert system designed to uphold the highest standards of data accuracy, transforming how businesses interact with their data.",
    category: "DATA ACCURACY",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    href: "/blog/revolutionizing-data-accuracy",
  },
  {
    id: "future-proof-data-strategies",
    title: "Future Proof Your Data Strategies with Connetra's Up to Date Analytics",
    description:
      "Stay ahead of shifting data landscapes with Connetra's up-to-date analytics — monitor freshness, catch drift early, and keep every team aligned around reliable, current data.",
    category: "DATA STRATEGY",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
    href: "/blog/future-proof-data-strategies",
  },
  {
    id: "data-insights-fingertips",
    title: "Data Insights at Your Fingertips",
    description:
      "In the fast-paced world of data management, having immediate access to detailed insights is crucial. Connetra's Click-and-Reveal feature offers just that - a swift and intuitive way to uncover deep data insights with a simple click.",
    category: "DATA INSIGHTS",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=60",
    href: "/blog/data-insights-fingertips",
  },
  {
    id: "crafting-data-narratives",
    title: "Crafting Data Narratives",
    description:
      "In the digital age, data is ubiquitous, flooding organizations with vast amounts of information. The ability to convert this data into compelling narratives is not just a skill but a necessity. Connetra emerges as a transformative tool in this realm, enabling the weaving of data into meaningful and insightful stories.",
    category: "DATA STORYTELLING",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
    href: "/blog/crafting-data-narratives",
  },
  {
    id: "big-data-bigger-opportunities",
    title: "Big Data, Bigger Opportunities",
    description:
      "In the ever-evolving landscape of technology, data has become the new currency. With the exponential growth of data generation and consumption, businesses are rapidly shifting towards data-driven strategies. Big Data is no longer just a buzzword; it's a revolution that is defining the future of how businesses operate, innovate, and compete. In this context, data management and analytics tools like Connetra are increasingly pivotal in harnessing the power of Big Data.",
    category: "BIG DATA",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    href: "/blog/big-data-bigger-opportunities",
  },
  {
    id: "the-human-factor",
    title: "The Human Factor",
    description:
      "In the digital age, where data is the new currency, its management and analysis have become pivotal for businesses. However, as we delve deeper into this data-driven era, the role of ethics in data management and analytics emerges as a crucial factor. This comprehensive article explores the ethical dimensions of data management and analytics, and how a tool like Connetra is pivotal in navigating this complex terrain.",
    category: "DATA ETHICS",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
    href: "/blog/the-human-factor",
  },
  {
    id: "breaking-down-data-silos",
    title: "Breaking Down Data Silos with Connetra",
    description:
      "In today's digital era, data is a pivotal asset for businesses. However, the real challenge lies not in accumulating data, but in effectively managing, integrating, and utilizing it. Connetra emerges as a cutting-edge solution, designed to break down data silos and offer a unified approach to data management.",
    category: "DATA INTEGRATION",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60",
    href: "/blog/breaking-down-data-silos",
  },
];

export const featuredBlogs = blogs.slice(0, 2);
export const allBlogs = blogs.slice(2);
