"use client";

import { cabinFilterConditions } from "@/_lib/constants";

import FilterButton from "./filter-button";
import { CabinFilter } from "@/_lib/types";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  const handleFilter = (filter: CabinFilter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  const { small, medium, large } = cabinFilterConditions;

  return (
    <div className="border border-primary-800 flex">
      <FilterButton
        filter={"all"}
        onClick={handleFilter}
        activeFilter={activeFilter}
      >
        All Cabins
      </FilterButton>
      <FilterButton
        filter={"small"}
        onClick={handleFilter}
        activeFilter={activeFilter}
      >
        {small.low}&mdash;{small.high} Guests
      </FilterButton>
      <FilterButton
        filter={"medium"}
        onClick={handleFilter}
        activeFilter={activeFilter}
      >
        {medium.low}&mdash;{medium.high} Guests
      </FilterButton>
      <FilterButton
        filter={"large"}
        onClick={handleFilter}
        activeFilter={activeFilter}
      >
        {large.low}&mdash;{large.high} Guests
      </FilterButton>
    </div>
  );
}
