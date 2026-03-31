import type { ReactNode } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

export function AuthShell({
  title,
  copy,
  children,
  footer,
}: {
  title: string;
  copy: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[0.95fr_1.05fr]">
      <div className="hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col">
        <Link className="flex items-center gap-3" href="/">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-950">CQ</div>
          <div>
            <div className="text-base font-semibold">Conversiqo AI</div>
            <div className="text-sm text-slate-300">Conversational AI for serious businesses</div>
          </div>
        </Link>
        <div className="mt-auto space-y-6">
          <Badge className="w-fit bg-white/10 text-white">Premium product preview</Badge>
          <h2 className="max-w-lg text-4xl font-semibold tracking-tight">A SaaS experience built to impress buyers, prospects, and stakeholders.</h2>
          <p className="max-w-lg text-base leading-7 text-slate-300">
            Explore the full product journey, from first impression to sign-in, onboarding, workspace setup, analytics, and embedded chat.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-background px-4 py-10 sm:px-6">
        <div className="w-full max-w-xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
          <div className="mb-8 space-y-3">
            <Badge tone="soft">Conversiqo AI</Badge>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950">{title}</h1>
            <p className="text-base leading-7 text-slate-600">{copy}</p>
          </div>
          {children}
          <div className="mt-8 text-sm text-slate-500">{footer}</div>
        </div>
      </div>
    </div>
  );
}
