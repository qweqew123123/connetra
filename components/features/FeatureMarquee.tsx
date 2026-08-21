import {
  Database,
  FileText,
  Folder,
  GitBranch,
  LayoutDashboard,
  Table2,
  TrendingUp,
} from "lucide-react";

const assets = [
  { name: "Customer DB", icon: Database },
  { name: "Revenue Model", icon: GitBranch },
  { name: "Sales Dashboard", icon: LayoutDashboard },
  { name: "Executive Report", icon: FileText },
  { name: "Marketing Data", icon: Folder },
  { name: "Monthly Revenue", icon: Table2 },
  { name: "Customer Revenue", icon: TrendingUp },
  { name: "Sales Performance", icon: LayoutDashboard },
];

const loop = [...assets, ...assets];

export default function FeatureMarquee() {
  return (
    <div className="fp-hero-card">
      <div className="fp-hero-marquee">
        <div className="fp-hero-marquee-track">
          {loop.map((asset, i) => {
            const Icon = asset.icon;
            return (
              <span className="fp-hero-tag" key={`${asset.name}-${i}`}>
                <Icon size={15} aria-hidden="true" />
                {asset.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}