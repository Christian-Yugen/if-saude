import Link from "next/link";
import { mainNavigation } from "@/config/navigation";
import type { NavigationGroup } from "@/types/navigation";

const groupLabels: Record<NavigationGroup, string> = {
  solutions: "Soluções",
  institutional: "Institucional",
  "content-contact": "Conteúdos e contato",
};

const groupOrder: readonly NavigationGroup[] = [
  "solutions",
  "institutional",
  "content-contact",
];

export function FooterNavigation() {
  const links = mainNavigation.filter((item) => item.type === "link");

  return (
    <nav aria-label="Navegação do rodapé" className="grid gap-10 sm:grid-cols-3">
      {groupOrder.map((group) => {
        const groupLinks = links.filter((item) => item.footerGroup === group);

        return (
          <div key={group}>
            <h2 className="text-sm font-extrabold uppercase tracking-[var(--tracking-label)] text-[var(--if-green-300)]">
              {groupLabels[group]}
            </h2>
            <ul className="mt-5 space-y-2">
              {groupLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--if-green-100)] transition-colors hover:text-[var(--if-white)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
