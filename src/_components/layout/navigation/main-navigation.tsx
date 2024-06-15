import { mainNavItems } from "@/lib/paths";
import NavLink from "./nav-link";

export default function MainNavigation() {
  const navItems = mainNavItems.map((item) => {
    if (item)
      return (
        <li key={item.path}>
          <NavLink href={item.path}>{item.label}</NavLink>
        </li>
      );
  });

  return (
    <nav>
      <ul className="flex justify-between gap-6 items-center h-full">
        {navItems}
      </ul>
    </nav>
  );
}
