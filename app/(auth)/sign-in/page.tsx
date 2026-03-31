import Link from "next/link";

import { AuthShell } from "@/components/auth/auth-shell";
import { SignInForm } from "@/components/auth/auth-forms";

export default function SignInPage() {
  return (
    <AuthShell
      copy="Use the demo credentials or continue with the demo sign-in flow to enter the workspace."
      footer={
        <>
          New to Conversiqo AI?{" "}
          <Link className="font-medium text-slate-950" href="/sign-up">
            Create an account
          </Link>
        </>
      }
      title="Sign in to your workspace"
    >
      <SignInForm />
    </AuthShell>
  );
}
