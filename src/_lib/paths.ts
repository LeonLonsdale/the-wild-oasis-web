import { pathManager } from "next-path-helper";

export const { getPath, getNavList, makeNavList, addPathsToNav } = pathManager;

export const navList = makeNavList(["home", "about", "cabins", "account"]);
