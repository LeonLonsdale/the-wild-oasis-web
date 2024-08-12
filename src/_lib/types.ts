import { PropsWithChildren } from "react";
import { DateRange } from "react-day-picker";
import { Account, Profile, Session, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { NextRequest } from "next/server";

// #################################################
// Common types
// #################################################

export type DatabaseCreatedAt = string;
export type DatabaseId = number;
// export type Email = string;

// #################################################
// Database Types
// #################################################

// Cabin Types
export type CabinDB = {
  description: string;
  discount: number;
  id: DatabaseId;
  image: string;
  maxCapacity: number;
  name: string;
  regularPrice: number;
};
export type TCabin = Omit<CabinDB, "id">;

// Booking Types
type BookingCabinDetails = {
  image: string;
  name: string;
};
export type BookingDB = {
  cabins: BookingCabinDetails;
  created_at: string;
  endDate: string;
  extrasPrice: number;
  cabinId: number;
  guestId: number;
  hasBreakfast: boolean;
  id: number;
  isPaid: boolean;
  numGuests: number;
  numNights: number;
  observations: string;
  startDate: string;
  status: "checked-in" | "checked-out" | "unconfirmed";
  totalPrice: number;
};
export type Booking = Omit<BookingDB, "created_at" | "id">;
export type ProfileReservations = Pick<
  BookingDB,
  | "id"
  | "created_at"
  | "startDate"
  | "endDate"
  | "numNights"
  | "numGuests"
  | "totalPrice"
  | "guestId"
  | "cabinId"
  | "cabins"
  | "status"
>;

// Guest Types
export type GuestDB = {
  countryFlag?: string;
  created_at?: DatabaseCreatedAt;
  fullName: string;
  nationalID?: string;
  nationality?: string;
  email: string;
} & Omit<User, "name email">;
export type Guest = Omit<GuestDB, "created_at" | "id">;

// Settings
export type Settings = {
  breakfastPrice: number;
  created_at: string;
  id: number;
  maxBookingLength: number;
  maxNumGuestsPerBooking: number;
  minBookingLength: number;
};

// #################################################
// COMPONENT PROPS
// #################################################

// Basic Component Props
export type WithChildren = Readonly<PropsWithChildren>;

// Page Props
export type CabinPageProps = Readonly<{ params: { cabinId: DatabaseId } }>;
export type CabinsPageProps = Readonly<{
  searchParams: { [key: string]: CabinFilterOptions };
}>;
export type ErrorProps = Readonly<{ error: Error; reset: () => void }>;
export type EditReservationPageProps = Readonly<{
  params: { reservationId: number };
}>;

// Feature / Structure Props
export type CabinCardProps = Readonly<{ cabin: CabinsList }>;
export type CabinListProps = Readonly<{ filter: CabinFilter }>;
export type CabinProps = Readonly<{ cabin: CabinDB }>;
export type DateSelectorProps = Readonly<{
  bookedDates: BookedDates;
  cabin: CabinDB;
  settings: Settings;
}>;
export type DeleteReservationProps = Readonly<{ bookingId: number }>;
export type FilterButtonProps = Readonly<
  {
    activeFilter: string;
    filter: CabinFilter;
    onClick: (filter: CabinFilter) => void;
  } & WithChildren
>;
export type NavLinkProps = Readonly<{ href: string } & WithChildren>;
export type ReservationCardProps = Readonly<{ booking: ProfileReservations }>;
export type ReservationFormProps = Readonly<{
  cabin: CabinDB;
  user: User;
}>;
export type ReservationProps = Readonly<{
  cabin: CabinDB;
}>;
export type SelectCountryProps = Readonly<{
  className: string;
  defaultCountry: string;
  id: string;
  name: string;
}>;
export type SubmitButtonProps = Readonly<{ pendingLabel: string }> &
  WithChildren;
export type TextExpanderProps = Readonly<{ numWords: number }> & WithChildren;
export type UpdateProfileFormProps = Readonly<{ guest: GuestDB }> &
  WithChildren;

// #################################################
// Feature Data Types
// #################################################

export type BookedDates = Date[];
// export type BookingDate = Date;
export type BookingsList = Omit<
  BookingDB,
  | "cabinPrice"
  | "extrasPrice"
  | "hasBreakfast"
  | "isPaid"
  | "observations"
  | "status"
>;
export type CabinFilter = CabinFilterOptions | "all";
export type CabinFilterOptions = "small" | "medium" | "large";
export type CabinsList = Omit<CabinDB, "description">;
export type Country = { name: string; flag: string };
export type DatePickerDateRange = DateRange | undefined;
export type FilterConditions = { low: number; high: number };

// #################################################
// Next Auth Types
// #################################################

export type NextAuthGoogleUser = { name: string; image: string; email: string };
export type NextAuthSession = Session | null;
export type NextAuthSignInCallback = {
  user: User | AdapterUser;
  account: Account | null;
  profile?: Profile | undefined;
};
export type NextAuthAuthorizedCallback = {
  auth: NextAuthSession;
  request: NextRequest | undefined;
};
