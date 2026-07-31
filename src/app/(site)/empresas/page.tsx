import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BriefcaseMedical,
  Building2,
  ChartNoAxesCombined,
  ClipboardCheck,
  Factory,
  FileSearch,
  HardHat,
  HeartPulse,
  Landmark,
  MonitorCheck,
  ShieldCheck,
  Stethoscope,
  Truck,
  UsersRound,
  Wheat,
  Workflow,
} from "lucide-react";
import heroEnterprises from "../../../../public/images/pages/companies/hero-enterprises.png";
import closingImage from "../../../../public/images/home/solutions/companies.png";
import { Button } from "@/components/actions/Button";
import { TextLink } from "@/components/actions/TextLink";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { Section } from "@/components/layout/Section";
import { Surface } from "@/components/surfaces/Surface";
import { DisplayTitle } from "@/components/typography/DisplayTitle";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { routes } from "@/config/routes";
import styles from "./CompaniesPage.module.css";

export const metadata: Metadata = {
  title: "Soluções para Empresas | IF Saúde",
  description:
    "Soluções integradas de saúde ocupacional, segurança do trabalho e gestão de SST para empresas.",
};

const heroDifferentials = [
  {
    title: "Gestão integrada",
    description: "Saúde, segurança e informações conectadas.",
    icon: Workflow,
  },
  {
    title: "Estrutura própria",
    description: "Atendimento e exames em uma única jornada.",
    icon: Building2,
  },
  {
    title: "Conformidade",
    description: "Rotinas orientadas às exigências de SST.",
    icon: ShieldCheck,
  },
  {
    title: "Acompanhamento",
    description: "Visibilidade para decisões mais seguras.",
    icon: ChartNoAxesCombined,
  },
] as const;

const services = [
  {
    title: "Medicina do Trabalho",
    description:
      "Cuidado clínico ocupacional, PCMSO e acompanhamento da saúde dos trabalhadores.",
    href: routes.contact,
    icon: Stethoscope,
  },
  {
    title: "Exames Complementares",
    description:
      "Exames laboratoriais, funcionais e de diagnóstico integrados ao atendimento.",
    href: routes.exams,
    icon: Activity,
  },
  {
    title: "Segurança do Trabalho",
    description:
      "Gestão de riscos, laudos técnicos e programas para ambientes mais seguros.",
    href: routes.safety,
    icon: HardHat,
  },
  {
    title: "Gestão de eSocial",
    description:
      "Organização, validação e acompanhamento dos eventos ocupacionais de SST.",
    href: routes.esocial,
    icon: MonitorCheck,
  },
  {
    title: "Perícias e Consultoria",
    description:
      "Suporte técnico para perícias, pareceres, auditorias e processos empresariais.",
    href: routes.contact,
    icon: FileSearch,
  },
  {
    title: "Ambulatórios In Company",
    description:
      "Equipes e rotinas de saúde ocupacional integradas à operação da empresa.",
    href: routes.contact,
    icon: BriefcaseMedical,
  },
  {
    title: "Gestão de Absenteísmo",
    description:
      "Acompanhamento de afastamentos e indicadores para orientar ações preventivas.",
    href: routes.contact,
    icon: UsersRound,
  },
  {
    title: "Programas de Saúde",
    description:
      "Iniciativas direcionadas ao perfil epidemiológico e às necessidades da operação.",
    href: routes.contact,
    icon: HeartPulse,
  },
] as const;

const indicators = [
  {
    value: "+25 anos",
    label: "Experiência consolidada",
    description: "Cuidado ocupacional construído ao lado das empresas.",
  },
  {
    value: "+1 milhão",
    label: "Atendimentos realizados",
    description: "Consultas, exames e ASOs em uma estrutura integrada.",
  },
  {
    value: "Estrutura própria",
    label: "Uma jornada coordenada",
    description: "Mais fluidez entre atendimento, exames e documentação.",
  },
  {
    value: "Gestão completa",
    label: "Saúde, segurança e eSocial",
    description: "Informações organizadas para apoiar cada decisão.",
  },
] as const;

const segments = [
  { title: "Indústria", icon: Factory },
  { title: "Construção civil", icon: HardHat },
  { title: "Agronegócio", icon: Wheat },
  { title: "Logística", icon: Truck },
  { title: "Comércio e serviços", icon: Building2 },
  { title: "Setor público", icon: Landmark },
] as const;

export default function CompaniesPage() {
  return (
    <>
      <Section
        density="standard"
        surface="ivory"
        aria-labelledby="companies-hero-title"
        className="pt-8 md:pt-10 lg:pt-12"
      >
        <Container size="page">
          <nav aria-label="Breadcrumb">
            <ol className={styles.breadcrumb}>
              <li>
                <Link href={routes.home}>Home</Link>
              </li>
              <li aria-hidden>
                <ArrowRight />
              </li>
              <li aria-current="page">Soluções para Empresas</li>
            </ol>
          </nav>

          <Grid
            columns={12}
            gap="xl"
            align="center"
            className="mt-8 md:grid-cols-1 lg:grid-cols-12"
          >
            <div className="min-w-0 lg:col-span-6">
              <Eyebrow line>SOLUÇÕES PARA EMPRESAS</Eyebrow>
              <DisplayTitle
                id="companies-hero-title"
                size="lg"
                className="mt-5 max-w-[15ch]"
              >
                Saúde ocupacional integrada à estratégia da sua empresa.
              </DisplayTitle>
              <p className={styles.heroCopy}>
                A IF Saúde conecta atendimento médico, exames, segurança do
                trabalho e gestão de SST para apoiar empresas de todos os portes
                com clareza, conformidade e cuidado.
              </p>
              <div className={styles.heroActions}>
                <Button href={routes.contact} size="lg">
                  Falar com um especialista
                </Button>
                <Button href="#solucoes" variant="outline" size="lg">
                  Ver todos os serviços
                </Button>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <div className={styles.heroVisual}>
                <Image
                  src={heroEnterprises}
                  alt="Profissionais da IF Saúde analisando informações ocupacionais em uma operação industrial."
                  priority
                  sizes="(min-width: 1024px) 46vw, calc(100vw - 4rem)"
                  className={styles.heroImage}
                />
                <Surface
                  variant="elevated"
                  padding="sm"
                  className={styles.floatingCard}
                >
                  <span>
                    <ClipboardCheck aria-hidden />
                  </span>
                  <div>
                    <strong>Atendimento coordenado</strong>
                    <p>Do cuidado presencial à gestão das informações.</p>
                  </div>
                </Surface>
              </div>
            </div>
          </Grid>

          <Surface
            variant="default"
            padding="none"
            className={styles.heroDifferentials}
          >
            <ul>
              {heroDifferentials.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.title}>
                    <Icon aria-hidden />
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Surface>
        </Container>
      </Section>

      <Section
        id="solucoes"
        density="standard"
        surface="pure"
        aria-labelledby="companies-services-title"
      >
        <Container size="page">
          <Eyebrow line>ECOSSISTEMA DE SOLUÇÕES</Eyebrow>
          <SectionTitle
            title="Tudo o que sua empresa precisa para cuidar de pessoas e da operação."
            description="Soluções que trabalham de forma integrada, respeitando a realidade e o porte de cada organização."
            maxWidth="lg"
            className="mt-4"
            headingProps={{ id: "companies-services-title" }}
          />

          <Grid columns={4} gap="md" className="mt-10">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Surface
                  key={service.title}
                  variant="default"
                  padding="md"
                  className={styles.serviceCard}
                >
                  <div className={styles.serviceIcon}>
                    <Icon aria-hidden />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <TextLink href={service.href}>Conhecer solução</TextLink>
                </Surface>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Section
        density="compact"
        surface="pure"
        aria-labelledby="companies-indicators-title"
        className="pt-0"
      >
        <Container size="page">
          <h2 id="companies-indicators-title" className="sr-only">
            Indicadores das soluções para empresas
          </h2>
          <Surface variant="dark" padding="none" className={styles.indicatorPanel}>
            <ul>
              {indicators.map((indicator) => (
                <li key={indicator.label}>
                  <p className={styles.indicatorValue}>{indicator.value}</p>
                  <h3>{indicator.label}</h3>
                  <p>{indicator.description}</p>
                </li>
              ))}
            </ul>
          </Surface>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="ivory"
        aria-labelledby="companies-segments-title"
      >
        <Container size="page">
          <SectionTitle
            title="Atuamos nos principais segmentos."
            description="Uma estrutura flexível para compreender riscos, rotinas e necessidades de diferentes operações."
            align="center"
            maxWidth="lg"
            headingProps={{ id: "companies-segments-title" }}
          />

          <Grid columns={6} gap="sm" className="mt-10">
            {segments.map((segment) => {
              const Icon = segment.icon;

              return (
                <Surface
                  key={segment.title}
                  variant="outlined"
                  padding="sm"
                  className={styles.segment}
                >
                  <Icon aria-hidden />
                  <h3>{segment.title}</h3>
                </Surface>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="forest"
        aria-labelledby="companies-closing-title"
      >
        <Container size="page">
          <Grid
            columns={12}
            gap="xl"
            align="center"
            className="md:grid-cols-1 lg:grid-cols-12"
          >
            <div className="min-w-0 lg:col-span-6">
              <Eyebrow>PRÓXIMO PASSO</Eyebrow>
              <DisplayTitle
                id="companies-closing-title"
                as="h2"
                variant="inverse"
                size="lg"
                className="mt-4 max-w-[14ch]"
              >
                Uma operação mais segura começa com uma visão integrada.
              </DisplayTitle>
              <p className={styles.closingCopy}>
                Converse com a IF Saúde para organizar uma solução alinhada ao
                perfil, aos riscos e à rotina da sua empresa.
              </p>
              <div className={styles.closingActions}>
                <Button href={routes.contact} variant="inverse" size="lg">
                  Falar com um especialista
                </Button>
                <Button href={routes.clientPortal} variant="ghost" size="lg">
                  Portal do Cliente
                </Button>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <div className={styles.closingVisual}>
                <Image
                  src={closingImage}
                  alt="Profissional de segurança do trabalho acompanhando uma operação industrial."
                  sizes="(min-width: 1024px) 46vw, calc(100vw - 4rem)"
                  className={styles.closingImage}
                />
              </div>
            </div>
          </Grid>
        </Container>
      </Section>
    </>
  );
}
