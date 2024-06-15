"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const isActivePath = href === usePathname();
  return (
    <Link href={href} className="hover:text-accent-400 transition-colors">
      {children}
    </Link>
  );
}
