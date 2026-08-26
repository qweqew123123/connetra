"use client";

import { Check, ArrowRight, Award } from "lucide-react";
import { pricingPlans, customPlan } from "../../data/pricing";

export default function PricingCards({
  billing,
  onBillingChange,
}: {
  billing: "monthly" | "yearly";
  onBillingChange?: (b: "monthly" | "yearly") => void;
}) {
  const starter = pricingPlans[0];
  const growth = pricingPlans[1];
  const starterPrice = billing === "monthly" ? starter.monthlyPrice : starter.yearlyPrice;
  const growthPrice = billing === "monthly" ? growth.monthlyPrice : growth.yearlyPrice;

  return (
    <section className="pricing-cards-section">
      <div className="pricing-container">
        <div className="pricing-billing-above">
          <div className="pricing-billing-toggle pricing-billing-toggle--ref" role="group" aria-label="Billing period">
            <button
              type="button"
              className={billing === "monthly" ? "active" : ""}
              onClick={() => onBillingChange?.("monthly")}
            >
              Monthly
            </button>
            <button
              type="button"
              className={billing === "yearly" ? "active" : ""}
              onClick={() => onBillingChange?.("yearly")}
            >
              Annually <span className="pricing-billing-save">Save 17%</span>
            </button>
          </div>
        </div>
        <div className="pricing-cards-grid pricing-cards-grid--ref">
          {/* Starter */}
          <div className="pricing-ref-card">
            <h3 className="pricing-ref-name">{starter.name}</h3>
            <div className="pricing-ref-price">
              <span className="pricing-ref-dollar">$</span>
              <b>{Number.isInteger(starterPrice) ? starterPrice.toFixed(0) : starterPrice.toFixed(2)}</b>
              <span className="pricing-ref-per">/month</span>
            </div>
            <p className="pricing-ref-desc">
              {starter.credits} {starter.creditsNote} — everything you need to explore your data ecosystem.
            </p>
            <a className="pricing-ref-btn pricing-ref-btn--light" href={starter.href}>
              Start free trial <ArrowRight size={15} />
            </a>
            <ul className="pricing-ref-features">
              {starter.features.map((f) => (
                <li key={f}>
                  <span className="pricing-ref-check">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Growth — featured card */}
          <div className="pricing-ref-card pricing-ref-card--featured">
            <span className="pricing-ref-badge">
              <Award size={13} />
              Most Popular
            </span>
            <h3 className="pricing-ref-name">{growth.name}</h3>
            <div className="pricing-ref-price">
              <span className="pricing-ref-dollar">$</span>
              <b>{Number.isInteger(growthPrice) ? growthPrice.toFixed(0) : growthPrice.toFixed(2)}</b>
              <span className="pricing-ref-per">/month</span>
            </div>
            <p className="pricing-ref-desc">
              {growth.credits} {growth.creditsNote} — everything you need to scale from solo team to growing business.
            </p>
            <a className="pricing-ref-btn pricing-ref-btn--primary" href={growth.href}>
              Start free trial <ArrowRight size={15} />
            </a>
            <ul className="pricing-ref-features">
              {growth.features.map((f) => (
                <li key={f}>
                  <span className="pricing-ref-check pricing-ref-check--featured">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Custom / Enterprise */}
          <div className="pricing-ref-card">
            <h3 className="pricing-ref-name">{customPlan.name}</h3>
            <div className="pricing-ref-price">
              <span className="pricing-ref-price-custom">Custom</span>
            </div>
            <p className="pricing-ref-desc">{customPlan.description}</p>
            <a className="pricing-ref-btn pricing-ref-btn--light" href={customPlan.href}>
              Contact Team <ArrowRight size={15} />
            </a>
            <ul className="pricing-ref-features">
              {customPlan.features.map((f) => (
                <li key={f}>
                  <span className="pricing-ref-check">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <span className="pricing-ref-note">{customPlan.note}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
