import Link from "next/link";

import { AuthShell } from "@/components/auth/auth-shell";
import { SignUpForm } from "@/components/auth/auth-forms";

export default function SignUpPage() {
  return (
    <AuthShell
      copy="Create a new demo workspace and continue into the onboarding flow."
      footer={
        <>
          Already have access?{" "}
          <Link className="font-medium text-slate-950" href="/sign-in">
            Sign in
          </Link>
        </>
      }
      title="Create your Conversiqo AI account"
    >
      <SignUpForm />
    </AuthShell>
  );
}
