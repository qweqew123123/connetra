import type { Metadata } from "next";
import AuthLayout from "../../components/auth/AuthLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Create Account — Connetra",
  description: "Create your Connetra account and bring your data ecosystem into one connected view.",
};

export default function CreateAccountPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}
