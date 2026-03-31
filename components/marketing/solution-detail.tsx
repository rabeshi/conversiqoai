import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type SolutionDetailProps = {
  eyebrow: string;
  title: string;
  headline: string;
  copy: string;
  heroImage: string;
  stats: readonly { label: string; value: string }[];
  scenarios: readonly string[];
  heroCaption?: string;
  scenariosDescription?: string;
  mockChat: {
    promptLabel: string;
    description?: string;
    messages: readonly {
      speaker: "assistant" | "customer";
      text: string;
    }[];
  };
  positioningTitle?: string;
  positioningDescription?: string;
  positioningPoints?: readonly string[];
};

export function SolutionDetail({
  eyebrow,
  title,
  headline,
  copy,
  heroImage,
  stats,
  scenarios,
  heroCaption,
  scenariosDescription,
  mockChat,
  positioningTitle,
  positioningDescription,
  positioningPoints,
}: SolutionDetailProps) {
  return (
    <main className="container-shell py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <Badge tone="soft">{eyebrow}</Badge>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">{headline}</h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">{copy}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/sign-up">
              <Button size="lg" variant="primary">
                Start Free
              </Button>
            </Link>
            <Link href="/solutions">
              <Button size="lg" variant="outline">
                Back to Solutions
              </Button>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="pt-6">
                  <div className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">{stat.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-500">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[36px] border border-slate-200 bg-slate-100 shadow-soft">
          <Image alt={headline} className="object-cover" fill priority sizes="(max-width: 1024px) 100vw, 50vw" src={heroImage} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-lg text-2xl font-semibold tracking-[-0.04em]">
              {heroCaption ?? `${title} teams use Conversiqo to stay fast and consistent.`}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="hero-orbit text-white">
          <CardHeader>
            <CardTitle className="text-white">Real operating moments</CardTitle>
            <CardDescription className="text-slate-300">
              {scenariosDescription ?? "These are the kinds of human workflows this solution page is designed to support."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {scenarios.map((scenario) => (
              <div className="rounded-[24px] border border-white/10 bg-white/8 p-4 text-sm leading-7 text-slate-200" key={scenario}>
                {scenario}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="overflow-hidden border-slate-200">
            <CardHeader className="border-b border-slate-100 bg-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <CardTitle>Conversiqo Chat Mockup</CardTitle>
                  <CardDescription>{mockChat.description ?? "A sample first-touch conversation designed for this use case."}</CardDescription>
                </div>
                <Badge tone="soft">{mockChat.promptLabel}</Badge>
              </div>
            </CardHeader>
            <CardContent className="bg-slate-50 p-5">
              <div className="space-y-3">
                {mockChat.messages.map((message, index) =>
                  message.speaker === "assistant" ? (
                    <div className="rounded-[22px] bg-white p-4 shadow-sm" key={`${message.speaker}-${index}`}>
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-950">
                        <Sparkles className="h-4 w-4 text-primary" />
                        Conversiqo AI
                      </div>
                      <p className="text-sm leading-6 text-slate-600">{message.text}</p>
                    </div>
                  ) : (
                    <div className="flex justify-end" key={`${message.speaker}-${index}`}>
                      <div className="max-w-[88%] rounded-[22px] bg-primary px-4 py-3 text-sm leading-6 text-white">{message.text}</div>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
          <CardHeader>
            <CardTitle>{positioningTitle ?? "What this page should communicate"}</CardTitle>
            <CardDescription>{positioningDescription ?? "A premium industry page should feel concrete, operational, and buyer-ready."}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {(positioningPoints ?? [
              "The platform supports actual team workflows, not just chatbot demos.",
              "Business outcomes and service quality are presented together, not in isolation.",
              "The buying story feels credible for customer demos, investor walkthroughs, and internal review.",
            ]).map((point) => (
              <div className="flex items-start gap-3 rounded-[24px] bg-slate-50 p-4" key={point}>
                <ArrowRight className="mt-1 h-4 w-4 text-primary" />
                <p className="text-sm leading-7 text-slate-600">{point}</p>
              </div>
            ))}
          </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
