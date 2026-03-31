"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Toast } from "@/components/ui/toast";
import { conversations, transcript } from "@/lib/mock-data";

export default function ConversationsPage() {
  const [toast, setToast] = useState<string | null>(null);

  return (
    <div className="grid gap-6 xl:grid-cols-[0.75fr_1.25fr]">
      <Card>
        <CardHeader>
          <CardTitle>Conversation inbox</CardTitle>
          <CardDescription>Filter by sentiment, resolution status, or assignee.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Search conversations" />
          <div className="grid gap-3 sm:grid-cols-2">
            <Select defaultValue="All status">
              <option>All status</option>
              <option>Open</option>
              <option>Resolved</option>
              <option>Escalated</option>
            </Select>
            <Select defaultValue="All channels">
              <option>All channels</option>
              <option>Website</option>
              <option>Email</option>
              <option>WhatsApp</option>
            </Select>
          </div>
          <div className="space-y-3">
            {conversations.map((conversation) => (
              <button
                className="w-full rounded-[24px] border border-slate-200 p-4 text-left transition hover:border-slate-300 hover:bg-slate-50"
                key={conversation.customer}
                type="button"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold text-slate-950">{conversation.customer}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{conversation.summary}</div>
                  </div>
                  <Badge tone={conversation.sentiment === "Positive" ? "success" : conversation.sentiment === "Negative" ? "warning" : "soft"}>
                    {conversation.sentiment}
                  </Badge>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{conversation.channel}</span>
                  <span>{conversation.status}</span>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Transcript view</CardTitle>
              <CardDescription>Review metadata, assignment, and transcript activity for a selected conversation.</CardDescription>
            </div>
            <div className="flex gap-3">
              <Select defaultValue="Sales Team">
                <option>Sales Team</option>
                <option>Support Team</option>
                <option>Ops Lead</option>
              </Select>
              <Button onClick={() => setToast("Transcript export queued.")} variant="outline">
                Export transcript
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Resolution status", value: "Open" },
              { label: "Assigned to", value: "Sales Team" },
              { label: "Metadata", value: "High intent / finance" },
            ].map((item) => (
              <div className="rounded-[22px] bg-slate-50 p-4" key={item.label}>
                <div className="text-xs uppercase tracking-[0.22em] text-slate-400">{item.label}</div>
                <div className="mt-2 text-sm font-medium text-slate-700">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {transcript.map((message, index) => (
              <div className={`flex ${message.speaker === "agent" ? "justify-start" : "justify-end"}`} key={`${message.speaker}-${index}`}>
                <div className={`max-w-[85%] rounded-[24px] px-4 py-3 text-sm leading-6 ${
                  message.speaker === "agent" ? "bg-slate-100 text-slate-700" : "bg-primary text-white"
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-[24px] border border-slate-200 p-4 text-sm text-slate-600">
            Escalation option: If the user requests a human, route this thread to the assigned team and preserve transcript context.
          </div>
        </CardContent>
      </Card>
      <Toast message={toast} />
    </div>
  );
}
