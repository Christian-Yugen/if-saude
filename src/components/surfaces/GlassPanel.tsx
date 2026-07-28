import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GlassPanel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass-panel rounded-[var(--radius-lg)] border p-6 text-[var(--theme-text-primary,var(--text-primary))] shadow-[var(--shadow-sm)]",
        className,
      )}
      {...props}
    />
  );
}
