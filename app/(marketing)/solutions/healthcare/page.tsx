import { SolutionDetail } from "@/components/marketing/solution-detail";
import { solutionPages } from "@/lib/mock-data";

export default function HealthcareSolutionPage() {
  return <SolutionDetail {...solutionPages.healthcare} title="Healthcare" />;
}
