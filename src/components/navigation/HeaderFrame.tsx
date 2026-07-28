"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { HeaderTheme } from "@/types/navigation";

type HeaderFrameProps = {
  children: ReactNode;
  theme: HeaderTheme;
};

export function HeaderFrame({ children, theme }: HeaderFrameProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      setScrolled(window.scrollY > 24);
      frame = 0;
    };

    const handleScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className="site-header"
      data-scrolled={scrolled}
      data-header-theme={theme}
    >
      <div className="site-header__surface">{children}</div>
    </header>
  );
}
