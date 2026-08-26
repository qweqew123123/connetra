"use client";

import { useEffect, useState, useRef } from "react";
import { AlignLeft } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function DocsTableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scan the article for headings
    const article = document.querySelector(".docs-article");
    if (!article) return;

    const headingNodes = article.querySelectorAll("h1, h2, h3");
    const items: TocItem[] = [];

    headingNodes.forEach((el, index) => {
      let id = el.id;
      if (!id) {
        id = el.textContent
          ? el.textContent
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")
          : `heading-${index}`;
        el.id = id;
      }

      items.push({
        id,
        text: el.textContent?.trim() || "",
        level: el.tagName === "H1" ? 1 : el.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(items);
    if (items.length > 0) {
      setActiveId(items[0].id);
    }

    // Set up IntersectionObserver for efficient scroll-spy
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find visible entries
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Choose the entry closest to top of viewport
          const topEntry = visibleEntries.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
          );
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: "-90px 0px -70% 0px",
        threshold: [0, 0.5, 1],
      }
    );

    headingNodes.forEach((node) => {
      observerRef.current?.observe(node);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveId(id);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="docs-toc-wrapper" role="complementary" aria-label="Table of contents">
      <div className="docs-toc-header">
        <AlignLeft size={14} className="docs-toc-icon" aria-hidden="true" />
        <span className="docs-toc-title">On this page</span>
      </div>

      <nav className="docs-toc-nav">
        <ul className="docs-toc-list">
          {headings.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={`docs-toc-item docs-toc-level-${item.level} ${
                  isActive ? "active" : ""
                }`}
              >
                <a
                  href={`#${item.id}`}
                  className={`docs-toc-link ${isActive ? "active" : ""}`}
                  onClick={(e) => handleClick(e, item.id)}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}