import { routes } from "@/config/routes";
import type { PageTheme } from "@/types/theme";

export const pageThemes = {
  [routes.home]: "human",
  [routes.companies]: "corporate",
  [routes.exams]: "clinical",
  [routes.safety]: "industrial",
  [routes.esocial]: "digital",
  [routes.about]: "heritage",
  [routes.insights]: "editorial",
  [routes.contact]: "concierge",
  [routes.clientPortal]: "corporate",
  [routes.designSystem]: "human",
} as const satisfies Record<(typeof routes)[keyof typeof routes], PageTheme>;
