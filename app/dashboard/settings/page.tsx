"use client";

import { useEffect, useState } from "react";

import { ChatWidget } from "@/components/widget/chat-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toast } from "@/components/ui/toast";
import { WIDGET_STORAGE_KEY } from "@/lib/session";

type WidgetForm = {
  color: string;
  position: "left" | "right";
  radius: string;
  greeting: string;
  buttonLabel: string;
};

const defaults: WidgetForm = {
  color: "#5b73f7",
  position: "right",
  radius: "24px",
  greeting: "Welcome to Conversiqo AI. What would you like to automate today?",
  buttonLabel: "Ask Conversiqo",
};

export default function SettingsPage() {
  const [widget, setWidget] = useState<WidgetForm>(defaults);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(WIDGET_STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as Partial<WidgetForm>;
      const nextWidget = {
        ...defaults,
        ...parsed,
      };
      setWidget(nextWidget);
      window.localStorage.setItem(WIDGET_STORAGE_KEY, JSON.stringify(nextWidget));
    } catch {}
  }, []);

  const saveWidget = () => {
    window.localStorage.setItem(WIDGET_STORAGE_KEY, JSON.stringify(widget));
    setToast("Widget preview updated.");
  };

  return (
    <Tabs tabs={["Company profile", "Branding", "Widget appearance", "Security", "Notifications", "Domain", "API keys", "Agent defaults", "Workspace"]}>
      {(activeTab) => (
        <div className="space-y-6">
          {activeTab === "Widget appearance" ? (
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
              <Card>
                <CardHeader>
                  <CardTitle>Widget customization</CardTitle>
                  <CardDescription>Update color, position, border radius, greeting, and button label.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input onChange={(e) => setWidget((current) => ({ ...current, color: e.target.value }))} value={widget.color} />
                  <Input onChange={(e) => setWidget((current) => ({ ...current, position: e.target.value as "left" | "right" }))} value={widget.position} />
                  <Input onChange={(e) => setWidget((current) => ({ ...current, radius: e.target.value }))} value={widget.radius} />
                  <Input onChange={(e) => setWidget((current) => ({ ...current, buttonLabel: e.target.value }))} value={widget.buttonLabel} />
                  <Textarea onChange={(e) => setWidget((current) => ({ ...current, greeting: e.target.value }))} value={widget.greeting} />
                  <Button className="w-full" onClick={saveWidget} variant="primary">
                    Save widget settings
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Live widget preview</CardTitle>
                  <CardDescription>Front-end preview updates from local state and localStorage only.</CardDescription>
                </CardHeader>
                <CardContent className="min-h-[640px] bg-slate-50">
                  <ChatWidget embedded />
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>{activeTab}</CardTitle>
                <CardDescription>Premium front-end settings surface with local-only state and enterprise-ready presentation.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <Input placeholder={`${activeTab} primary field`} />
                <Input placeholder={`${activeTab} secondary field`} />
                <div className="sm:col-span-2">
                  <Textarea placeholder={`Notes for ${activeTab.toLowerCase()}`} />
                </div>
                <Button className="sm:w-fit" onClick={() => setToast(`${activeTab} saved.`)} variant="primary">
                  Save changes
                </Button>
              </CardContent>
            </Card>
          )}
          <Toast message={toast} />
        </div>
      )}
    </Tabs>
  );
}
