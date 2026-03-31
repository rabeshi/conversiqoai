"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BarChart3,
  Clock3,
  MessageSquareText,
  Monitor,
  Smartphone,
  Tablet,
  UserRound,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type Slide = {
  title: string;
  person: string;
  role: string;
  device: string;
  image: string;
  quote: string;
  outcome: string;
};

const deviceIcon = {
  Desktop: Monitor,
  Mobile: Smartphone,
  Tablet: Tablet,
};

const infographicThemes = {
  "support-ops": {
    accent: "bg-blue-500",
    chip: "text-blue-700 bg-blue-50 border-blue-200",
    panel: "bg-blue-50/60",
    cards: [
      { label: "Chatbot resolution", value: "84%" },
      { label: "Manager interventions", value: "12" },
      { label: "Response time", value: "1.4s" },
    ],
    stages: ["Order question", "Policy answer", "Sentiment check", "Escalate if needed"],
  },
  "lead-funnel": {
    accent: "bg-emerald-500",
    chip: "text-emerald-700 bg-emerald-50 border-emerald-200",
    panel: "bg-emerald-50/60",
    cards: [
      { label: "Qualified leads", value: "37" },
      { label: "Booked demos", value: "9" },
      { label: "Follow-up speed", value: "18m" },
    ],
    stages: ["Visitor asks pricing", "Intent scored", "Fit confirmed", "Sales handoff"],
  },
  "care-escalation": {
    accent: "bg-violet-500",
    chip: "text-violet-700 bg-violet-50 border-violet-200",
    panel: "bg-violet-50/60",
    cards: [
      { label: "Review-ready threads", value: "14" },
      { label: "Escalation accuracy", value: "96%" },
      { label: "Queue delay", value: "7m" },
    ],
    stages: ["Patient request", "Guidance response", "Risk detected", "Supervisor review"],
  },
} as const;

export function UsecaseSlider({ slides }: { slides: Slide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = slides[activeIndex];
  const theme = infographicThemes[activeSlide.image as keyof typeof infographicThemes];
  const DeviceIcon = deviceIcon[activeSlide.device as keyof typeof deviceIcon] ?? Monitor;

  return (
    <section className="pb-6 pt-2 sm:pb-8">
      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
        <div className="space-y-5">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Chatbot use cases</div>
          <div className="space-y-4">
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl">
              One clear chatbot story per screen.
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Switch between desktop, mobile, and tablet to see how Conversiqo handles support, lead capture, and
              escalation in real business settings.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {slides.map((slide, index) => (
              <Button
                className={activeIndex === index ? "" : "bg-white text-slate-700 hover:bg-slate-100"}
                key={slide.title}
                onClick={() => setActiveIndex(index)}
                size="sm"
                variant={activeIndex === index ? "primary" : "outline"}
              >
                {slide.device}
              </Button>
            ))}
          </div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={false}
            key={activeSlide.title}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-panel">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-4">
                  <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${theme.chip}`}>
                    {activeSlide.device} chatbot workflow
                  </div>
                  <div className="max-w-xl">
                    <div className="text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                      {activeSlide.title}
                    </div>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">{activeSlide.quote}</p>
                  </div>
                </div>

                <div className="rounded-[24px] bg-slate-50 px-5 py-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Clock3 className="h-4 w-4 text-slate-500" />
                    Outcome
                  </div>
                  <p className="max-w-xs text-sm leading-7 text-slate-700">{activeSlide.outcome}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white">
                  <UserRound className="h-5 w-5 text-slate-700" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-950">{activeSlide.person}</div>
                  <div className="text-sm text-slate-500">{activeSlide.role}</div>
                </div>
                <div className="ml-auto flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                  <BadgeCheck className="h-3.5 w-3.5 text-slate-500" />
                  Active use case
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={false}
          key={`${activeSlide.title}-graphic`}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <div className="rounded-[34px] border border-slate-200 bg-white p-5 shadow-panel sm:p-6 lg:p-7">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Infographic view</div>
                <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  How the chatbot works
                </div>
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${theme.panel}`}>
                <DeviceIcon className="h-5 w-5 text-slate-800" />
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className={`rounded-[30px] border border-slate-200 ${theme.panel} p-5`}>
                <div className="mb-4 flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${theme.accent}`} />
                  <div className="text-sm font-medium text-slate-700">Conversation flow</div>
                </div>
                <div className="space-y-3">
                  {theme.stages.map((node, index) => (
                    <div className="flex items-center gap-3" key={node}>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-700 shadow-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1 rounded-[20px] border border-white bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                        {node}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-3">
                  {theme.cards.map((card) => (
                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4" key={card.label}>
                      <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">{card.label}</div>
                      <div className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{card.value}</div>
                    </div>
                    ))}
                  </div>

                <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-700">
                    <MessageSquareText className="h-4 w-4 text-slate-500" />
                    Clear message
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-[18px] bg-white px-4 py-3 text-sm leading-7 text-slate-600">
                      Conversiqo handles the routine part first.
                    </div>
                    <div className="rounded-[18px] bg-white px-4 py-3 text-sm leading-7 text-slate-600">
                      Humans enter only when urgency, nuance, or revenue signal appears.
                    </div>
                    <div className={`rounded-[18px] px-4 py-3 text-sm leading-7 text-slate-700 ${theme.panel}`}>
                      The conversation keeps context from start to finish.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
