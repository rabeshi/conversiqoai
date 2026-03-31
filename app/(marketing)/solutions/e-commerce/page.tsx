import { SolutionDetail } from "@/components/marketing/solution-detail";
import { solutionPages } from "@/lib/mock-data";

export default function EcommerceSolutionPage() {
  return <SolutionDetail {...solutionPages["e-commerce"]} title="E-commerce" />;
}
