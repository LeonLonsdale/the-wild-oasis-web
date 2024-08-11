import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export type PathFn = (...args: PathFnArg[]) => string;
export type PathFnArg = string | number;

export type PathItem = {
  label: string;
  path: PathFn;
  icon?: React.ReactNode;
};
export type Paths = Record<string, PathItem>;

const paths: Paths = {
  home: {
    label: "Home",
    path: () => "/",
  },
  about: {
    label: "About",
    path: () => "/about",
  },
  cabins: {
    label: "Cabins",
    path: () => "/cabins",
  },
  viewCabin: {
    label: "View Cabin",
    path: (...args: (string | number)[]) => `/cabins/${args[0]}`,
  },
  account: {
    label: "My Account",
    path: () => "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  accountReservations: {
    label: "Reservations",
    path: () => "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  accountProfile: {
    label: "Profile",
    path: () => "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
};

export const getPath = (key: string, ...args: PathFnArg[]) =>
  args.length ? paths[key].path(...args) : paths[key].path();

export const makeNav = (keys: string[]): PathItem[] =>
  keys.map((key) => paths[key] ?? null).filter((navLink) => navLink !== null);
