import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TrustLogoProps = {
  id: string;
  name: string;
  className?: string;
};

function Mark({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white", className)}>
      {children}
    </div>
  );
}

function NorthbridgeLogo() {
  return (
    <>
      <Mark>
        <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 32 32">
          <path d="M6 22 16 8l10 14" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-900" />
          <path d="M11 22h10" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-600" />
        </svg>
      </Mark>
      <div className="text-sm font-semibold tracking-[-0.02em] text-slate-700">Northbridge Capital</div>
    </>
  );
}

function KestrelLogo() {
  return (
    <>
      <Mark className="bg-emerald-50">
        <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 32 32">
          <path d="M7 21c7-1 9-7 18-10-2 5-6 11-13 13l-5-3Z" fill="currentColor" className="text-emerald-600" />
          <circle cx="21.5" cy="11.5" r="1.4" fill="currentColor" className="text-slate-900" />
        </svg>
      </Mark>
      <div className="text-sm font-semibold tracking-[-0.02em] text-slate-700">Kestrel Health</div>
    </>
  );
}

function MeridianLogo() {
  return (
    <>
      <Mark className="bg-slate-50">
        <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 32 32">
          <path d="M6 22V10l6 7 4-5 10 10" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-900" />
          <path d="M20 12h6" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-violet-600" />
        </svg>
      </Mark>
      <div className="text-sm font-semibold tracking-[-0.02em] text-slate-700">Meridian Retail</div>
    </>
  );
}

function SummitGovLogo() {
  return (
    <>
      <Mark className="bg-blue-50">
        <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 32 32">
          <path d="M16 6 7 11v5c0 5.5 3.7 9 9 10 5.3-1 9-4.5 9-10v-5l-9-5Z" fill="currentColor" className="text-blue-600" />
          <path d="M12.5 16 15 18.5l4.5-5" fill="none" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Mark>
      <div className="text-sm font-semibold tracking-[-0.02em] text-slate-700">SummitGov</div>
    </>
  );
}

function AtlasLogo() {
  return (
    <>
      <Mark className="bg-slate-950">
        <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="2" className="text-white" />
          <path d="M7 16h18M16 7c3 3.5 4.5 6.5 4.5 9S19 21.5 16 25c-3-3.5-4.5-6.5-4.5-9S13 10.5 16 7Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-300" />
        </svg>
      </Mark>
      <div className="text-sm font-semibold tracking-[-0.02em] text-slate-700">Atlas Systems</div>
    </>
  );
}

function BlueHarborLogo() {
  return (
    <>
      <Mark className="bg-cyan-50">
        <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 32 32">
          <path d="M7 20c2.2-2.8 4.7-4.2 7.5-4.2S19.8 17.2 22 20c1.2 1.5 2.2 2.3 3 2.3H7Z" fill="currentColor" className="text-cyan-600" />
          <path d="M10 12.5h12M16 8v9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="text-slate-900" />
        </svg>
      </Mark>
      <div className="text-sm font-semibold tracking-[-0.02em] text-slate-700">BlueHarbor EDU</div>
    </>
  );
}

export function TrustLogo({ id, name, className }: TrustLogoProps) {
  const logos: Record<string, ReactNode> = {
    northbridge: <NorthbridgeLogo />,
    kestrel: <KestrelLogo />,
    meridian: <MeridianLogo />,
    summitgov: <SummitGovLogo />,
    atlas: <AtlasLogo />,
    blueharbor: <BlueHarborLogo />,
  };

  return (
    <div
      aria-label={name}
      className={cn(
        "flex items-center justify-center gap-3 rounded-[26px] border border-slate-200 bg-slate-50 px-4 py-4 text-left transition hover:-translate-y-0.5 hover:bg-white hover:shadow-panel",
        className,
      )}
      role="img"
    >
      {logos[id]}
    </div>
  );
}
