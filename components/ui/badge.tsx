import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "default",
  children,
}: {
  className?: string;
  tone?: "default" | "success" | "warning" | "soft";
  children: ReactNode;
}) {
  const toneClass =
    tone === "success"
      ? "bg-emerald-50 text-emerald-700"
      : tone === "warning"
        ? "bg-amber-50 text-amber-700"
        : tone === "soft"
          ? "bg-slate-100 text-slate-700"
          : "bg-primary/10 text-primary";

  return <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-medium", toneClass, className)}>{children}</span>;
}
