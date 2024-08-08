import { auth } from "@/_lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guest Area",
};

export default async function CabinsPage() {
  const session = await auth();
  const name = session?.user?.name?.split(" ").at(0);

  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {name}
    </h2>
  );
}
