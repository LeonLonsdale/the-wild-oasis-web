"use server";

import { signIn } from "@/_lib/auth";

export async function loginAction() {
  console.log("loginAction");
  await signIn("google", { redirectTo: "/account" });
}
