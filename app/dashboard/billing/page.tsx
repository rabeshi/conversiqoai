import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { invoices, planCards } from "@/lib/mock-data";

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="bg-slate-950 text-white">
          <CardHeader>
            <Badge className="w-fit bg-white/10 text-white">Current plan</Badge>
            <CardTitle className="text-white">Growth plan</CardTitle>
            <CardDescription className="text-slate-300">
              Multi-agent deployment, analytics access, and connected channels for growing teams.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            {[
              { value: "$4,800", label: "Monthly spend" },
              { value: "184K", label: "Conversations this month" },
              { value: "12", label: "Active agents" },
              { value: "8", label: "Connected channels" },
            ].map((item) => (
              <div className="rounded-[22px] bg-white/10 p-4" key={item.label}>
                <div className="text-3xl font-semibold">{item.value}</div>
                <div className="mt-2 text-sm text-slate-300">{item.label}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plan comparison</CardTitle>
            <CardDescription>Premium pricing cards for starter, growth, and enterprise positioning.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {planCards.map((plan) => (
              <div className="rounded-[24px] border border-slate-200 p-5" key={plan.name}>
                <div className="text-sm font-medium text-slate-500">{plan.name}</div>
                <div className="mt-3 text-3xl font-semibold text-slate-950">{plan.price}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{plan.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>Mock billing history and invoice states.</CardDescription>
            </div>
            <Button variant="primary">Upgrade plan</Button>
          </div>
        </CardHeader>
        <CardContent className="overflow-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-slate-500">
              <tr>
                <th className="pb-4 pr-4 font-medium">Invoice</th>
                <th className="pb-4 pr-4 font-medium">Date</th>
                <th className="pb-4 pr-4 font-medium">Amount</th>
                <th className="pb-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr className="border-t border-slate-100" key={invoice.id}>
                  <td className="py-4 pr-4 font-medium text-slate-800">{invoice.id}</td>
                  <td className="py-4 pr-4 text-slate-600">{invoice.date}</td>
                  <td className="py-4 pr-4 text-slate-600">{invoice.amount}</td>
                  <td className="py-4">
                    <Badge tone="success">{invoice.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
