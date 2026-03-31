import { AreaTrendCard, BarMetricCard, PieDistributionCard } from "@/components/dashboard/chart-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  analyticsHighlights,
  busiestHours,
  channelDistribution,
  conversationTrend,
  topQuestions,
} from "@/lib/mock-data";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Analytics</h2>
          <p className="text-sm leading-6 text-slate-600">A premium reporting surface for executive reviews, operator decisions, and demo storytelling.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["7 days", "30 days", "90 days", "Custom range"].map((item, index) => (
            <Badge key={item} tone={index === 1 ? "default" : "soft"}>
              {item}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {analyticsHighlights.map((item) => (
          <Card key={item.label}>
            <CardContent className="pt-6">
              <div className="text-sm text-slate-500">{item.label}</div>
              <div className="mt-3 text-3xl font-semibold text-slate-950">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <AreaTrendCard data={conversationTrend} dataKey="users" description="Unique users engaging across supported channels" title="Unique users over time" />
        <AreaTrendCard data={conversationTrend} dataKey="resolved" description="Resolution rate trendline by day" title="Resolution rate" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr_0.8fr]">
        <BarMetricCard data={busiestHours} dataKey="volume" description="Conversation peaks by time of day" labelKey="hour" title="Busiest hours" />
        <PieDistributionCard data={channelDistribution} description="Relative channel performance and traffic mix" title="Channel performance" />
        <Card>
          <CardHeader>
            <CardTitle>Top questions</CardTitle>
            <CardDescription>The most frequent prompts and customer requests.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {topQuestions.map((question) => (
              <div className="rounded-[22px] bg-slate-50 p-4 text-sm leading-6 text-slate-600" key={question}>
                {question}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
