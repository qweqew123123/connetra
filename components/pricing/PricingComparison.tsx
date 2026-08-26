"use client";

import { Database, Layout, Sparkles } from "lucide-react";
import { detailedCategories } from "../../data/pricing";

export default function PricingComparison() {
  const getCategoryIcon = (category: string) => {
    switch (category.toUpperCase()) {
      case "USAGE":
        return <Database size={19} className="detailed-category-icon" />;
      case "PAGES":
        return <Layout size={19} className="detailed-category-icon" />;
      case "FEATURES":
        return <Sparkles size={19} className="detailed-category-icon" />;
      default:
        return <Database size={19} className="detailed-category-icon" />;
    }
  };

  return (
    <section className="pricing-compare" id="detailed-overview">
      <div className="pricing-container">
        <div className="pricing-compare-head">
          <div className="pricing-compare-label">DETAILED BREAKDOWN</div>
          <h2>Detailed overview</h2>
          <p>
            A comprehensive look at all usage limits, page capabilities, and platform features included in Connetra.
          </p>
        </div>

        <div className="detailed-overview-table">
          {detailedCategories.map((group) => (
            <div key={group.category} className="detailed-category-group">
              {/* Category Header */}
              <div className="detailed-category-header">
                <div className="detailed-category-tag">
                  {getCategoryIcon(group.category)}
                  <span>{group.category}</span>
                </div>
              </div>

              {/* Category Items */}
              <div className="detailed-category-items">
                {group.items.map((item) => (
                  <div key={item.title} className="detailed-overview-row">
                    <div className="detailed-col-category">
                      <h4 className="detailed-category-title">{item.title}</h4>
                    </div>
                    <div className="detailed-col-content">
                      <p className="detailed-text">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
