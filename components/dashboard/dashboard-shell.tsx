"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Bell, LogOut, Search, Sparkles } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { dashboardNav } from "@/lib/mock-data";
import { clearSession, getStoredSession } from "@/lib/session";
import { cn } from "@/lib/utils";

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const session = getStoredSession();
    if (!session) {
      router.replace("/sign-in");
      return;
    }
    setHydrated(true);
  }, [router]);

  if (!hydrated) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-screen bg-[#f4f6fb]">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white px-5 py-6 xl:flex">
          <Link className="mb-10 flex items-center gap-3" href="/dashboard">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">CQ</div>
            <div>
              <div className="text-sm font-semibold text-slate-950">Conversiqo AI</div>
              <div className="text-xs text-slate-500">Workspace: Northbridge</div>
            </div>
          </Link>

          <nav className="space-y-2">
            {dashboardNav.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                    active ? "bg-slate-950 text-white shadow-panel" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                  )}
                  href={item.href}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-[28px] bg-slate-950 p-5 text-white">
            <div className="mb-2 text-sm font-semibold">Enterprise workspace</div>
            <p className="text-sm leading-6 text-slate-300">
              Monitor live agents, manage channels, and give leadership one clear view of conversational performance.
            </p>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="border-b border-slate-200 bg-white/80 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-sm text-slate-500">Northbridge Capital Workspace</div>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-950">Conversiqo AI Control Center</h1>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex min-w-[240px] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <Search className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-400">Search conversations, agents, analytics</span>
                </div>
                <Button variant="outline">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="primary">
                  <Sparkles className="h-4 w-4" />
                  Quick Action
                </Button>
                <Button
                  onClick={() => {
                    clearSession();
                    router.replace("/sign-in");
                  }}
                  variant="ghost"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </Button>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
