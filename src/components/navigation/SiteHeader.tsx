import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ClientPortalLink } from "@/components/navigation/ClientPortalLink";
import { DesktopNavigation } from "@/components/navigation/DesktopNavigation";
import { HeaderFrame } from "@/components/navigation/HeaderFrame";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import type { HeaderTheme } from "@/types/navigation";

type SiteHeaderProps = {
  theme?: HeaderTheme;
};

export function SiteHeader({ theme = "auto" }: SiteHeaderProps) {
  return (
    <HeaderFrame theme={theme}>
      <Container className="h-full">
        <div className="site-header__row">
          <Link
            href={routes.home}
            className="site-brand inline-flex min-h-11 shrink-0 items-center text-xl font-extrabold"
            aria-label={`${siteConfig.name} — página inicial`}
          >
            {siteConfig.name}
          </Link>
          <DesktopNavigation />
          <ClientPortalLink className="hidden min-[1200px]:inline-flex" />
          <MobileNavigation />
        </div>
      </Container>
    </HeaderFrame>
  );
}
