import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border-[var(--theme-control-border,var(--border-default))] bg-[var(--theme-control-bg,var(--if-green-800))] text-[var(--theme-control-text,var(--if-white))] hover:bg-[var(--theme-control-hover,var(--if-green-900))]",
  secondary:
    "border-transparent bg-[var(--theme-control-secondary-bg,var(--if-green-100))] text-[var(--theme-control-secondary-text,var(--if-green-950))] hover:bg-[var(--theme-control-secondary-hover,var(--if-green-200))]",
  outline:
    "border-[var(--theme-border,var(--border-default))] bg-transparent text-[var(--theme-text-primary,var(--text-primary))] hover:bg-[var(--theme-surface-secondary,var(--surface-muted))]",
  ghost:
    "border-transparent bg-transparent text-[var(--theme-text-primary,var(--text-primary))] hover:bg-[var(--theme-surface-secondary,var(--surface-muted))]",
  inverse:
    "border-transparent bg-[var(--theme-control-inverse-bg,var(--if-white))] text-[var(--theme-control-inverse-text,var(--if-green-950))] hover:bg-[var(--theme-control-inverse-hover,var(--if-green-100))]",
  accent:
    "border-transparent bg-[var(--theme-control-accent-bg,var(--if-orange-500))] text-[var(--theme-control-accent-text,var(--if-ink-950))] hover:brightness-95 active:brightness-90",
} as const;

const sizes = {
  sm: "min-h-11 px-4 text-sm",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-14 px-6 text-base",
} as const;

type ButtonCommonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
};

type LinkButtonProps = ButtonCommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href"> & {
    href: string;
    disabled?: boolean;
  };

type NativeButtonProps = ButtonCommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  if (isLinkButton(props)) {
    const {
      href,
      children,
      variant = "primary",
      size = "md",
      iconBefore,
      iconAfter,
      loading = false,
      fullWidth = false,
      disabled = false,
      className,
      ...anchorProps
    } = props;
    const isDisabled = disabled || loading;
    const classes = buttonClasses({
      variant,
      size,
      fullWidth,
      disabled: isDisabled,
      className,
    });
    const content = buttonContent({ children, iconBefore, iconAfter, loading });

    if (isDisabled) {
      return (
        <a
          {...anchorProps}
          className={classes}
          aria-disabled="true"
          aria-busy={loading || undefined}
          tabIndex={-1}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        {...anchorProps}
        href={href}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  const {
    children,
    variant = "primary",
    size = "md",
    iconBefore,
    iconAfter,
    loading = false,
    fullWidth = false,
    disabled = false,
    className,
    type = "button",
    ...buttonProps
  } = props;
  const isDisabled = disabled || loading;

  return (
    <button
      {...buttonProps}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={buttonClasses({
        variant,
        size,
        fullWidth,
        disabled: isDisabled,
        className,
      })}
    >
      {buttonContent({ children, iconBefore, iconAfter, loading })}
    </button>
  );
}

type ButtonClassesOptions = {
  variant: keyof typeof variants;
  size: keyof typeof sizes;
  fullWidth: boolean;
  disabled: boolean;
  className?: string;
};

function buttonClasses({
  variant,
  size,
  fullWidth,
  disabled,
  className,
}: ButtonClassesOptions): string {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-[var(--radius-md)] border font-bold leading-none transition-[background-color,border-color,color,transform,filter] duration-[var(--duration-fast)] active:translate-y-px disabled:cursor-not-allowed disabled:opacity-45",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    disabled && "pointer-events-none cursor-not-allowed opacity-45",
    className,
  );
}

type ButtonContentOptions = Pick<
  ButtonCommonProps,
  "children" | "iconBefore" | "iconAfter" | "loading"
>;

function buttonContent({
  children,
  iconBefore,
  iconAfter,
  loading,
}: ButtonContentOptions): ReactNode {
  return (
    <>
      {loading ? <LoaderCircle aria-hidden className="size-4 animate-spin" /> : iconBefore}
      <span>{children}</span>
      {loading && (
        <span className="sr-only" role="status" aria-live="polite">
          Carregando
        </span>
      )}
      {!loading && iconAfter}
    </>
  );
}
