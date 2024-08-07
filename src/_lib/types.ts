import { PropsWithChildren } from "react";
import { DateRange } from "react-day-picker";
import { Session, User } from "next-auth";

// #################################################
// Common types
// #################################################

export type TAuthSession = Session | null;
export type DatabaseCreatedAt = string;
export type DatabaseId = string;
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
export type BookingDB = {
  cabins: {
    image: string;
    name: string;
  };
  created_at: string;
  endDate: string;
  extrasPrice: number;
  guestId: string;
  hasBreakfast: boolean;
  id: DatabaseId;
  isPaid: boolean;
  numGuests: number;
  numNights: number;
  observations: string | null;
  startDate: string;
  status: "checked-in" | "checked-out" | "unconfirmed";
  totalPrice: number;
};
export type Booking = Omit<BookingDB, "created_at" | "id">;

// Guest Types
export type GuestDB = {
  countryFlag: string;
  created_at: DatabaseCreatedAt;
  fullName: string;
  nationalID: string;
  nationality: string;
} & Omit<User, "name">;
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

// Feature / Structure Props
export type CabinCardProps = Readonly<{ cabin: CabinsList }>;
export type CabinListProps = Readonly<{ filter: CabinFilter }>;
export type CabinProps = Readonly<{ cabin: CabinDB }>;
export type DateSelectorProps = Readonly<{
  bookedDates: BookedDates;
  cabin: CabinDB;
  settings: Settings;
}>;
export type DeleteReservationProps = Readonly<{ bookingId: DatabaseId }>;
export type FilterButtonProps = Readonly<
  {
    activeFilter: string;
    filter: CabinFilter;
    onClick: (filter: CabinFilter) => void;
  } & WithChildren
>;
export type NavLinkProps = Readonly<{ href: string } & WithChildren>;
export type ReservationCardProps = Readonly<{ booking: BookingDB }>;
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
export type TextExpanderProps = Readonly<{ numWords: number }> & WithChildren;
export type UpdateProfileFormProps = WithChildren;

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
export type NextAuthGoogleUser = { name: string; image: string; email: string };
