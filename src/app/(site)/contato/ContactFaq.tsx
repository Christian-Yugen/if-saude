"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./ContactPage.module.css";

const questions = [
  {
    question: "Como solicitar uma proposta?",
    answer:
      "Você pode solicitar uma proposta pelo formulário desta página, pelo WhatsApp ou diretamente com nossa equipe comercial. Informe o nome da empresa, o número aproximado de colaboradores e os serviços de interesse para facilitar o atendimento.",
  },
  {
    question: "Quais documentos são necessários para os exames?",
    answer:
      "Os documentos podem variar conforme o exame e a orientação da empresa. Em geral, o trabalhador deve apresentar documento oficial com foto e o encaminhamento fornecido pelo empregador.",
  },
  {
    question: "Vocês atendem empresas de qual porte?",
    answer:
      "A IF Saúde desenvolve soluções para empresas de diferentes portes, desde negócios locais até grandes operações industriais.",
  },
  {
    question: "Como funciona a gestão de eSocial?",
    answer:
      "A IF Saúde organiza, valida e acompanha os eventos de Saúde e Segurança do Trabalho, integrando informações ocupacionais, documentos e prazos em um fluxo de gestão.",
  },
  {
    question: "Como localizar a unidade?",
    answer:
      "A IF Saúde está localizada na Av. Dr. Eloy Chaves, 562, no Centro de Três Lagoas/MS. Utilize os botões de localização desta página para abrir a rota no Google Maps ou no Waze.",
  },
  {
    question: "Qual é o horário de atendimento?",
    answer: "O atendimento ocorre de segunda a sexta, das 7h às 17h.",
  },
] as const;

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.faqList}>
      {questions.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `contact-faq-panel-${index}`;
        return (
          <div key={item.question} className={styles.faqItem}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {item.question}
                <ChevronDown aria-hidden />
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen} className={styles.faqAnswer}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
