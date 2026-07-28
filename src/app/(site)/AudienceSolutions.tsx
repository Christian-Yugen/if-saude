import Image from "next/image";
import { Button } from "@/components/actions/Button";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { routes } from "@/config/routes";
import styles from "./AudienceSolutions.module.css";

export function AudienceSolutions() {
  return (
    <Section
      density="standard"
      aria-labelledby="audience-solutions-title"
      className="bg-[var(--theme-surface-primary)] pt-9 pb-14 md:pt-12 md:pb-20"
    >
      <Container size="page">
        <SectionTitle
          title="Uma estrutura completa para empresas e trabalhadores."
          description="Encontre rapidamente a solução adequada para sua necessidade."
          align="center"
          maxWidth="lg"
          headingProps={{ id: "audience-solutions-title" }}
        />

        <Grid
          columns={2}
          gap="lg"
          className="mt-10 md:grid-cols-1 lg:grid-cols-2"
        >
          <article
            className={`${styles.card} ${styles.companies} text-[var(--text-inverse)]`}
          >
            <Image
              src="/images/home/solutions/companies.png"
              alt="Profissional de segurança do trabalho em ambiente industrial"
              fill
              sizes="(min-width: 1024px) 44vw, calc(100vw - 2.5rem)"
              className={styles.image}
            />
            <div className={styles.content}>
              <Eyebrow className="text-[var(--if-green-300)]">
                EMPRESAS
              </Eyebrow>
              <h3 className="mt-3 text-balance text-[length:var(--font-size-2xl)] font-bold leading-[var(--leading-heading)] tracking-[var(--tracking-tight)]">
                Soluções integradas para proteger sua operação.
              </h3>
              <p className={`${styles.copy} text-[var(--if-green-100)]`}>
                Medicina do Trabalho, PCMSO, PGR, LTCAT, eSocial, perícias,
                exames e gestão de ambulatórios...
              </p>
              <Button
                href={routes.companies}
                variant="inverse"
                size="sm"
                className={styles.action}
              >
                Conhecer soluções empresariais
              </Button>
            </div>
          </article>

          <article
            className={`${styles.card} ${styles.workers} text-[var(--text-primary)]`}
          >
            <Image
              src="/images/home/solutions/workers.png"
              alt="Trabalhadora em clínica de medicina ocupacional"
              fill
              sizes="(min-width: 1024px) 44vw, calc(100vw - 2.5rem)"
              className={styles.image}
            />
            <div className={styles.content}>
              <Eyebrow>TRABALHADORES</Eyebrow>
              <h3 className="mt-3 text-balance text-[length:var(--font-size-2xl)] font-bold leading-[var(--leading-heading)] tracking-[var(--tracking-tight)]">
                Tudo o que você precisa para realizar seus exames.
              </h3>
              <p className={`${styles.copy} text-[var(--text-secondary)]`}>
                Orientações, documentos necessários, preparo para exames,
                localização e canais de atendimento...
              </p>
              <Button
                href={routes.exams}
                size="sm"
                className={styles.action}
              >
                Ver orientações de atendimento
              </Button>
            </div>
          </article>
        </Grid>
      </Container>
    </Section>
  );
}
