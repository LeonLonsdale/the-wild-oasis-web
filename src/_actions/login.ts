"use server";

import { signIn } from "@/_lib/auth";

export const loginAction = async () =>
  await signIn("google", { redirectTo: "/account" });
