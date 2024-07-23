import { PropsWithChildren } from "react";

// Common types
export type DatabaseId = { id: string };
export type DatabaseCreatedAt = { created_at: string };
export type Email = string;

// Cabin types
export type Cabin = {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
};
export type CabinDB = Cabin & DatabaseId;
export type CabinsList = Omit<CabinDB, "description">;

// Booking types
export type Booking = {
  guestId: string;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  cabinPrice: number;
  extrasPrice: number;
  hasBreakfast: boolean;
  isPaid: boolean;
  status: "checked-in" | "checked-out" | "unconfirmed";
  observations: string | null;
  cabins: {
    name: string;
    image: string;
  };
};
export type BookingDB = Booking & DatabaseId & DatabaseCreatedAt;
export type BookingsList = Omit<
  BookingDB,
  "observations status isPaid hasBreakfast extrasPrice cabinPrice"
>;

// Guest types
export type Guest = {
  fullName: string;
  email: Email;
  nationalID: string;
  nationality: string;
  countryFlag: string;
};
export type GuestDB = Guest & DatabaseId & DatabaseCreatedAt;

// Prop types
export type WithChildren = Readonly<PropsWithChildren>;
export type ReservationCardProps = Readonly<{ booking: BookingDB }>;
export type DeleteReservationProps = Readonly<{
  bookingId: DatabaseId;
}>;
export type CabinCardProps = Readonly<{ cabin: CabinsList }>;
export type NavLinkProps = Readonly<{ href: string } & WithChildren>;
export type CabinPageProps = Readonly<{ params: { cabinId: DatabaseId } }>;
export type ErrorProps = Readonly<{ error: Error; reset: () => void }>;
