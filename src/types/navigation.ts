export type NavigationPosition = "primary" | "secondary";
export type NavigationGroup =
  | "solutions"
  | "institutional"
  | "content-contact";

type NavigationItemBase = {
  id: string;
  label: string;
  description?: string;
  highlighted?: boolean;
  position: NavigationPosition;
  footerGroup?: NavigationGroup;
};

export type NavigationLinkItem = NavigationItemBase & {
  type: "link";
  href: string;
  external?: boolean;
  disabled?: boolean;
};

export type NavigationGroupItem = NavigationItemBase & {
  type: "group";
  children: readonly NavigationLinkItem[];
};

export type NavigationItem = NavigationLinkItem | NavigationGroupItem;

export type NavigationMode = "desktop" | "mobile";

export type HeaderTheme =
  | "auto"
  | "light"
  | "dark"
  | "transparent-light"
  | "transparent-dark";
