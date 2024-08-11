"use server";

import { auth } from "@/_lib/auth";
import { supabase } from "@/_lib/supabase";
import { revalidatePath } from "next/cache";

export const updateProfile = async (formData: FormData) => {
  const session = await auth();
  if (!session || !session.user)
    throw new Error("You must be logged in to update your profile");

  const [nationality = "", countryFlag = ""] =
    formData.get("nationality")?.toString().split("%") ?? [];
  const nationalID = formData.get("nationalID")?.toString() || "";

  if (nationalID) {
    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
      throw new Error("Invalid national ID number");
    }
  }

  const updatedGuest = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updatedGuest)
    .eq("id", session.user.id);

  if (error) throw new Error("Could not update profile");

  revalidatePath("/account/profile");
};
