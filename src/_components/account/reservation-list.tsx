"use client";

import { ReservationListProps } from "@/_lib/types";
import ReservationCard from "./reservation-card";
import { useOptimistic } from "react";
import * as actions from "@/_actions";

export default function ReservationList({ bookings }: ReservationListProps) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  const handleDelete = async (id: number) => {
    optimisticDelete(id);
    await actions.deleteReservation(id);
  };

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
