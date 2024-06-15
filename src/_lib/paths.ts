export const paths = {
  home: {
    root: { path: "/", label: "Home" },
  },
  cabins: {
    root: { path: "/cabins", label: "Cabins" },
  },
  about: {
    root: { path: "/about", label: "About" },
  },
  account: {
    root: { path: "/account", label: "Your Account" },
  },
};

export const mainNavItems = Object.values(paths)
  .map((item) => ("root" in item ? item.root : undefined))
  .filter((root) => root !== undefined);
