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
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Benefits", href: "/benefits" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Integrations", href: "/integrations" },
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/docs/intro" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/aboutus" },
      { label: "Contact", href: "/contactus" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Security", href: "#" },
      { label: "Terms of use", href: "#" },
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