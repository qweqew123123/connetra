export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export const footerGroups: FooterGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "#platform" },
      { label: "Features", href: "#features" },
      { label: "Integrations", href: "/integrations" },
      { label: "Security", href: "#cta" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Resources", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "x" | "github";
  aria: string;
}

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#", icon: "linkedin", aria: "Connetra on LinkedIn" },
  { label: "X", href: "#", icon: "x", aria: "Connetra on X" },
  { label: "GitHub", href: "#", icon: "github", aria: "Connetra on GitHub" },
];