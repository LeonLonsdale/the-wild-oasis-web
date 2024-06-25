interface Paths {
  [key: string]: {
    label: string;
    path: (...args: (string | number)[]) => string;
    navs: string[];
  };
}

export type NavLink = {
  label: string;
  path: (...args: (string | number)[]) => string;
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
    label: "Account",
    path: () => "/account",
    navs: ["mainNav"],
  },
};

export const getPath = (key: string) => paths[key].path();

export const makeNav = (keys: string[]): NavLink[] =>
  keys.map((key) => paths[key] || null).filter((navLink) => navLink !== null);
