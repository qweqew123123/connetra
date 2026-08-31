import { Suspense } from "react";
import type { Metadata } from "next";
import AuthLayout from "../../components/auth/AuthLayout";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Reset Password — Connetra",
  description: "Reset your Connetra account password.",
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<div className="auth-card" style={{ minHeight: 380 }} />}>
        <ForgotPasswordForm />
      </Suspense>
    </AuthLayout>
  );
}
