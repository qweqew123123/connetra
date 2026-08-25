"use client";

import "./AIAgentSection.css";

export default function AIAgentSection() {
  return (
    <section className="ai-agent-section" id="ai-agent" aria-label="Connetra AI Agent">
      <div className="ai-agent-container">
        <div className="ai-agent-head">
          <div className="eyebrow">AI AGENT</div>
          <h2>Ask questions. Get answers from your data.</h2>
          <p>
            Ask Connetra’s AI Agent questions about your data, assets, ownership, usage, and relationships. Get clear
            answers without manually searching across your data ecosystem.
          </p>
        </div>

        <div className="ai-agent-visual">
          <img src="/images/ai-chatbot.png" alt="Connetra AI Agent chat interface" />
        </div>
      </div>
    </section>
  );
}
