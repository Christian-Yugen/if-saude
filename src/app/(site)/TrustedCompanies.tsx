import Image from "next/image";
import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SectionTitle } from "@/components/typography/SectionTitle";
import styles from "./TrustedCompanies.module.css";

const companies = [
  {
    name: "OSX Brasil",
    src: "/images/home/clients/osx.png",
    width: 2945,
    height: 1836,
    visualScale: 0.82,
  },
  {
    name: "JFI Silvicultura",
    src: "/images/home/clients/jfi.png",
    width: 2907,
    height: 1475,
    visualScale: 1.06,
  },
  {
    name: "CMPC",
    src: "/images/home/clients/cmpc.png",
    width: 2719,
    height: 1373,
    visualScale: 1.06,
  },
  {
    name: "ACITL",
    src: "/images/home/clients/acitl.png",
    width: 1478,
    height: 1174,
    visualScale: 0.72,
  },
  {
    name: "Consórcio UFN3",
    src: "/images/home/clients/ufn3.png",
    width: 2479,
    height: 1073,
    visualScale: 1,
  },
  {
    name: "Adar",
    src: "/images/home/clients/adar.png",
    width: 1529,
    height: 1674,
    visualScale: 0.84,
  },
  {
    name: "Votorantim Cimentos",
    src: "/images/home/clients/votorantim.png",
    width: 4269,
    height: 2400,
    visualScale: 1.35,
  },
  {
    name: "Sylvamo",
    src: "/images/home/clients/sylvamo.png",
    width: 4269,
    height: 2400,
    visualScale: 1.35,
  },
  {
    name: "Cargill",
    src: "/images/home/clients/cargill.png",
    width: 4269,
    height: 2400,
    visualScale: 1,
  },
  {
    name: "Eldorado Brasil",
    src: "/images/home/clients/eldorado.png",
    width: 4269,
    height: 2400,
    visualScale: 1,
  },
] as const;

type CompanySequenceProps = {
  duplicate?: boolean;
};

type LogoFrameStyle = CSSProperties & {
  "--logo-scale": number;
};

function CompanySequence({ duplicate = false }: CompanySequenceProps) {
  return (
    <ul className={styles.sequence} aria-hidden={duplicate || undefined}>
      {companies.map((company) => (
        <li className={styles.logoItem} key={company.name}>
          <div
            className={styles.logoFrame}
            style={{ "--logo-scale": company.visualScale } as LogoFrameStyle}
          >
            <Image
              src={company.src}
              alt={duplicate ? "" : `Logotipo da ${company.name}`}
              width={company.width}
              height={company.height}
              sizes="(max-width: 767px) 128px, (max-width: 1023px) 160px, 176px"
              className={styles.logoImage}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function TrustedCompanies() {
  return (
    <Section
      density="standard"
      surface="ivory"
      aria-labelledby="trusted-companies-title"
      className="border-y border-[var(--theme-border)] py-6 shadow-[var(--shadow-xs)] md:py-8 lg:py-9"
    >
      <Container size="page">
        <Grid
          columns={12}
          gap="md"
          align="center"
          className="md:grid-cols-1 lg:grid-cols-12 lg:gap-0"
        >
          <div className="min-w-0 lg:col-span-4">
            <Eyebrow line>EMPRESAS ATENDIDAS</Eyebrow>
            <SectionTitle
              title="Confiança construída ao lado de grandes empresas."
              maxWidth="md"
              className="mt-2"
              headingProps={{
                id: "trusted-companies-title",
                className:
                  "text-[length:var(--font-size-2xl)] leading-[var(--leading-heading)]",
              }}
            />
          </div>

          <div
            className={`${styles.viewport} min-w-0 lg:col-span-8`}
            aria-label="Empresas atendidas pela IF Saúde"
          >
            <div className={styles.track}>
              <CompanySequence />
              <CompanySequence duplicate />
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
