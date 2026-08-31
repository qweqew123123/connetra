"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
} from "lucide-react";

export default function ForgotPasswordForm() {
  const searchParams = useSearchParams();
  const fromParam = searchParams.get("from");
  const emailParam = searchParams.get("email");

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string }>({});
  const [resending, setResending] = useState(false);

  useEffect(() => {
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [emailParam]);

  // Compute dynamic back URL to redirect back to the exact step user came from
  const backToSignInHref =
    fromParam === "password" && emailParam
      ? `/login?step=password&email=${encodeURIComponent(emailParam)}`
      : "/login";

  const validateForm = () => {
    const errors: { email?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      errors.email = "Email address is required";
    } else if (!emailRegex.test(email.trim())) {
      errors.email = "Please enter a valid email address";
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
      // Simulate API call to send reset password email
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch {
      setErrorMsg("Failed to send reset email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResending(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="auth-card">
      {!submitted ? (
        <>
          <div className="auth-card-header">
            <span className="auth-eyebrow">PASSWORD RECOVERY</span>
            <h1 className="auth-card-title">Reset your password</h1>
            <p className="auth-card-subtitle">
              Enter your account email and we&apos;ll send you a link to reset your password.
            </p>
          </div>

          {errorMsg && (
            <div className="auth-alert-banner error" role="alert">
              <AlertCircle size={17} className="alert-banner-icon" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="reset-email" className="form-label">
                Email
              </label>
              <div className="form-input-wrap">
                <Mail size={16} className="form-input-icon" />
                <input
                  id="reset-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (fieldErrors.email) {
                      setFieldErrors((prev) => ({ ...prev, email: undefined }));
                    }
                  }}
                  placeholder="name@company.com"
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
                  <span>Sending link...</span>
                </>
              ) : (
                <>
                  <span>Send reset link</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Secondary Action: Contextual Back to Sign In Link */}
          <div className="auth-card-footer">
            <p className="auth-switch-text">
              <Link
                href={backToSignInHref}
                className="auth-switch-link"
                style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
              >
                <ArrowLeft size={14} />
                <span>Back to sign in</span>
              </Link>
            </p>
          </div>
        </>
      ) : (
        /* Confirmation View */
        <div className="auth-confirmation-body">
          <div className="auth-success-icon-wrap">
            <CheckCircle2 size={32} />
          </div>
          <h1 className="auth-card-title">Check your inbox</h1>
          <p className="auth-confirmation-text">
            We have sent a password reset link to{" "}
            <span className="auth-confirmation-email">{email}</span>. Please click the link in the email to set a new password.
          </p>

          <Link href={backToSignInHref} className="auth-submit-btn" style={{ textDecoration: "none" }}>
            <span>Return to Sign In</span>
            <ArrowRight size={16} />
          </Link>

          <p className="auth-resend-row">
            Didn&apos;t receive the email? Check your spam folder or
            <button
              type="button"
              className="auth-resend-btn"
              onClick={handleResend}
              disabled={resending}
            >
              {resending ? "Sending..." : "Click to resend"}
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
