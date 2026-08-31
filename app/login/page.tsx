import { Suspense } from "react";
import type { Metadata } from "next";
import AuthLayout from "../../components/auth/AuthLayout";
import LoginForm from "../../components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign In — Connetra",
  description: "Sign in to access your Connetra data ecosystem workspace.",
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<div className="auth-card" style={{ minHeight: 380 }} />}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
}
