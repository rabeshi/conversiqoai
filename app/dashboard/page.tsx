import { ArrowUpRight, Sparkles } from "lucide-react";

import { AreaTrendCard, PieDistributionCard } from "@/components/dashboard/chart-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  channelDistribution,
  conversationTrend,
  dashboardStats,
  recentActivity,
  topIntents,
} from "@/lib/mock-data";

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <div className="text-sm text-slate-500">{stat.label}</div>
              <div className="mt-3 text-3xl font-semibold text-slate-950">{stat.value}</div>
              <div className="mt-3 text-sm font-medium text-primary">{stat.delta}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <AreaTrendCard
          data={conversationTrend}
          dataKey="conversations"
          description="Conversation volume across the last seven days"
          title="Conversation trend"
        />
        <PieDistributionCard
          data={channelDistribution}
          description="Where customer activity is coming from"
          title="Channel distribution"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
            <CardDescription>Workspace changes, publishing events, and operational updates.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((item) => (
              <div className="rounded-[22px] bg-slate-50 p-4 text-sm leading-6 text-slate-600" key={item}>
                {item}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top intents</CardTitle>
            <CardDescription>The intents driving the highest share of conversations this week.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topIntents.map((intent) => (
              <div className="flex items-center justify-between rounded-[20px] border border-slate-200 px-4 py-3" key={intent.name}>
                <span className="text-sm font-medium text-slate-700">{intent.name}</span>
                <Badge tone="soft">{intent.volume}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-slate-950 text-white">
          <CardHeader>
            <CardTitle className="text-white">Recommended actions</CardTitle>
            <CardDescription className="text-slate-300">
              Suggestions based on recent performance, missed intents, and channel behavior.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "Expand pricing FAQ coverage to reduce sales escalations.",
              "Adjust Instagram support hours to match peak volume.",
              "Review negative-sentiment workflow thresholds.",
            ].map((item) => (
              <div className="rounded-[22px] bg-white/10 p-4 text-sm leading-6" key={item}>
                {item}
              </div>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="primary">
                <Sparkles className="h-4 w-4" />
                Launch analysis
              </Button>
              <Button variant="outline">
                View details
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
