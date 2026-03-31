import { SectionHeading } from "@/components/marketing/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { enterprisePillars } from "@/lib/mock-data";

export default function EnterprisePage() {
  return (
    <main className="container-shell py-16 lg:py-20">
      <SectionHeading
        copy="Present security, governance, support, and scalability in a language enterprise buyers expect to hear during evaluation."
        eyebrow="Enterprise"
        title="A platform story built for enterprise trust"
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-4">
        {enterprisePillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <Card key={pillar.title}>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{pillar.title}</CardTitle>
                <CardDescription>{pillar.copy}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card className="bg-slate-950 text-white">
          <CardHeader>
            <Badge className="w-fit bg-white/10 text-white">Operational architecture</Badge>
            <CardTitle className="text-white">Scalability, roles, compliance-style messaging, and onboarding support</CardTitle>
            <CardDescription className="text-slate-300">
              The prototype positions Conversiqo AI with the clarity and confidence enterprise teams want during internal reviews.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            {["Role-based control", "Workspace governance", "Integrations and sync settings", "Analytics visibility"].map((item) => (
              <div className="rounded-[22px] bg-white/10 p-4 text-sm" key={item}>
                {item}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Executive summary</CardTitle>
            <CardDescription>Key signals that matter during demos, internal approvals, and partner conversations.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            {[
              { value: "99.9%", label: "Platform uptime positioning" },
              { value: "12", label: "Live agents in workspace demo" },
              { value: "8+", label: "Deployment channels" },
              { value: "24/7", label: "Rollout support messaging" },
            ].map((item) => (
              <div className="rounded-[24px] bg-slate-50 p-5" key={item.label}>
                <div className="text-3xl font-semibold text-slate-950">{item.value}</div>
                <div className="mt-2 text-sm text-slate-500">{item.label}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
