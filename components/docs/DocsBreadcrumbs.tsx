import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface DocsBreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function DocsBreadcrumbs({ items }: DocsBreadcrumbsProps) {
  return (
    <nav className="docs-breadcrumbs" aria-label="Breadcrumb">
      <ol className="docs-breadcrumbs-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="docs-breadcrumb-item">
              {item.href && !isLast ? (
                <Link href={item.href} className="docs-breadcrumb-link">
                  {item.label}
                </Link>
              ) : (
                <span
                  className="docs-breadcrumb-current"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight
                  size={12}
                  className="docs-breadcrumb-separator"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
