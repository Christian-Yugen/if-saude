import Image from "next/image";
import platformDashboard from "../../../public/images/home/platform/platform-dashboard.png";
import {
  Activity,
  CircleCheck,
  DoorOpen,
  FileCheck2,
  Files,
  History,
  LayoutDashboard,
  Send,
  Stethoscope,
  UserRoundPlus,
} from "lucide-react";
import { Button } from "@/components/actions/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { routes } from "@/config/routes";
import styles from "./IntegratedJourney.module.css";

const journeySteps = [
  {
    title: "Chegada",
    description: "Acolhimento e orientação inicial.",
    icon: DoorOpen,
  },
  {
    title: "Cadastro",
    description: "Informações organizadas com segurança.",
    icon: UserRoundPlus,
  },
  {
    title: "Avaliação",
    description: "Análise clínica direcionada à função.",
    icon: Stethoscope,
  },
  {
    title: "Exames",
    description: "Procedimentos realizados em uma só jornada.",
    icon: Activity,
  },
  {
    title: "Documentação",
    description: "Registros e documentos centralizados.",
    icon: FileCheck2,
  },
  {
    title: "Conclusão",
    description: "Resultado disponível para acompanhamento.",
    icon: CircleCheck,
  },
] as const;

const platformBenefits = [
  {
    title: "Acompanhamento integrado",
    description: "Visão contínua da jornada ocupacional.",
    icon: LayoutDashboard,
  },
  {
    title: "Histórico ocupacional",
    description: "Informações organizadas ao longo do tempo.",
    icon: History,
  },
  {
    title: "Documentos centralizados",
    description: "Registros importantes reunidos em um só ambiente.",
    icon: Files,
  },
  {
    title: "Gestão de eventos",
    description: "Mais clareza no acompanhamento das rotinas de SST.",
    icon: Send,
  },
] as const;

export function IntegratedJourney() {
  return (
    <Section
      density="standard"
      aria-labelledby="integrated-journey-title"
      className="bg-[var(--surface-muted)] pt-0"
    >
      <Container size="page">
        <div className={styles.panels}>
          <article className={`${styles.panel} ${styles.journeyPanel}`}>
            <div className={styles.journeyIntroduction}>
              <Eyebrow className={styles.darkEyebrow}>JORNADA INTEGRADA</Eyebrow>
              <h2 id="integrated-journey-title" className={styles.journeyTitle}>
                Uma experiência coordenada do início à conclusão.
              </h2>
              <p className={styles.journeyCopy}>
                Cada etapa do atendimento se conecta à próxima para oferecer
                mais clareza ao trabalhador e mais segurança à empresa.
              </p>
            </div>

            <ol className={styles.timeline} aria-label="Etapas da jornada ocupacional">
              {journeySteps.map((step) => {
                const Icon = step.icon;

                return (
                  <li className={styles.timelineStep} key={step.title}>
                    <span className={styles.timelineIcon}>
                      <Icon aria-hidden />
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </li>
                );
              })}
            </ol>
          </article>

          <div className={styles.connector} aria-hidden>
            <span />
          </div>

          <article className={`${styles.panel} ${styles.platformPanel}`}>
            <div className={styles.mockup}>
              <Image
                src={platformDashboard}
                alt="Dashboard da plataforma digital da IF Saúde exibido em notebook e smartphone, representando a gestão integrada da saúde ocupacional."
                sizes="(min-width: 1024px) 52vw, calc(100vw - 4rem)"
                className={styles.platformImage}
              />
            </div>

            <div className={styles.platformContent}>
              <Eyebrow>PLATAFORMA DIGITAL</Eyebrow>
              <h2>Informação organizada para decisões mais seguras.</h2>
              <p>
                O atendimento realizado pela IF Saúde continua em um ambiente
                digital que aproxima dados, documentos e acompanhamento.
              </p>

              <ul className={styles.benefits}>
                {platformBenefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <li key={benefit.title}>
                      <span>
                        <Icon aria-hidden />
                      </span>
                      <div>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <Button href={routes.clientPortal}>Acessar o Portal do Cliente</Button>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
