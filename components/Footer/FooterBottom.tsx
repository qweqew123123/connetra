"use client";

export default function FooterBottom() {
  return (
    <div className="foot-bottom">
      <span>© 2026 Connetra. All rights reserved.</span>
      <div className="foot-legal">
        <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
        <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
      </div>
    </div>
  );
}