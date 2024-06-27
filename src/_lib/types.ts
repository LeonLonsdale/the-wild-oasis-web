export type Cabin = {
  id: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
};

export type Booking = {
  id: string;
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
