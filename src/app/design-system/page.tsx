import type { Metadata } from "next";
import {
  Activity,
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/actions/Button";
import { TextLink } from "@/components/actions/TextLink";
import { StatusBadge } from "@/components/data-display/StatusBadge";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { PageAtmosphere } from "@/components/layout/PageAtmosphere";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { NavLink } from "@/components/navigation/NavLink";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { GlassPanel } from "@/components/surfaces/GlassPanel";
import { MetricPanel } from "@/components/surfaces/MetricPanel";
import { Surface } from "@/components/surfaces/Surface";
import { DisplayTitle } from "@/components/typography/DisplayTitle";
import { EditorialQuote } from "@/components/typography/EditorialQuote";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { mainNavigation } from "@/config/navigation";
import type { PageAtmosphereVariant } from "@/types/theme";

export const metadata: Metadata = {
  title: "Design System",
  description: "Biblioteca visual e componentes fundamentais do website da IF Saúde.",
};

const institutionalColors = [
  ["950", "--if-green-950"],
  ["900", "--if-green-900"],
  ["850", "--if-green-850"],
  ["800", "--if-green-800"],
  ["700", "--if-green-700"],
  ["600", "--if-green-600"],
  ["500", "--if-green-500"],
  ["400", "--if-green-400"],
  ["300", "--if-green-300"],
  ["200", "--if-green-200"],
  ["100", "--if-green-100"],
  ["50", "--if-green-50"],
] as const;

const neutralColors = [
  ["Ink 950", "--if-ink-950"],
  ["Ink 800", "--if-ink-800"],
  ["Ink 600", "--if-ink-600"],
  ["Ink 500", "--if-ink-500"],
  ["Ivory", "--if-ivory"],
  ["Warm 100", "--if-warm-100"],
  ["Warm 200", "--if-warm-200"],
  ["White", "--if-white"],
] as const;

const semanticColors = [
  ["Sucesso", "--semantic-success"],
  ["Atenção", "--semantic-warning"],
  ["Perigo", "--semantic-danger"],
  ["Informação", "--semantic-info"],
] as const;

const atmospheres: Array<[PageAtmosphereVariant, string]> = [
  ["human", "Humana"],
  ["corporate", "Corporativa"],
  ["clinical", "Clínica"],
  ["industrial", "Industrial"],
  ["digital", "Digital"],
  ["heritage", "Histórica"],
  ["editorial", "Editorial"],
  ["concierge", "Concierge"],
];

const sectionClass = "border-t border-[var(--border-subtle)]";

const borderSamples = [
  ["subtle", "border-[var(--border-subtle)]"],
  ["default", "border-[var(--border-default)]"],
  ["strong", "border-[var(--border-strong)]"],
] as const;

const shadowSamples = [
  ["xs", "shadow-[var(--shadow-xs)]"],
  ["sm", "shadow-[var(--shadow-sm)]"],
  ["md", "shadow-[var(--shadow-md)]"],
  ["lg", "shadow-[var(--shadow-lg)]"],
] as const;

const radiusSamples = [
  ["xs", "rounded-[var(--radius-xs)]"],
  ["sm", "rounded-[var(--radius-sm)]"],
  ["md", "rounded-[var(--radius-md)]"],
  ["lg", "rounded-[var(--radius-lg)]"],
  ["xl", "rounded-[var(--radius-xl)]"],
] as const;

export default function DesignSystemPage() {
  return (
    <PageShell as="main" id="main-content" tabIndex={-1} className="bg-[var(--surface-page)]">
      <PageAtmosphere variant="human">
        <Section density="spacious">
          <Container>
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between gap-6">
                <Eyebrow line>IF Saúde · Sistema visual 01</Eyebrow>
                <StatusBadge state="info">Documentação técnica</StatusBadge>
              </div>
              <DisplayTitle size="display">
                Clareza clínica, presença humana.
              </DisplayTitle>
              <p className="prose-reading">
                Uma fundação visual para experiências digitais precisas,
                acolhedoras e duradouras. Esta página demonstra componentes e
                decisões de interface — não representa uma página institucional.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="#fundamentos" iconAfter={<ArrowRight aria-hidden className="size-4" />}>
                  Explorar fundamentos
                </Button>
                <Button href="/" variant="outline">
                  Voltar ao início técnico
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </PageAtmosphere>

      <div id="fundamentos">
        <Section density="spacious">
          <Container>
            <SectionTitle
              title="Paleta institucional"
              description="Uma progressão de verdes profundos a luminosos. Tons escuros sustentam texto e confiança; tons claros criam respiro e acolhimento."
            />
            <Grid columns={6} gap="sm" className="mt-10">
              {institutionalColors.map(([name, token]) => (
                <div key={token} className="min-w-0">
                  <div
                    className="aspect-square rounded-[var(--radius-md)] border border-[var(--border-subtle)]"
                    style={{ backgroundColor: `var(${token})` }}
                  />
                  <p className="mt-3 text-sm font-bold">Verde {name}</p>
                  <code className="text-sm text-[var(--text-muted)]">{token}</code>
                </div>
              ))}
            </Grid>
          </Container>
        </Section>

        <Section density="standard" className={sectionClass}>
          <Container>
            <Grid columns={12} gap="xl">
              <div className="md:col-span-4">
                <SectionTitle
                  title="Tons neutros"
                  description="Grafites, tintas e papéis quentes equilibram precisão clínica e presença editorial."
                />
              </div>
              <div className="md:col-span-8">
                <Grid columns={4} gap="sm">
                  {neutralColors.map(([name, token]) => (
                    <div key={token}>
                      <div
                        className="h-24 rounded-[var(--radius-md)] border border-[var(--border-default)]"
                        style={{ backgroundColor: `var(${token})` }}
                      />
                      <p className="mt-2 text-sm font-bold">{name}</p>
                    </div>
                  ))}
                </Grid>
              </div>
            </Grid>
          </Container>
        </Section>

        <Section density="standard" className={sectionClass}>
          <Container>
            <SectionTitle
              title="Cores semânticas"
              description="Estados sempre combinam cor, linguagem e iconografia — nunca dependem somente da percepção cromática."
            />
            <Grid columns={4} className="mt-8">
              {semanticColors.map(([name, token]) => (
                <Surface key={token} variant="outlined" className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="size-4 rounded-[var(--radius-full)]"
                    style={{ backgroundColor: `var(${token})` }}
                  />
                  <span className="font-bold">{name}</span>
                </Surface>
              ))}
            </Grid>
          </Container>
        </Section>
      </div>

      <Section density="spacious" className={sectionClass}>
        <Container>
          <Grid columns={12} gap="xl">
            <div className="md:col-span-4">
              <Eyebrow line>Tipografia principal</Eyebrow>
              <p className="mt-4 text-[length:var(--font-size-5xl)] font-semibold leading-none">
                Manrope
              </p>
              <p className="mt-5 text-[var(--text-secondary)]">
                Interface, navegação, textos técnicos, formulários e controles.
              </p>
            </div>
            <div className="md:col-span-8">
              <Surface variant="muted" padding="lg">
                <p className="text-[length:var(--font-size-4xl)] font-semibold leading-tight">
                  Saúde ocupacional exige precisão em cada detalhe.
                </p>
                <p className="mt-6 text-[length:var(--font-size-lg)] text-[var(--text-secondary)]">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz · 0123456789
                </p>
              </Surface>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section density="standard" className={sectionClass}>
        <Container>
          <Grid columns={12} gap="xl" align="center">
            <div className="md:col-span-5">
              <Eyebrow line>Tipografia editorial</Eyebrow>
              <p className="font-editorial mt-4 text-[length:var(--font-size-5xl)] leading-none">
                Instrument Serif
              </p>
              <p className="mt-5 text-[var(--text-secondary)]">
                Reservada para citações, marcos históricos e composições de
                grande escala.
              </p>
            </div>
            <div className="md:col-span-7">
              <EditorialQuote author="Exemplo editorial — conteúdo demonstrativo">
                Cuidar bem começa por enxergar cada pessoa com atenção.
              </EditorialQuote>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section density="standard" className={sectionClass}>
        <Container>
          <SectionTitle title="Escala de títulos" description="Escala fluida baseada em clamp(), legível de telas compactas a grandes apresentações." />
          <div className="mt-10 space-y-8">
            {[
              ["Display", "var(--font-size-display)"],
              ["Título 5XL", "var(--font-size-5xl)"],
              ["Título 4XL", "var(--font-size-4xl)"],
              ["Título 3XL", "var(--font-size-3xl)"],
              ["Título 2XL", "var(--font-size-2xl)"],
            ].map(([label, size]) => (
              <div key={label} className="grid gap-2 border-b border-[var(--border-subtle)] pb-7 md:grid-cols-[10rem_1fr]">
                <code className="text-sm text-[var(--text-muted)]">{label}</code>
                <p className="font-semibold leading-[var(--leading-heading)]" style={{ fontSize: size }}>
                  Precisão que acolhe
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section density="standard" className={sectionClass}>
        <Container>
          <Grid columns={12} gap="xl">
            <div className="md:col-span-5">
              <SectionTitle title="Parágrafos" description="Corpo entre 1.55 e 1.7 de entrelinha e largura limitada a cerca de 65 caracteres." />
            </div>
            <div className="space-y-6 md:col-span-7">
              <p className="text-[length:var(--font-size-lg)] leading-[var(--leading-body)]">
                O texto de leitura oferece ritmo confortável, contraste
                consistente e densidade adequada para explicar serviços
                complexos com simplicidade.
              </p>
              <p className="text-base text-[var(--text-secondary)]">
                Informações secundárias usam um contraste mais suave, sem
                comprometer os critérios mínimos de leitura.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section density="standard" className={sectionClass}>
        <Container>
          <SectionTitle title="Eyebrows" description="Marcadores curtos organizam a navegação visual sem competir com os títulos." />
          <div className="mt-8 flex flex-wrap gap-10">
            <Eyebrow>Sem linha</Eyebrow>
            <Eyebrow line>Com linha decorativa</Eyebrow>
          </div>
        </Container>
      </Section>

      <Section density="spacious" className="bg-[var(--if-green-50)]">
        <Container>
          <SectionTitle title="Botões" description="Seis variantes, três tamanhos, alvo mínimo de 44px e estados completos." />
          <div className="mt-10 space-y-7">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primário</Button>
              <Button variant="secondary">Secundário</Button>
              <Button variant="outline">Contorno</Button>
              <Button variant="ghost">Fantasma</Button>
              <Button variant="accent">Destaque</Button>
              <span className="rounded-[var(--radius-lg)] bg-[var(--if-green-950)] p-3">
                <Button variant="inverse">Inverso</Button>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" iconBefore={<HeartPulse aria-hidden className="size-4" />}>Pequeno</Button>
              <Button size="md" iconAfter={<ArrowRight aria-hidden className="size-4" />}>Médio</Button>
              <Button size="lg">Grande</Button>
              <Button loading>Carregando</Button>
              <Button disabled>Desabilitado</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section density="compact" className={sectionClass}>
        <Container>
          <Grid columns={12} align="center">
            <div className="md:col-span-4"><SectionTitle title="Links" /></div>
            <div className="flex flex-wrap gap-8 md:col-span-8">
              <TextLink href="#superficies">Link com direção</TextLink>
              <TextLink href="#acessibilidade" showArrow={false}>Link textual simples</TextLink>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section density="standard" className={sectionClass}>
        <Container>
          <SectionTitle title="Ícones" description="Lucide oferece formas consistentes. Ícones decorativos são ocultados de tecnologias assistivas." />
          <div className="mt-8 flex flex-wrap gap-4">
            {[HeartPulse, ShieldCheck, Activity, Sparkles, ArrowRight].map((Icon, index) => (
              <Surface key={index} variant="outlined" padding="sm" className="grid size-16 place-items-center">
                <Icon aria-hidden className="size-6 text-[var(--if-green-700)]" />
              </Surface>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="superficies" density="spacious" className={sectionClass}>
        <Container>
          <SectionTitle title="Superfícies" description="Planos discretos estabelecem hierarquia sem transformar cada bloco em um cartão." />
          <Grid columns={3} className="mt-10">
            {(["default", "muted", "ivory", "dark", "outlined", "elevated"] as const).map((variant) => (
              <Surface key={variant} variant={variant} className="min-h-40">
                <p className="font-bold capitalize">{variant}</p>
                <p className="mt-2 text-sm opacity-75">Superfície de demonstração</p>
              </Surface>
            ))}
          </Grid>
          <PageAtmosphere variant="corporate" className="mt-6 rounded-[var(--radius-xl)] p-8">
            <GlassPanel>
              <p className="font-bold">Glass panel</p>
              <p className="mt-2 max-w-xl text-sm opacity-80">
                Transparência moderada, fallback sólido e contraste preservado.
              </p>
            </GlassPanel>
          </PageAtmosphere>
        </Container>
      </Section>

      <Section density="standard" className={sectionClass}>
        <Container>
          <Grid columns={3}>
            <div>
              <SectionTitle title="Bordas" />
              <div className="mt-6 space-y-4">
                {borderSamples.map(([name, className]) => (
                  <div key={name} className={`rounded-[var(--radius-md)] border p-4 text-sm ${className}`}>
                    border-{name}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle title="Sombras" />
              <div className="mt-6 grid grid-cols-2 gap-4">
                {shadowSamples.map(([name, className]) => (
                  <div key={name} className={`grid h-20 place-items-center rounded-[var(--radius-md)] bg-white text-sm ${className}`}>
                    {name}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle title="Raios" />
              <div className="mt-6 flex flex-wrap gap-4">
                {radiusSamples.map(([name, className]) => (
                  <div key={name} className={`grid size-20 place-items-center border border-[var(--border-default)] text-sm ${className}`}>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section density="spacious" className="bg-[var(--if-green-950)] text-[var(--if-white)]">
        <Container>
          <SectionTitle
            title="Métricas"
            description="Números editoriais ganham escala; contexto e unidade permanecem explícitos."
            className="[&_p]:text-[var(--if-green-200)]"
          />
          <div className="mt-10 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--if-green-700)] md:grid md:grid-cols-3">
            <MetricPanel tone="dark" value="24" label="Unidades demonstrativas" description="Dado fictício para teste visual" />
            <MetricPanel tone="dark" divider value="98%" label="Índice de exemplo" description="Sem valor institucional real" />
            <MetricPanel tone="dark" divider value="30+" label="Anos simulados" description="Apenas composição tipográfica" />
          </div>
        </Container>
      </Section>

      <Section density="standard">
        <Container>
          <SectionTitle title="Status badges" description="Ícone, texto e cor trabalham juntos em todos os estados." />
          <div className="mt-8 flex flex-wrap gap-3">
            <StatusBadge>Neutro</StatusBadge>
            <StatusBadge state="success">Concluído</StatusBadge>
            <StatusBadge state="warning">Atenção necessária</StatusBadge>
            <StatusBadge state="danger">Indisponível</StatusBadge>
            <StatusBadge state="info">Em análise</StatusBadge>
          </div>
        </Container>
      </Section>

      <Section density="standard" className={sectionClass}>
        <Container>
          <SectionTitle title="Espaçamentos" description="Uma escala previsível organiza ritmo interno, seções e relações entre elementos." />
          <div className="mt-8 space-y-4">
            {[1, 2, 3, 4, 6, 8, 12, 16, 24].map((space) => (
              <div key={space} className="flex items-center gap-4">
                <code className="w-20 text-sm">space-{space}</code>
                <div
                  className="h-3 rounded-[var(--radius-full)] bg-[var(--if-green-500)]"
                  style={{ width: `var(--space-${space})` }}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section density="standard" className={sectionClass}>
        <Container>
          <SectionTitle title="Grid" description="Doze colunas no desktop, reorganizadas em fluxo único sem overflow no mobile." />
          <Grid columns={12} gap="sm" className="mt-8">
            {Array.from({ length: 12 }, (_, index) => (
              <div key={index} className="grid h-20 place-items-center rounded-[var(--radius-sm)] bg-[var(--if-green-100)] text-sm font-bold text-[var(--if-green-900)]">
                {index + 1}
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section density="spacious" className={sectionClass}>
        <Container>
          <SectionTitle title="Atmosferas de página" description="Cada contexto altera somente variáveis, superfícies e fundos decorativos discretos." />
          <Grid columns={4} className="mt-10">
            {atmospheres.map(([variant, label]) => (
              <PageAtmosphere key={variant} variant={variant} className="min-h-52 rounded-[var(--radius-lg)] border border-[var(--theme-border)] p-6">
                <p className="text-sm font-bold uppercase tracking-[var(--tracking-label)] opacity-70">{variant}</p>
                <p className="mt-10 text-[length:var(--font-size-xl)] font-semibold">{label}</p>
                <span className="mt-5 block h-1 w-12 rounded-full bg-[var(--theme-accent)]" />
              </PageAtmosphere>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="acessibilidade" density="standard" className="bg-[var(--if-ivory)]">
        <Container>
          <Grid columns={12} gap="xl">
            <div className="md:col-span-4">
              <Eyebrow line>Interação</Eyebrow>
              <SectionTitle title="Estados de foco" className="mt-4" />
            </div>
            <Surface variant="default" className="md:col-span-8">
              <p className="text-[var(--text-secondary)]">
                Use Tab para observar o anel laranja de alto contraste. O foco
                permanece independente dos estados de hover.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button>Controle focável</Button>
                <TextLink href="#movimento">Próxima seção</TextLink>
              </div>
            </Surface>
          </Grid>
        </Container>
      </Section>

      <Section density="compact" className={sectionClass}>
        <Container>
          <Grid columns={12} align="center">
            <div className="md:col-span-4"><SectionTitle title="Estados desabilitados" /></div>
            <div className="flex flex-wrap gap-3 md:col-span-8">
              <Button disabled>Não disponível</Button>
              <Button variant="outline" disabled>Sem interação</Button>
              <StatusBadge state="neutral">Estado explicado por texto</StatusBadge>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section id="movimento" density="standard" className={sectionClass}>
        <Container>
          <SectionTitle title="Movimento" description="Revelações de 600–800ms usam easing orgânico e respeitam a preferência de movimento reduzido." />
          <Grid columns={4} className="stagger mt-10">
            {[
              ["fade-in", "Fade in"],
              ["rise-in", "Rise in"],
              ["scale-in", "Scale in"],
              ["image-reveal", "Image reveal"],
            ].map(([motion, label]) => (
              <Surface key={motion} variant="muted" className={motion}>
                <Sparkles aria-hidden className="size-5 text-[var(--if-green-700)]" />
                <p className="mt-8 font-bold">{label}</p>
                <code className="text-sm text-[var(--text-muted)]">.{motion}</code>
              </Surface>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section density="standard" className={sectionClass}>
        <Container>
          <SectionTitle
            title="Estrutura global"
            description="Amostras técnicas do cabeçalho contextual, estado ativo e encerramento institucional."
          />
          <div className="mt-10 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-default)]">
            <div data-header-theme="light" className="bg-[var(--header-background)] px-5 py-3 text-[var(--header-text)]">
              <div className="flex min-h-16 items-center justify-between gap-6">
                <p className="text-xl font-extrabold tracking-[-0.035em]">IF Saúde</p>
                {mainNavigation[0].type === "link" && (
                  <NavLink item={mainNavigation[0]} active mode="desktop" />
                )}
              </div>
            </div>
            <PageAtmosphere variant="corporate" decorative={false}>
              <SiteHeader theme="dark" />
            </PageAtmosphere>
          </div>
        </Container>
        <div className="mt-10">
          <SiteFooter />
        </div>
      </Section>

      <Section density="spacious" className="bg-[var(--if-green-950)] text-[var(--if-white)]">
        <Container size="reading">
          <Eyebrow line className="text-[var(--if-green-300)]">Acessibilidade</Eyebrow>
          <DisplayTitle as="h2" variant="inverse" size="lg" className="mt-6">
            Inclusão é uma decisão estrutural.
          </DisplayTitle>
          <div className="mt-8 space-y-4 text-[var(--if-green-100)]">
            <p>Contraste mínimo AA orienta texto, controles e estados.</p>
            <p>Hierarquia semântica, skip link e foco visível sustentam navegação por teclado.</p>
            <p>Alvos interativos têm pelo menos 44px e estados nunca dependem somente de cor.</p>
            <p>Movimento reduzido remove transições e animações não essenciais.</p>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
