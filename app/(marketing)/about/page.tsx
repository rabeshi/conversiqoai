import Link from "next/link";
import { ArrowRight, BarChart3, Bot, ShieldCheck, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/marketing/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const operatingPrinciples = [
  {
    title: "Operational first",
    copy: "Built for teams that care about service quality, routing logic, measurable outcomes, and disciplined rollout.",
    icon: ShieldCheck,
  },
  {
    title: "Designed to sell well",
    copy: "The story holds up in a buyer walkthrough, an investor meeting, or an internal review without feeling overstated.",
    icon: Sparkles,
  },
  {
    title: "Built for real deployment",
    copy: "We focus on the hard parts of AI operations: knowledge quality, escalation logic, reporting, permissions, and channel coverage.",
    icon: Bot,
  },
];

const beliefPoints = [
  "Conversational AI should reduce noise, not create another inbox.",
  "Teams need a system they can explain to leadership in plain language.",
  "A good AI product has to feel credible before it feels impressive.",
];

const platformLenses = [
  {
    title: "For operators",
    copy: "Less repetitive work, cleaner handoffs, and better visibility into where conversations break down.",
  },
  {
    title: "For leaders",
    copy: "A clearer view of performance, adoption, and service quality without stitching together multiple tools.",
  },
  {
    title: "For buyers",
    copy: "A product experience that feels credible for serious teams evaluating AI beyond the demo stage.",
  },
];

export default function AboutPage() {
  return (
    <main className="container-shell py-16 lg:py-20">
      <section>
        <div className="space-y-6">
          <Badge tone="soft">About</Badge>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">AI that feels ready for real teams.</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              We build conversational AI that looks polished, works in practice, and makes sense to the teams using it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Teams supported", value: "Support, sales, onboarding" },
              { label: "Product lens", value: "Operational clarity" },
              { label: "Positioning", value: "Enterprise-ready by design" },
            ].map((item) => (
              <Card key={item.label}>
                <CardContent className="pt-6">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-400">{item.label}</div>
                  <div className="mt-3 text-base font-semibold leading-7 text-slate-950">{item.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Positioning"
          title="A clearer kind of AI company"
          copy="Conversiqo is built for teams that want practical AI outcomes, not theatrical demos. It sits where design quality, operational depth, and commercial clarity all need to work together."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {operatingPrinciples.map((item) => {
            const Icon = item.icon;
            return (
              <Card className="bg-white/95" key={item.title}>
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-[22px] bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.copy}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <CardHeader>
            <CardTitle>Why the product feels different</CardTitle>
            <CardDescription>
              Many AI tools look strong in a short demo but break down in real operations. Conversiqo is built to close that gap.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-7 text-slate-600">
            <p>
              We care about the details that decide whether a product actually works: dashboard clarity, handoff quality, escalation logic, interface feel, and whether the rollout makes sense to the people doing the work.
            </p>
            <p>
              That is why the platform is shaped around real use cases like support, lead qualification, onboarding, internal assistance, and multi-team deployment instead of vague automation promises.
            </p>
            <p>
              The result is a product experience that feels grounded, credible, and useful the moment practical questions start coming in.
            </p>
          </CardContent>
        </Card>

        <Card className="grid-dots overflow-hidden">
          <CardHeader>
            <CardTitle>What the platform should signal</CardTitle>
            <CardDescription>The About page should reinforce the same product story the rest of the site is already telling.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Maturity", copy: "The product feels more developed than a prototype or landing-page concept." },
              { label: "Control", copy: "Governance, reporting, and ownership feel clear without extra explanation." },
              { label: "Usefulness", copy: "Every feature connects to a real operational problem teams already face." },
            ].map((item) => (
              <div className="rounded-[24px] bg-white/85 p-4" key={item.label}>
                <div className="text-sm font-semibold text-slate-950">{item.label}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Who It Serves"
          title="Built to make different stakeholders say yes for different reasons"
          copy="The same product has to work for operators, leadership teams, and buyers evaluating it commercially. Conversiqo is designed to hold up under all three perspectives."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {platformLenses.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.copy}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Card className="hero-orbit overflow-hidden text-white">
          <CardContent className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.05em]">
                Conversiqo is built for teams that want AI to feel like part of the business, not a side experiment.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                That means clearer interfaces, sharper positioning, and a product story grounded in real operating conditions from the start.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/pricing">
                <Button size="lg" variant="primary">
                  See Pricing
                </Button>
              </Link>
              <Link href="/solutions">
                <Button className="border-white/15 bg-white/8 text-white hover:bg-white/12" size="lg" variant="outline">
                  Browse Use Cases
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
