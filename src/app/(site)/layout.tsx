import type { ReactNode } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";

export default function InstitutionalLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <SiteLayout atmosphere="human">{children}</SiteLayout>;
}
