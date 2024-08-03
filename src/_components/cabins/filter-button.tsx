"use client";

import { CabinFilter, FilterButtonProps } from "@/_lib/types";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function FilterButton({
  filter,
  onClick,
  activeFilter,
  children,
}: FilterButtonProps) {
  return (
    <button
      onClick={() => onClick(filter)}
      className={`px-5 py-2 hover:bg-primary-700
        ${activeFilter === filter ? "bg-primary-700" : ""}`}
    >
      {children}
    </button>
  );
}
