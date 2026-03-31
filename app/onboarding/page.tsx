"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toast } from "@/components/ui/toast";
import { ONBOARDING_STORAGE_KEY } from "@/lib/session";

const steps = [
  { title: "Company profile", fields: ["companyName", "industry", "website", "teamSize"] },
  { title: "Use case design", fields: ["useCase", "channels", "agentName", "tone"] },
  { title: "Launch details", fields: ["supportEmail", "brandUpload", "notes"] },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [values, setValues] = useState({
    companyName: "Northbridge Capital",
    industry: "Finance",
    website: "https://northbridge.example",
    teamSize: "201-500",
    useCase: "Customer support and lead qualification",
    channels: "Website widget, Email, WhatsApp",
    agentName: "Concierge",
    tone: "Professional and consultative",
    supportEmail: "support@northbridge.example",
    brandUpload: "Brand upload placeholder",
    notes: "Need leadership dashboards and clean escalation paths.",
  });

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const field = (name: keyof typeof values, label: string, multiline = false) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      {multiline ? (
        <Textarea onChange={(e) => setValues((current) => ({ ...current, [name]: e.target.value }))} value={values[name]} />
      ) : (
        <Input onChange={(e) => setValues((current) => ({ ...current, [name]: e.target.value }))} value={values[name]} />
      )}
    </div>
  );

  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 space-y-4">
          <div className="text-sm font-medium text-primary">Conversiqo AI onboarding</div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Set up your first workspace</h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Walk through a refined multi-step onboarding experience that simulates a real SaaS setup flow for enterprise teams.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
              <span>Step {step + 1} of 3</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-3 rounded-full bg-slate-100">
              <div className="h-3 rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{steps[step].title}</CardTitle>
            <CardDescription>Capture the workspace details needed to tailor the Conversiqo AI experience.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {step === 0 ? (
              <div className="grid gap-5 sm:grid-cols-2">
                {field("companyName", "Company name")}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Industry</label>
                  <Select onChange={(e) => setValues((current) => ({ ...current, industry: e.target.value }))} value={values.industry}>
                    {["Healthcare", "Finance", "E-commerce", "Education", "Real Estate", "Government", "Enterprise IT"].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </Select>
                </div>
                {field("website", "Website URL")}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Team size</label>
                  <Select onChange={(e) => setValues((current) => ({ ...current, teamSize: e.target.value }))} value={values.teamSize}>
                    {["1-25", "26-100", "101-200", "201-500", "500+"].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </Select>
                </div>
              </div>
            ) : null}

            {step === 1 ? (
              <div className="grid gap-5 sm:grid-cols-2">
                {field("useCase", "Primary use case", true)}
                {field("channels", "Preferred channels", true)}
                {field("agentName", "First agent name")}
                {field("tone", "Tone of voice")}
              </div>
            ) : null}

            {step === 2 ? (
              <div className="grid gap-5 sm:grid-cols-2">
                {field("supportEmail", "Support email")}
                {field("brandUpload", "Brand upload placeholder")}
                <div className="sm:col-span-2">{field("notes", "Launch notes", true)}</div>
              </div>
            ) : null}

            <div className="flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row">
              <Button disabled={step === 0} onClick={() => setStep((current) => current - 1)} type="button" variant="outline">
                Back
              </Button>
              {step < steps.length - 1 ? (
                <Button onClick={() => setStep((current) => current + 1)} type="button" variant="primary">
                  Continue
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    window.localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(values));
                    setToast("Workspace configured. Entering the dashboard.");
                    setTimeout(() => router.push("/dashboard"), 500);
                  }}
                  type="button"
                  variant="primary"
                >
                  Enter Dashboard
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <Toast message={toast} />
    </main>
  );
}
