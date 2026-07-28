import { routes } from "@/config/routes";
import type { NavigationItem } from "@/types/navigation";

export const mainNavigation = [
  {
    id: "home",
    type: "link",
    label: "Início",
    href: routes.home,
    position: "primary",
    footerGroup: "institutional",
  },
  {
    id: "companies",
    type: "link",
    label: "Empresas",
    href: routes.companies,
    position: "primary",
    footerGroup: "solutions",
  },
  {
    id: "exams",
    type: "link",
    label: "Exames e Atendimentos",
    href: routes.exams,
    position: "primary",
    footerGroup: "solutions",
  },
  {
    id: "safety",
    type: "link",
    label: "Segurança do Trabalho",
    href: routes.safety,
    position: "primary",
    footerGroup: "solutions",
  },
  {
    id: "esocial",
    type: "link",
    label: "eSocial",
    href: routes.esocial,
    position: "primary",
    footerGroup: "solutions",
  },
  {
    id: "about",
    type: "link",
    label: "A IF Saúde",
    href: routes.about,
    position: "primary",
    footerGroup: "institutional",
  },
  {
    id: "insights",
    type: "link",
    label: "Conteúdos",
    href: routes.insights,
    position: "primary",
    footerGroup: "content-contact",
  },
  {
    id: "contact",
    type: "link",
    label: "Contato",
    href: routes.contact,
    position: "primary",
    footerGroup: "content-contact",
  },
] as const satisfies readonly NavigationItem[];

export const utilityNavigation = [
  {
    id: "client-portal",
    type: "link",
    label: "Portal do Cliente",
    href: routes.clientPortal,
    position: "secondary",
    highlighted: true,
  },
] as const satisfies readonly NavigationItem[];
