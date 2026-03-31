"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toast } from "@/components/ui/toast";
import { agentCards } from "@/lib/mock-data";

export default function AgentsPage() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Agents</h2>
          <p className="text-sm leading-6 text-slate-600">Manage roles, tone, business hours, fallbacks, and deployment status for each AI agent.</p>
        </div>
        <Button onClick={() => setOpen(true)} variant="primary">
          Create new agent
        </Button>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {agentCards.map((agent) => (
          <Card key={agent.name}>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle>{agent.name}</CardTitle>
                  <CardDescription>{agent.role}</CardDescription>
                </div>
                <Badge tone={agent.status === "Live" ? "success" : "soft"}>{agent.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[20px] bg-slate-50 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Tone</div>
                  <div className="mt-2 text-sm font-medium text-slate-700">{agent.tone}</div>
                </div>
                <div className="rounded-[20px] bg-slate-50 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Performance</div>
                  <div className="mt-2 text-sm font-medium text-slate-700">{agent.performance}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {agent.channels.map((channel) => (
                  <Badge key={channel} tone="soft">
                    {channel}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>{agent.updated}</span>
                <span>{agent.status === "Live" ? "Published" : "Draft mode"}</span>
              </div>
              <div className="flex gap-3">
                <Button className="flex-1" onClick={() => setToast(`${agent.name} opened in editor.`)} variant="outline">
                  Edit
                </Button>
                <Button className="flex-1" onClick={() => setToast(`${agent.name} preview refreshed.`)} variant="soft">
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Modal description="Configure a front-end-only agent profile with realistic settings." onClose={() => setOpen(false)} open={open} title="Create agent">
        <div className="space-y-4">
          <Input placeholder="Agent name" />
          <Select defaultValue="Support specialist">
            <option>Support specialist</option>
            <option>Lead qualification</option>
            <option>Onboarding guide</option>
            <option>Internal assistant</option>
          </Select>
          <Select defaultValue="Professional">
            <option>Professional</option>
            <option>Consultative</option>
            <option>Warm and supportive</option>
            <option>Direct and efficient</option>
          </Select>
          <Textarea placeholder="Welcome message" />
          <Textarea placeholder="Fallback response" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Business hours" />
            <Input placeholder="Assigned channels" />
          </div>
          <div className="flex justify-end gap-3">
            <Button onClick={() => setOpen(false)} variant="outline">
              Cancel
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
                setToast("New draft agent created.");
              }}
              variant="primary"
            >
              Save draft
            </Button>
          </div>
        </div>
      </Modal>
      <Toast message={toast} />
    </div>
  );
}
