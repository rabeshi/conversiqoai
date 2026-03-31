import { SolutionDetail } from "@/components/marketing/solution-detail";
import { solutionPages } from "@/lib/mock-data";

export default function EducationSolutionPage() {
  return <SolutionDetail {...solutionPages.education} title="Education" />;
}
