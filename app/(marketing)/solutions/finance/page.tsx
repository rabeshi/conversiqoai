import { SolutionDetail } from "@/components/marketing/solution-detail";
import { solutionPages } from "@/lib/mock-data";

export default function FinanceSolutionPage() {
  return <SolutionDetail {...solutionPages.finance} title="Finance" />;
}
