// cabins filter

import {
  CabinFilter,
  CabinFilterOptions,
  CabinsList,
  FilterConditions,
} from "./types";

export const cabinFilterConditions: Record<
  CabinFilterOptions,
  FilterConditions
> = {
  small: {
    low: 1,
    high: 3,
  },
  medium: {
    low: 4,
    high: 7,
  },
  large: {
    low: 8,
    high: 15,
  },
};

export function filterCabins(cabins: CabinsList[], filter: CabinFilter) {
  if (filter === "all") return cabins;
  const { low, high } = cabinFilterConditions[filter];
  return cabins.filter(
    (cabin) => cabin.maxCapacity >= low && cabin.maxCapacity <= high
  );
}
