"use client";

import { createContext, useContext, useState } from "react";
import { type DatePickerDateRange } from "@/_lib/types";

type TReservationContext = {
  range: DatePickerDateRange;
  setRange: (range: DatePickerDateRange) => void;
  resetRange: () => void;
};

type TReservationContextProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  from: undefined,
  to: undefined,
};

const ReservationContext = createContext<TReservationContext | null>(null);

const ReservationContextProvider = ({
  children,
}: TReservationContextProviderProps) => {
  // state
  const [range, setRange] = useState<DatePickerDateRange>(initialState);
  // derived state

  // event handlers
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
};

const useReservationContext = () => {
  const value = useContext(ReservationContext);
  if (!value)
    throw new Error(
      "You have used ReservationContext outside of its Provider. ReservationContext can only be used within a child of the ReservationContextProvider"
    );
  return value;
};

export { useReservationContext, ReservationContextProvider };
