import { PropsWithChildren } from "react";

export type DatabaseId = {
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

export type Guest = {
  created_at: string; // Assuming date is in ISO string format
  fullName: string;
  email: string;
  nationalID: string;
  nationality: string;
  countryFlag: string;
};

export type CabinDB = Cabin & DatabaseId;
export type BookingDB = Booking & DatabaseId;
export type GuestDB = Guest & DatabaseId;

// Type fragments

export type Email = Pick<Guest, "email">["email"];

// Prop types

export type WithChildren = Readonly<PropsWithChildren>;
export type ReservationCardProps = Readonly<{ booking: BookingDB }>;
export type DeleteReservationProps = Readonly<{
  bookingId: DatabaseId;
}>;
export type CabinCardProps = Readonly<{ cabin: CabinDB }>;
export type NavLinkProps = Readonly<{ href: string } & WithChildren>;
