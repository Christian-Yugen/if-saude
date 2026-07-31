import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Ear,
  Eye,
  FileCheck2,
  FlaskConical,
  HeartPulse,
  History,
  Laptop,
  ListChecks,
  MonitorCheck,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserCheck,
  UsersRound,
  Wind,
  Workflow,
} from "lucide-react";
import heroExams from "../../../../public/images/pages/exams/hero-exams.png";
import receptionImage from "../../../../public/images/facilities/reception.png";
import consultationImage from "../../../../public/images/facilities/medical-consultation.png";
import audiometryImage from "../../../../public/images/facilities/audiometry.png";
import spirometryImage from "../../../../public/images/facilities/spirometry.png";
import collectionImage from "../../../../public/images/facilities/laboratory-collection.png";
import electrocardiogramImage from "../../../../public/images/facilities/electrocardiogram.png";
import platformDashboard from "../../../../public/images/home/platform/platform-dashboard.png";
import { Button } from "@/components/actions/Button";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { Section } from "@/components/layout/Section";
import { Surface } from "@/components/surfaces/Surface";
import { DisplayTitle } from "@/components/typography/DisplayTitle";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { routes } from "@/config/routes";
import styles from "./ExamsPage.module.css";

export const metadata: Metadata = {
  title: "Exames e Atendimentos | IF Saúde",
  description:
    "Estrutura própria para consultas, exames ocupacionais e gestão integrada das informações de saúde do trabalhador.",
};

const heroDifferentials = [
  { title: "Estrutura própria", icon: ShieldCheck },
  { title: "Equipe especializada", icon: UsersRound },
  { title: "Exames integrados", icon: ListChecks },
  { title: "Entrega digital", icon: MonitorCheck },
] as const;

const clinicalServices = [
  {
    title: "Exame Admissional",
    description: "Avaliação clínica antes do início das atividades.",
    benefits: ["Aptidão para a função", "Registro ocupacional integrado"],
    icon: UserCheck,
  },
  {
    title: "Exame Periódico",
    description: "Acompanhamento contínuo da saúde durante o vínculo.",
    benefits: ["Monitoramento preventivo", "Histórico atualizado"],
    icon: CalendarCheck,
  },
  {
    title: "Retorno ao Trabalho",
    description: "Avaliação segura após afastamentos ocupacionais ou clínicos.",
    benefits: ["Análise da condição atual", "Orientação para o retorno"],
    icon: RefreshCcw,
  },
  {
    title: "Mudança de Função",
    description: "Verificação da aptidão diante de novas atividades e riscos.",
    benefits: ["Avaliação direcionada", "Conformidade documental"],
    icon: Workflow,
  },
  {
    title: "Exame Demissional",
    description: "Encerramento do ciclo ocupacional com avaliação clínica.",
    benefits: ["Documentação organizada", "Conclusão do histórico"],
    icon: ClipboardCheck,
  },
  {
    title: "Audiometria",
    description: "Avaliação da capacidade auditiva em ambiente preparado.",
    benefits: ["Equipamento especializado", "Integração com o PCMSO"],
    icon: Ear,
  },
  {
    title: "Espirometria",
    description: "Análise funcional respiratória com protocolo ocupacional.",
    benefits: ["Avaliação pulmonar", "Resultado integrado"],
    icon: Wind,
  },
  {
    title: "Eletrocardiograma",
    description: "Registro da atividade cardíaca para apoio à avaliação médica.",
    benefits: ["Procedimento no local", "Leitura especializada"],
    icon: HeartPulse,
  },
  {
    title: "Acuidade Visual",
    description: "Verificação objetiva da capacidade visual do trabalhador.",
    benefits: ["Aplicação ocupacional", "Fluxo ágil"],
    icon: Eye,
  },
  {
    title: "Avaliação Clínica",
    description: "Consulta ocupacional conduzida por equipe médica especializada.",
    benefits: ["Escuta qualificada", "Decisão clínica responsável"],
    icon: Stethoscope,
  },
] as const;

type Facility = {
  title: string;
  description: string;
  image: StaticImageData;
};

const facilities: readonly Facility[] = [
  {
    title: "Recepção e acolhimento",
    description: "Uma chegada organizada para orientar cada atendimento.",
    image: receptionImage,
  },
  {
    title: "Consultórios médicos",
    description: "Ambientes preparados para avaliações clínicas ocupacionais.",
    image: consultationImage,
  },
  {
    title: "Audiometria",
    description: "Estrutura dedicada para avaliações auditivas.",
    image: audiometryImage,
  },
  {
    title: "Espirometria",
    description: "Tecnologia para avaliação funcional respiratória.",
    image: spirometryImage,
  },
  {
    title: "Coleta laboratorial",
    description: "Coletas integradas ao fluxo de exames ocupacionais.",
    image: collectionImage,
  },
  {
    title: "Eletrocardiograma",
    description: "Equipamentos e equipe para avaliações complementares.",
    image: electrocardiogramImage,
  },
];

const processSteps = [
  { title: "Agendamento", description: "Organização prévia da jornada.", icon: CalendarCheck },
  { title: "Recepção", description: "Conferência e acolhimento.", icon: UserCheck },
  { title: "Consulta", description: "Avaliação médica ocupacional.", icon: Stethoscope },
  { title: "Exames", description: "Procedimentos indicados no PCMSO.", icon: Activity },
  { title: "Laudos", description: "Análise e documentação clínica.", icon: FileCheck2 },
  { title: "Entrega Digital", description: "Informações disponíveis para gestão.", icon: Laptop },
] as const;

const digitalBenefits = [
  "Histórico ocupacional centralizado",
  "Documentos organizados por trabalhador",
  "Acompanhamento da jornada de exames",
  "Informações conectadas à gestão de SST",
] as const;

const differentials = [
  { title: "Estrutura própria", description: "Atendimento e exames realizados em ambientes preparados.", icon: ShieldCheck },
  { title: "Equipe especializada", description: "Profissionais habituados às necessidades da saúde ocupacional.", icon: UsersRound },
  { title: "Atendimento integrado", description: "Consulta, exames e documentação em um fluxo coordenado.", icon: Workflow },
  { title: "Plataforma digital", description: "Informações disponíveis para acompanhamento empresarial.", icon: Laptop },
  { title: "Fluxo ágil", description: "Processos organizados para reduzir etapas desnecessárias.", icon: Clock3 },
  { title: "Gestão ocupacional", description: "Dados clínicos conectados às rotinas de SST.", icon: Sparkles },
] as const;

export default function ExamsPage() {
  return (
    <>
      <Section
        density="standard"
        surface="pure"
        aria-labelledby="exams-hero-title"
        className="pt-8 md:pt-10 lg:pt-12"
      >
        <Container size="page">
          <nav aria-label="Breadcrumb">
            <ol className={styles.breadcrumb}>
              <li><Link href={routes.home}>Home</Link></li>
              <li aria-hidden><ArrowRight /></li>
              <li aria-current="page">Exames e Atendimentos</li>
            </ol>
          </nav>

          <Grid
            columns={12}
            gap="xl"
            align="center"
            className="mt-8 md:grid-cols-1 lg:grid-cols-12"
          >
            <div className="min-w-0 lg:col-span-7">
              <Eyebrow line>EXAMES E ATENDIMENTOS</Eyebrow>
              <DisplayTitle
                id="exams-hero-title"
                size="lg"
                className="mt-5 max-w-[15ch]"
              >
                Estrutura clínica completa para uma jornada ocupacional mais simples.
              </DisplayTitle>
              <p className={styles.heroCopy}>
                Consultas, exames complementares e documentação integrados em
                um único ambiente, com equipe especializada e tecnologia para
                atender empresas e trabalhadores com segurança.
              </p>
              <div className={styles.heroActions}>
                <Button href={routes.contact} size="lg">
                  Agendar atendimento
                </Button>
                <Button href="#exames-atendimentos" variant="outline" size="lg">
                  Conhecer os exames
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
                  src={heroExams}
                  alt="Profissional da IF Saúde realizando atendimento clínico ocupacional."
                  priority
                  sizes="(min-width: 1024px) 42vw, calc(100vw - 4rem)"
                  className={styles.heroImage}
                />
                <Surface variant="elevated" padding="sm" className={styles.heroCard}>
                  <span><CheckCircle2 aria-hidden /></span>
                  <div>
                    <strong>Atendimento em uma única estrutura</strong>
                    <p>Mais fluidez entre consulta, exames e documentação.</p>
                  </div>
                </Surface>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="ivory"
        aria-labelledby="single-place-title"
      >
        <Container size="page">
          <Grid columns={12} gap="xl" align="center" className="md:grid-cols-1 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-5">
              <Eyebrow line>ESTRUTURA INTEGRADA</Eyebrow>
              <SectionTitle
                title="Tudo em um único lugar."
                description="A IF Saúde concentra atendimento clínico, exames complementares e gestão das informações ocupacionais em um fluxo coordenado, reduzindo deslocamentos e simplificando a rotina das empresas."
                maxWidth="lg"
                className="mt-4"
                headingProps={{ id: "single-place-title" }}
              />
            </div>

            <div className="min-w-0 lg:col-span-7">
              <div className={styles.integrationMetrics}>
                <Surface variant="default" padding="md">
                  <History aria-hidden />
                  <strong>+1 milhão</strong>
                  <span>de atendimentos, exames e ASOs realizados.</span>
                </Surface>
                <Surface variant="default" padding="md">
                  <BuildingMetricIcon />
                  <strong>Todos os portes</strong>
                  <span>Atendimento alinhado à realidade de cada empresa.</span>
                </Surface>
                <Surface variant="default" padding="md">
                  <Clock3 aria-hidden />
                  <strong>Fluxo coordenado</strong>
                  <span>Etapas integradas para uma jornada mais ágil.</span>
                </Surface>
                <Surface variant="default" padding="md">
                  <MonitorCheck aria-hidden />
                  <strong>Gestão digital</strong>
                  <span>Documentos e informações disponíveis para acompanhamento.</span>
                </Surface>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        id="exames-atendimentos"
        density="standard"
        surface="pure"
        aria-labelledby="clinical-services-title"
      >
        <Container size="page">
          <SectionTitle
            title="Exames e atendimentos."
            description="Uma estrutura preparada para acompanhar diferentes momentos da vida ocupacional."
            maxWidth="lg"
            headingProps={{ id: "clinical-services-title" }}
          />

          <Grid columns={4} gap="md" className={styles.servicesGrid}>
            {clinicalServices.map((service) => {
              const Icon = service.icon;
              return (
                <Surface
                  key={service.title}
                  variant="default"
                  padding="md"
                  className={styles.serviceCard}
                >
                  <span className={styles.serviceIcon}><Icon aria-hidden /></span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>
                        <CheckCircle2 aria-hidden />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Surface>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="mist"
        aria-labelledby="facilities-title"
      >
        <Container size="page">
          <Eyebrow line>INFRAESTRUTURA PRÓPRIA</Eyebrow>
          <SectionTitle
            title="Ambientes preparados para cada etapa do atendimento."
            description="Conheça a estrutura clínica onde cuidado, tecnologia e organização trabalham juntos."
            maxWidth="lg"
            className="mt-4"
            headingProps={{ id: "facilities-title" }}
          />

          <div className={styles.facilitiesGrid}>
            {facilities.map((facility, index) => (
              <article
                className={styles.facilityCard}
                data-featured={index < 2 || undefined}
                key={facility.title}
              >
                <div className={styles.facilityImage}>
                  <Image
                    src={facility.image}
                    alt={`${facility.title} da IF Saúde.`}
                    sizes={index < 2
                      ? "(min-width: 1024px) 46vw, calc(100vw - 4rem)"
                      : "(min-width: 1024px) 30vw, calc(100vw - 4rem)"
                    }
                  />
                </div>
                <div className={styles.facilityContent}>
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="forest"
        aria-labelledby="care-process-title"
      >
        <Container size="page">
          <SectionTitle
            title="Um processo claro do agendamento à entrega."
            description="Cada etapa é conectada para oferecer previsibilidade à empresa e uma experiência tranquila ao trabalhador."
            align="center"
            maxWidth="lg"
            headingProps={{ id: "care-process-title" }}
          />

          <ol className={styles.timeline} aria-label="Processo de atendimento">
            {processSteps.map((step) => {
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
        aria-labelledby="digital-exams-title"
      >
        <Container size="page">
          <Grid columns={12} gap="xl" align="center" className="md:grid-cols-1 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <Image
                src={platformDashboard}
                alt="Dashboard da plataforma digital da IF Saúde em notebook e smartphone."
                sizes="(min-width: 1024px) 54vw, calc(100vw - 4rem)"
                className={styles.platformImage}
              />
            </div>
            <div className="min-w-0 lg:col-span-5">
              <Eyebrow line>PLATAFORMA DIGITAL</Eyebrow>
              <SectionTitle
                title="A jornada clínica continua na gestão das informações."
                description="Os exames realizados se conectam a um ambiente digital que organiza documentos e facilita o acompanhamento ocupacional."
                maxWidth="lg"
                className="mt-4"
                headingProps={{ id: "digital-exams-title" }}
              />
              <ul className={styles.digitalBenefits}>
                {digitalBenefits.map((benefit) => (
                  <li key={benefit}>
                    <CheckCircle2 aria-hidden />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button href={routes.clientPortal}>Acessar o Portal do Cliente</Button>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="ivory"
        aria-labelledby="exams-differentials-title"
      >
        <Container size="page">
          <SectionTitle
            title="Uma estrutura que trabalha de forma integrada."
            description="Diferenciais que tornam a experiência mais organizada para empresas e trabalhadores."
            align="center"
            maxWidth="lg"
            headingProps={{ id: "exams-differentials-title" }}
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
        surface="deep"
        aria-labelledby="exams-cta-title"
      >
        <Container size="content" className="text-center">
          <Eyebrow className="justify-center">PRÓXIMO ATENDIMENTO</Eyebrow>
          <DisplayTitle
            id="exams-cta-title"
            as="h2"
            variant="inverse"
            size="lg"
            className="mx-auto mt-4"
          >
            Cuidado ocupacional com estrutura, clareza e agilidade.
          </DisplayTitle>
          <p className={styles.ctaCopy}>
            Fale com a equipe da IF Saúde para organizar os exames e
            atendimentos da sua empresa.
          </p>
          <div className={styles.ctaActions}>
            <Button href={routes.contact} variant="inverse" size="lg">
              Falar com a IF Saúde
            </Button>
            <Button href={routes.companies} variant="ghost" size="lg">
              Ver soluções para empresas
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

function BuildingMetricIcon() {
  return <FlaskConical aria-hidden />;
}
