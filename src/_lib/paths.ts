export type PathFn = (...args: (string | number)[]) => string;

export type NavLink = {
  label: string;
  path: PathFn;
};
export type Paths = {
  [key: string]: {
    navs: string[];
  } & NavLink;
};

const paths: Paths = {
  home: {
    label: "Home",
    path: () => "/",
    navs: ["mainNav"],
  },
  about: {
    label: "About",
    path: () => "/about",
    navs: ["mainNav"],
  },
  cabins: {
    label: "Cabins",
    path: () => "/cabins",
    navs: ["mainNav"],
  },
  account: {
    label: "Guest Area",
    path: () => "/account",
    navs: ["mainNav"],
  },
};

export const getPath = (key: string) => paths[key]?.path() ?? null;

export const makeNav = (keys: string[]): NavLink[] =>
  keys.map((key) => paths[key] ?? null).filter((navLink) => navLink !== null);
