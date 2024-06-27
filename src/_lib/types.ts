import { PropsWithChildren } from "react";

type DatabaseId = {
  id: string;
};

export type Cabin = {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
};

export type Booking = {
  guestId: string;
  startDate: string; // Assuming date is in ISO string format
  endDate: string; // Assuming date is in ISO string format
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status: string;
  created_at: string; // Assuming date is in ISO string format
  cabins: {
    name: string;
    image: string;
  };
};

export type CabinDB = Cabin & DatabaseId;
export type BookingDB = Booking & DatabaseId;

// Type fragments

export type BookingId = Pick<BookingDB, "id">["id"];
export type CabinId = Pick<CabinDB, "id">["id"];

// Prop types

export type WithChildren = Readonly<PropsWithChildren>;
export type ReservationCardProps = Readonly<{ booking: BookingDB }>;
export type DeleteReservationProps = Readonly<{
  bookingId: BookingId;
}>;
export type CabinCardProps = Readonly<{ cabin: CabinDB }>;
export type NavLinkProps = Readonly<{ href: string } & WithChildren>;
