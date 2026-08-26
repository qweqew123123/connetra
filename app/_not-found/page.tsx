import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "60px 20px", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "16px", color: "#09122A" }}>404</h1>
      <p style={{ fontSize: "18px", color: "#5b6b80", marginBottom: "24px" }}>Page not found</p>
      <Link href="/" style={{ color: "#3559C7", fontWeight: 600 }}>Go home</Link>
    </main>
  );
}