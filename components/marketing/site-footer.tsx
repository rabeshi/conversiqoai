import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.2fr_repeat(3,0.8fr)]">
        <div className="space-y-4">
          <div className="text-lg font-semibold text-slate-950">Conversiqo AI</div>
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            Build, deploy, and optimize intelligent agents across every customer touchpoint.
          </p>
          <p className="text-sm text-slate-500">Copyright © 2026 Conversiqo AI</p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-950">Platform</h4>
          <Link className="block text-sm text-slate-600 hover:text-slate-950" href="/solutions">
            Solutions
          </Link>
          <Link className="block text-sm text-slate-600 hover:text-slate-950" href="/pricing">
            Pricing
          </Link>
          <Link className="block text-sm text-slate-600 hover:text-slate-950" href="/enterprise">
            Enterprise
          </Link>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-950">Resources</h4>
          <Link className="block text-sm text-slate-600 hover:text-slate-950" href="/resources">
            Resource Center
          </Link>
          <Link className="block text-sm text-slate-600 hover:text-slate-950" href="/about">
            About
          </Link>
          <Link className="block text-sm text-slate-600 hover:text-slate-950" href="/careers">
            Careers
          </Link>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-950">Access</h4>
          <Link className="block text-sm text-slate-600 hover:text-slate-950" href="/sign-in">
            Sign In
          </Link>
          <Link className="block text-sm text-slate-600 hover:text-slate-950" href="/sign-up">
            Start Free
          </Link>
        </div>
      </div>
    </footer>
  );
}
