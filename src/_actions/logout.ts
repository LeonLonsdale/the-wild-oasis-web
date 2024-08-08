"use server";

import { signOut } from "@/_lib/auth";

export const logoutAction = async () => await signOut({ redirectTo: "/" });
