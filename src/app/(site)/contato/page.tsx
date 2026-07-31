import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import heroImage from "../../../../public/images/pages/about/hero-if-saude.png";
import specialistImage from "../../../../public/images/contact/contact-specialist.png";
import { Button } from "@/components/actions/Button";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { PageAtmosphere } from "@/components/layout/PageAtmosphere";
import { Section } from "@/components/layout/Section";
import { DisplayTitle } from "@/components/typography/DisplayTitle";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { routes } from "@/config/routes";
import { ContactFaq } from "./ContactFaq";
import { ContactForm } from "./ContactForm";
import styles from "./ContactPage.module.css";

export const metadata: Metadata = {
  title: "Contato | IF Saúde",
  description:
    "Entre em contato com a IF Saúde em Três Lagoas para conversar sobre Medicina do Trabalho, Segurança Ocupacional, exames e eSocial.",
};

const phoneHref = "tel:+556721054300";
const whatsappHref = "https://wa.me/5567992634300";
const emailHref = "mailto:contato@ifsaude.med.br";
const googleMapsHref =
  "https://www.google.com/maps/search/?api=1&query=Av.%20Dr.%20Eloy%20Chaves%2C%20562%2C%20Centro%2C%20Tr%C3%AAs%20Lagoas%2FMS";
const wazeHref =
  "https://www.waze.com/ul?q=Av.%20Dr.%20Eloy%20Chaves%2C%20562%2C%20Centro%2C%20Tr%C3%AAs%20Lagoas%2FMS&navigate=yes";

const channels = [
  {
    title: "Telefone",
    value: "(67) 2105-4300",
    detail: "Segunda a sexta, das 7h às 17h",
    action: "Ligar agora",
    href: phoneHref,
    icon: Phone,
  },
  {
    title: "WhatsApp",
    value: "(67) 99263-4300",
    detail: "Resposta rápida",
    action: "Abrir conversa",
    href: whatsappHref,
    external: true,
    icon: MessageCircle,
  },
  {
    title: "E-mail",
    value: "contato@ifsaude.med.br",
    detail: "Respondemos em breve",
    action: "Enviar e-mail",
    href: emailHref,
    icon: Mail,
  },
  {
    title: "Endereço",
    value: "Av. Dr. Eloy Chaves, 562",
    detail: "Centro — Três Lagoas/MS",
    action: "Ver localização",
    href: "#localizacao",
    icon: MapPin,
  },
  {
    title: "Horário de atendimento",
    value: "Segunda a sexta",
    detail: "Das 7h às 17h",
    icon: Clock3,
  },
] as const;

const unitFeatures = [
  "Estrutura própria",
  "Estacionamento",
  "Acessibilidade",
  "Ambientes climatizados",
  "Tecnologia integrada",
  "Localização central",
] as const;

export default function ContactPage() {
  return (
    <PageAtmosphere variant="human" decorative={false}>
      <Section
        density="standard"
        surface="mist"
        aria-labelledby="contact-hero-title"
        className="pt-10 md:pt-12"
      >
        <Container size="page">
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <ol>
              <li><a href={routes.home}>Home</a></li>
              <li aria-current="page">Contato</li>
            </ol>
          </nav>
          <Grid columns={12} gap="xl" align="center" className="mt-7 md:grid-cols-1 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-6">
              <Eyebrow line>Fale com a IF Saúde</Eyebrow>
              <DisplayTitle id="contact-hero-title" size="lg" className="mt-5 max-w-[15ch]">
                Estamos prontos para cuidar da saúde e da segurança da sua empresa.
              </DisplayTitle>
              <p className={styles.heroCopy}>
                Entre em contato com a IF Saúde e fale com uma equipe preparada
                para compreender sua necessidade e indicar a solução mais adequada.
              </p>
              <ul className={styles.trustPoints}>
                <li><Sparkles aria-hidden />Atendimento humano e ágil</li>
                <li><ShieldCheck aria-hidden />Confidencialidade e segurança das informações</li>
              </ul>
            </div>
            <div className="min-w-0 lg:col-span-6">
              <div className={styles.heroVisual}>
                <Image
                  src={heroImage}
                  alt="Equipe da IF Saúde em ambiente institucional"
                  priority
                  sizes="(min-width: 1024px) 48vw, calc(100vw - 4rem)"
                />
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section density="standard" surface="ivory" aria-labelledby="channels-title">
        <Container size="page">
          <SectionTitle title="Canais de atendimento" headingProps={{ id: "channels-title" }} />
          <div className={styles.channels}>
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <article key={channel.title}>
                  <Icon aria-hidden />
                  <h3>{channel.title}</h3>
                  <strong>{channel.value}</strong>
                  <p>{channel.detail}</p>
                  {"href" in channel && channel.href && (
                    <a
                      href={channel.href}
                      {...("external" in channel && channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {channel.action}<ExternalLink aria-hidden />
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section id="formulario" density="standard" surface="pure" aria-labelledby="form-title">
        <Container size="page">
          <Grid columns={12} gap="xl" align="start" className="md:grid-cols-1 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <Eyebrow line>Envie sua mensagem</Eyebrow>
              <SectionTitle
                title="Envie sua mensagem"
                description="Preencha o formulário e nossa equipe entrará em contato."
                className="mt-4"
                headingProps={{ id: "form-title" }}
              />
              <ContactForm />
            </div>
            <aside id="localizacao" className="min-w-0 lg:col-span-5" aria-labelledby="location-title">
              <div className={styles.locationPanel}>
                <div className={styles.locationHeader}>
                  <MapPin aria-hidden />
                  <h2 id="location-title">Onde estamos</h2>
                  <p>Localização de fácil acesso no centro de Três Lagoas/MS.</p>
                </div>
                <address>
                  <strong>IF Saúde</strong>
                  <span>Av. Dr. Eloy Chaves, 562</span>
                  <span>Centro — Três Lagoas/MS</span>
                </address>
                <div className={styles.mapWrapper}>
                  <iframe
                    title="Localização da IF Saúde em Três Lagoas"
                    src="https://www.google.com/maps?q=Av.%20Dr.%20Eloy%20Chaves%2C%20562%2C%20Centro%2C%20Tr%C3%AAs%20Lagoas%2C%20MS&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className={styles.locationActions}>
                  <Button href={googleMapsHref} target="_blank" rel="noopener noreferrer">
                    Abrir no Google Maps
                  </Button>
                  <Button href={wazeHref} target="_blank" rel="noopener noreferrer" variant="outline">
                    Abrir no Waze
                  </Button>
                </div>
              </div>
            </aside>
          </Grid>
        </Container>
      </Section>

      <Section density="standard" surface="mist" aria-labelledby="unit-title">
        <Container size="page">
          <Grid columns={12} gap="xl" align="stretch" className="md:grid-cols-1 lg:grid-cols-12">
            <article className="min-w-0 lg:col-span-7">
              <Eyebrow line>Nossa unidade</Eyebrow>
              <SectionTitle
                title="Estrutura própria em Três Lagoas/MS"
                className="mt-4"
                headingProps={{ id: "unit-title" }}
              />
              <div className={styles.unitVisual}>
                <Image
                  src={heroImage}
                  alt="Estrutura institucional da IF Saúde em Três Lagoas"
                  sizes="(min-width: 1024px) 58vw, calc(100vw - 4rem)"
                />
              </div>
              <div className={styles.unitDetails}>
                <address>Av. Dr. Eloy Chaves, 562<br />Centro — Três Lagoas/MS</address>
                <ul>
                  {unitFeatures.map((feature) => <li key={feature}><CheckCircle2 aria-hidden />{feature}</li>)}
                </ul>
              </div>
            </article>
            <aside className={`${styles.nationalPanel} min-w-0 lg:col-span-5`}>
              <Building2 aria-hidden />
              <h2>Atendemos empresas em todo o Brasil com soluções integradas.</h2>
              <p>
                Consultoria, treinamentos e gestão de SST para apoiar empresas
                de diferentes portes e setores.
              </p>
            </aside>
          </Grid>
        </Container>
      </Section>

      <Section density="standard" surface="ivory" aria-labelledby="faq-title">
        <Container size="content">
          <SectionTitle title="Perguntas frequentes" headingProps={{ id: "faq-title" }} />
          <ContactFaq />
        </Container>
      </Section>

      <Section density="standard" surface="deep" aria-labelledby="contact-cta-title">
        <Container size="page">
          <div className={styles.ctaPanel}>
            <div className={styles.ctaContent}>
              <Eyebrow>Fale com a IF Saúde</Eyebrow>
              <DisplayTitle id="contact-cta-title" as="h2" variant="inverse" size="lg" className="mt-4">
                Vamos conversar sobre a saúde e a segurança da sua empresa?
              </DisplayTitle>
              <p>
                Nossa equipe está pronta para compreender sua necessidade e
                apresentar a solução mais adequada.
              </p>
              <div className={styles.ctaActions}>
                <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="inverse" size="lg">
                  Falar com um especialista
                </Button>
                <Button href="#formulario" variant="ghost" size="lg">Solicitar proposta</Button>
              </div>
            </div>
            <div className={styles.ctaImage}>
              <Image
                src={specialistImage}
                alt="Consultora da IF Saúde orientando um cliente empresarial"
                sizes="(min-width: 1024px) 44vw, calc(100vw - 4rem)"
              />
            </div>
          </div>
        </Container>
      </Section>
    </PageAtmosphere>
  );
}
