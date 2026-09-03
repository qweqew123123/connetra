"use client";

import { footerGroups } from "../../data/footer";
import FooterSocials from "./FooterSocials";

export default function FooterNavigation() {
  return (
    <div className="foot-nav">
      <div className="foot-brand-col">
        <a className="foot-brand" href="/">
          <img src="/Logo.svg" alt="Connetra logo" />
        </a>
        <p className="foot-tagline">
          Connected data.
          <br />
          Clearer decisions.
        </p>
      </div>
      <div className="foot-groups">
        {footerGroups.map((g) => (
          <div className="foot-group" key={g.title}>
            <h4>{g.title}</h4>
            {g.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={l.href === "#" ? (e) => e.preventDefault() : undefined}
              >
                {l.label}
              </a>
            ))}
          </div>
        ))}
        <FooterSocials />
      </div>
    </div>
  );
}