import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MetricPanelProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  value: ReactNode;
  label: string;
  description?: string;
  divider?: boolean;
  tone?: "light" | "dark";
};

export function MetricPanel({
  value,
  label,
  description,
  divider = false,
  tone = "light",
  className,
  ...props
}: MetricPanelProps) {
  return (
    <div
      className={cn(
        "p-6 md:p-8",
        divider && "border-t md:border-l md:border-t-0",
        tone === "dark"
          ? "border-[var(--theme-dark-border,var(--border-default))] bg-[var(--theme-surface-dark,var(--surface-dark))] text-[var(--theme-text-inverse,var(--text-inverse))]"
          : "border-[var(--theme-border,var(--border-subtle))] bg-[var(--theme-surface-primary,var(--surface-raised))] text-[var(--theme-text-primary,var(--text-primary))]",
        className,
      )}
      {...props}
    >
      <p className="font-editorial text-[length:var(--font-size-4xl)] leading-none">{value}</p>
      <p className="mt-4 font-bold">{label}</p>
      {description && (
        <p className={cn("mt-2 text-sm", tone === "dark" ? "text-[var(--theme-text-on-dark-secondary,var(--if-green-200))]" : "text-[var(--theme-text-secondary,var(--text-secondary))]")}>
          {description}
        </p>
      )}
    </div>
  );
}
