import type { HTMLAttributes } from "react";
import type { PageAtmosphereVariant } from "@/types/theme";
import { cn } from "@/lib/utils";

type PageAtmosphereProps = HTMLAttributes<HTMLDivElement> & {
  variant: PageAtmosphereVariant;
  decorative?: boolean;
};

export function PageAtmosphere({
  variant,
  decorative = true,
  className,
  ...props
}: PageAtmosphereProps) {
  return (
    <div
      data-atmosphere={variant}
      className={cn(decorative && "atmosphere-decor", className)}
      {...props}
    />
  );
}
