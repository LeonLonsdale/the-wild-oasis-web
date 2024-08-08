import NextAuth, { Session, User } from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";
import { NextAuthAuthorizedCallback, NextAuthSignInCallback } from "./types";

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
    }: NextAuthAuthorizedCallback): boolean | Promise<boolean> {
      return !!auth?.user;
    },
    // like middleware - runs before the session is created and logged in fully
    // Useful for checking if user exists in the database, adding user if not.
    async signIn({
      user,
      account,
      profile,
    }: NextAuthSignInCallback): Promise<boolean> {
      try {
        const email = user?.email;
        const name = user?.name;

        if (!email || !name) return false;

        const existingGuest = await getGuest(email);
        if (!existingGuest) await createGuest({ email: email, fullName: name });

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }: { session: Session; user: User }) {
      const email = user?.email;
      if (!email) return session;
      const guest = await getGuest(email);
      if (session?.user && guest) session.user.id = guest.id;
      return session;
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
