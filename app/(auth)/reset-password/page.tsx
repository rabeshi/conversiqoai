import Link from "next/link";

import { AuthShell } from "@/components/auth/auth-shell";
import { ResetPasswordForm } from "@/components/auth/auth-forms";

export default function ResetPasswordPage() {
  return (
    <AuthShell
      copy="Choose a new password to continue back into the product demo."
      footer={
        <>
          Need to start over?{" "}
          <Link className="font-medium text-slate-950" href="/sign-in">
            Sign in instead
          </Link>
        </>
      }
      title="Set a new password"
    >
      <ResetPasswordForm />
    </AuthShell>
  );
}
