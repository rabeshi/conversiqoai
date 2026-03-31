"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Toast } from "@/components/ui/toast";
import { channels } from "@/lib/mock-data";

export default function ChannelsPage() {
  const [toast, setToast] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Channels</h2>
        <p className="text-sm leading-6 text-slate-600">Deploy Conversiqo AI across every customer touchpoint with polished status and configuration summaries.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {channels.map((channel) => (
          <Card key={channel.name}>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle>{channel.name}</CardTitle>
                <Badge tone={channel.status === "Connected" ? "success" : "soft"}>{channel.status}</Badge>
              </div>
              <CardDescription>{channel.summary}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-[22px] bg-slate-50 p-4 text-sm text-slate-600">
                Theme customization, deployment status, and channel test flows are ready for front-end demo use.
              </div>
              <div className="flex gap-3">
                <Button className="flex-1" onClick={() => setToast(`${channel.name} settings opened.`)} variant="outline">
                  Settings
                </Button>
                <Button className="flex-1" onClick={() => setToast(`${channel.name} test sent.`)} variant="primary">
                  Test
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
