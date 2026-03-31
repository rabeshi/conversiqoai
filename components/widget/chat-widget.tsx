"use client";

import { motion } from "framer-motion";
import { MessageSquare, Paperclip, RefreshCw, SendHorizontal, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WIDGET_STORAGE_KEY } from "@/lib/session";

type WidgetConfig = {
  color: string;
  position: "left" | "right";
  radius: string;
  greeting: string;
  buttonLabel: string;
};

const defaultConfig: WidgetConfig = {
  color: "#5b73f7",
  position: "right",
  radius: "24px",
  greeting: "Welcome to Conversiqo AI. What would you like to automate today?",
  buttonLabel: "Ask Conversiqo",
};

const AGENT_NAME = "Conversiqo AI";

type DemoMessage = {
  speaker: "agent" | "customer";
  text: string;
};

type MarketingScenario = {
  id: string;
  label: string;
  eyebrow: string;
  followup: string;
  messages: DemoMessage[];
};

const marketingScenarios: MarketingScenario[] = [
  {
    id: "orders",
    label: "Order tracking",
    eyebrow: "Website + Instagram DM",
    followup: "Preparing a retail deployment recommendation for order status, WISMO, and shipping nudges...",
    messages: [
      { speaker: "agent", text: "Welcome to Conversiqo AI. What would you like to automate today?" },
      {
        speaker: "customer",
        text: "We run an online store and get nonstop 'where is my order?' messages on the website and Instagram.",
      },
      {
        speaker: "agent",
        text: "That is a very common retail workflow. Do you want the assistant to check tracking automatically, or just collect the order number and hand off to your team?",
      },
      {
        speaker: "customer",
        text: "Automatically if possible. Our team only wants the tricky cases like lost packages or VIP customers.",
      },
      {
        speaker: "agent",
        text: "That makes sense. We can let the assistant answer order-status questions instantly, send delivery updates, and escalate only when the tracking looks delayed or the customer sounds frustrated.",
      },
    ],
  },
  {
    id: "returns",
    label: "Returns + exchanges",
    eyebrow: "Self-serve support flow",
    followup: "Mapping return rules, exchange inventory, and human review triggers for damaged items...",
    messages: [
      {
        speaker: "agent",
        text: "What usually slows your team down more: returns, exchanges, or product questions before purchase?",
      },
      {
        speaker: "customer",
        text: "Returns and size exchanges. People keep asking whether they are still eligible and how to swap for a different size.",
      },
      {
        speaker: "agent",
        text: "We can handle that in the conversation itself. The assistant can check the order date, confirm the return window, offer an exchange first, and generate the right next step without your team answering the same questions all day.",
      },
      {
        speaker: "customer",
        text: "That would help a lot. We only want a person involved when something is damaged or outside policy.",
      },
      {
        speaker: "agent",
        text: "Perfect. Then the assistant can keep routine returns self-serve and send the exception cases to a human with the order context already attached.",
      },
    ],
  },
  {
    id: "discovery",
    label: "Product discovery",
    eyebrow: "Revenue + cart recovery",
    followup: "Previewing guided selling, bundle suggestions, and abandoned-cart recovery across channels...",
    messages: [
      { speaker: "agent", text: "Are you also trying to use the assistant for sales, or mainly for support?" },
      { speaker: "customer", text: "Both. We want it to answer product questions, recommend bundles, and recover carts without sounding robotic." },
      {
        speaker: "agent",
        text: "That usually works best as a second flow. One assistant handles support, and another helps shoppers compare products, answer sizing or ingredient questions, and make a recommendation when they are close to buying.",
      },
      {
        speaker: "customer",
        text: "Can it follow up when someone leaves with items in the cart?",
      },
      {
        speaker: "agent",
        text: "Yes. It can trigger a cart-recovery message, answer objections, and still keep everything under the same reporting and escalation rules as support.",
      },
    ],
  },
];

type ChatWidgetProps = {
  embedded?: boolean;
  variant?: "assistant" | "marketing";
};

export function ChatWidget({ embedded = false, variant = "assistant" }: ChatWidgetProps) {
  const [open, setOpen] = useState(embedded);
  const [config, setConfig] = useState<WidgetConfig>(defaultConfig);
  const [selectedPrompt, setSelectedPrompt] = useState<"Pricing" | "Onboarding" | "Deployment">("Pricing");
  const [draftMessage, setDraftMessage] = useState("");
  const [submittedPrompt, setSubmittedPrompt] = useState<"Pricing" | "Onboarding" | "Deployment" | null>(null);
  const [userMessages, setUserMessages] = useState<string[]>([]);
  const [marketingIndex, setMarketingIndex] = useState(0);
  const [marketingMode, setMarketingMode] = useState<"auto" | "guided">("auto");
  const [visibleMarketingMessages, setVisibleMarketingMessages] = useState(1);
  const [marketingThinking, setMarketingThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const promptResponses = {
    Pricing: "Pricing is typically based on channel coverage, agent volume, and workspace needs. Most teams start with a focused rollout, then expand once support and lead workflows are live.",
    Onboarding: "Onboarding usually starts with agent setup, knowledge configuration, and channel launch. Most teams can walk through a polished first use case quickly before expanding coverage.",
    Deployment: "Deployment is usually phased by channel and use case. Teams often launch the website widget first, then add messaging, workflows, and reporting once the core experience is performing well.",
  } as const;

  const demoReplies = useMemo(
    () => [
      "Conversiqo AI can help with that. I can walk you through rollout, routing, and analytics based on your goals.",
      "That sounds like a strong fit. We can start with one focused use case, then expand into more channels once the workflow is live.",
      "I can suggest the right setup for your team and show how it would look in the workspace.",
    ],
    [],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(WIDGET_STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as Partial<WidgetConfig>;
      const nextConfig = {
        ...defaultConfig,
        ...parsed,
      };
      setConfig(nextConfig);
      window.localStorage.setItem(WIDGET_STORAGE_KEY, JSON.stringify(nextConfig));
    } catch {
      setConfig(defaultConfig);
    }
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;
    if (variant === "marketing") {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
      return;
    }

    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [selectedPrompt, submittedPrompt, userMessages, open, variant, marketingIndex]);

  useEffect(() => {
    if (variant !== "marketing" || !open || marketingMode !== "auto") return;
    const timer = window.setInterval(() => {
      setMarketingIndex((current) => (current + 1) % marketingScenarios.length);
    }, 10800);

    return () => window.clearInterval(timer);
  }, [marketingMode, open, variant]);

  useEffect(() => {
    if (variant !== "marketing" || !open) return;

    setVisibleMarketingMessages(1);
    setMarketingThinking(false);

    const scenario = marketingScenarios[marketingIndex];
    const timers: number[] = [];

    scenario.messages.slice(1).forEach((message, index) => {
      const baseDelay = index * 2350;

      if (message.speaker === "agent") {
        timers.push(
          window.setTimeout(() => {
            setMarketingThinking(true);
          }, baseDelay + 500),
        );
      }

      timers.push(
        window.setTimeout(() => {
          setVisibleMarketingMessages(index + 2);
          setMarketingThinking(false);
        }, baseDelay + 1750),
      );
    });

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [marketingIndex, open, variant]);

  const submitMessage = () => {
    const trimmed = draftMessage.trim();
    if (!trimmed) return;
    setUserMessages((current) => [...current, trimmed]);
    setDraftMessage("");
  };

  const activeMarketingScenario = marketingScenarios[marketingIndex];

  return (
    <div className={`${embedded ? "w-full" : `fixed bottom-6 ${config.position === "left" ? "left-6" : "right-6"} z-30`}`}>
      {!embedded ? (
        <Button
          className="rounded-full px-5 shadow-soft"
          onClick={() => setOpen((value) => !value)}
          style={{ backgroundColor: config.color }}
          variant="primary"
        >
          {open ? <X className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
          {config.buttonLabel}
        </Button>
      ) : null}

      {open ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 flex w-full max-w-sm flex-col overflow-hidden border border-slate-200 bg-white shadow-soft ${
            embedded ? "h-[600px]" : "max-h-[78vh]"
          }`}
          initial={{ opacity: 0, y: 16 }}
          style={{ borderRadius: config.radius }}
        >
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-950 px-5 py-4 text-white">
            <div>
              <div className="text-sm font-semibold">{AGENT_NAME}</div>
              <div className="text-xs text-slate-300">Conversational AI assistant</div>
            </div>
            <Badge className="bg-white/10 text-white" tone="default">
              Live demo
            </Badge>
          </div>

          <div className="flex-1 overflow-y-auto bg-slate-50 p-5" ref={scrollRef}>
            <div className="space-y-4">
              {variant === "marketing" ? (
                <>
                  <div className="flex justify-end">
                    <button
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                      onClick={() => setMarketingMode((current) => (current === "auto" ? "guided" : "auto"))}
                      type="button"
                    >
                      <RefreshCw className={`h-3.5 w-3.5 ${marketingMode === "auto" ? "animate-spin" : ""}`} />
                      {marketingMode === "auto" ? "Autoplay" : "Guided"}
                    </button>
                  </div>

                  <div className="space-y-3">
                    {activeMarketingScenario.messages.slice(0, visibleMarketingMessages).map((message, index) =>
                      message.speaker === "customer" ? (
                        <div className="flex justify-end" key={`${activeMarketingScenario.id}-${index}`}>
                          <div className="max-w-[86%] rounded-[22px] bg-primary px-4 py-3 text-sm text-white">{message.text}</div>
                        </div>
                      ) : (
                        <div className="rounded-[22px] bg-white p-4 shadow-sm" key={`${activeMarketingScenario.id}-${index}`}>
                          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-950">
                            <Sparkles className="h-4 w-4 text-primary" />
                            {index === 0 ? AGENT_NAME : "Retail orchestration"}
                          </div>
                          <p className="text-sm leading-6 text-slate-600">{message.text}</p>
                        </div>
                      ),
                    )}

                    {marketingThinking ? (
                      <div className="rounded-[22px] bg-white p-4 shadow-sm">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-950">
                          <Sparkles className="h-4 w-4 text-primary" />
                          Conversiqo AI
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-primary/50" />
                          <span className="h-2 w-2 animate-pulse rounded-full bg-primary/60 [animation-delay:120ms]" />
                          <span className="h-2 w-2 animate-pulse rounded-full bg-primary/70 [animation-delay:240ms]" />
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="rounded-[22px] bg-white p-4 shadow-sm">
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Switch conversation</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {marketingScenarios.map((scenario, index) => (
                        <button
                          key={scenario.id}
                          className={`rounded-full border px-3 py-2 text-xs font-medium transition ${
                            marketingIndex === index
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                          onClick={() => {
                            setMarketingMode("guided");
                            setMarketingIndex(index);
                          }}
                          type="button"
                        >
                          {scenario.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
              <div className="rounded-[22px] bg-white p-4 shadow-sm">
                <div className="mb-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <Sparkles className="h-4 w-4 text-primary" />
                    {AGENT_NAME}
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{config.greeting}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Pricing", "Onboarding", "Deployment"].map((prompt) => (
                    <button
                      key={prompt}
                      className={`rounded-full border px-3 py-2 text-xs font-medium transition ${
                        submittedPrompt === prompt || (submittedPrompt === null && selectedPrompt === prompt)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                      onClick={() => {
                        const nextPrompt = prompt as "Pricing" | "Onboarding" | "Deployment";
                        setSelectedPrompt(nextPrompt);
                        setSubmittedPrompt(nextPrompt);
                      }}
                      type="button"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                {submittedPrompt ? (
                  <>
                    <div className="mt-4 flex justify-end">
                      <div className="max-w-[85%] rounded-[22px] bg-primary px-4 py-3 text-sm text-white">{submittedPrompt}</div>
                    </div>
                    <div className="mt-4 rounded-[18px] bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600">
                      {promptResponses[submittedPrompt]}
                    </div>
                  </>
                ) : null}
              </div>
              )}

              {variant === "assistant" &&
                userMessages.map((message, index) => (
                  <div className="space-y-4" key={`${message}-${index}`}>
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-[22px] bg-primary px-4 py-3 text-sm text-white">{message}</div>
                    </div>
                    <div className="rounded-[22px] bg-white p-4 text-sm leading-7 text-slate-600 shadow-sm">
                      {demoReplies[index % demoReplies.length]}
                    </div>
                  </div>
                ))}

              {variant === "marketing" ? (
                <div className="rounded-[22px] bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div className="text-sm text-slate-500">{activeMarketingScenario.followup}</div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3 rounded-[24px] border border-slate-200 px-4 py-3">
              <Paperclip className="h-4 w-4 text-slate-400" />
              <input
                className="flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                onChange={(event) => setDraftMessage(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    submitMessage();
                  }
                }}
                placeholder="Ask about plans, setup, or launch"
                value={draftMessage}
              />
              <button className="text-primary transition hover:text-[#4c63ea]" onClick={submitMessage} type="button">
                <SendHorizontal className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-3 text-xs text-slate-500">Need a human? Use the escalation option inside the workspace demo.</div>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
