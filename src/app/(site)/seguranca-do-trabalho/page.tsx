import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileCheck2,
  FileClock,
  FileSearch,
  Gauge,
  HardHat,
  Layers3,
  MonitorCheck,
  Radar,
  RefreshCcw,
  Scale,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TriangleAlert,
  UsersRound,
  Workflow,
} from "lucide-react";
import heroSafety from "../../../../public/images/pages/safety/hero-safety.png";
import technicalConsulting from "../../../../public/images/safety/technical-consulting.png";
import platformDashboard from "../../../../public/images/home/platform/platform-dashboard.png";
import { Button } from "@/components/actions/Button";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { PageAtmosphere } from "@/components/layout/PageAtmosphere";
import { Section } from "@/components/layout/Section";
import { Surface } from "@/components/surfaces/Surface";
import { DisplayTitle } from "@/components/typography/DisplayTitle";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { routes } from "@/config/routes";
import styles from "./SafetyPage.module.css";

export const metadata: Metadata = {
  title: "Segurança do Trabalho | IF Saúde",
  description:
    "Engenharia de Segurança do Trabalho, gestão de riscos e conformidade legal integradas à operação da sua empresa.",
};

const heroDifferentials = [
  { title: "Engenharia especializada", icon: HardHat },
  { title: "Prevenção de riscos", icon: ShieldCheck },
  { title: "Conformidade legal", icon: Scale },
  { title: "Gestão por indicadores", icon: BarChart3 },
] as const;

const safetySolutions = [
  {
    title: "PGR",
    description: "Gerenciamento estruturado dos riscos ocupacionais da operação.",
    icon: ShieldCheck,
  },
  {
    title: "LTCAT",
    description: "Avaliação técnica das condições ambientais de trabalho.",
    icon: FileSearch,
  },
  {
    title: "PPP",
    description: "Organização das informações do histórico laboral e das exposições.",
    icon: ClipboardCheck,
  },
  {
    title: "Laudo de Insalubridade",
    description: "Análise técnica dos agentes e das condições de exposição.",
    icon: Activity,
  },
  {
    title: "Laudo de Periculosidade",
    description: "Caracterização técnica de atividades e operações perigosas.",
    icon: TriangleAlert,
  },
  {
    title: "PCA",
    description: "Programa orientado à conservação da saúde auditiva.",
    icon: Radar,
  },
  {
    title: "PCV",
    description: "Prevenção e acompanhamento dos riscos relacionados à voz.",
    icon: UsersRound,
  },
  {
    title: "AET",
    description: "Análise ergonômica conectada às tarefas e à organização do trabalho.",
    icon: BriefcaseBusiness,
  },
  {
    title: "APR",
    description: "Identificação preventiva dos perigos antes da execução da atividade.",
    icon: SearchCheck,
  },
  {
    title: "Inventário de Riscos",
    description: "Visão consolidada dos perigos, exposições e medidas de controle.",
    icon: Boxes,
  },
] as const;

const workSteps = [
  { title: "Levantamento", description: "Compreensão da operação e dos processos.", icon: SearchCheck },
  { title: "Avaliação", description: "Análise dos perigos e das exposições.", icon: Gauge },
  { title: "Planejamento", description: "Definição técnica das prioridades.", icon: Layers3 },
  { title: "Implementação", description: "Aplicação das medidas de controle.", icon: ClipboardCheck },
  { title: "Monitoramento", description: "Acompanhamento dos riscos e resultados.", icon: MonitorCheck },
  { title: "Melhoria Contínua", description: "Revisão e evolução das ações.", icon: RefreshCcw },
] as const;

const complianceBenefits = [
  "Documentação técnica organizada",
  "Rastreabilidade das avaliações e medidas",
  "Priorização baseada em riscos",
  "Integração com Medicina do Trabalho e eSocial",
] as const;

const regulatoryStandards = [
  "NR-01 · Gerenciamento de Riscos Ocupacionais",
  "NR-06 · Equipamento de Proteção Individual",
  "NR-09 · Exposições Ocupacionais",
  "NR-10 · Segurança em Eletricidade",
  "NR-12 · Máquinas e Equipamentos",
  "NR-15 · Atividades e Operações Insalubres",
  "NR-16 · Atividades e Operações Perigosas",
  "NR-17 · Ergonomia",
  "NR-23 · Proteção Contra Incêndios",
  "NR-33 · Espaços Confinados",
  "NR-35 · Trabalho em Altura",
] as const;

const integratedFlow = [
  {
    title: "Segurança do Trabalho",
    description: "Riscos, avaliações, programas e medidas de controle.",
    icon: HardHat,
  },
  {
    title: "Medicina do Trabalho",
    description: "Exames e acompanhamento orientados às exposições.",
    icon: Stethoscope,
  },
  {
    title: "eSocial",
    description: "Informações consistentes para os eventos de SST.",
    icon: Workflow,
  },
] as const;

const differentials = [
  { title: "Engenharia especializada", description: "Análises conduzidas com rigor técnico e visão de operação.", icon: HardHat },
  { title: "Gestão por indicadores", description: "Informações organizadas para priorizar decisões preventivas.", icon: BarChart3 },
  { title: "Conformidade legal", description: "Documentação alinhada aos requisitos aplicáveis.", icon: Scale },
  { title: "Equipe multidisciplinar", description: "Engenharia, segurança e saúde trabalhando de forma conectada.", icon: UsersRound },
  { title: "Integração digital", description: "Dados de SST disponíveis para acompanhamento e gestão.", icon: MonitorCheck },
  { title: "Atendimento consultivo", description: "Orientação próxima para transformar diagnóstico em ação.", icon: Sparkles },
] as const;

export default function SafetyPage() {
  return (
    <PageAtmosphere variant="industrial" decorative={false}>
      <Section
        density="standard"
        surface="forest"
        aria-labelledby="safety-hero-title"
        className="pt-8 md:pt-10 lg:pt-12"
      >
        <Container size="page">
          <nav aria-label="Breadcrumb">
            <ol className={styles.breadcrumb}>
              <li><Link href={routes.home}>Home</Link></li>
              <li aria-hidden><ArrowRight /></li>
              <li aria-current="page">Segurança do Trabalho</li>
            </ol>
          </nav>

          <Grid
            columns={12}
            gap="xl"
            align="center"
            className="mt-8 md:grid-cols-1 lg:grid-cols-12"
          >
            <div className="min-w-0 lg:col-span-7">
              <Eyebrow line>SEGURANÇA DO TRABALHO</Eyebrow>
              <DisplayTitle
                id="safety-hero-title"
                variant="inverse"
                size="lg"
                className="mt-5 max-w-[15ch]"
              >
                Engenharia que transforma riscos em decisões mais seguras.
              </DisplayTitle>
              <p className={styles.heroCopy}>
                A IF Saúde integra avaliação técnica, prevenção, conformidade e
                gestão para apoiar operações mais seguras, eficientes e
                preparadas para evoluir.
              </p>
              <div className={styles.heroActions}>
                <Button href={routes.contact} variant="inverse" size="lg">
                  Falar com um especialista
                </Button>
                <Button href="#solucoes-seguranca" variant="ghost" size="lg">
                  Conhecer as soluções
                </Button>
              </div>

              <ul className={styles.heroDifferentials}>
                {heroDifferentials.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title}>
                      <Icon aria-hidden />
                      <span>{item.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <div className={styles.heroVisual}>
                <Image
                  src={heroSafety}
                  alt="Engenheiro de Segurança do Trabalho da IF Saúde em uma operação industrial."
                  priority
                  sizes="(min-width: 1024px) 42vw, calc(100vw - 4rem)"
                  className={styles.heroImage}
                />
                <Surface variant="elevated" padding="sm" className={styles.heroCard}>
                  <span><Factory aria-hidden /></span>
                  <div>
                    <strong>Visão técnica da operação</strong>
                    <p>Prevenção conectada aos processos e às pessoas.</p>
                  </div>
                </Surface>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        id="solucoes-seguranca"
        density="standard"
        surface="pure"
        aria-labelledby="safety-solutions-title"
      >
        <Container size="page">
          <Eyebrow line>ENGENHARIA E PREVENÇÃO</Eyebrow>
          <SectionTitle
            title="Soluções em Segurança do Trabalho."
            description="Documentos, programas e avaliações que trabalham juntos para fortalecer a prevenção e a conformidade."
            maxWidth="lg"
            className="mt-4"
            headingProps={{ id: "safety-solutions-title" }}
          />

          <Grid columns={4} gap="md" className={styles.solutionsGrid}>
            {safetySolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Surface
                  key={solution.title}
                  variant="default"
                  padding="md"
                  className={styles.solutionCard}
                >
                  <span><Icon aria-hidden /></span>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </Surface>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="deep"
        aria-labelledby="safety-process-title"
      >
        <Container size="page">
          <SectionTitle
            title="Como trabalhamos."
            description="Um processo técnico contínuo, do reconhecimento dos riscos à evolução das medidas de prevenção."
            align="center"
            maxWidth="lg"
            headingProps={{ id: "safety-process-title" }}
          />

          <ol className={styles.timeline} aria-label="Processo de Segurança do Trabalho">
            {workSteps.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.title}>
                  <span><Icon aria-hidden /></span>
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
        surface="pure"
        aria-labelledby="legal-compliance-title"
      >
        <Container size="page">
          <Grid columns={12} gap="xl" align="center" className="md:grid-cols-1 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-6">
              <Eyebrow line>CONFORMIDADE LEGAL</Eyebrow>
              <SectionTitle
                title="Conformidade que orienta a prevenção."
                description="A documentação técnica ganha valor quando traduz riscos, responsabilidades e prioridades em decisões claras para a operação."
                maxWidth="lg"
                className="mt-4"
                headingProps={{ id: "legal-compliance-title" }}
              />

              <ul className={styles.complianceBenefits}>
                {complianceBenefits.map((benefit) => (
                  <li key={benefit}>
                    <CheckCircle2 aria-hidden />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className={styles.complianceIndicators}>
                <Surface variant="muted" padding="sm">
                  <FileCheck2 aria-hidden />
                  <strong>Documentação rastreável</strong>
                </Surface>
                <Surface variant="muted" padding="sm">
                  <FileClock aria-hidden />
                  <strong>Acompanhamento contínuo</strong>
                </Surface>
              </div>

              <h3 className={styles.nrHeading}>Principais NRs relacionadas aos projetos</h3>
              <ul className={styles.nrList}>
                {regulatoryStandards.map((standard) => (
                  <li key={standard}>{standard}</li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <div className={styles.consultingVisual}>
                <Image
                  src={technicalConsulting}
                  alt="Consultoria técnica de Segurança do Trabalho da IF Saúde em ambiente industrial."
                  sizes="(min-width: 1024px) 46vw, calc(100vw - 4rem)"
                />
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="mist"
        aria-labelledby="integrated-safety-title"
      >
        <Container size="page">
          <Grid columns={12} gap="xl" align="center" className="md:grid-cols-1 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <Image
                src={platformDashboard}
                alt="Dashboard da plataforma digital da IF Saúde integrando informações de SST."
                sizes="(min-width: 1024px) 54vw, calc(100vw - 4rem)"
                className={styles.platformImage}
              />
            </div>
            <div className="min-w-0 lg:col-span-5">
              <Eyebrow line>GESTÃO INTEGRADA</Eyebrow>
              <SectionTitle
                title="Segurança, saúde e eSocial conectados."
                description="A mesma informação orienta a prevenção, apoia o acompanhamento médico e fortalece a consistência dos eventos de SST."
                maxWidth="lg"
                className="mt-4"
                headingProps={{ id: "integrated-safety-title" }}
              />

              <ol className={styles.integratedFlow}>
                {integratedFlow.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title}>
                      <span><Icon aria-hidden /></span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="ivory"
        aria-labelledby="safety-differentials-title"
      >
        <Container size="page">
          <SectionTitle
            title="Engenharia aplicada à realidade da operação."
            description="Diferenciais para transformar requisitos técnicos em uma gestão preventiva mais madura."
            align="center"
            maxWidth="lg"
            headingProps={{ id: "safety-differentials-title" }}
          />

          <Grid columns={3} gap="md" className="mt-10">
            {differentials.map((item) => {
              const Icon = item.icon;
              return (
                <Surface key={item.title} variant="default" padding="md" className={styles.differentialCard}>
                  <span><Icon aria-hidden /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </Surface>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="forest"
        aria-labelledby="safety-cta-title"
      >
        <Container size="content" className="text-center">
          <Eyebrow className="justify-center">PRÓXIMO PASSO</Eyebrow>
          <DisplayTitle
            id="safety-cta-title"
            as="h2"
            variant="inverse"
            size="lg"
            className="mx-auto mt-4"
          >
            Prevenção estratégica começa com uma visão técnica completa.
          </DisplayTitle>
          <p className={styles.ctaCopy}>
            Converse com a equipe da IF Saúde para estruturar uma gestão de
            riscos alinhada à realidade da sua operação.
          </p>
          <div className={styles.ctaActions}>
            <Button href={routes.contact} variant="inverse" size="lg">
              Falar com um especialista
            </Button>
            <Button href={routes.companies} variant="ghost" size="lg">
              Ver soluções para empresas
            </Button>
          </div>
        </Container>
      </Section>
    </PageAtmosphere>
  );
}
