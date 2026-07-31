"use client";

import { useState, type FormEvent } from "react";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/actions/Button";
import styles from "./ContactPage.module.css";

type FieldName =
  | "name"
  | "email"
  | "company"
  | "phone"
  | "subject"
  | "message"
  | "consent";

type Errors = Partial<Record<FieldName, string>>;

const subjectOptions = [
  "Solicitar proposta",
  "Medicina do Trabalho",
  "Exames e atendimentos",
  "Segurança do Trabalho",
  "eSocial",
  "Perícias e consultoria",
  "Dúvidas sobre atendimento",
  "Outros assuntos",
] as const;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [integrationNotice, setIntegrationNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    const email = String(form.get("email") ?? "").trim();

    if (!String(form.get("name") ?? "").trim()) nextErrors.name = "Informe seu nome.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Informe um e-mail válido.";
    }
    if (!String(form.get("company") ?? "").trim()) {
      nextErrors.company = "Informe o nome da empresa.";
    }
    if (!String(form.get("phone") ?? "").trim()) {
      nextErrors.phone = "Informe um telefone ou WhatsApp.";
    }
    if (!String(form.get("subject") ?? "").trim()) {
      nextErrors.subject = "Selecione um assunto.";
    }
    if (!String(form.get("message") ?? "").trim()) {
      nextErrors.message = "Escreva sua mensagem.";
    }
    if (form.get("consent") !== "on") {
      nextErrors.consent = "Autorize o contato para enviar a solicitação.";
    }

    setErrors(nextErrors);
    setIntegrationNotice(
      Object.keys(nextErrors).length === 0
        ? "O envio online ainda não está disponível. Entre em contato por telefone, WhatsApp ou e-mail."
        : "",
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <Field
        id="name"
        label="Nome completo"
        type="text"
        autoComplete="name"
        error={errors.name}
      />
      <Field
        id="email"
        label="E-mail corporativo"
        type="email"
        autoComplete="email"
        error={errors.email}
      />
      <Field
        id="company"
        label="Empresa"
        type="text"
        autoComplete="organization"
        error={errors.company}
      />
      <Field
        id="phone"
        label="Telefone / WhatsApp"
        type="tel"
        autoComplete="tel"
        error={errors.phone}
      />
      <div className={styles.field}>
        <label htmlFor="subject">Assunto</label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        >
          <option value="" disabled>Selecione um assunto</option>
          {subjectOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {errors.subject && <span id="subject-error" className={styles.error}>{errors.subject}</span>}
      </div>
      <div className={`${styles.field} ${styles.fullField}`}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Conte-nos como podemos ajudar sua empresa."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <span id="message-error" className={styles.error}>{errors.message}</span>}
      </div>
      <div className={`${styles.consent} ${styles.fullField}`}>
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <label htmlFor="consent">
          Autorizo o contato da IF Saúde para retorno da minha solicitação.
        </label>
        {errors.consent && <span id="consent-error" className={styles.error}>{errors.consent}</span>}
      </div>
      <div className={`${styles.formFooter} ${styles.fullField}`}>
        <Button type="submit" size="lg">Enviar mensagem</Button>
        <p><LockKeyhole aria-hidden />Seus dados estão seguros. Não compartilhamos suas informações.</p>
      </div>
      {integrationNotice && (
        <p className={`${styles.integrationNotice} ${styles.fullField}`} role="status">
          {integrationNotice}
        </p>
      )}
    </form>
  );
}

type FieldProps = {
  id: FieldName;
  label: string;
  type: "text" | "email" | "tel";
  autoComplete: string;
  error?: string;
};

function Field({ id, label, type, autoComplete, error }: FieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && <span id={`${id}-error`} className={styles.error}>{error}</span>}
    </div>
  );
}
