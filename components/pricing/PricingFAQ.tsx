"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/pricing";

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="pricing-faq">
      <div className="pricing-container">
        <div className="faq-grid">
          {/* Left Column */}
          <div className="faq-left">
            <div className="faq-eyebrow">Questions? We've got answers</div>
            <h2 className="faq-heading">
              Frequently asked<br />questions
            </h2>
            <div className="faq-help-card">
              <h3>Still have questions?</h3>
              <p>Our team will get back to you within 1 business day. Let us help you find the right plan.</p>
              <a href="/contactus" className="button">
                Contact us
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="faq-right">
            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <div key={faq.q} className={`faq-card ${openIndex === index ? "open" : ""}`}>
<button
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={20} className="faq-icon" aria-hidden="true" />
                    </button>
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="faq-answer"
                    style={{
                      maxHeight: openIndex === index ? "500px" : "0",
                      opacity: openIndex === index ? 1 : 0,
                      paddingTop: openIndex === index ? "16px" : "0",
                      marginTop: openIndex === index ? "8px" : "0",
                    }}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}