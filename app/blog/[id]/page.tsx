import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer/Footer";
import { blogs } from "../../../data/blogs";
import "../blog.css";

export function generateStaticParams() {
  return blogs.map((b) => ({ id: b.id }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogs.find((b) => b.id === id);
  if (!post) notFound();

  return (
    <main className="blog-page">
      <Nav />
      <article className="blog-detail">
        <div className="blog-container">
          <Link href="/blog" className="blog-back">
            <ArrowLeft size={16} /> Back to blog
          </Link>
          <div className="blog-detail-category">{post.category}</div>
          <h1>{post.title}</h1>
          <p className="blog-detail-desc">{post.description}</p>
          <div className="blog-detail-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-detail-body">
            <p>{post.description}</p>
            <p>
              This is a placeholder for the full article content. Replace this
              with the complete blog post content when available.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
