"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, History, UsersRound, Workflow } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Surface } from "@/components/surfaces/Surface";

const numberFormatter = new Intl.NumberFormat("pt-BR");
const easeOutQuart = (progress: number) => 1 - (1 - progress) ** 4;

export function InstitutionalIndicators() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);
  const [years, setYears] = useState("25 anos");
  const [appointments, setAppointments] = useState("1 milhão");

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;
        observer.disconnect();

        const startTime = performance.now();
        const yearsDuration = 2400;
        const appointmentsDuration = 3600;

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const yearsProgress = Math.min(elapsed / yearsDuration, 1);
          const appointmentsProgress = Math.min(
            elapsed / appointmentsDuration,
            1,
          );
          const yearsEased = easeOutQuart(yearsProgress);
          const appointmentsEased = easeOutQuart(appointmentsProgress);

          setYears(
            yearsProgress === 1
              ? "25 anos"
              : `${Math.floor(25 * yearsEased)} anos`,
          );
          setAppointments(
            appointmentsProgress === 1
              ? "1 milhão"
              : numberFormatter.format(
                  Math.floor(1_000_000 * appointmentsEased),
                ),
          );

          if (appointmentsProgress < 1) {
            animationFrameRef.current = requestAnimationFrame(animate);
          }
        };

        animationFrameRef.current = requestAnimationFrame(animate);
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <Section
      density="compact"
      aria-labelledby="institutional-indicators-title"
      className="pt-0 pb-16 md:pt-0 md:pb-20"
    >
      <div ref={sectionRef}>
        <Container size="page">
          <h2 id="institutional-indicators-title" className="sr-only">
            Indicadores institucionais da IF Saúde
          </h2>

          <Surface
            variant="muted"
            padding="none"
            className="overflow-hidden border border-[var(--border-default)] shadow-[var(--shadow-sm)]"
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 [&>li]:border-t [&>li]:border-[var(--border-default)] [&>li:first-child]:border-t-0 md:[&>li:nth-child(2)]:border-t-0 md:[&>li:nth-child(even)]:border-l lg:[&>li]:border-t-0 lg:[&>li]:border-l-0 lg:[&>li:not(:first-child)]:border-l">
            <li className="indicator grid min-h-full min-w-0 grid-rows-[auto_auto_1fr] gap-y-3 overflow-hidden p-6 md:p-8">
              <div className="flex items-center gap-2">
                <History
                  aria-hidden
                  className="size-5 shrink-0 text-[var(--theme-accent-text)]"
                />
                <p className="text-sm font-bold text-[var(--theme-text-secondary)]">
                  Mais de
                </p>
              </div>
              <p className="indicator-title whitespace-nowrap text-[length:var(--font-size-2xl)] font-bold leading-[var(--leading-heading)] tracking-[var(--tracking-tight)] text-[var(--theme-text-primary)]">
                <span aria-hidden>{years}</span>
                <span className="sr-only">25 anos</span>
              </p>
              <p className="leading-[var(--leading-body)] text-[var(--theme-text-secondary)]">
                de experiência em saúde ocupacional.
              </p>
            </li>

            <li className="indicator grid min-h-full min-w-0 grid-rows-[auto_auto_1fr] gap-y-3 overflow-hidden p-6 md:p-8">
              <div className="flex items-center gap-2">
                <UsersRound
                  aria-hidden
                  className="size-5 shrink-0 text-[var(--theme-accent-text)]"
                />
                <p className="text-sm font-bold text-[var(--theme-text-secondary)]">
                  Mais de
                </p>
              </div>
              <p className="indicator-title whitespace-nowrap text-[length:var(--font-size-2xl)] font-bold leading-[var(--leading-heading)] tracking-[var(--tracking-tight)] text-[var(--theme-text-primary)]">
                <span aria-hidden>{appointments}</span>
                <span className="sr-only">1 milhão</span>
              </p>
              <p className="leading-[var(--leading-body)] text-[var(--theme-text-secondary)]">
                de atendimentos, exames e ASOs.
              </p>
            </li>

            <li className="indicator grid min-h-full min-w-0 grid-rows-[auto_auto_1fr] gap-y-3 overflow-hidden p-6 md:p-8">
              <div className="flex items-center gap-2">
                <Building2
                  aria-hidden
                  className="size-5 shrink-0 text-[var(--theme-accent-text)]"
                />
                <p className="text-sm font-bold text-[var(--theme-text-secondary)]">
                  Estrutura
                </p>
              </div>
              <p className="indicator-title text-[length:var(--font-size-2xl)] font-bold leading-[var(--leading-heading)] tracking-[var(--tracking-tight)] text-[var(--theme-text-primary)]">
                própria
              </p>
              <p className="leading-[var(--leading-body)] text-[var(--theme-text-secondary)]">
                para consultas e exames complementares.
              </p>
            </li>

            <li className="indicator grid min-h-full min-w-0 grid-rows-[auto_auto_1fr] gap-y-3 overflow-hidden p-6 md:p-8">
              <div className="flex items-center gap-2">
                <Workflow
                  aria-hidden
                  className="size-5 shrink-0 text-[var(--theme-accent-text)]"
                />
                <p className="text-sm font-bold text-[var(--theme-text-secondary)]">
                  Gestão
                </p>
              </div>
              <p className="indicator-title text-[length:var(--font-size-2xl)] font-bold leading-[var(--leading-heading)] tracking-[var(--tracking-tight)] text-[var(--theme-text-primary)]">
                completa
              </p>
              <p className="leading-[var(--leading-body)] text-[var(--theme-text-secondary)]">
                de Medicina do Trabalho, Segurança e eSocial.
              </p>
            </li>
            </ul>
          </Surface>
        </Container>
      </div>
      <style jsx>{`
        .indicator-title {
          transform-origin: left center;
          transition: transform var(--duration-normal) var(--ease-standard);
        }

        @media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
          .indicator:hover .indicator-title {
            transform: scale(1.04);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .indicator-title {
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </Section>
  );
}
