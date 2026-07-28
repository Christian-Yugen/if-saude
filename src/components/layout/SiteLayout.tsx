import type { ReactNode } from "react";
import { PageAtmosphere } from "@/components/layout/PageAtmosphere";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import type { HeaderTheme } from "@/types/navigation";
import type { PageAtmosphereVariant } from "@/types/theme";

type SiteLayoutProps = {
  children: ReactNode;
  atmosphere?: PageAtmosphereVariant;
  headerTheme?: HeaderTheme;
};

export function SiteLayout({
  children,
  atmosphere = "human",
  headerTheme = "auto",
}: SiteLayoutProps) {
  return (
    <PageAtmosphere
      variant={atmosphere}
      decorative={false}
      className="min-h-screen"
    >
      <SiteHeader theme={headerTheme} />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </PageAtmosphere>
  );
}
