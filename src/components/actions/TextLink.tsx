import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type TextLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    children: ReactNode;
    showArrow?: boolean;
  };

export function TextLink({
  children,
  showArrow = true,
  className,
  ...props
}: TextLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center gap-1.5 font-bold text-[var(--theme-accent-text,var(--text-accent))] underline decoration-[var(--theme-accent,var(--if-green-300))] decoration-1 underline-offset-4 transition-colors hover:text-[var(--theme-text-primary,var(--text-primary))]",
        className,
      )}
      {...props}
    >
      {children}
      {showArrow && <ArrowUpRight aria-hidden className="size-4" />}
    </Link>
  );
}
