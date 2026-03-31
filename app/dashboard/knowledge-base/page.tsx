"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Toast } from "@/components/ui/toast";
import { knowledgeSources } from "@/lib/mock-data";

export default function KnowledgeBasePage() {
  const [toast, setToast] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <CardHeader>
            <CardTitle>Content ingestion</CardTitle>
            <CardDescription>Simulate RAG-style content management with upload, URL sync, FAQ, and Q&A entry points.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" onClick={() => setToast("Upload flow opened.")} variant="outline">
              Upload file
            </Button>
            <Input placeholder="Add website URL" />
            <Button className="w-full" onClick={() => setToast("Website source queued for sync.")} variant="primary">
              Sync website source
            </Button>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button onClick={() => setToast("FAQ entry created.")} variant="soft">
                Create FAQ entry
              </Button>
              <Button onClick={() => setToast("Q&A entry created.")} variant="soft">
                Create Q&A entry
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-950 text-white">
          <CardHeader>
            <CardTitle className="text-white">Retrieval readiness</CardTitle>
            <CardDescription className="text-slate-300">
              Collections are healthy, indexing is current, and the workspace is ready for production-style demo queries.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-3">
            {[
              { value: "94", label: "Sources indexed" },
              { value: "89%", label: "Coverage readiness" },
              { value: "3m", label: "Avg. sync cycle" },
            ].map((item) => (
              <div className="rounded-[22px] bg-white/10 p-4" key={item.label}>
                <div className="text-3xl font-semibold">{item.value}</div>
                <div className="mt-2 text-sm text-slate-300">{item.label}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Source library</CardTitle>
          <CardDescription>Collection cards, status labels, and simulated indexing states.</CardDescription>
        </CardHeader>
        <CardContent className="overflow-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-slate-500">
              <tr>
                <th className="pb-4 pr-4 font-medium">Source</th>
                <th className="pb-4 pr-4 font-medium">Type</th>
                <th className="pb-4 pr-4 font-medium">Status</th>
                <th className="pb-4 pr-4 font-medium">Items</th>
                <th className="pb-4 font-medium">Updated</th>
              </tr>
            </thead>
            <tbody>
              {knowledgeSources.map((source) => (
                <tr className="border-t border-slate-100" key={source.name}>
                  <td className="py-4 pr-4 font-medium text-slate-800">{source.name}</td>
                  <td className="py-4 pr-4 text-slate-600">{source.type}</td>
                  <td className="py-4 pr-4">
                    <Badge tone={source.status === "Ready" ? "success" : source.status === "Syncing" ? "warning" : "soft"}>{source.status}</Badge>
                  </td>
                  <td className="py-4 pr-4 text-slate-600">{source.items}</td>
                  <td className="py-4 text-slate-600">{source.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
      <Toast message={toast} />
    </div>
  );
}
