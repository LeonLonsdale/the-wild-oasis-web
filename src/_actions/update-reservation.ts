"use server";

import { auth } from "@/_lib/auth";
import { getBookings } from "@/_lib/data-service";
import { supabase } from "@/_lib/supabase";
import { validateSession } from "@/_lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updateReservation = async (formData: FormData) => {
  const session = await auth();
  const { id } = await validateSession(session);

  const numGuests = Number(formData.get("numGuests")?.toString());
  const observations =
    formData.get("observations")?.toString().slice(0, 1000) || "";
  const bookingId = Number(formData.get("bookingId"));

  const updatedBooking = { numGuests, observations };

  const guestBookings = await getBookings(id);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  const isGuestBooking = guestBookingIds.includes(bookingId);

  if (!isGuestBooking)
    throw new Error("You do not have permission to edit this reservation");

  const { error } = await supabase
    .from("bookings")
    .update(updatedBooking)
    .eq("id", bookingId);

  if (error) throw new Error("Reservation could not be updated");

  revalidatePath(`/account/reservations/edit/${bookingId}`);
  redirect("/account/reservations");
};
