import Link from "next/link";

import { SectionHeading } from "@/components/marketing/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { industrySolutions } from "@/lib/mock-data";

export default function SolutionsPage() {
  return (
    <main className="container-shell py-16 lg:py-20">
      <SectionHeading
        copy="Explore how Conversiqo AI can support complex customer journeys, internal teams, and operational workflows across multiple industries."
        eyebrow="Solutions"
        title="Industry-specific AI deployments built for real business conditions"
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {industrySolutions.map((industry) => {
          const Icon = industry.icon;
          return (
            <Card key={industry.title} className="overflow-hidden">
              <div className="grid gap-0 md:grid-cols-[1fr_0.8fr]">
                <div>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{industry.title}</CardTitle>
                    </div>
                    <CardDescription>{industry.painPoints}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="mb-2 text-sm font-semibold text-slate-950">Use cases</div>
                      <div className="flex flex-wrap gap-2">
                        {industry.useCases.map((useCase) => (
                          <Badge key={useCase} tone="soft">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Link className="inline-flex pt-2" href={industry.slug ? `/solutions/${industry.slug}` : "/sign-up"}>
                      <Button variant="outline">Read More</Button>
                    </Link>
                  </CardContent>
                </div>
                <div className="min-h-[220px] bg-[linear-gradient(135deg,rgba(91,115,247,0.12),rgba(15,23,42,0.04))] p-6">
                  <div className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-sm">
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Pain points solved</div>
                    <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                      <p>Faster answers when volume spikes</p>
                      <p>Clearer handoffs and ownership</p>
                      <p>More consistent service across channels</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
