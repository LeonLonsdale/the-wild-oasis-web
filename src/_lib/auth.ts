import NextAuth, { Session } from "next-auth";
import Google from "next-auth/providers/google";
import { NextRequest } from "next/server";
import { TAuthSession } from "./types";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({
      auth,
      request,
    }: {
      auth: TAuthSession;
      request: NextRequest;
    }) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
