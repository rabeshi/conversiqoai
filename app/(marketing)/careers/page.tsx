import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, HeartHandshake, PenTool, Users } from "lucide-react";

import { SectionHeading } from "@/components/marketing/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teamValues = [
  {
    title: "Product taste matters",
    copy: "We care about how the product feels, how clearly it communicates, and how quickly it earns trust.",
    icon: PenTool,
  },
  {
    title: "Useful beats flashy",
    copy: "We would rather ship something teams can run with confidence than something that only looks impressive in a short demo.",
    icon: Briefcase,
  },
  {
    title: "Work close to reality",
    copy: "We build around real support, sales, and operational workflows instead of abstract AI promises.",
    icon: HeartHandshake,
  },
];

const roles = [
  {
    title: "Product Designer",
    team: "Design",
    detail: "Shape interfaces that make conversational AI feel clear, credible, and enterprise-ready.",
  },
  {
    title: "Frontend Engineer",
    team: "Engineering",
    detail: "Build polished product surfaces across marketing, onboarding, and workspace experiences.",
  },
  {
    title: "AI Product Engineer",
    team: "Engineering",
    detail: "Work on agent flows, knowledge experiences, and the systems behind practical AI deployment.",
  },
  {
    title: "Solutions Lead",
    team: "Go-to-market",
    detail: "Translate product capability into use cases buyers, operators, and stakeholders immediately understand.",
  },
];

export default function CareersPage() {
  return (
    <main className="container-shell py-16 lg:py-20">
      <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="space-y-6">
          <Badge tone="soft">Careers</Badge>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
              Help build AI products that feel ready for real business use.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Conversiqo is for people who care about product clarity, strong design, and AI systems that hold up when teams actually depend on them.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Company stage", value: "Focused and early" },
              { label: "Working style", value: "Product-minded" },
              { label: "What we value", value: "Taste, clarity, execution" },
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

        <Card className="relative overflow-hidden text-white">
          <Image
            alt="Conversiqo team in a strategy meeting"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            src="/images/careers-hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-slate-950/10" />
          <CardContent className="relative flex h-full min-h-[420px] flex-col justify-between p-8 lg:p-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Users className="h-5 w-5" />
            </div>
            <div className="space-y-4">
              <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.05em]">
                We are building a product that has to be useful, believable, and commercially strong at the same time.
              </h2>
              <p className="max-w-xl text-base leading-7 text-slate-300">
                That takes people who care about details, understand operators, and want their work to feel sharp in every layer of the product.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Working Here"
          title="High standards across product and execution"
          copy="The work sits at the intersection of product design, AI systems, commercial clarity, and operational thinking. The standard is thoughtful, practical, and execution-focused."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {teamValues.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title}>
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
            <CardTitle>Open roles</CardTitle>
            <CardDescription>Representative roles for the kind of team Conversiqo is designed to grow into.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {roles.map((role) => (
              <div className="rounded-[24px] bg-slate-50 p-5" key={role.title}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold text-slate-950">{role.title}</div>
                    <div className="mt-1 text-sm text-slate-500">{role.team}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{role.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="grid-dots overflow-hidden">
          <CardHeader>
            <CardTitle>Who fits well here</CardTitle>
            <CardDescription>The strongest people for this team usually care about both product quality and practical execution.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "You like turning rough product ideas into something clearer and stronger.",
              "You care about design taste, but you also care whether the thing actually works.",
              "You are comfortable working across product, technical, and commercial context.",
              "You want to build AI products that feel more grounded than the current market average.",
            ].map((point) => (
              <div className="rounded-[24px] bg-white/85 p-4 text-sm leading-7 text-slate-600" key={point}>
                {point}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mt-16">
        <Card className="hero-orbit overflow-hidden text-white">
          <CardContent className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
            <div className="space-y-4">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.05em]">
                Help shape AI products built for real business use.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                We are looking for people who want to raise the standard for how AI products are designed, deployed, and experienced in operational settings.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/about">
                <Button size="lg" variant="primary">
                  Back to About
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="border-white/15 bg-white/8 text-white hover:bg-white/12" size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
