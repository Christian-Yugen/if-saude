import type { MouseEventHandler } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/actions/Button";
import { utilityNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

type ClientPortalLinkProps = {
  className?: string;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function ClientPortalLink({
  className,
  fullWidth = false,
  onClick,
}: ClientPortalLinkProps) {
  const portalItem = utilityNavigation.find(
    (item) => item.type === "link" && item.id === "client-portal",
  );

  if (!portalItem || portalItem.type !== "link") return null;

  return (
    <Button
      href={portalItem.href}
      size="sm"
      fullWidth={fullWidth}
      onClick={onClick}
      iconAfter={<ArrowUpRight aria-hidden className="size-4" />}
      className={cn(
        "border-[var(--header-border)] bg-[var(--header-cta-bg)] text-[var(--header-cta-text)] hover:brightness-95",
        className,
      )}
    >
      {portalItem.label}
    </Button>
  );
}
