"use client";

import { useEffect, useRef } from "react";
import { featuredBlogs } from "../../data/blogs";
import BlogCard from "./BlogCard";

export default function FeaturedBlogs() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="blog-featured">
      <div className="blog-container">
        <div ref={headRef} className="blog-section-head blog-reveal">
          <h2>Featured blogs</h2>
          <p>Start with our latest thinking on modern data management.</p>
        </div>
        <div className="blog-featured-grid">
          {featuredBlogs.map((post, i) => (
            <BlogCard key={post.id} post={post} featured index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
