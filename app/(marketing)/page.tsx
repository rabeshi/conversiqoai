import Link from "next/link";
import { BarChart3, CircleCheckBig, MessageSquareMore, ShieldCheck, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/marketing/section-heading";
import { TrustLogo } from "@/components/marketing/trust-logo";
import { ChatWidget } from "@/components/widget/chat-widget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  featureHighlights,
  homepageUsecases,
  testimonials,
  trustLogos,
} from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main className="pb-8">
      <section className="relative overflow-hidden px-3 pb-10 pt-4 sm:px-6">
        <div className="container-shell hero-orbit overflow-hidden rounded-[40px] px-6 py-8 text-white shadow-soft sm:px-8 lg:px-10 lg:py-10">
          <div className="grid items-start gap-8 xl:grid-cols-[1fr_1fr]">
            <div className="space-y-7">
              <Badge className="w-fit bg-white/10 text-white">Conversational AI for serious businesses</Badge>
              <div className="space-y-5">
                <div className="max-w-2xl text-xs uppercase tracking-[0.34em] text-slate-400">
                  Customer conversations, revenue moments, and internal support in one operating layer
                </div>
                <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl">
                  Every conversation,
                  <br />
                  handled smarter.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-300">
                  Conversiqo AI helps teams resolve support faster, capture better leads, guide onboarding, and stay
                  responsive across every customer touchpoint.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/sign-up">
                  <Button size="lg" variant="primary">
                    Start Free
                  </Button>
                </Link>
                <Link href="/enterprise">
                  <Button className="border-white/15 bg-white/8 text-white hover:bg-white/12" size="lg" variant="outline">
                    Talk to Sales
                  </Button>
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Higher resolution rate", value: "38%" },
                  { label: "Faster first reply", value: "52%" },
                  { label: "Channels connected", value: "8+" },
                ].map((metric) => (
                  <div className="rounded-[26px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm" key={metric.label}>
                    <div className="text-3xl font-semibold tracking-[-0.05em] text-white">{metric.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative xl:flex xl:justify-end xl:justify-self-end">
              <div className="absolute -left-8 top-10 hidden h-36 w-36 rounded-full bg-primary/20 blur-3xl xl:block" />
              <div className="absolute -right-10 bottom-16 hidden h-40 w-40 rounded-full bg-sky-400/10 blur-3xl xl:block" />
              <div className="relative w-full max-w-[29.5rem] xl:mr-[-1.25rem] 2xl:mr-[-2rem]">
                <div className="rounded-[30px] border border-white/10 bg-white/92 p-3 shadow-soft">
                  <ChatWidget embedded variant="marketing" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-6">
        <div className="container-shell rounded-[32px] border border-slate-200/80 bg-white px-5 py-5 shadow-panel">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {trustLogos.map((logo) => (
              <TrustLogo id={logo.id} key={logo.name} name={logo.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <SectionHeading
          copy="Built for real teams, real volume, and real customer moments."
          eyebrow="Human use cases"
          title="Built around people doing actual jobs"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {homepageUsecases.map((item) => (
            <Card className="group bg-white/90 transition hover:-translate-y-1 hover:shadow-soft" key={item.title}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-slate-100 text-slate-900">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </div>
                <CardDescription>{item.scenario}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-[24px] bg-slate-50 p-4 text-sm leading-7 text-slate-600">{item.response}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell">
          <SectionHeading
            copy="One place to launch agents, review performance, and stay in control as volume grows."
            eyebrow="Platform value"
            title="A platform your team can actually run on"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featureHighlights.map((feature, index) => {
              const Icon = feature.icon;
              const supportingCopy = [
                "Keep teams fast and consistent without adding another inbox.",
                "Give leadership a cleaner read on performance in fewer clicks.",
                "Expand into more markets without creating fragmented support experiences.",
              ][index];

              return (
                <Card className="group bg-white transition hover:-translate-y-1 hover:shadow-soft" key={feature.title}>
                  <CardHeader>
                    <div className="flex h-14 w-14 items-center justify-center rounded-[22px] bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="max-w-xs">{feature.title}</CardTitle>
                    <CardDescription>{feature.copy}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-[22px] bg-slate-50 p-4 text-sm leading-7 text-slate-600">{supportingCopy}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="hero-orbit overflow-hidden text-white">
            <CardHeader>
              <Badge className="w-fit bg-white/10 text-white">Built to run live</Badge>
              <CardTitle className="max-w-xl text-white">Everything your team needs to launch, monitor, and improve AI agents in one place</CardTitle>
              <CardDescription className="text-slate-300">
                Conversiqo brings deployment, reporting, routing, and knowledge management into a single workspace that feels ready for real customers and real teams.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                { icon: BarChart3, label: "Live performance visibility" },
                { icon: MessageSquareMore, label: "Connected channel coverage" },
                { icon: ShieldCheck, label: "Controls teams can trust" },
                { icon: CircleCheckBig, label: "Knowledge that stays current" },
                { icon: Sparkles, label: "Branded customer experiences" },
                { icon: MessageSquareMore, label: "Faster human handoffs" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div className="rounded-[24px] border border-white/10 bg-white/8 p-4" key={item.label}>
                    <Icon className="mb-3 h-5 w-5" />
                    <div className="text-sm leading-6 text-slate-200">{item.label}</div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="grid-dots">
            <CardHeader>
              <CardTitle>What you can show in one walkthrough</CardTitle>
              <CardDescription>A polished product story for buyers, partners, and stakeholders who need to see how the platform actually works.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Launch agents for support, sales, onboarding, and internal assistance with clear roles and channel coverage.",
                "Preview a branded website widget with live greeting, launcher, and layout customization.",
                "Walk through analytics that show response speed, resolution quality, conversion, and handoff trends.",
                "Show a realistic workspace with knowledge sources, conversations, team permissions, and billing controls.",
              ].map((item) => (
                <div className="flex items-start gap-3 rounded-[24px] bg-white/80 p-4" key={item}>
                  <CircleCheckBig className="mt-0.5 h-5 w-5 text-primary" />
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell">
          <SectionHeading
            copy="What operators, digital leaders, and service teams say after seeing Conversiqo in action."
            eyebrow="Reviews"
            title="Why teams take Conversiqo AI seriously"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author}>
                <CardContent className="pt-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <p className="text-base leading-7 text-slate-700">“{testimonial.quote}”</p>
                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <div className="font-semibold text-slate-950">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <Card className="hero-orbit overflow-hidden text-white">
          <CardContent className="grid gap-8 p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <div className="space-y-4">
              <Badge className="w-fit bg-white/10 text-white">Ready to deploy</Badge>
              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em]">
                Bring Conversiqo AI to the teams and channels that need it most.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                Show a polished product story today, then turn it into a live operational workspace for support, sales, onboarding, and beyond.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:items-end lg:justify-center">
              <Link href="/sign-up">
                <Button size="lg" variant="primary">
                  Start Free
                </Button>
              </Link>
              <Link href="/enterprise">
                <Button className="border-white/15 bg-white/8 text-white hover:bg-white/12" size="lg" variant="outline">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
