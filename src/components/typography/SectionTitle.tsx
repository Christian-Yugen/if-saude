import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type HeadingElement = "h1" | "h2" | "h3" | "h4";

type SectionTitleProps = {
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  maxWidth?: "sm" | "md" | "lg";
  as?: HeadingElement;
  className?: string;
  headingProps?: Omit<ComponentPropsWithoutRef<HeadingElement>, "children">;
};

const widths = { sm: "max-w-xl", md: "max-w-2xl", lg: "max-w-4xl" } as const;
const aligns = {
  left: "items-start text-left",
  center: "mx-auto items-center text-center",
  right: "ml-auto items-end text-right",
} as const;

export function SectionTitle({
  title,
  description,
  align = "left",
  maxWidth = "md",
  as,
  className,
  headingProps,
}: SectionTitleProps) {
  const Heading = as ?? "h2";
  return (
    <div className={cn("flex flex-col gap-4", widths[maxWidth], aligns[align], className)}>
      <Heading
        {...headingProps}
        className={cn(
          "text-balance text-[length:var(--font-size-3xl)] font-semibold",
          headingProps?.className,
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className="text-[length:var(--font-size-lg)] leading-[var(--leading-body)] text-[var(--theme-text-secondary,var(--text-secondary))]">
          {description}
        </p>
      )}
    </div>
  );
}
