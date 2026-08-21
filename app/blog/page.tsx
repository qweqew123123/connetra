import Nav from "../../components/Nav";
import Footer from "../../components/Footer/Footer";
import BlogHero from "../../components/blog/BlogHero";
import FeaturedBlogs from "../../components/blog/FeaturedBlogs";
import AllBlogs from "../../components/blog/AllBlogs";
import "./blog.css";

export default function BlogPage() {
  return (
    <main className="blog-page">
      <Nav />
      <BlogHero />
      <FeaturedBlogs />
      <AllBlogs />
      <Footer />
    </main>
  );
}
