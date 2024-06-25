// import { navList } from "@/_lib/paths";
import NavLink from "./nav-link";
import { makeNav } from "@/_lib/paths";

export default function MainNavigation() {
  const navItems = makeNav(["home", "about", "cabins", "account"]).map(
    (item) => {
      if (item)
        return (
          <li key={item.path()}>
            <NavLink href={item.path()}>{item.label}</NavLink>
          </li>
        );
    }
  );

  return (
    <nav className="z-10 text-xl items-center h-full">
      <ul className="flex gap-16 items-center h-full">{navItems}</ul>
    </nav>
  );
}
