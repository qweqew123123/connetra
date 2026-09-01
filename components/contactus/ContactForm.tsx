"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // Simulate reliable form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 900);
  };

  return (
    <div className="cnt-form-card">
      <div className="cnt-form-header">
        <h2>Send us a message</h2>
      </div>
      <hr className="cnt-form-divider" />

      <form onSubmit={handleSubmit} className="cnt-form" noValidate>
        {status === "success" && (
          <div className="cnt-alert success" role="alert">
            <CheckCircle2 size={18} />
            <span>
              Thank you for reaching out! Your message has been sent successfully. Our team will get back to you shortly.
            </span>
          </div>
        )}

        {status === "error" && errorMessage && (
          <div className="cnt-alert error" role="alert">
            <AlertCircle size={18} />
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="cnt-form-group">
          <label htmlFor="cnt-name">
            Full Name <span className="req">*</span>
          </label>
          <input
            id="cnt-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            disabled={status === "submitting"}
          />
        </div>

        <div className="cnt-form-group">
          <label htmlFor="cnt-email">
            Email Address <span className="req">*</span>
          </label>
          <input
            id="cnt-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            required
            disabled={status === "submitting"}
          />
        </div>

        <div className="cnt-form-group">
          <label htmlFor="cnt-message">
            Message <span className="req">*</span>
          </label>
          <textarea
            id="cnt-message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your organization's data needs..."
            required
            disabled={status === "submitting"}
          />
        </div>

        <button
          type="submit"
          className="button primary cnt-submit-btn"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send</span>
              <Send size={15} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
