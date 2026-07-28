"use client";

import { usePathname } from "next/navigation";
import { mainNavigation } from "@/config/navigation";
import {
  isNavigationItemActive,
  NavLink,
} from "@/components/navigation/NavLink";

export function DesktopNavigation() {
  const pathname = usePathname();
  const links = mainNavigation.filter((item) => item.type === "link");

  return (
    <nav
      aria-label="Navegação principal"
      className="hidden min-w-0 flex-1 items-center justify-center min-[1200px]:flex"
    >
      <ul className="flex items-center gap-4 xl:gap-5">
        {links.map((item) => (
          <li key={item.id}>
            <NavLink
              item={item}
              active={isNavigationItemActive(pathname, item.href)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
