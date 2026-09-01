"use client";

import { Zap, ShieldCheck, LineChart, Users, TrendingDown } from "lucide-react";
import { benefitsData } from "../../data/benefits";

const benefitIcons = [Zap, ShieldCheck, LineChart, Users, TrendingDown];

export default function BenefitsList() {
  return (
    <section className="ben-list-section" aria-label="Connetra Benefits List">
      <div className="ben-container">
        <div className="ben-horizontal-list">
          {benefitsData.map((benefit, i) => {
            const Icon = benefitIcons[i] || Zap;
            return (
              <div key={benefit.number} className="ben-hcard">
                <div className="ben-hcard-left">
                  <div className="ben-hcard-icon-wrap">
                    <Icon size={22} className="ben-hcard-icon" />
                  </div>
                </div>
                <div className="ben-hcard-main">
                  <h2>{benefit.title}</h2>
                  {benefit.description.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
