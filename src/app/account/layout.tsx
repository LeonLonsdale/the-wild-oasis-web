import SideNavigation from "@/_components/account/side-nav";
import { WithChildren } from "@/_lib/types";

export default function Layout({ children }: WithChildren) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />

      <div className="py-1">{children}</div>
    </div>
  );
}
