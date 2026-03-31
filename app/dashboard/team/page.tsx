"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Toast } from "@/components/ui/toast";
import { teamMembers } from "@/lib/mock-data";

export default function TeamPage() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Team</h2>
          <p className="text-sm leading-6 text-slate-600">Manage workspace members, roles, permissions, and activity visibility.</p>
        </div>
        <Button onClick={() => setOpen(true)} variant="primary">
          Invite member
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Workspace members</CardTitle>
            <CardDescription>Multi-user workspace roles and recent activity.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {teamMembers.map((member) => (
              <div className="flex flex-col justify-between gap-3 rounded-[24px] border border-slate-200 p-4 sm:flex-row sm:items-center" key={member.name}>
                <div>
                  <div className="font-semibold text-slate-950">{member.name}</div>
                  <div className="mt-1 text-sm text-slate-500">{member.activity}</div>
                </div>
                <Badge tone="soft">{member.role}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Permissions summary</CardTitle>
            <CardDescription>Role coverage across the workspace.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {["Admins can publish and update billing", "Managers can review conversations and workflows", "Analysts can export reports and dashboards"].map((item) => (
              <div className="rounded-[22px] bg-slate-50 p-4 text-sm text-slate-600" key={item}>
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Modal description="Front-end-only invite flow with role assignment." onClose={() => setOpen(false)} open={open} title="Invite member">
        <div className="space-y-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Role" />
          <div className="flex justify-end gap-3">
            <Button onClick={() => setOpen(false)} variant="outline">
              Cancel
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
                setToast("Workspace invitation sent.");
              }}
              variant="primary"
            >
              Send invite
            </Button>
          </div>
        </div>
      </Modal>
      <Toast message={toast} />
    </div>
  );
}
