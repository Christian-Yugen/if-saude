"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Building2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/actions/Button";
import { TextLink } from "@/components/actions/TextLink";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { routes } from "@/config/routes";
import styles from "./EcosystemSolutions.module.css";

type ServiceVariant =
  | "medicine"
  | "exams"
  | "safety"
  | "esocial"
  | "consulting"
  | "ambulatory";

type EcosystemService = {
  id: string;
  title: string;
  benefit: string;
  highlights: readonly string[];
  image: string;
  alt: string;
  href: string;
  icon: LucideIcon;
  variant: ServiceVariant;
};

const serviceRows: readonly (readonly EcosystemService[])[] = [
  [
    {
      id: "medicina-do-trabalho",
      title: "Medicina do Trabalho",
      benefit:
        "Atenção médica completa para promover saúde e prevenir riscos.",
      highlights: ["ASOs", "PCMSO", "Gestão de absenteísmo"],
      image: "/images/home/ecosystem/medicina-do-trabalho.png",
      alt: "Atendimento de Medicina do Trabalho entre médica e trabalhador.",
      href: routes.companies,
      icon: HeartPulse,
      variant: "medicine",
    },
    {
      id: "exames-complementares",
      title: "Exames Complementares",
      benefit:
        "Precisão diagnóstica que apoia decisões seguras e ágeis para sua empresa.",
      highlights: [
        "Exames laboratoriais",
        "Exames de diagnóstico",
        "Exames funcionais",
      ],
      image: "/images/home/ecosystem/exames-complementares.png",
      alt: "Profissional realizando exames complementares com equipamento laboratorial.",
      href: routes.exams,
      icon: Activity,
      variant: "exams",
    },
    {
      id: "seguranca-do-trabalho",
      title: "Segurança do Trabalho",
      benefit:
        "Prevenção inteligente e conformidade para ambientes mais seguros.",
      highlights: ["PGR", "LTCAT", "Laudos técnicos"],
      image: "/images/home/ecosystem/seguranca-do-trabalho.png",
      alt: "Profissional de Segurança do Trabalho realizando inspeção em ambiente industrial.",
      href: routes.safety,
      icon: ShieldCheck,
      variant: "safety",
    },
  ],
  [
    {
      id: "gestao-esocial",
      title: "Gestão de eSocial",
      benefit:
        "Envio e gestão de informações de SST com mais precisão e eficiência.",
      highlights: ["S-2210", "S-2220", "S-2240"],
      image: "/images/home/ecosystem/gestao-esocial.png",
      alt: "Profissional utilizando sistema digital para gestão de eventos de SST no eSocial.",
      href: routes.esocial,
      icon: Workflow,
      variant: "esocial",
    },
    {
      id: "pericias-consultoria",
      title: "Perícias e Consultoria",
      benefit:
        "Suporte técnico especializado para decisões justas, defensáveis e alinhadas à legislação.",
      highlights: [
        "Perícias médicas",
        "Assistência técnica",
        "Auditoria documental",
      ],
      image: "/images/home/ecosystem/pericias-consultoria.png",
      alt: "Especialista analisando laudos e orientando representante de uma empresa.",
      href: routes.companies,
      icon: Sparkles,
      variant: "consulting",
    },
    {
      id: "ambulatorios-in-company",
      title: "Ambulatórios In Company",
      benefit:
        "Cuidado próximo, contínuo e personalizado para promover saúde e bem-estar no ambiente de trabalho.",
      highlights: [
        "Gestão médica",
        "Equipes dedicadas",
        "Atendimento no local",
      ],
      image: "/images/home/ecosystem/ambulatorios-in-company.png",
      alt: "Profissional de saúde atendendo trabalhador em ambulatório corporativo.",
      href: routes.companies,
      icon: Building2,
      variant: "ambulatory",
    },
  ],
] as const;

function useDesktopLayout() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 64rem)");
    const update = () => setIsDesktop(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export function EcosystemSolutions() {
  const isDesktop = useDesktopLayout();
  const [activeByRow, setActiveByRow] = useState([
    "medicina-do-trabalho",
    "gestao-esocial",
  ]);
  const [mobileActive, setMobileActive] = useState("medicina-do-trabalho");
  const intentTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearIntent = () => {
    if (intentTimer.current !== null) {
      clearTimeout(intentTimer.current);
      intentTimer.current = null;
    }
  };

  const activate = (service: EcosystemService, rowIndex: number) => {
    clearIntent();

    if (isDesktop) {
      setActiveByRow((current) =>
        current.map((id, index) => (index === rowIndex ? service.id : id)),
      );
      return;
    }

    setMobileActive(service.id);
  };

  const scheduleActivation = (
    service: EcosystemService,
    rowIndex: number,
  ) => {
    if (!isDesktop) return;

    clearIntent();
    intentTimer.current = setTimeout(() => {
      activate(service, rowIndex);
    }, 150);
  };

  useEffect(() => clearIntent, []);

  return (
    <Section
      density="standard"
      surface="mist"
      aria-labelledby="ecosystem-solutions-title"
      className="pt-10 pb-14 md:pt-12 md:pb-20"
    >
      <Container size="page">
        <Eyebrow line className="mx-auto w-fit">
          NOSSO ECOSSISTEMA
        </Eyebrow>
        <SectionTitle
          title="Tudo o que sua empresa precisa. Em um só parceiro."
          description="Da avaliação clínica à gestão digital das informações do SST, a IF Saúde conecta todas as etapas da saúde ocupacional."
          align="center"
          maxWidth="lg"
          className="mt-4 max-w-3xl [&>p]:max-w-2xl"
          headingProps={{ id: "ecosystem-solutions-title" }}
        />

        <div className={styles.rows}>
          {serviceRows.map((row, rowIndex) => (
            <div className={styles.row} key={rowIndex}>
              {row.map((service) => {
                const isActive = isDesktop
                  ? activeByRow[rowIndex] === service.id
                  : mobileActive === service.id;
                const Icon = service.icon;
                const panelId = `${service.id}-details`;
                const triggerId = `${service.id}-trigger`;

                return (
                  <article
                    key={service.id}
                    className={styles.card}
                    data-active={isActive}
                    data-variant={service.variant}
                    onMouseEnter={() =>
                      scheduleActivation(service, rowIndex)
                    }
                    onMouseLeave={clearIntent}
                  >
                    {isActive && (
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(min-width: 1024px) 52vw, calc(100vw - 2.5rem)"
                        className={styles.image}
                      />
                    )}
                    <div className={styles.overlay} aria-hidden />

                    <div className={styles.content}>
                      <button
                        id={triggerId}
                        type="button"
                        className={styles.trigger}
                        aria-expanded={isActive}
                        aria-controls={panelId}
                        onClick={() => activate(service, rowIndex)}
                        onFocus={() => {
                          if (isDesktop) activate(service, rowIndex);
                        }}
                      >
                        <span className={styles.icon}>
                          <Icon aria-hidden />
                        </span>
                        <span className={styles.title}>{service.title}</span>
                      </button>

                      <p className={styles.benefit}>{service.benefit}</p>

                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        hidden={!isActive}
                        className={styles.details}
                      >
                        <ul className={styles.chips}>
                          {service.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                          <li className={styles.moreChip}>+ outros</li>
                        </ul>
                      </div>

                      <div className={styles.action}>
                        {isActive ? (
                          <Button href={service.href} variant="inverse" size="sm">
                            Saiba mais
                          </Button>
                        ) : (
                          <TextLink href={service.href}>Saiba mais</TextLink>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
