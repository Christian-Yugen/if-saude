import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageShellElement = "div" | "main" | "section" | "article";

type PageShellProps = HTMLAttributes<HTMLElement> & {
  as?: PageShellElement;
  children: ReactNode;
};

export function PageShell({
  as: Component = "div",
  children,
  className,
  ...props
}: PageShellProps) {
  return (
    <Component className={cn("min-h-screen", className)} {...props}>
      {children}
    </Component>
  );
}
