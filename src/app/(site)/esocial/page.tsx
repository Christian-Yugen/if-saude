import type { Metadata } from "next";
import Image from "next/image";
import {
  BellRing,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  CloudCog,
  Database,
  FileCheck2,
  FileClock,
  Files,
  HeartPulse,
  History,
  Laptop,
  ListChecks,
  MonitorCheck,
  Network,
  RefreshCcw,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UsersRound,
  Workflow,
} from "lucide-react";
import heroEsocial from "../../../../public/images/pages/esocial/hero-esocial.png";
import consultingImage from "../../../../public/images/esocial/esocial-consulting.png";
import integrationImage from "../../../../public/images/esocial/system-integration.png";
import validationImage from "../../../../public/images/esocial/data-validation.png";
import monitoringImage from "../../../../public/images/esocial/monitoring-dashboard.png";
import documentImage from "../../../../public/images/esocial/document-management.png";
import { Button } from "@/components/actions/Button";
import { StatusBadge } from "@/components/data-display/StatusBadge";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { PageAtmosphere } from "@/components/layout/PageAtmosphere";
import { Section } from "@/components/layout/Section";
import { Surface } from "@/components/surfaces/Surface";
import { DisplayTitle } from "@/components/typography/DisplayTitle";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { routes } from "@/config/routes";
import styles from "./EsocialPage.module.css";

export const metadata: Metadata = {
  title: "eSocial para Empresas | IF Saúde",
  description:
    "Gestão especializada dos eventos de Saúde e Segurança do Trabalho no eSocial, com validação, integração e acompanhamento contínuo.",
};

const trustItems = [
  { title: "Eventos SST acompanhados", icon: MonitorCheck },
  { title: "Validação especializada", icon: SearchCheck },
  { title: "Gestão integrada", icon: Workflow },
] as const;

const managementPillars = [
  {
    title: "Informações centralizadas",
    description:
      "Dados ocupacionais, documentos e eventos reunidos em um único ambiente de gestão.",
    icon: Database,
  },
  {
    title: "Validação antes do envio",
    description:
      "As informações são conferidas antes da transmissão, reduzindo rejeições e inconsistências.",
    icon: SearchCheck,
  },
  {
    title: "Acompanhamento contínuo",
    description:
      "Pendências, prazos e eventos enviados permanecem visíveis durante toda a operação.",
    icon: BellRing,
  },
] as const;

const events = [
  {
    code: "S-2210",
    title: "Comunicação de Acidente de Trabalho",
    description:
      "Organização e transmissão das informações relacionadas aos acidentes de trabalho e seus registros.",
    icon: ShieldCheck,
  },
  {
    code: "S-2220",
    title: "Monitoramento da Saúde do Trabalhador",
    description:
      "Gestão dos exames ocupacionais e acompanhamento das informações de saúde dos colaboradores.",
    icon: HeartPulse,
  },
  {
    code: "S-2240",
    title: "Condições Ambientais do Trabalho",
    description:
      "Registro das condições ambientais, fatores de risco e exposição ocupacional dos trabalhadores.",
    icon: CloudCog,
  },
] as const;

const consultingBenefits = [
  "Orientação técnica para RH e gestores",
  "Análise de pendências e inconsistências",
  "Acompanhamento dos eventos obrigatórios",
  "Apoio em auditorias e fiscalizações",
  "Visão integrada entre Medicina e Segurança do Trabalho",
] as const;

const integrationSteps = [
  "Exames",
  "Dados ocupacionais",
  "Validação",
  "eSocial",
  "Monitoramento",
] as const;

const processSteps = [
  {
    title: "Coleta",
    description:
      "Reunimos os dados dos colaboradores, exames, riscos e documentos ocupacionais.",
    icon: Files,
  },
  {
    title: "Integração",
    description: "As informações são conectadas em um único fluxo de gestão.",
    icon: Network,
  },
  {
    title: "Validação",
    description:
      "Nossa equipe verifica inconsistências e pendências antes do envio.",
    icon: SearchCheck,
  },
  {
    title: "Transmissão",
    description:
      "Os eventos são preparados e enviados conforme os requisitos aplicáveis.",
    icon: Send,
  },
  {
    title: "Monitoramento",
    description:
      "Status, prazos, retornos e pendências permanecem sob acompanhamento.",
    icon: MonitorCheck,
  },
] as const;

const validationStates = [
  { title: "Dados conferidos", icon: ListChecks },
  { title: "Inconsistências identificadas", icon: SearchCheck },
  { title: "Pendências tratadas", icon: CheckCircle2 },
  { title: "Histórico preservado", icon: History },
] as const;

const monitoringFeatures = [
  { title: "Eventos enviados", icon: Send },
  { title: "Pendências em acompanhamento", icon: BellRing },
  { title: "Cronograma de transmissões", icon: CalendarClock },
  { title: "Histórico de conformidade", icon: History },
] as const;

const documentFeatures = [
  "Biblioteca documental",
  "Histórico por colaborador",
  "Assinaturas e registros",
  "Controle de versões",
  "Acesso rápido em auditorias",
  "Integração com eventos SST",
] as const;

const benefits = [
  {
    title: "Menos inconsistências",
    description: "Validação das informações antes da transmissão dos eventos.",
    icon: SearchCheck,
  },
  {
    title: "Mais produtividade",
    description:
      "Redução de controles paralelos, retrabalho e tarefas manuais.",
    icon: RefreshCcw,
  },
  {
    title: "Visão integrada",
    description:
      "Medicina, Segurança do Trabalho, documentos e eSocial no mesmo fluxo.",
    icon: Network,
  },
  {
    title: "Prazos acompanhados",
    description: "Monitoramento contínuo de pendências e obrigações.",
    icon: FileClock,
  },
  {
    title: "Apoio especializado",
    description: "Orientação técnica para RH, gestores e responsáveis internos.",
    icon: UsersRound,
  },
  {
    title: "Rastreabilidade",
    description:
      "Histórico de eventos, documentos e validações preservado.",
    icon: History,
  },
] as const;

const trustPillars = [
  { title: "Medicina do Trabalho", icon: Stethoscope },
  { title: "Segurança do Trabalho", icon: ShieldCheck },
  { title: "Exames Ocupacionais", icon: ClipboardCheck },
  { title: "eSocial", icon: Laptop },
] as const;

export default function EsocialPage() {
  return (
    <PageAtmosphere variant="digital" decorative={false}>
      <Section
        density="standard"
        surface="mist"
        aria-labelledby="esocial-hero-title"
        className="pt-10 md:pt-12"
      >
        <Container size="page">
          <Grid
            columns={12}
            gap="xl"
            align="center"
            className="md:grid-cols-1 lg:grid-cols-12"
          >
            <div className="min-w-0 lg:col-span-7">
              <Eyebrow line>eSocial para empresas</Eyebrow>
              <DisplayTitle
                id="esocial-hero-title"
                size="lg"
                className="mt-5 max-w-[16ch]"
              >
                Gestão do eSocial com{" "}
                <span className={styles.titleAccent}>
                  precisão, integração e segurança.
                </span>
              </DisplayTitle>
              <p className={styles.heroCopy}>
                A IF Saúde organiza, valida e acompanha os eventos de Saúde e
                Segurança do Trabalho da sua empresa, reduzindo inconsistências
                e garantindo mais tranquilidade em cada transmissão.
              </p>
              <div className={styles.heroActions}>
                <Button href={routes.contact} size="lg">
                  Falar com um especialista
                </Button>
                <Button href="#gestao-especializada" variant="outline" size="lg">
                  Conhecer a solução
                </Button>
              </div>
              <ul className={styles.trustItems}>
                {trustItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title}>
                      <Icon aria-hidden />
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <div className={styles.heroVisual}>
                <Image
                  src={heroEsocial}
                  alt="Especialista da IF Saúde acompanhando eventos SST no sistema do eSocial"
                  priority
                  sizes="(min-width: 1024px) 42vw, calc(100vw - 4rem)"
                />
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        id="gestao-especializada"
        density="standard"
        surface="pure"
        aria-labelledby="specialized-management-title"
      >
        <Container size="page">
          <Eyebrow line>Gestão especializada</Eyebrow>
          <SectionTitle
            title="O eSocial não precisa ser uma operação complexa."
            description="A transmissão dos eventos SST exige consistência entre exames, riscos ocupacionais, acidentes, ambientes de trabalho e dados dos colaboradores. A IF Saúde conecta essas informações em um fluxo organizado, acompanhado por profissionais especializados."
            maxWidth="lg"
            className="mt-4"
            headingProps={{ id: "specialized-management-title" }}
          />
          <Grid columns={3} gap="md" className="mt-10">
            {managementPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Surface
                  key={pillar.title}
                  variant="default"
                  padding="md"
                  className={styles.pillarCard}
                >
                  <span><Icon aria-hidden /></span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </Surface>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="mist"
        aria-labelledby="sst-events-title"
      >
        <Container size="page">
          <Eyebrow line>Eventos de SST</Eyebrow>
          <SectionTitle
            title="Os principais eventos do eSocial sob acompanhamento especializado."
            maxWidth="lg"
            className="mt-4"
            headingProps={{ id: "sst-events-title" }}
          />
          <Grid columns={3} gap="md" className="mt-10">
            {events.map((event) => {
              const Icon = event.icon;
              return (
                <Surface
                  key={event.code}
                  variant="default"
                  padding="md"
                  className={styles.eventCard}
                >
                  <div className={styles.eventHeader}>
                    <span className={styles.iconCircle}><Icon aria-hidden /></span>
                    <StatusBadge state="info">{event.code}</StatusBadge>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </Surface>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="sage"
        aria-labelledby="esocial-consulting-title"
      >
        <Container size="page">
          <Grid columns={12} gap="xl" align="center" className="md:grid-cols-1 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-6">
              <Eyebrow line>Consultoria especializada</Eyebrow>
              <SectionTitle
                title="Tecnologia acompanhada por quem entende de Saúde e Segurança do Trabalho."
                description="Mais do que transmitir eventos, nossa equipe analisa indicadores, orienta decisões e ajuda sua empresa a manter os dados ocupacionais consistentes ao longo de toda a operação."
                maxWidth="lg"
                className="mt-4"
                headingProps={{ id: "esocial-consulting-title" }}
              />
              <CheckList items={consultingBenefits} />
              <Surface variant="default" padding="sm" className={styles.editorialHighlight}>
                <Sparkles aria-hidden />
                <strong>Especialistas que transformam dados em decisões mais seguras.</strong>
              </Surface>
            </div>
            <div className="min-w-0 lg:col-span-6">
              <EditorialImage
                src={consultingImage}
                alt="Consultor da IF Saúde orientando uma gestora sobre indicadores do eSocial"
                className={styles.consultingImage}
              />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="pure"
        aria-labelledby="digital-integration-title"
      >
        <Container size="page">
          <Grid columns={12} gap="xl" align="center" className="md:grid-cols-1 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <EditorialImage
                src={integrationImage}
                alt="Plataforma da IF Saúde integrada em notebook, tablet e smartphone"
                className={styles.integrationImage}
              />
            </div>
            <div className="min-w-0 lg:col-span-5">
              <Eyebrow line>Integração completa</Eyebrow>
              <SectionTitle
                title="Medicina do Trabalho, Segurança do Trabalho e eSocial conectados."
                description="A plataforma reúne informações ocupacionais, exames, documentos, riscos, agendas e eventos SST em uma experiência integrada, acessível em diferentes dispositivos."
                maxWidth="lg"
                className="mt-4"
                headingProps={{ id: "digital-integration-title" }}
              />
              <ol className={styles.integrationDiagram} aria-label="Fluxo de integração digital">
                {integrationSteps.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                  </li>
                ))}
              </ol>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="emerald"
        aria-labelledby="management-process-title"
      >
        <Container size="page">
          <Eyebrow className="justify-center">Como funciona</Eyebrow>
          <SectionTitle
            title="Um fluxo organizado do dado ocupacional à transmissão."
            align="center"
            maxWidth="lg"
            className="mt-4"
            headingProps={{ id: "management-process-title" }}
          />
          <ol className={styles.process} aria-label="Processo de gestão do eSocial">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title}>
                  <span className={styles.processNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.processIcon}><Icon aria-hidden /></span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="ivory"
        aria-labelledby="data-validation-title"
      >
        <Container size="page">
          <Grid columns={12} gap="xl" align="center" className="md:grid-cols-1 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-6">
              <Eyebrow line>Validação de dados</Eyebrow>
              <SectionTitle
                title="Cada informação é conferida antes de seguir para o eSocial."
                description="A validação técnica identifica inconsistências entre dados ocupacionais, informações cadastrais e eventos SST, permitindo correções antes da transmissão."
                maxWidth="lg"
                className="mt-4"
                headingProps={{ id: "data-validation-title" }}
              />
              <Grid columns={2} gap="sm" className="mt-8">
                {validationStates.map((state) => {
                  const Icon = state.icon;
                  return (
                    <Surface key={state.title} variant="default" padding="sm" className={styles.stateCard}>
                      <Icon aria-hidden />
                      <strong>{state.title}</strong>
                    </Surface>
                  );
                })}
              </Grid>
            </div>
            <div className="min-w-0 lg:col-span-6">
              <EditorialImage
                src={validationImage}
                alt="Especialista validando inconsistências em eventos SST"
                className={styles.validationImage}
              />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="deep"
        aria-labelledby="continuous-monitoring-title"
      >
        <Container size="page">
          <Grid columns={12} gap="xl" align="center" className="md:grid-cols-1 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <EditorialImage
                src={monitoringImage}
                alt="Centro de monitoramento dos eventos de SST do eSocial"
                className={styles.monitoringImage}
              />
            </div>
            <div className="min-w-0 lg:col-span-5">
              <Eyebrow line>Monitoramento contínuo</Eyebrow>
              <SectionTitle
                title="Visibilidade sobre eventos, prazos e conformidade."
                description="Dashboards e indicadores permitem acompanhar eventos enviados, pendências, alertas e prazos de diferentes empresas, unidades e colaboradores."
                maxWidth="lg"
                className="mt-4"
                headingProps={{ id: "continuous-monitoring-title" }}
              />
              <div className={styles.monitoringFeatures}>
                {monitoringFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title}>
                      <Icon aria-hidden />
                      <strong>{feature.title}</strong>
                    </div>
                  );
                })}
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="mist"
        aria-labelledby="document-management-title"
      >
        <Container size="page">
          <Grid columns={12} gap="xl" align="center" className="md:grid-cols-1 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-5">
              <Eyebrow line>Gestão documental</Eyebrow>
              <SectionTitle
                title="Documentos ocupacionais organizados, rastreáveis e acessíveis."
                description="ASO, PCMSO, PGR, LTCAT, PPP e demais registros podem permanecer associados ao histórico dos colaboradores, facilitando consultas, auditorias e comprovações."
                maxWidth="lg"
                className="mt-4"
                headingProps={{ id: "document-management-title" }}
              />
              <ul className={styles.documentFeatures}>
                {documentFeatures.map((feature) => (
                  <li key={feature}><FileCheck2 aria-hidden />{feature}</li>
                ))}
              </ul>
            </div>
            <div className="min-w-0 lg:col-span-7">
              <EditorialImage
                src={documentImage}
                alt="Profissionais analisando documentos ocupacionais digitais e assinados"
                className={styles.documentImage}
              />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="pure"
        aria-labelledby="company-benefits-title"
      >
        <Container size="page">
          <Eyebrow line>Benefícios</Eyebrow>
          <SectionTitle
            title="Mais controle para o RH. Mais segurança para a empresa."
            maxWidth="lg"
            className="mt-4"
            headingProps={{ id: "company-benefits-title" }}
          />
          <Grid columns={3} gap="md" className="mt-10">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Surface key={benefit.title} variant="default" padding="md" className={styles.benefitCard}>
                  <span><Icon aria-hidden /></span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </Surface>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Section
        density="compact"
        surface="sage"
        aria-labelledby="esocial-trust-title"
      >
        <Container size="page">
          <h2 id="esocial-trust-title" className={styles.trustTitle}>
            Uma operação integrada para cuidar dos dados que protegem sua empresa e seus colaboradores.
          </h2>
          <ol className={styles.trustPillars}>
            {trustPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <li key={pillar.title}>
                  <span><Icon aria-hidden /></span>
                  <strong>{pillar.title}</strong>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="forest"
        aria-labelledby="esocial-cta-title"
      >
        <Container size="content" className="text-center">
          <Eyebrow className="justify-center">Gestão do eSocial</Eyebrow>
          <DisplayTitle
            id="esocial-cta-title"
            as="h2"
            variant="inverse"
            size="lg"
            className="mx-auto mt-4"
          >
            Sua empresa pode ter mais controle e menos complexidade.
          </DisplayTitle>
          <p className={styles.ctaCopy}>
            Converse com a equipe da IF Saúde e descubra como organizar os
            eventos SST do eSocial em uma operação integrada, segura e
            acompanhada por especialistas.
          </p>
          <div className={styles.ctaActions}>
            <Button href={routes.contact} variant="inverse" size="lg">
              Falar com um especialista
            </Button>
            <Button href={routes.contact} variant="ghost" size="lg">
              Solicitar uma proposta
            </Button>
          </div>
        </Container>
      </Section>
    </PageAtmosphere>
  );
}

type CheckListProps = {
  items: readonly string[];
};

function CheckList({ items }: CheckListProps) {
  return (
    <ul className={styles.checkList}>
      {items.map((item) => (
        <li key={item}><CheckCircle2 aria-hidden />{item}</li>
      ))}
    </ul>
  );
}

type EditorialImageProps = {
  src: typeof consultingImage;
  alt: string;
  className?: string;
};

function EditorialImage({ src, alt, className }: EditorialImageProps) {
  return (
    <div className={`${styles.editorialImage} ${className ?? ""}`}>
      <Image src={src} alt={alt} sizes="(min-width: 1024px) 52vw, calc(100vw - 4rem)" />
    </div>
  );
}
