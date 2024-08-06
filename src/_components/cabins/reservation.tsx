import { getBookedDatesByCabinId, getSettings } from "@/_lib/data-service";
import DateSelector from "./date-selector";
import ReservationForm from "./reservation-form";
import { ReservationProps } from "@/_lib/types";
import { ReservationContextProvider } from "@/_contexts/ReservationContext";

export default async function Reservation({ cabin }: ReservationProps) {
  const cabinId = cabin.id;
  const [settings, bookings] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabinId),
  ]);

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector settings={settings} bookedDates={bookings} cabin={cabin} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
