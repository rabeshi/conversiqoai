"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Toast } from "@/components/ui/toast";
import { workflows } from "@/lib/mock-data";

export default function WorkflowsPage() {
  const [toast, setToast] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Workflows</h2>
          <p className="text-sm leading-6 text-slate-600">A no-code style automation surface for routing, alerts, and exception handling.</p>
        </div>
        <Button onClick={() => setToast("Workflow builder opened.")} variant="primary">
          Create workflow
        </Button>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {workflows.map((workflow) => (
          <Card key={workflow.name}>
            <CardHeader>
              <CardTitle>{workflow.name}</CardTitle>
              <CardDescription>{workflow.trigger}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-[22px] border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
                {"Trigger node -> condition evaluation -> action branch -> notification output"}
              </div>
              <div className="rounded-[22px] bg-slate-50 p-4 text-sm text-slate-700">{workflow.action}</div>
              <div className="flex gap-3">
                <Button className="flex-1" onClick={() => setToast(`${workflow.name} edited.`)} variant="outline">
                  Edit
                </Button>
                <Button className="flex-1" onClick={() => setToast(`${workflow.name} enabled.`)} variant="soft">
                  Enable
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Toast message={toast} />
    </div>
  );
}
