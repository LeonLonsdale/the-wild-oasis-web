"use client";

import { NavLinkProps } from "@/_lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: NavLinkProps) {
  const isActivePath = href === usePathname();
  return (
    <Link
      href={href}
      className="hover:text-accent-400 transition-colors flex items-center gap-4"
    >
      {children}
    </Link>
  );
}
