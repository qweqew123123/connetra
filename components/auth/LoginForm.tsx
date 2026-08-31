"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  AlertCircle,
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User as UserIcon,
} from "lucide-react";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const stepParam = searchParams.get("step");
  const emailParam = searchParams.get("email");

  const [step, setStep] = useState<"email" | "auth">("email");
  const [authMethod, setAuthMethod] = useState<"password" | "sso">("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});

  // Sync state from query parameters if returning from forgot password
  useEffect(() => {
    if (emailParam) {
      setEmail(emailParam);
    }
    if (stepParam === "password" && emailParam) {
      setStep("auth");
    }
  }, [stepParam, emailParam]);

  const validateEmailStep = () => {
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

  const validatePasswordStep = () => {
    const errors: { password?: string } = {};

    if (!password) {
      errors.password = "Password is required";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!validateEmailStep()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("auth");
    }, 400);
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (authMethod === "password") {
      if (!validatePasswordStep()) return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1100));
      // Redirect to external application / dashboard
      window.location.href = "https://app.connetra.com/login";
    } catch {
      setErrorMsg("Invalid credentials. Please verify your details and try again.");
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-card-header">
        <span className="auth-eyebrow">WELCOME BACK</span>
        <h1 className="auth-card-title">Log In</h1>
        {step === "email" && (
          <p className="auth-card-subtitle">
            Enter your email to continue to your Connetra workspace.
          </p>
        )}
      </div>

      {errorMsg && (
        <div className="auth-alert-banner error" role="alert">
          <AlertCircle size={17} className="alert-banner-icon" />
          <span>{errorMsg}</span>
        </div>
      )}

      {step === "email" ? (
        /* Step 1: Email Identification */
        <form className="auth-form" onSubmit={handleEmailSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="login-email" className="form-label">
              Email
            </label>
            <div className="form-input-wrap">
              <Mail size={16} className="form-input-icon" />
              <input
                id="login-email"
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

          <button
            type="submit"
            className="auth-submit-btn"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <span className="auth-btn-spinner" />
                <span>Continuing...</span>
              </>
            ) : (
              <>
                <span>Continue</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>

          {/* Forgot Password Link on Login Step 1 */}
          <div className="auth-forgot-row">
            <Link
              href={`/forgot-password?from=login${email.trim() ? `&email=${encodeURIComponent(email.trim())}` : ""}`}
              className="form-forgot-link"
            >
              Forgot password?
            </Link>
          </div>
        </form>
      ) : (
        /* Step 2: Authentication Method (Matching Reference UI) */
        <form className="auth-form" onSubmit={handleAuthSubmit} noValidate>
          {/* User Account Pill with 'Not you?' link */}
          <div className="auth-user-pill">
            <div className="auth-user-avatar">
              <UserIcon size={20} />
            </div>
            <div className="auth-user-info">
              <span className="auth-user-email">{email}</span>
              <button
                type="button"
                className="auth-user-switch-btn"
                onClick={() => {
                  setStep("email");
                  setPassword("");
                  setErrorMsg(null);
                }}
              >
                Not you?
              </button>
            </div>
          </div>

          {/* Authentication Method Radio Options */}
          <div className="auth-method-selector" role="radiogroup" aria-label="Sign-in method">
            <label className="auth-method-option">
              <input
                type="radio"
                name="authMethod"
                value="sso"
                checked={authMethod === "sso"}
                onChange={() => setAuthMethod("sso")}
                className="auth-method-radio"
              />
              <span>Single Sign On (SSO)</span>
            </label>

            <label className="auth-method-option">
              <input
                type="radio"
                name="authMethod"
                value="password"
                checked={authMethod === "password"}
                onChange={() => setAuthMethod("password")}
                className="auth-method-radio"
              />
              <span>Password</span>
            </label>
          </div>

          {authMethod === "password" ? (
            /* Password Input Field */
            <div className="form-group" style={{ marginTop: 6 }}>
              <label htmlFor="login-password" className="form-label">
                Password
              </label>
              <div className="form-input-wrap">
                <Lock size={16} className="form-input-icon" />
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  autoFocus
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (fieldErrors.password) {
                      setFieldErrors((prev) => ({ ...prev, password: undefined }));
                    }
                  }}
                  placeholder="Password"
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
          ) : (
            /* SSO Prompt */
            <div className="auth-sso-box">
              <p className="auth-sso-note">
                Continue to authenticate with your company&apos;s Single Sign-On (SSO) identity provider.
              </p>
            </div>
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
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>{authMethod === "sso" ? "Continue with SSO" : "Sign In"}</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>

          {/* Forgot Password Link on Password Step 2 */}
          {authMethod === "password" && (
            <div className="auth-forgot-row">
              <Link
                href={`/forgot-password?from=password&email=${encodeURIComponent(email.trim())}`}
                className="form-forgot-link"
              >
                Forgot password?
              </Link>
            </div>
          )}
        </form>
      )}

      {/* Secondary Action */}
      <div className="auth-card-footer">
        <p className="auth-switch-text">
          Don&apos;t have an account?
          <Link href="/createaccount" className="auth-switch-link">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
