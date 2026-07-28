import type { ComponentPropsWithoutRef, ElementType } from "react";
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
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export function Section<T extends ElementType = "section">({
  as,
  density = "standard",
  className,
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";
  return <Component className={cn(densities[density], className)} {...props} />;
}
