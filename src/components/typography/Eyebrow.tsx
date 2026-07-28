import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = HTMLAttributes<HTMLParagraphElement> & {
  line?: boolean;
};

export function Eyebrow({ line = false, className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-sm font-extrabold uppercase tracking-[var(--tracking-label)] text-[var(--theme-accent-text,var(--if-green-700))]",
        className,
      )}
      {...props}
    >
      {line && <span aria-hidden className="h-px w-8 bg-current" />}
      {children}
    </p>
  );
}
