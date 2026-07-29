import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { AtmosphericSurfaceVariant } from "@/types/theme";
import { cn } from "@/lib/utils";

const densities = {
  compact: "py-8 md:py-10",
  standard: "py-14 md:py-20",
  spacious: "py-20 md:py-28 lg:py-32",
  cinematic: "py-24 md:py-36 lg:py-44",
} as const;

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  density?: keyof typeof densities;
  surface?: AtmosphericSurfaceVariant;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export function Section<T extends ElementType = "section">({
  as,
  density = "standard",
  surface,
  className,
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";
  return (
    <Component
      data-surface={surface}
      className={cn(
        densities[density],
        surface && "atmospheric-surface",
        className,
      )}
      {...props}
    />
  );
}
