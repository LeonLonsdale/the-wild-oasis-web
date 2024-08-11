import { Session } from "next-auth";

export const validateSession = async (session: Session | null) => {
  if (!session) throw new Error("You must be logged in to perform this action");
  if (!session.user)
    throw new Error("You must be logged in to perform this action");

  const user = session.user;
  const id = Number(user.id);
  const email = user.email;
  return { user, id, email };
};
