import type { HTMLAttributes } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Circle,
  Info,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const states = {
  neutral: {
    icon: Circle,
    className: "bg-[var(--theme-status-neutral-bg,var(--if-warm-100))] text-[var(--theme-status-neutral-text,var(--if-ink-800))]",
  },
  success: {
    icon: CheckCircle2,
    className: "bg-[var(--theme-status-success-bg,var(--if-green-100))] text-[var(--theme-status-success-text,var(--semantic-success))]",
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-[var(--theme-status-warning-bg,var(--semantic-warning-surface))] text-[var(--theme-status-warning-text,var(--semantic-warning))]",
  },
  danger: {
    icon: XCircle,
    className: "bg-[var(--theme-status-danger-bg,var(--semantic-danger-surface))] text-[var(--theme-status-danger-text,var(--semantic-danger))]",
  },
  info: {
    icon: Info,
    className: "bg-[var(--theme-status-info-bg,var(--semantic-info-surface))] text-[var(--theme-status-info-text,var(--semantic-info))]",
  },
} as const;

type StatusBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  state?: keyof typeof states;
};

export function StatusBadge({
  state = "neutral",
  className,
  children,
  ...props
}: StatusBadgeProps) {
  const Icon = states[state].icon;
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center gap-1.5 rounded-[var(--radius-full)] px-2.5 py-1 text-sm font-bold",
        states[state].className,
        className,
      )}
      {...props}
    >
      <Icon aria-hidden className="size-3.5" />
      {children}
    </span>
  );
}
