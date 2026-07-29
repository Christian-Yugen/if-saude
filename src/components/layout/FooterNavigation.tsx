import Link from "next/link";
import { mainNavigation } from "@/config/navigation";
import type { NavigationGroup } from "@/types/navigation";

const groupLabels: Record<NavigationGroup, string> = {
  solutions: "Soluções",
  institutional: "Institucional",
  "content-contact": "Conteúdos e contato",
};

type FooterNavigationProps = {
  group: NavigationGroup;
};

export function FooterNavigation({ group }: FooterNavigationProps) {
  const links = mainNavigation.filter(
    (item) => item.type === "link" && item.footerGroup === group,
  );

  return (
    <nav aria-label={`${groupLabels[group]} no rodapé`}>
      <h2 className="text-xs font-extrabold uppercase tracking-[var(--tracking-label)] text-[var(--if-green-300)]">
        {groupLabels[group]}
      </h2>
      <ul className="mt-3">
        {links.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="inline-flex min-h-11 items-center text-sm font-semibold leading-tight text-[var(--if-green-100)] transition-colors hover:text-[var(--if-white)] lg:min-h-8"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
