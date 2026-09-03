"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    terms?: string;
  }>({});

  const validateForm = () => {
    const errors: typeof fieldErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!email.trim()) {
      errors.email = "Email address is required";
    } else if (!emailRegex.test(email.trim())) {
      errors.email = "Please enter a valid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!agreedToTerms) {
      errors.terms = "You must agree to the Terms and Privacy Policy";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!validateForm()) return;

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      // Redirect to workspace setup or external registration endpoint
      window.location.href = "https://app.connetra.com/createaccount";
    } catch {
      setErrorMsg("Unable to create account. Please check your details or try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-card-header">
        <span className="auth-eyebrow">GET STARTED</span>
        <h1 className="auth-card-title">Create your Connetra account</h1>
        <p className="auth-card-subtitle">
          Get started with Connetra and bring your data ecosystem into one connected view.
        </p>
      </div>

      {errorMsg && (
        <div className="auth-alert-banner error" role="alert">
          <AlertCircle size={17} className="alert-banner-icon" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        {/* Name Fields (Row) */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="signup-firstname" className="form-label">
              First Name
            </label>
            <div className="form-input-wrap">
              <User size={16} className="form-input-icon" />
              <input
                id="signup-firstname"
                type="text"
                name="firstName"
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  if (fieldErrors.firstName) {
                    setFieldErrors((prev) => ({ ...prev, firstName: undefined }));
                  }
                }}
                placeholder="Jane"
                className={`form-input ${fieldErrors.firstName ? "has-error" : ""}`}
                disabled={loading}
              />
            </div>
            {fieldErrors.firstName && (
              <span className="form-field-error" role="alert">
                <AlertCircle size={12} /> {fieldErrors.firstName}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="signup-lastname" className="form-label">
              Last Name
            </label>
            <div className="form-input-wrap">
              <User size={16} className="form-input-icon" />
              <input
                id="signup-lastname"
                type="text"
                name="lastName"
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  if (fieldErrors.lastName) {
                    setFieldErrors((prev) => ({ ...prev, lastName: undefined }));
                  }
                }}
                placeholder="Doe"
                className={`form-input ${fieldErrors.lastName ? "has-error" : ""}`}
                disabled={loading}
              />
            </div>
            {fieldErrors.lastName && (
              <span className="form-field-error" role="alert">
                <AlertCircle size={12} /> {fieldErrors.lastName}
              </span>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="signup-email" className="form-label">
            Email
          </label>
          <div className="form-input-wrap">
            <Mail size={16} className="form-input-icon" />
            <input
              id="signup-email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (fieldErrors.email) {
                  setFieldErrors((prev) => ({ ...prev, email: undefined }));
                }
              }}
              placeholder="jane.doe@company.com"
              className={`form-input ${fieldErrors.email ? "has-error" : ""}`}
              disabled={loading}
            />
          </div>
          {fieldErrors.email && (
            <span className="form-field-error" role="alert">
              <AlertCircle size={12} /> {fieldErrors.email}
            </span>
          )}
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="signup-password" className="form-label">
            Password
          </label>
          <div className="form-input-wrap">
            <Lock size={16} className="form-input-icon" />
            <input
              id="signup-password"
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (fieldErrors.password) {
                  setFieldErrors((prev) => ({ ...prev, password: undefined }));
                }
              }}
              placeholder="Create a password"
              className={`form-input ${fieldErrors.password ? "has-error" : ""}`}
              disabled={loading}
            />
            <button
              type="button"
              className="btn-toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Hide password" : "Show password"}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {fieldErrors.password && (
            <span className="form-field-error" role="alert">
              <AlertCircle size={12} /> {fieldErrors.password}
            </span>
          )}
        </div>

        {/* Terms & Privacy Checkbox */}
        <label className="auth-checkbox-row">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => {
              setAgreedToTerms(e.target.checked);
              if (fieldErrors.terms) {
                setFieldErrors((prev) => ({ ...prev, terms: undefined }));
              }
            }}
            className="auth-checkbox-input"
            disabled={loading}
          />
          <span className="auth-checkbox-label">
            I&apos;ve read the{" "}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{" "}
            and accept the{" "}
            <a href="/terms" onClick={(e) => e.preventDefault()}>
              Terms and Conditions
            </a>
          </span>
        </label>
        {fieldErrors.terms && (
          <span className="form-field-error" role="alert">
            <AlertCircle size={12} /> {fieldErrors.terms}
          </span>
        )}

        {/* Primary CTA */}
        <button
          type="submit"
          className="auth-submit-btn"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? (
            <>
              <span className="auth-btn-spinner" />
              <span>Creating account...</span>
            </>
          ) : (
            <>
              <span>Create account</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>

        <p className="auth-team-text">
          Already have a team?{" "}
          <Link href="/login" className="auth-switch-link">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
