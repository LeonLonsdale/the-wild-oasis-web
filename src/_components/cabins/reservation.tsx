import { getBookedDatesByCabinId, getSettings } from "@/_lib/data-service";
import { ReservationProps, TAuthSession } from "@/_lib/types";
import DateSelector from "./date-selector";
import ReservationForm from "./reservation-form";
import { auth } from "@/_lib/auth";
import LoginMessage from "./login-message";

export default async function Reservation({ cabin }: ReservationProps) {
  const cabinId = cabin.id;
  const [settings, bookings] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabinId),
  ]);

  const session: TAuthSession = await auth();

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector settings={settings} bookedDates={bookings} cabin={cabin} />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
