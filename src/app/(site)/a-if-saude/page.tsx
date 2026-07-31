import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import {
  Activity,
  CheckCircle2,
  Building2,
  HeartHandshake,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import heroImage from "../../../../public/images/pages/about/hero-if-saude.png";
import leadershipImage from "../../../../public/images/about/dr-issam-fares-junior.png";
import teamImage from "../../../../public/images/about/integrated-team.png";
import whoWeAreImage from "../../../../public/images/about/who-we-are-banner.png";
import receptionImage from "../../../../public/images/facilities/reception.png";
import consultationImage from "../../../../public/images/facilities/medical-consultation.png";
import audiometryImage from "../../../../public/images/facilities/audiometry.png";
import laboratoryImage from "../../../../public/images/facilities/laboratory-collection.png";
import spirometryImage from "../../../../public/images/facilities/spirometry.png";
import electrocardiogramImage from "../../../../public/images/facilities/electrocardiogram.png";
import { Button } from "@/components/actions/Button";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { PageAtmosphere } from "@/components/layout/PageAtmosphere";
import { Section } from "@/components/layout/Section";
import { DisplayTitle } from "@/components/typography/DisplayTitle";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { routes } from "@/config/routes";
import styles from "./AboutPage.module.css";

export const metadata: Metadata = {
  title: "A IF Saúde | História, estrutura e liderança técnica",
  description:
    "Conheça a trajetória, a equipe integrada, a liderança técnica e a estrutura própria da IF Saúde.",
};

const heroIndicators = [
  { title: "+25 anos", description: "de atuação contínua" },
  { title: "+1 milhão", description: "de atendimentos realizados" },
  { title: "Estrutura própria", description: "para consultas e exames ocupacionais" },
  { title: "Gestão integrada", description: "em Medicina, Segurança e eSocial" },
] as const;

const identityPillars = [
  {
    title: "Nossa missão",
    description:
      "Promover saúde, segurança e qualidade de vida no trabalho por meio de soluções integradas que protejam pessoas, reduzam riscos e apoiem o desenvolvimento sustentável das empresas.",
    icon: HeartHandshake,
  },
  {
    title: "Nossa visão",
    description:
      "Ser reconhecida pela excelência em saúde ocupacional, pela solidez de sua atuação técnica e pela capacidade de evoluir junto às necessidades das empresas e dos trabalhadores.",
    icon: Sparkles,
  },
] as const;

const values = [
  {
    title: "Ética e transparência",
    description:
      "Relações claras, orientação responsável e respeito às informações confiadas à empresa.",
    icon: ShieldCheck,
  },
  {
    title: "Compromisso com a vida",
    description:
      "O cuidado com as pessoas orienta cada atendimento e cada decisão técnica.",
    icon: HeartHandshake,
  },
  {
    title: "Excelência técnica",
    description:
      "Conhecimento, método e atualização contínua aplicados à realidade de cada operação.",
    icon: Activity,
  },
  {
    title: "Inovação com propósito",
    description:
      "Tecnologia utilizada para organizar processos, reduzir incertezas e melhorar a experiência.",
    icon: Lightbulb,
  },
  {
    title: "Respeito às pessoas",
    description:
      "Atendimento próximo, escuta atenta e consideração por trabalhadores, gestores e parceiros.",
    icon: UsersRound,
  },
] as const;

const history = [
  {
    date: "1974",
    title: "Um legado médico começa",
    description:
      "O Dr. Issam Fares estabelece-se em Três Lagoas, iniciando uma trajetória dedicada à medicina e à comunidade local.",
  },
  {
    date: "1998",
    title: "Formação de uma nova geração",
    description:
      "O Dr. Issam Fares Junior gradua-se em Medicina pela UNIFENAS e dá continuidade à vocação familiar com foco em saúde ocupacional.",
  },
  {
    date: "2000",
    title: "Nasce a IF Saúde",
    description:
      "A empresa inicia sua atuação em Medicina do Trabalho, unindo atendimento clínico, prevenção e responsabilidade técnica.",
  },
  {
    date: "2007–2018",
    title: "Grandes projetos industriais",
    description:
      "A equipe participa da gestão de saúde e de ambulatórios em importantes obras e plantas industriais de diferentes regiões do Brasil.",
  },
  {
    date: "Uma nova etapa",
    title: "Integração e modernização",
    description:
      "A IF Saúde amplia sua estrutura e conecta saúde, segurança, documentos e eSocial em uma mesma lógica de gestão.",
  },
  {
    date: "Hoje",
    title: "Escala, presença e continuidade",
    description:
      "Com mais de 25 anos de atuação e mais de 1 milhão de atendimentos, a IF Saúde mantém sua presença em Três Lagoas e continua evoluindo ao lado das empresas e dos trabalhadores.",
  },
] as const;

const credentials = [
  {
    title: "Formação e especialidades",
    items: [
      "Medicina — UNIFENAS, 1998",
      "Medicina do Trabalho",
      "Medicina do Tráfego",
      "Perícias Médicas",
      "Administração Hospitalar",
    ],
  },
  {
    title: "Experiência pericial",
    items: [
      "Atuação como perito da Justiça do Trabalho",
      "Atuação como perito da Justiça Federal",
      "Dez anos no Instituto de Previdência Municipal de Ilha Solteira",
    ],
  },
  {
    title: "Gestão de grandes operações",
    description:
      "Responsabilidade médica e gestão de ambulatórios em projetos e unidades industriais ligados a empresas como Votorantim, Eldorado Brasil, Petrobras/UFN III, Fibria, International Paper, Rigesa, OSX e CMPC.",
  },
  {
    title: "Atuação contínua",
    items: [
      "Liderança técnica da IF Saúde",
      "Medicina do Trabalho em SESMT",
      "Consultoria em saúde ocupacional",
      "Apoio técnico a empresas de diferentes portes",
    ],
  },
] as const;

const teamDisciplines = [
  "Medicina",
  "Enfermagem",
  "Segurança do Trabalho",
  "Atendimento",
  "Tecnologia e gestão",
] as const;

const facilities = [
  {
    title: "Recepção",
    description: "Acolhimento organizado desde a chegada.",
    image: receptionImage,
    alt: "Recepção da unidade da IF Saúde",
  },
  {
    title: "Consultórios",
    description: "Ambientes preparados para avaliações clínicas.",
    image: consultationImage,
    alt: "Consultório médico da IF Saúde",
  },
  {
    title: "Audiometria",
    description: "Estrutura dedicada à avaliação auditiva ocupacional.",
    image: audiometryImage,
    alt: "Sala de audiometria da IF Saúde",
  },
  {
    title: "Laboratório",
    description: "Coleta integrada à jornada de atendimento.",
    image: laboratoryImage,
    alt: "Ambiente de coleta laboratorial da IF Saúde",
  },
  {
    title: "Espirometria",
    description: "Avaliações respiratórias realizadas na própria estrutura.",
    image: spirometryImage,
    alt: "Sala de espirometria da IF Saúde",
  },
  {
    title: "ECG",
    description: "Tecnologia aplicada aos exames complementares.",
    image: electrocardiogramImage,
    alt: "Sala de eletrocardiograma da IF Saúde",
  },
] as const;

const workSteps = [
  {
    title: "Compreendemos",
    description:
      "Conhecemos a operação, as pessoas, os riscos e as responsabilidades envolvidas.",
  },
  {
    title: "Planejamos",
    description:
      "Organizamos prioridades, requisitos técnicos, documentos e etapas de execução.",
  },
  {
    title: "Executamos",
    description:
      "Realizamos atendimentos, exames, avaliações e entregas com método e rastreabilidade.",
  },
  {
    title: "Monitoramos",
    description:
      "Acompanhamos prazos, informações, pendências e mudanças que exigem atenção.",
  },
  {
    title: "Mantemos continuidade",
    description:
      "Preservamos o histórico e apoiamos a evolução da gestão ocupacional ao longo do tempo.",
  },
] as const;

const differentials = [
  {
    title: "Experiência",
    description:
      "Mais de duas décadas de atuação aplicadas a contextos empresariais de diferentes portes e complexidades.",
    icon: Activity,
  },
  {
    title: "Estrutura integrada",
    description:
      "Atendimento, exames, documentos e gestão reunidos em uma jornada mais simples e eficiente.",
    icon: Building2,
  },
  {
    title: "Equipe multidisciplinar",
    description:
      "Diferentes especialidades trabalhando de forma coordenada e com responsabilidade identificável.",
    icon: UsersRound,
  },
  {
    title: "Compromisso contínuo",
    description:
      "Proximidade, acompanhamento e orientação que não terminam com a entrega de um documento.",
    icon: Network,
  },
] as const;

export default function AboutPage() {
  return (
    <PageAtmosphere variant="heritage" decorative={false}>
      <Section
        density="standard"
        surface="pure"
        aria-labelledby="about-hero-title"
        className="pt-10 md:pt-12"
      >
        <Container size="page">
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <ol>
              <li><a href={routes.home}>Home</a></li>
              <li aria-current="page">A IF Saúde</li>
            </ol>
          </nav>
          <Grid
            columns={12}
            gap="xl"
            align="center"
            className="mt-7 md:grid-cols-1 lg:grid-cols-12"
          >
            <div className="min-w-0 lg:col-span-6">
              <Eyebrow line>A IF Saúde</Eyebrow>
              <DisplayTitle
                id="about-hero-title"
                size="lg"
                className="mt-5 max-w-[15ch]"
              >
                Mais de 25 anos construindo uma história de{" "}
                <span className={styles.titleAccent}>
                  cuidado, responsabilidade e presença.
                </span>
              </DisplayTitle>
              <p className={styles.heroCopy}>
                A IF Saúde integra Medicina do Trabalho, Segurança Ocupacional,
                exames, consultoria e tecnologia para proteger pessoas, apoiar
                decisões empresariais e dar continuidade às operações com
                responsabilidade.
              </p>
              <div className={styles.heroActions}>
                <Button href="#nossa-historia" size="lg">
                  Conhecer nossa história
                </Button>
                <Button href={routes.contact} variant="outline" size="lg">
                  Falar com a IF Saúde
                </Button>
              </div>
            </div>
            <div className="min-w-0 lg:col-span-6">
              <div className={styles.heroVisual}>
                <Image
                  src={heroImage}
                  alt="Equipe da IF Saúde reunida em ambiente institucional"
                  priority
                  sizes="(min-width: 1024px) 48vw, calc(100vw - 4rem)"
                />
              </div>
            </div>
          </Grid>
          <dl className={styles.heroIndicators}>
            {heroIndicators.map((indicator) => (
              <div key={indicator.title}>
                <dt>{indicator.title}</dt>
                <dd>{indicator.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="mist"
        aria-labelledby="who-we-are-title"
      >
        <Container size="page">
          <Grid columns={12} gap="xl" className="md:grid-cols-1 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-5">
              <Eyebrow line>Quem somos</Eyebrow>
              <SectionTitle
                title="Experiência médica, estrutura própria e gestão integrada para cuidar de pessoas e apoiar empresas."
                maxWidth="lg"
                className="mt-4"
                headingProps={{ id: "who-we-are-title" }}
              />
              <div className={styles.whoWeAreCopy}>
                <p>
                  Há mais de 25 anos, a IF Saúde atua em Três Lagoas conectando
                  Medicina do Trabalho, Segurança Ocupacional, exames
                  complementares, consultoria técnica e gestão digital.
                </p>
                <p>
                  Nossa estrutura foi desenvolvida para atender desde empresas
                  locais até grandes operações industriais, reunindo cuidado
                  clínico, precisão documental e acompanhamento contínuo em uma
                  mesma jornada.
                </p>
              </div>
            </div>
            <div className="min-w-0 lg:col-span-7">
              <div className={styles.whoWeAreBanner}>
                <Image
                  src={whoWeAreImage}
                  alt="Profissionais da IF Saúde integrando Medicina do Trabalho e Segurança Ocupacional"
                  sizes="(min-width: 1024px) 58vw, calc(100vw - 4rem)"
                />
              </div>
              <div className={styles.identityGrid}>
                {identityPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article key={pillar.title} className={styles.identityPillar}>
                      <span><Icon aria-hidden /></span>
                      <h3>{pillar.title}</h3>
                      <div>{pillar.description}</div>
                    </article>
                  );
                })}
              </div>
            </div>
          </Grid>
          <div className={styles.valuesPanel}>
            <h3>Nossos valores</h3>
            <ul>
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <li key={value.title}>
                    <Icon aria-hidden />
                    <div>
                      <strong>{value.title}</strong>
                      <span>{value.description}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </Section>

      <Section
        id="nossa-historia"
        density="standard"
        surface="ivory"
        aria-labelledby="history-title"
      >
        <Container size="page">
          <Eyebrow line>Nossa história</Eyebrow>
          <SectionTitle
            title="Uma trajetória construída junto com Três Lagoas e sua transformação industrial."
            description="A história da IF Saúde acompanha o desenvolvimento da medicina e o crescimento empresarial da região. De uma tradição médica iniciada há mais de cinco décadas nasceu uma operação especializada, preparada para atender trabalhadores, empresas locais e grandes projetos industriais."
            maxWidth="lg"
            className="mt-4"
            headingProps={{ id: "history-title" }}
          />
          <ol className={styles.history} aria-label="Trajetória da IF Saúde">
            {history.map((item) => (
              <li key={item.title}>
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="pure"
        aria-labelledby="leadership-title"
      >
        <Container size="page">
          <div className={styles.leadershipOpening}>
            <div className={styles.leadershipPortrait}>
              <EditorialImage
                src={leadershipImage}
                alt="Dr. Issam Fares Junior, diretor técnico médico da IF Saúde, em seu consultório"
                className={styles.leadershipImage}
              />
            </div>
            <div className={styles.leadershipIdentity}>
              <Eyebrow line>Liderança técnica</Eyebrow>
              <SectionTitle
                title="Experiência médica aplicada às decisões que protegem pessoas e empresas."
                maxWidth="lg"
                className="mt-4"
                headingProps={{ id: "leadership-title" }}
              />
              <div className={styles.leaderIdentity}>
                <strong>Dr. Issam Fares Junior</strong>
                <span>CRM-MS 3744</span>
                <small>Diretor Técnico Médico</small>
              </div>
            </div>
          </div>
          <div className={styles.credentials}>
            {credentials.map((credential) => (
              <section key={credential.title}>
                <h3>{credential.title}</h3>
                {"items" in credential ? (
                  <ul>
                    {credential.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : (
                  <p>{credential.description}</p>
                )}
              </section>
            ))}
            <section className={styles.continuedEducation}>
              <h3>Formação continuada</h3>
              <p>
                Atualização permanente em áreas relacionadas à saúde,
                prevenção, metabolismo e cuidado integral.
              </p>
              <ul>
                <li>Nutrologia</li>
                <li>Medicina Endocanabinoide</li>
                <li>Tricologia</li>
              </ul>
            </section>
          </div>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="sage"
        aria-labelledby="team-title"
      >
        <Container size="page">
          <Grid
            columns={12}
            gap="xl"
            align="center"
            className="md:grid-cols-1 lg:grid-cols-12"
          >
            <div className="min-w-0 lg:col-span-5">
              <Eyebrow line>Equipe integrada</Eyebrow>
              <SectionTitle
                title="Uma equipe multidisciplinar para transformar responsabilidades diferentes em uma operação integrada."
                description="Médicos, profissionais de enfermagem, especialistas em Segurança do Trabalho, atendimento e tecnologia atuam de forma coordenada para acompanhar cada etapa — do primeiro contato à gestão contínua das informações ocupacionais."
                maxWidth="lg"
                className="mt-4"
                headingProps={{ id: "team-title" }}
              />
              <ul className={styles.teamDisciplines}>
                {teamDisciplines.map((discipline) => (
                  <li key={discipline}><CheckCircle2 aria-hidden />{discipline}</li>
                ))}
              </ul>
            </div>
            <div className="min-w-0 lg:col-span-7">
              <EditorialImage
                src={teamImage}
                alt="Equipe multidisciplinar representando a atuação integrada da IF Saúde"
                className={styles.teamImage}
              />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="ivory"
        aria-labelledby="facilities-title"
      >
        <Container size="page">
          <Eyebrow line>Nossa estrutura</Eyebrow>
          <SectionTitle
            title="Estrutura própria para uma jornada de atendimento mais ágil e integrada."
            description="Em uma única unidade, a IF Saúde reúne atendimento, avaliação clínica e exames complementares. Essa centralização reduz deslocamentos, simplifica o fluxo e contribui para que o trabalhador retorne às suas atividades no menor tempo possível."
            maxWidth="lg"
            className="mt-4"
            headingProps={{ id: "facilities-title" }}
          />
          <div className={styles.facilities}>
            {facilities.map((facility, index) => (
              <figure
                key={facility.title}
                className={index < 2 ? styles.facilityFeatured : undefined}
              >
                <Image
                  src={facility.image}
                  alt={facility.alt}
                  sizes={
                    index < 2
                      ? "(min-width: 768px) 50vw, calc(100vw - 3rem)"
                      : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, calc(100vw - 3rem)"
                  }
                />
                <figcaption>
                  <strong>{facility.title}</strong>
                  <span>{facility.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="emerald"
        aria-labelledby="work-title"
      >
        <Container size="page">
          <Eyebrow className="justify-center">Como trabalhamos</Eyebrow>
          <SectionTitle
            title="Uma presença que acompanha toda a operação."
            description="Nosso trabalho começa pela compreensão do contexto da empresa e continua depois de cada entrega."
            align="center"
            maxWidth="lg"
            className="mt-4"
            headingProps={{ id: "work-title" }}
          />
          <ol className={styles.workProcess} aria-label="Como a IF Saúde trabalha">
            {workSteps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="mist"
        aria-labelledby="differentials-title"
      >
        <Container size="page">
          <Eyebrow line>O que nos orienta</Eyebrow>
          <SectionTitle
            title="Quatro fundamentos que orientam nossa forma de trabalhar."
            maxWidth="lg"
            className="mt-4"
            headingProps={{ id: "differentials-title" }}
          />
          <Grid columns={4} gap="md" className="mt-10">
            {differentials.map((differential) => {
              const Icon = differential.icon;
              return (
                <article key={differential.title} className={styles.differential}>
                  <span><Icon aria-hidden /></span>
                  <h3>{differential.title}</h3>
                  <p>{differential.description}</p>
                </article>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Section
        density="standard"
        surface="deep"
        aria-labelledby="about-cta-title"
      >
        <Container size="content" className="text-center">
          <Eyebrow className="justify-center">IF Saúde</Eyebrow>
          <DisplayTitle
            id="about-cta-title"
            as="h2"
            variant="inverse"
            size="lg"
            className="mx-auto mt-4"
          >
            Cuidado próximo. Estrutura completa. Responsabilidade em cada etapa.
          </DisplayTitle>
          <p className={styles.ctaCopy}>
            Conheça uma trajetória construída com experiência médica, presença
            regional e compromisso contínuo com trabalhadores e empresas.
          </p>
          <div className={styles.ctaActions}>
            <Button href={routes.contact} variant="inverse" size="lg">
              Falar com a IF Saúde
            </Button>
            <Button href={routes.companies} variant="ghost" size="lg">
              Conhecer nossas soluções
            </Button>
          </div>
        </Container>
      </Section>
    </PageAtmosphere>
  );
}

type EditorialImageProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
};

function EditorialImage({ src, alt, className }: EditorialImageProps) {
  return (
    <div className={`${styles.editorialImage} ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        sizes="(min-width: 1024px) 52vw, calc(100vw - 4rem)"
      />
    </div>
  );
}
