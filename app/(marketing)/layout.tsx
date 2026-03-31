import type { ReactNode } from "react";

import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteNavbar } from "@/components/marketing/site-navbar";
import { ChatWidget } from "@/components/widget/chat-widget";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteNavbar />
      {children}
      <SiteFooter />
      <ChatWidget />
    </div>
  );
}
