import Link from "next/link";
import { cn } from "@/lib/utils";
import type {
  NavigationLinkItem,
  NavigationMode,
} from "@/types/navigation";

type NavLinkProps = {
  item: NavigationLinkItem;
  active: boolean;
  mode?: NavigationMode;
  className?: string;
  onNavigate?: () => void;
};

export function normalizePathname(pathname: string): string {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "") || "/";
}

export function isNavigationItemActive(
  pathname: string,
  href: string,
): boolean {
  const currentPath = normalizePathname(pathname);
  const targetPath = normalizePathname(href);

  if (targetPath === "/") return currentPath === "/";
  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
}

export function NavLink({
  item,
  active,
  mode = "desktop",
  className,
  onNavigate,
}: NavLinkProps) {
  const classes = cn(
    "site-nav-link inline-flex min-h-11 items-center py-2 font-semibold transition-colors duration-[var(--duration-fast)]",
    mode === "desktop" ? "text-sm" : "w-full text-[length:var(--font-size-xl)]",
    item.disabled && "cursor-not-allowed opacity-50",
    className,
  );

  if (item.disabled) {
    return (
      <span className={classes} aria-disabled="true">
        {item.label}
      </span>
    );
  }

  return (
    <Link
      href={item.href}
      className={classes}
      aria-current={active ? "page" : undefined}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}
