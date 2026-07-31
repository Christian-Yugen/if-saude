import type { Metadata } from "next";
import { ArrowRight, BookOpen, FileCheck2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/actions/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { routes } from "@/config/routes";

export const metadata: Metadata = {
  title: "Conteúdos | IF Saúde",
  description:
    "Informação técnica sobre saúde ocupacional, segurança do trabalho e gestão do eSocial.",
};

const topics = [
  {
    title: "Saúde ocupacional",
    description:
      "Orientações para promover cuidado contínuo, prevenção e qualidade de vida no trabalho.",
    icon: BookOpen,
  },
  {
    title: "Segurança do trabalho",
    description:
      "Boas práticas para reconhecer riscos, fortalecer a prevenção e proteger equipes.",
    icon: ShieldCheck,
  },
  {
    title: "eSocial e conformidade",
    description:
      "Informações para organizar documentos, eventos e rotinas de SST com mais segurança.",
    icon: FileCheck2,
  },
] as const;

export default function ContentsPage() {
  return (
    <>
      <Section density="cinematic" surface="ivory">
        <Container size="content">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--theme-accent-text)]">
            Conhecimento que protege
          </p>
          <h1 className="mt-5 max-w-4xl font-[var(--font-editorial)] text-5xl font-medium leading-[1.04] text-[var(--theme-text-primary)] md:text-7xl">
            Conteúdo técnico para decisões mais seguras.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--theme-text-secondary)] md:text-xl">
            Estamos preparando artigos e materiais sobre saúde ocupacional,
            segurança do trabalho e eSocial para apoiar empresas e trabalhadores.
          </p>
          <div className="mt-9">
            <Button href={routes.contact} size="lg" iconAfter={<ArrowRight aria-hidden className="size-5" />}>
              Falar com um especialista
            </Button>
          </div>
        </Container>
      </Section>

      <Section density="spacious" surface="pure">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {topics.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[var(--radius-xl)] border border-[var(--theme-border)] bg-[var(--theme-surface-primary)] p-7 md:p-8"
              >
                <Icon aria-hidden className="size-7 text-[var(--theme-accent-text)]" />
                <h2 className="mt-6 text-xl font-extrabold text-[var(--theme-text-primary)]">
                  {title}
                </h2>
                <p className="mt-3 leading-relaxed text-[var(--theme-text-secondary)]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
