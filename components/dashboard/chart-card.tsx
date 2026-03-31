"use client";

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const pieColors = ["#5b73f7", "#94a3b8", "#c7d2fe", "#dbeafe", "#bfdbfe", "#e2e8f0"];

export function AreaTrendCard({
  title,
  description,
  data,
  dataKey,
}: {
  title: string;
  description: string;
  data: Record<string, string | number>[];
  dataKey: string;
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="conversiqoArea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#5b73f7" stopOpacity={0.28} />
                <stop offset="100%" stopColor="#5b73f7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#e5e7eb" vertical={false} />
            <XAxis axisLine={false} dataKey="name" tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <Tooltip />
            <Area dataKey={dataKey} fill="url(#conversiqoArea)" stroke="#5b73f7" strokeWidth={3} type="monotone" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function PieDistributionCard({
  title,
  description,
  data,
}: {
  title: string;
  description: string;
  data: { name: string; value: number }[];
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" innerRadius={70} outerRadius={100} paddingAngle={4}>
              {data.map((entry, index) => (
                <Cell fill={pieColors[index % pieColors.length]} key={entry.name} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function BarMetricCard({
  title,
  description,
  data,
  dataKey,
  labelKey,
}: {
  title: string;
  description: string;
  data: Record<string, string | number>[];
  dataKey: string;
  labelKey: string;
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="#e5e7eb" vertical={false} />
            <XAxis axisLine={false} dataKey={labelKey} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey={dataKey} fill="#5b73f7" radius={[12, 12, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
