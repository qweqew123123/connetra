import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "80px 20px", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: "56px", fontWeight: 800, marginBottom: "16px", color: "#09122A" }}>404</h1>
      <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "12px", color: "#1e293b" }}>Page Not Found</h2>
      <p style={{ fontSize: "16px", color: "#64748b", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "10px 24px",
          background: "#3559C7",
          color: "#ffffff",
          borderRadius: "8px",
          fontWeight: 600,
          textDecoration: "none"
        }}
      >
        Return to Home
      </Link>
    </main>
  );
}
