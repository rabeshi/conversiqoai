"use client";

import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { aboutMenuItems, navLinks, solutionMenuItems } from "@/lib/mock-data";

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="container-shell flex h-20 items-center justify-between gap-6 rounded-[28px] border border-white/70 bg-white/84 px-4 shadow-panel backdrop-blur-xl">
        <Link className="flex items-center gap-3" href="/">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
            CQ
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-950">Conversiqo AI</div>
            <div className="text-xs text-slate-500">Conversational AI for serious businesses</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <div className="flex items-center">
              <Link className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950" href="/solutions">
                Solutions
              </Link>
              <button
                aria-label="Toggle solutions menu"
                className="rounded-full p-2 text-slate-500 transition hover:bg-white hover:text-slate-950"
                onClick={() => setSolutionsOpen((value) => !value)}
                type="button"
              >
                <ChevronDown className={`h-4 w-4 transition ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            <div className="absolute left-0 top-full h-4 w-[280px]" />
            <div
              className={`absolute left-0 top-[calc(100%+8px)] w-[280px] rounded-[28px] border border-slate-200 bg-white p-3 shadow-panel transition ${
                solutionsOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="mb-2 px-3 pt-1 text-[11px] uppercase tracking-[0.24em] text-slate-400">Solutions</div>
              <div className="grid gap-1">
                {solutionMenuItems.map((item) => (
                  <Link
                    className="rounded-[18px] px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                    href={item.href}
                    key={item.label}
                    onClick={() => setSolutionsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <div className="flex items-center">
              <Link className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950" href="/about">
                About
              </Link>
              <button
                aria-label="Toggle about menu"
                className="rounded-full p-2 text-slate-500 transition hover:bg-white hover:text-slate-950"
                onClick={() => setAboutOpen((value) => !value)}
                type="button"
              >
                <ChevronDown className={`h-4 w-4 transition ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            <div className="absolute left-0 top-full h-4 w-[220px]" />
            <div
              className={`absolute left-0 top-[calc(100%+8px)] w-[220px] rounded-[28px] border border-slate-200 bg-white p-3 shadow-panel transition ${
                aboutOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="mb-2 px-3 pt-1 text-[11px] uppercase tracking-[0.24em] text-slate-400">About</div>
              <div className="grid gap-1">
                {aboutMenuItems.map((item) => (
                  <Link
                    className="rounded-[18px] px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                    href={item.href}
                    key={item.label}
                    onClick={() => setAboutOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.filter((link) => !["Solutions", "About"].includes(link.label)).map((link) => (
            <Link key={link.href} className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/sign-in">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="primary">Start Free</Button>
          </Link>
        </div>

        <button className="rounded-2xl border border-slate-200 p-3 lg:hidden" onClick={() => setOpen((value) => !value)} type="button">
          <Menu className="h-5 w-5 text-slate-700" />
        </button>
      </div>

      {open ? (
        <div className="container-shell mt-3 space-y-4 rounded-[28px] border border-slate-200 bg-white px-4 py-4 shadow-panel lg:hidden">
          <div className="space-y-3">
            <button
              className="flex w-full items-center justify-between text-sm font-medium text-slate-700"
              onClick={() => setSolutionsOpen((value) => !value)}
              type="button"
            >
              <span>Solutions</span>
              <ChevronDown className={`h-4 w-4 transition ${solutionsOpen ? "rotate-180" : ""}`} />
            </button>
            {solutionsOpen ? (
              <div className="grid gap-1 rounded-[22px] bg-slate-50 p-3">
                {solutionMenuItems.map((item) => (
                  <Link
                    className="rounded-[16px] px-3 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-slate-950"
                    href={item.href}
                    key={item.label}
                    onClick={() => {
                      setSolutionsOpen(false);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div className="space-y-3">
            <button
              className="flex w-full items-center justify-between text-sm font-medium text-slate-700"
              onClick={() => setAboutOpen((value) => !value)}
              type="button"
            >
              <span>About</span>
              <ChevronDown className={`h-4 w-4 transition ${aboutOpen ? "rotate-180" : ""}`} />
            </button>
            {aboutOpen ? (
              <div className="grid gap-1 rounded-[22px] bg-slate-50 p-3">
                {aboutMenuItems.map((item) => (
                  <Link
                    className="rounded-[16px] px-3 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-slate-950"
                    href={item.href}
                    key={item.label}
                    onClick={() => {
                      setAboutOpen(false);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {navLinks.filter((link) => !["Solutions", "About"].includes(link.label)).map((link) => (
            <Link key={link.href} className="block text-sm font-medium text-slate-700" href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3">
            <Link className="flex-1" href="/sign-in" onClick={() => setOpen(false)}>
              <Button className="w-full" variant="outline">
                Sign In
              </Button>
            </Link>
            <Link className="flex-1" href="/sign-up" onClick={() => setOpen(false)}>
              <Button className="w-full" variant="primary">
                Start Free
              </Button>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
