import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AtmosphericSurface } from "@/components/layout/AtmosphericSurface";
import { Container } from "@/components/layout/Container";
import { FooterInstitutional } from "@/components/layout/FooterInstitutional";
import { FooterNavigation } from "@/components/layout/FooterNavigation";
import { PageAtmosphere } from "@/components/layout/PageAtmosphere";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <PageAtmosphere
      variant="corporate"
      decorative={false}
      className="overflow-hidden"
    >
      <AtmosphericSurface variant="deep">
        <footer>
        <Container>
          <div className="grid gap-12 py-20 md:py-24 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <p className="text-sm font-extrabold uppercase tracking-[var(--tracking-label)] text-[var(--if-green-300)]">
                IF Saúde
              </p>
              {/* Conteúdo editorial provisório; não representa slogan oficial. */}
              <p className="font-editorial mt-6 max-w-[18ch] text-[length:var(--font-size-4xl)] leading-[1.08] text-[var(--if-white)]">
                Saúde ocupacional com clareza, presença e responsabilidade.
              </p>
              <Link
                href={routes.contact}
                className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-[var(--if-green-500)] font-bold text-[var(--if-white)] transition-colors hover:border-[var(--if-green-200)]"
              >
                Falar com a IF Saúde
                <ArrowUpRight aria-hidden className="size-4" />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <FooterInstitutional />
            </div>
          </div>

          <div className="grid gap-12 border-t border-[var(--if-green-700)] py-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9">
              <FooterNavigation />
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <p className="text-xl font-extrabold text-[var(--if-white)]">
                {siteConfig.name}
              </p>
              <p className="mt-2 text-sm text-[var(--if-green-200)]">
                {siteConfig.legalName}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-[var(--if-green-700)] py-6 text-sm text-[var(--if-green-200)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              <span className="italic">Powered by</span>{" "}
              <span className="font-bold">UXBRAS</span>® | © {currentYear}{" "}
              {siteConfig.name}. Todos os direitos reservados.
            </p>
            <p>{siteConfig.legalName}</p>
          </div>
        </Container>
        </footer>
      </AtmosphericSurface>
    </PageAtmosphere>
  );
}
