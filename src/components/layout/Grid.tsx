import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const columnsMap = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
  6: "md:grid-cols-3 lg:grid-cols-6",
  12: "md:grid-cols-12",
} as const;

const gaps = {
  sm: "gap-3 md:gap-4",
  md: "gap-5 md:gap-6",
  lg: "gap-6 md:gap-8",
  xl: "gap-8 md:gap-12",
} as const;

const alignments = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

type GridProps = HTMLAttributes<HTMLDivElement> & {
  columns?: keyof typeof columnsMap;
  gap?: keyof typeof gaps;
  align?: keyof typeof alignments;
};

export function Grid({
  columns = 12,
  gap = "md",
  align = "stretch",
  className,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        "grid min-w-0 grid-cols-1",
        columnsMap[columns],
        gaps[gap],
        alignments[align],
        className,
      )}
      {...props}
    />
  );
}
