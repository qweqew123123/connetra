"use client";

import { useEffect, useRef } from "react";
import { allBlogs } from "../../data/blogs";
import BlogCard from "./BlogCard";

export default function AllBlogs() {
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
    <section className="blog-all">
      <div className="blog-container">
        <div ref={headRef} className="blog-section-head blog-reveal">
          <h2>All blogs</h2>
          <p>
            Explore all of our latest insights on data, discovery, monitoring,
            and modern data management.
          </p>
        </div>
        <div className="blog-all-grid">
          {allBlogs.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
