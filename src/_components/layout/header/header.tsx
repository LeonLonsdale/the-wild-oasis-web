import { WithChildren } from "@/_lib/types";

export default function Header({ children }: WithChildren) {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {children}
      </div>
    </header>
  );
}
