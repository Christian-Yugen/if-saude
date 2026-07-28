import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const variants = {
  standard: "font-sans text-[var(--theme-text-primary,var(--text-primary))]",
  editorial: "font-editorial font-normal text-[var(--theme-text-primary,var(--text-primary))]",
  inverse: "font-sans text-[var(--theme-text-inverse,var(--text-inverse))]",
} as const;

const sizes = {
  lg: "text-[length:var(--font-size-4xl)]",
  xl: "text-[length:var(--font-size-5xl)]",
  display: "text-[length:var(--font-size-display)]",
} as const;

type HeadingElement = "h1" | "h2" | "h3" | "h4";

type DisplayTitleProps<T extends HeadingElement = "h1"> = {
  as?: T;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export function DisplayTitle<T extends HeadingElement = "h1">({
  as,
  variant = "standard",
  size = "xl",
  className,
  ...props
}: DisplayTitleProps<T>) {
  const Component = as ?? "h1";
  return (
    <Component
      className={cn(
        "text-balance max-w-[18ch] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)]",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
