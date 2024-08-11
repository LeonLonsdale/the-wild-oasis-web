"use server";

import { auth } from "@/_lib/auth";
import { getBookings } from "@/_lib/data-service";
import { supabase } from "@/_lib/supabase";
import { validateSession } from "@/_lib/utils";
import { revalidatePath } from "next/cache";

export const deleteReservation = async (bookingId: number) => {
  const session = await auth();
  const { id } = await validateSession(session);

  const guestBookings = await getBookings(id);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  const isGuestBooking = guestBookingIds.includes(bookingId);

  if (!isGuestBooking)
    throw new Error("You do not have permission to delete this reservation");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Reservation could not be deleted");

  revalidatePath("account/reservations");
};
