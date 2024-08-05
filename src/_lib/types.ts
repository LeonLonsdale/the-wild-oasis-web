import { PropsWithChildren } from "react";

// #################################################
// Common types
// #################################################

export type BookedDates = BookingDate[];
export type BookingDate = Date;
export type CabinFilter = CabinFilterOptions | "all";
export type CabinFilterOptions = "small" | "medium" | "large";
export type Country = { name: string; flag: string };
export type DatabaseCreatedAt = string;
export type DatabaseId = string;
export type Email = string;
export type FilterConditions = { low: number; high: number };

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
  email: Email;
  fullName: string;
  nationalID: string;
  nationality: string;
  id: DatabaseId;
};
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

// Specific Component Props
export type CabinCardProps = Readonly<{ cabin: CabinsList }>;
export type DateSelectorProps = Readonly<{
  bookedDates: BookedDates;
  cabin: CabinDB;
  settings: Settings;
}>;
export type DeleteReservationProps = Readonly<{ bookingId: DatabaseId }>;
export type ErrorProps = Readonly<{ error: Error; reset: () => void }>;
export type NavLinkProps = Readonly<{ href: string } & WithChildren>;
export type ReservationCardProps = Readonly<{ booking: BookingDB }>;
export type ReservationFormProps = Readonly<{ cabin: CabinDB }>;
export type SelectCountryProps = Readonly<{
  className: string;
  defaultCountry: string;
  id: string;
  name: string;
}>;
export type TextExpanderProps = Readonly<{ numWords: number }> & WithChildren;
export type UpdateProfileFormProps = WithChildren;

// Page and List Props
export type BookingsList = Omit<
  BookingDB,
  | "cabinPrice"
  | "extrasPrice"
  | "hasBreakfast"
  | "isPaid"
  | "observations"
  | "status"
>;
export type CabinListProps = Readonly<{ filter: CabinFilter }>;
export type CabinPageProps = Readonly<{ params: { cabinId: DatabaseId } }>;
export type CabinsList = Omit<CabinDB, "description">;
export type CabinsPageProps = Readonly<{
  searchParams: { [key: string]: CabinFilterOptions };
}>;

// Feature-Specific Props
export type CabinProps = Readonly<{ cabin: CabinDB }>;
export type FilterButtonProps = Readonly<
  {
    activeFilter: string;
    filter: CabinFilter;
    onClick: (filter: CabinFilter) => void;
  } & WithChildren
>;
export type ReservationProps = Readonly<{ cabin: CabinDB }>;
