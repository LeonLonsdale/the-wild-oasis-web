import { NextRequest } from "next/server";
import { auth } from "@/_lib/auth";

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
