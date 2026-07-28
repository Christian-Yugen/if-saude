import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

const widths = {
  page: "max-w-[var(--width-page)]",
  content: "max-w-[var(--width-content)]",
  reading: "max-w-[var(--width-reading)]",
  full: "max-w-none",
} as const;

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  size?: keyof typeof widths;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export function Container<T extends ElementType = "div">({
  as,
  size = "page",
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 md:px-8 lg:px-12 2xl:px-16",
        widths[size],
        className,
      )}
      {...props}
    />
  );
}
