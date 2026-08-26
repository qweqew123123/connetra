"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DocsBreadcrumbs from "./DocsBreadcrumbs";

interface DocsContentProps {
  breadcrumbs?: { label: string; href?: string }[];
  title: string;
  children: React.ReactNode;
  nextPage?: {
    title: string;
    href: string;
  };
  prevPage?: {
    title: string;
    href: string;
  };
}

export default function DocsContent({
  breadcrumbs = [
    { label: "Documentation", href: "/docs/intro" },
    { label: "Introduction" },
  ],
  title,
  children,
  nextPage = {
    title: "Create an account",
    href: "/docs/get-started/create-an-account",
  },
  prevPage,
}: DocsContentProps) {
  return (
    <article className="docs-article">
      {/* Breadcrumbs */}
      {breadcrumbs && <DocsBreadcrumbs items={breadcrumbs} />}

      {/* Main Title */}
      <h1 id="introduction" className="docs-article-h1">
        {title}
      </h1>

      {/* Body Content */}
      <div className="docs-article-body">{children}</div>

      {/* Article Navigation Footer (Prev / Next) */}
      {(prevPage || nextPage) && (
        <div className="docs-article-footer">
          <div className="docs-pagination-grid">
            {prevPage ? (
              <Link href={prevPage.href} className="docs-pagination-card prev">
                <span className="docs-pagination-label">Previous</span>
                <span className="docs-pagination-title">{prevPage.title}</span>
              </Link>
            ) : (
              <div />
            )}

            {nextPage && (
              <Link href={nextPage.href} className="docs-pagination-card next">
                <span className="docs-pagination-label">Next</span>
                <div className="docs-pagination-title-row">
                  <span className="docs-pagination-title">{nextPage.title}</span>
                  <ArrowRight size={15} className="docs-pagination-arrow" aria-hidden="true" />
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </article>
  );
}