"use server";

import { auth } from "@/_lib/auth";
import { supabase } from "@/_lib/supabase";
import { NewBooking } from "@/_lib/types";
import { validateSession } from "@/_lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createReservation = async (
  bookingData: NewBooking,
  formData: FormData
) => {
  const session = await auth();
  const { id } = await validateSession(session);

  if (!bookingData.startDate || !bookingData.endDate)
    throw new Error("You must select a date range");

  const newBooking = {
    ...bookingData,
    guestId: id,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations")?.slice(0, 1000) as string,
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    status: "unconfirmed",
    hasBreakfast: false,
    isPaid: false,
  };

  const { error } = await supabase
    .from("bookings")
    .insert([newBooking])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("An error occurred while creating the reservation");
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
};
