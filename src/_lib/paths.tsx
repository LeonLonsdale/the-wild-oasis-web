import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { DatabaseId } from "./types";

export type PathFn = (...args: PathFnArg[]) => string;
export type PathFnArg = string | number | DatabaseId;

export type NavLink = {
  label: string;
  path: PathFn;
  icon?: React.ReactNode;
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
  viewCabin: {
    label: "View Cabin",
    path: (...args: (string | number | DatabaseId)[]) => `/cabins/${args[0]}`,
    navs: ["cabinsNav"],
  },
  account: {
    label: "My Account",
    path: () => "/account",
    navs: ["mainNav"],
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  accountReservations: {
    label: "Reservations",
    path: () => "/account/reservations",
    navs: ["accountNav"],
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  accountProfile: {
    label: "Profile",
    path: () => "/account/profile",
    navs: ["accountNav"],
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
};

export const getPath = (key: string, ...args: PathFnArg[]) =>
  args.length ? paths[key].path(...args) : paths[key].path();

export const makeNav = (keys: string[]): NavLink[] =>
  keys.map((key) => paths[key] ?? null).filter((navLink) => navLink !== null);
