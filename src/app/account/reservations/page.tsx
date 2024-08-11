import ReservationCard from "@/_components/account/reservation-card";
import { auth } from "@/_lib/auth";
import { getBookings } from "@/_lib/data-service";
import { Booking, BookingDB, ProfileReservations } from "@/_lib/types";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Reservations",
};

export default async function ReservationsPage() {
  const session = await auth();
  if (!session || !session.user) redirect("/login");
  const id = session.user.id;
  if (!id) redirect("/login");

  const bookings = await getBookings(84);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
