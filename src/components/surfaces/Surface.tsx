import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-[var(--theme-surface-primary,var(--surface-raised))] text-[var(--theme-text-primary,var(--text-primary))]",
  muted: "bg-[var(--theme-surface-secondary,var(--surface-muted))] text-[var(--theme-text-primary,var(--text-primary))]",
  ivory: "bg-[var(--theme-surface-editorial,var(--surface-ivory))] text-[var(--theme-text-primary,var(--text-primary))]",
  dark: "bg-[var(--theme-surface-dark,var(--surface-dark))] text-[var(--theme-text-inverse,var(--text-inverse))]",
  outlined: "border border-[var(--theme-border,var(--border-default))] bg-transparent text-[var(--theme-text-primary,var(--text-primary))]",
  elevated: "bg-[var(--theme-surface-primary,var(--surface-raised))] text-[var(--theme-text-primary,var(--text-primary))] shadow-[var(--shadow-md)]",
} as const;

type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  variant?: keyof typeof variants;
  padding?: "none" | "sm" | "md" | "lg";
};

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-12",
} as const;

export function Surface({
  variant = "default",
  padding = "md",
  className,
  ...props
}: SurfaceProps) {
  return (
    <div
      className={cn("rounded-[var(--radius-lg)]", variants[variant], paddings[padding], className)}
      {...props}
    />
  );
}
