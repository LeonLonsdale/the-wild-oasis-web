import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png";
import { getPath } from "@/_lib/paths";

export default function Logo() {
  return (
    <Link href={getPath("home")} className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        quality={100}
        priority
      />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}
