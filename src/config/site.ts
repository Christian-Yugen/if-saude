export const siteConfig = {
  name: "IF SAÚDE",
  legalName: "IF Saúde Ltda",
  description:
    "Saúde ocupacional e segurança do trabalho para empresas que valorizam o cuidado com as pessoas.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  address: {
    street: "Avenida Dr. Eloy Chaves, 562",
    district: "Centro",
    city: "Três Lagoas",
    state: "MS",
    country: "Brasil",
    postalCode: "",
  },
  technicalDirector: {
    name: "Dr. Issam Fares Júnior",
    registration: "CRM-MS 3744",
  },
  contact: {
    phone: "",
    whatsapp: "",
    email: "",
  },
  businessHours: "",
  socialLinks: [],
} as const;
