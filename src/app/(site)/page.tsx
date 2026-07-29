import Image from "next/image";
import { Button } from "@/components/actions/Button";
import { AtmosphericSurface } from "@/components/layout/AtmosphericSurface";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { PageAtmosphere } from "@/components/layout/PageAtmosphere";
import { Section } from "@/components/layout/Section";
import { DisplayTitle } from "@/components/typography/DisplayTitle";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { routes } from "@/config/routes";
import { InstitutionalIndicators } from "./InstitutionalIndicators";
import { TrustedCompanies } from "./TrustedCompanies";
import { AudienceSolutions } from "./AudienceSolutions";
import { EcosystemSolutions } from "./EcosystemSolutions";
import { IntegratedJourney } from "./IntegratedJourney";

export default function Home() {
  return (
    <PageAtmosphere variant="human">
      <AtmosphericSurface variant="pure">
        <Section
        density="cinematic"
        className="pt-10 pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-20"
      >
        <Container size="page">
          <Grid
            columns={12}
            gap="xl"
            align="center"
            className="md:grid-cols-1 lg:grid-cols-12"
          >
            <div className="min-w-0 lg:col-span-7">
              <Eyebrow
                line
                className="max-w-[42rem] gap-4 !text-[13px] [&>span]:w-12 [&>span]:shrink-0"
              >
                MEDICINA DO TRABALHO • SEGURANÇA OCUPACIONAL • eSOCIAL
              </Eyebrow>

              <DisplayTitle className="pt-6 max-w-[22ch]" size="lg">
                Saúde ocupacional que
                <br />
                protege pessoas
                <br />
                <span className="text-[var(--theme-accent-text)]">
                  e sustenta empresas.
                </span>
              </DisplayTitle>

              <p className="pt-8 max-w-[42rem] text-[length:var(--font-size-base)] leading-[var(--leading-body)] text-[var(--theme-text-secondary)]">
                Há mais de 25 anos, a IF Saúde integra atendimento médico,
                exames complementares, engenharia de segurança e gestão de SST
                em uma única estrutura.
              </p>

              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
                <Button href={routes.companies} size="lg">
                  Sou uma empresa
                </Button>
                <Button href={routes.exams} size="lg" variant="outline">
                  Preciso realizar um exame
                </Button>
              </div>

              {/*<Grid
                columns={3}
                gap="sm"
                role="list"
                aria-label="Diferenciais da IF Saúde"
                className="mt-6 text-sm font-bold leading-[var(--leading-body)] text-[var(--theme-text-secondary)]"
              >
                <p role="listitem" className="flex items-start gap-2">
                  <CheckCircle2
                    aria-hidden
                    className="mt-1 size-4 shrink-0 text-[var(--theme-accent-text)]"
                  />
                  Exames no mesmo local
                </p>
                <p role="listitem" className="flex items-start gap-2">
                  <CheckCircle2
                    aria-hidden
                    className="mt-1 size-4 shrink-0 text-[var(--theme-accent-text)]"
                  />
                  Gestão integrada de SST
                </p>
                <p role="listitem" className="flex items-start gap-2">
                  <CheckCircle2
                    aria-hidden
                    className="mt-1 size-4 shrink-0 text-[var(--theme-accent-text)]"
                  />
                  Atendimento para empresas de todos os portes
                </p>
              </Grid>*/}
            </div>

            <div className="image-reveal min-w-0 self-center lg:col-span-5 lg:-translate-y-6 lg:scale-115">
              <Image
                src="/images/home/hero/hero-visual.png"
                alt="Atendimento médico, exames complementares e segurança do trabalho da IF Saúde"
                width={3584}
                height={2688}
                priority
                sizes="(min-width: 1024px) 38vw, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
                className="h-auto w-full"
              />
            </div>
          </Grid>
        </Container>
        </Section>
        <InstitutionalIndicators />
      </AtmosphericSurface>
      <TrustedCompanies />
      <AudienceSolutions />
      <EcosystemSolutions />
      <IntegratedJourney />
    </PageAtmosphere>
  );
}
