"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "../../data/blogs";

export default function BlogCard({
  post,
  featured = false,
  index = 0,
}: {
  post: BlogPost;
  featured?: boolean;
  index?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={post.href}
      className={`blog-card ${featured ? "blog-card-featured" : ""} blog-reveal`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="blog-card-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt={post.title} />
      </div>
      <div className="blog-card-body">
        <div className="blog-card-main">
          <div className="blog-card-category">{post.category}</div>
          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-desc">{post.description}</p>
          <span className="blog-card-cta">
            Read more <ArrowRight size={16} aria-hidden="true" />
          </span>
        </div>
      </div>
    </a>
  );
}
