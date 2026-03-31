"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { SectionHeading } from "@/components/marketing/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { resources } from "@/lib/mock-data";

const categories = ["All", "Guide", "Case Study", "API Docs", "Article"];

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return resources.filter((resource) => {
      const matchesQuery = resource.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || resource.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [category, query]);

  return (
    <main className="container-shell py-16 lg:py-20">
      <SectionHeading
        copy="A polished resource center with mock content designed to feel like a real enterprise SaaS knowledge and thought-leadership hub."
        eyebrow="Resources"
        title="Guides, case studies, articles, and API documentation"
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Search the resource center</CardTitle>
            <CardDescription>Filter by topic, content type, or documentation area.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
              <Search className="h-4 w-4 text-slate-400" />
              <Input className="h-auto border-0 px-0 py-0 shadow-none focus:ring-0" onChange={(e) => setQuery(e.target.value)} placeholder="Search resources" value={query} />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    category === item ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                  key={item}
                  onClick={() => setCategory(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-5">
          {filtered.map((resource) => (
            <Card key={resource.title}>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge tone="soft">{resource.category}</Badge>
                  <span className="text-sm text-slate-500">{resource.readTime}</span>
                </div>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.excerpt}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
