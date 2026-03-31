"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function Tabs({
  tabs,
  defaultValue,
  children,
}: {
  tabs: string[];
  defaultValue?: string;
  children: (activeTab: string) => ReactNode;
}) {
  const [activeTab, setActiveTab] = useState(defaultValue ?? tabs[0]);

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={cn(
              "rounded-[18px] px-4 py-2 text-sm font-medium transition",
              activeTab === tab ? "bg-white text-slate-950 shadow-sm" : "text-slate-600 hover:text-slate-900",
            )}
            onClick={() => setActiveTab(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>
      {children(activeTab)}
    </div>
  );
}
