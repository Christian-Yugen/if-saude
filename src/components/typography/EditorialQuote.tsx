import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type EditorialQuoteProps = HTMLAttributes<HTMLQuoteElement> & {
  author?: string;
};

export function EditorialQuote({
  author,
  className,
  children,
  ...props
}: EditorialQuoteProps) {
  return (
    <figure className={cn("relative border-l border-[var(--theme-accent,var(--if-green-600))] pl-6", className)}>
      <blockquote
        className="font-editorial text-[length:var(--font-size-3xl)] leading-[1.14] text-balance"
        {...props}
      >
        <span aria-hidden className="mr-1 text-[var(--theme-accent,var(--if-green-600))]">
          “
        </span>
        {children}
        <span aria-hidden className="ml-1 text-[var(--theme-accent,var(--if-green-600))]">
          ”
        </span>
      </blockquote>
      {author && (
        <figcaption className="mt-5 text-sm font-bold uppercase tracking-[var(--tracking-label)] text-[var(--theme-text-secondary,var(--text-secondary))]">
          {author}
        </figcaption>
      )}
    </figure>
  );
}
