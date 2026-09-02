import type { Metadata } from "next";
import AuthLayout from "../../components/auth/AuthLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up — Connetra",
  description: "Create your Connetra account and bring your data ecosystem into one connected view.",
};

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}
