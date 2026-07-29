import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AtmosphericSurface } from "@/components/layout/AtmosphericSurface";
import { Container } from "@/components/layout/Container";
import { FooterInstitutional } from "@/components/layout/FooterInstitutional";
import { FooterNavigation } from "@/components/layout/FooterNavigation";
import { PageAtmosphere } from "@/components/layout/PageAtmosphere";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import styles from "./SiteFooter.module.css";

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
            <div className={styles.footerGrid}>
              <div className={styles.identity}>
                <p className={styles.brand}>{siteConfig.name}</p>
                <p className={styles.statement}>
                  Saúde ocupacional com clareza, presença e responsabilidade.
                </p>
                <Link href={routes.contact} className={styles.contactLink}>
                  Falar com a IF Saúde
                  <ArrowUpRight aria-hidden className="size-4" />
                </Link>
              </div>

              <FooterNavigation group="institutional" />
              <FooterNavigation group="solutions" />
              <FooterNavigation group="content-contact" />
              <FooterInstitutional />
            </div>

            <div className={styles.legal}>
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
