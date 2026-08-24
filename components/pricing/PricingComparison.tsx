"use client";

import { Check, X } from "lucide-react";
import { comparisonSections, pricingPlans, customPlan } from "../../data/pricing";

export default function PricingComparison() {
  const starter = pricingPlans[0];
  const growth = pricingPlans[1];

  return (
    <section className="pricing-compare">
      <div className="pricing-container">
        <div className="pricing-compare-head">
          <div className="pricing-compare-label">Compare plans</div>
          <h2>Detailed overview</h2>
          <p>Everything included in every plan — compare usage, pages and features.</p>
        </div>

        <div className="compare-card">
          <div className="compare-header">
            <div className="compare-header-cell empty" aria-hidden="true"></div>
            <div className="compare-header-col">
              <span className="compare-plan-name">{starter.name}</span>
              <b className="compare-price">${starter.yearlyPrice % 1 === 0 ? starter.yearlyPrice.toFixed(0) : starter.yearlyPrice.toFixed(2)}/mo</b>
              <small>billed yearly</small>
              <a className="compare-cta" href={starter.href}>
                Get started
              </a>
            </div>
            <div className="compare-header-col featured">
              <span className="compare-plan-name">{growth.name}</span>
              <b className="compare-price">${growth.yearlyPrice % 1 === 0 ? growth.yearlyPrice.toFixed(0) : growth.yearlyPrice.toFixed(2)}/mo</b>
              <small>billed yearly</small>
              <a className="compare-cta compare-cta--primary" href={growth.href}>
                Get started
              </a>
            </div>
            <div className="compare-header-col">
              <span className="compare-plan-name">{customPlan.name}</span>
              <span className="compare-price">Custom</span>
              <small>tailored pricing</small>
              <a className="compare-cta compare-cta--dark" href={customPlan.href}>
                Book demo
              </a>
            </div>
          </div>

          {comparisonSections.map((section) => (
            <div key={section.title} className="compare-section">
              <div className="compare-section-title">{section.title}</div>
              {section.rows.map((row: any) => (
                <div key={row.label} className="compare-row">
                  <span className="compare-label">{row.label}</span>
                  <span className="compare-cell">{row.starter ? <Check size={14} className="compare-check-icon" /> : <X size={14} className="compare-cross-icon" />}</span>
                  <span className="compare-cell featured">
                    {row.growth ? <Check size={14} className="compare-check-icon" /> : <X size={14} className="compare-cross-icon" />}
                  </span>
                  <span className="compare-cell">{row.custom ? <Check size={14} className="compare-check-icon" /> : <X size={14} className="compare-cross-icon" />}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
