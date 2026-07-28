"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ClientPortalLink } from "@/components/navigation/ClientPortalLink";
import {
  isNavigationItemActive,
  NavLink,
} from "@/components/navigation/NavLink";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

const menuId = "mobile-site-navigation";

export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const links = mainNavigation.filter((item) => item.type === "link");

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) closeMenu();
  };

  return (
    <div className="min-[1200px]:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-[var(--radius-md)] text-[var(--header-text)] transition-colors hover:bg-[var(--header-hover)]"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
      </button>

      <dialog
        ref={dialogRef}
        id={menuId}
        className="mobile-menu"
        aria-labelledby={`${menuId}-title`}
        onCancel={closeMenu}
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
        onClick={handleDialogClick}
      >
        <div className="mobile-menu__panel">
          <div className="flex items-center justify-between gap-6">
            <p id={`${menuId}-title`} className="text-lg font-extrabold tracking-[-0.03em]">
              {siteConfig.name}
            </p>
            <button
              type="button"
              autoFocus
              className="inline-flex size-11 items-center justify-center rounded-[var(--radius-md)] text-[var(--if-white)] hover:bg-[var(--if-green-900)]"
              aria-label="Fechar menu"
              onClick={closeMenu}
            >
              <X aria-hidden className="size-5" />
            </button>
          </div>

          <nav aria-label="Navegação principal mobile" className="mt-10">
            <ul className="divide-y divide-[var(--if-green-800)]">
              {links.map((item) => (
                <li key={item.id}>
                  <NavLink
                    item={item}
                    mode="mobile"
                    active={isNavigationItemActive(pathname, item.href)}
                    onNavigate={closeMenu}
                    className="py-3 text-[var(--if-green-100)]"
                  />
                </li>
              ))}
            </ul>
          </nav>

          <ClientPortalLink
            fullWidth
            onClick={closeMenu}
            className="mt-8"
          />
          <p className="mt-8 border-t border-[var(--if-green-800)] pt-6 text-sm text-[var(--if-green-200)]">
            Saúde ocupacional e segurança do trabalho.
          </p>
        </div>
      </dialog>
    </div>
  );
}
