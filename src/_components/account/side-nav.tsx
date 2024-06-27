import { makeNav } from "@/_lib/paths";
import Link from "next/link";
import SignOutButton from "./signout-button";

const accountNav = makeNav([
  "account",
  "accountProfile",
  "accountReservations",
]);

export default function SideNavigation() {
  const accountNavList = accountNav.map((navLink) => (
    <li key={navLink.label}>
      <Link
        href={navLink.path()}
        className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`}
      >
        {navLink.icon}
        <span>{navLink.label}</span>
      </Link>
    </li>
  ));

  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {accountNavList}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}
