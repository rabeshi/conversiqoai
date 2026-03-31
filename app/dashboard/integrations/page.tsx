"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Toast } from "@/components/ui/toast";
import { integrations } from "@/lib/mock-data";

export default function IntegrationsPage() {
  const [toast, setToast] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Integrations</h2>
        <p className="text-sm leading-6 text-slate-600">Show CRM, support, content, and workflow connections in a way that feels implementation-ready.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        {integrations.map((integration) => (
          <Card key={integration.name}>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle>{integration.name}</CardTitle>
                <Badge tone={integration.status === "Connected" ? "success" : "soft"}>{integration.status}</Badge>
              </div>
              <CardDescription>{integration.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-[22px] bg-slate-50 p-4 text-sm text-slate-600">Sync settings, cadence, and field mapping UI can be demonstrated here.</div>
              <div className="flex gap-3">
                <Button className="flex-1" onClick={() => setToast(`${integration.name} connection updated.`)} variant="outline">
                  Connect
                </Button>
                <Button className="flex-1" onClick={() => setToast(`${integration.name} sync settings opened.`)} variant="soft">
                  Sync settings
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
