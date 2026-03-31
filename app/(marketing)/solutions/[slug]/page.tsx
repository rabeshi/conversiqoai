import { notFound } from "next/navigation";

import { SolutionDetail } from "@/components/marketing/solution-detail";
import { solutionPages } from "@/lib/mock-data";

type SolutionSlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SolutionSlugPage({ params }: SolutionSlugPageProps) {
  const { slug } = await params;
  const solution = solutionPages[slug as keyof typeof solutionPages];

  if (!solution) {
    notFound();
  }

  return <SolutionDetail {...solution} />;
}
