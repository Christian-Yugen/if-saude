import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { AtmosphericSurfaceVariant } from "@/types/theme";
import { cn } from "@/lib/utils";

type AtmosphericSurfaceProps<T extends ElementType = "div"> = {
  as?: T;
  variant: AtmosphericSurfaceVariant;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/**
 * Section-level visual atmosphere. It changes light, depth and contrast without
 * changing the page's contextual theme (human, clinical, industrial, etc.).
 */
export function AtmosphericSurface<T extends ElementType = "div">({
  as,
  variant,
  className,
  ...props
}: AtmosphericSurfaceProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      data-surface={variant}
      className={cn("atmospheric-surface", className)}
      {...props}
    />
  );
}
