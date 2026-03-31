import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/marketing/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { planCards } from "@/lib/mock-data";

const planFeatures: Record<string, string[]> = {
  Starter: [
    "1 live agent with website widget deployment",
    "Core analytics for volume, response time, and resolution",
    "Knowledge base setup for FAQs, links, and internal answers",
    "Basic branding controls and guided onboarding",
  ],
  Growth: [
    "Multiple agents across support, sales, and onboarding",
    "Advanced analytics, handoff tracking, and workflow rules",
    "Multi-channel rollout across web, messaging, and commerce",
    "Team roles, integrations, and stronger workspace controls",
  ],
  Enterprise: [
    "Custom rollout design for large or multi-region teams",
    "Advanced controls, governance surfaces, and premium support",
    "Cross-functional deployment for service, revenue, and internal ops",
    "Workspace strategy for enterprise security and scale requirements",
  ],
};

const comparisonRows = [
  { label: "Live agents", starter: "1", growth: "Up to 5", enterprise: "Custom" },
  { label: "Channels", starter: "Website", growth: "Web + messaging", enterprise: "All channels" },
  { label: "Analytics", starter: "Core reporting", growth: "Advanced dashboards", enterprise: "Executive reporting" },
  { label: "Integrations", starter: "Basic", growth: "Standard integrations", enterprise: "Custom + enterprise stack" },
  { label: "Support", starter: "Standard", growth: "Priority", enterprise: "White-glove" },
];

export default function PricingPage() {
  return (
    <main className="pb-20">
      <section className="container-shell py-16 lg:py-20">
        <SectionHeading
          copy="Start with a focused rollout, expand into more channels and teams, and keep the commercial story clear for buyers, operators, and leadership."
          eyebrow="Pricing"
          title="Pricing that grows with your rollout, not against it"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="hero-orbit overflow-hidden text-white">
            <CardHeader>
              <Badge className="w-fit bg-white/10 text-white">Commercial model</Badge>
              <CardTitle className="max-w-xl text-white">Simple pricing for teams proving value, scaling use cases, and preparing for larger deployments</CardTitle>
              <CardDescription className="text-slate-300">
                Conversiqo AI is priced to help teams move from pilot to production with a clearer path across support, sales, onboarding, and internal assistance.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-3">
              {[
                { value: "14 days", label: "Typical time to a polished first demo" },
                { value: "8+", label: "Channels available as teams expand" },
                { value: "3 plans", label: "Commercial paths from pilot to enterprise" },
              ].map((item) => (
                <div className="rounded-[24px] border border-white/10 bg-white/8 p-4" key={item.label}>
                  <div className="text-3xl font-semibold tracking-[-0.05em] text-white">{item.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">{item.label}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How teams usually buy</CardTitle>
              <CardDescription>Most customers start with one clear use case, then expand once they have channel coverage, analytics, and internal buy-in.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Starter is ideal for teams validating one core support or lead workflow.",
                "Growth is built for operators running multiple agents across more channels.",
                "Enterprise is for teams that need rollout support, governance, and larger workspace design.",
              ].map((item) => (
                <div className="flex items-start gap-3 rounded-[22px] bg-slate-50 p-4" key={item}>
                  <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {planCards.map((plan) => (
            <Card className={plan.name === "Growth" ? "border-primary/30 shadow-soft" : ""} key={plan.name}>
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.name === "Growth" ? <Badge tone="soft">Most popular</Badge> : null}
                </div>
                <div className="flex items-end gap-2">
                  <div className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">{plan.price}</div>
                  {plan.price !== "Custom" ? <div className="pb-1 text-sm text-slate-500">per month</div> : null}
                </div>
                <CardDescription>{plan.detail}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="rounded-[24px] bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                  {plan.name === "Starter" && "Best for early teams that need a polished first deployment without a heavy operational footprint."}
                  {plan.name === "Growth" && "Best for scaling teams that want stronger analytics, more agents, and broader channel coverage."}
                  {plan.name === "Enterprise" && "Best for organizations that need custom rollout support, operational control, and premium positioning."}
                </div>

                <div className="space-y-3">
                  {planFeatures[plan.name].map((feature) => (
                    <div className="flex items-start gap-3" key={feature}>
                      <Check className="mt-1 h-4 w-4 text-primary" />
                      <p className="text-sm leading-7 text-slate-600">{feature}</p>
                    </div>
                  ))}
                </div>

                <Link className="block pt-2" href={plan.name === "Enterprise" ? "/enterprise" : "/sign-up"}>
                  <Button className="w-full" variant={plan.name === "Growth" ? "primary" : "outline"}>
                    {plan.name === "Enterprise" ? "Talk to sales" : "Start with this plan"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mt-14">
          <Card>
            <CardHeader>
              <CardTitle>Compare plans at a glance</CardTitle>
              <CardDescription>A quick view of how teams usually progress from focused rollout to broader operational coverage.</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="px-4 py-3 font-medium">Category</th>
                    <th className="px-4 py-3 font-medium">Starter</th>
                    <th className="px-4 py-3 font-medium">Growth</th>
                    <th className="px-4 py-3 font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr className="border-b border-slate-100" key={row.label}>
                      <td className="px-4 py-4 font-medium text-slate-900">{row.label}</td>
                      <td className="px-4 py-4 text-slate-600">{row.starter}</td>
                      <td className="px-4 py-4 text-slate-600">{row.growth}</td>
                      <td className="px-4 py-4 text-slate-600">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  );
}
