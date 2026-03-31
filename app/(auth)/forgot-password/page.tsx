import Link from "next/link";

import { AuthShell } from "@/components/auth/auth-shell";
import { ForgotPasswordForm } from "@/components/auth/auth-forms";

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      copy="This is a front-end-only flow, but the experience mimics a production password recovery screen."
      footer={
        <>
          Remembered your password?{" "}
          <Link className="font-medium text-slate-950" href="/sign-in">
            Return to sign in
          </Link>
        </>
      }
      title="Reset access"
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}
