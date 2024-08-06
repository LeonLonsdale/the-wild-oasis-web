// import { navList } from "@/_lib/paths";
import { auth } from "@/_lib/auth";
import NavLink from "./nav-link";
import { getPath, makeNav } from "@/_lib/paths";

export default async function MainNavigation() {
  const session = await auth();
  const userImage = session?.user?.image;

  const navItems = makeNav(["cabins", "about"]).map((item) => {
    if (item)
      return (
        <li key={item.path()}>
          <NavLink href={item.path()}>{item.label}</NavLink>
        </li>
      );
  });

  const accountPath = getPath("account");
  const accountLink = (
    <li key={accountPath}>
      <NavLink href={accountPath}>
        {userImage ? (
          <img
            src={userImage}
            alt={session?.user?.name ? session?.user?.name : "User Image"}
            className="h-8 w-8 rounded-full"
            referrerPolicy="no-referrer"
          />
        ) : (
          ""
        )}
        <span>Guest Area</span>
      </NavLink>
    </li>
  );

  navItems.push(accountLink);

  return (
    <nav className="z-10 text-xl items-center h-full">
      <ul className="flex gap-16 items-center h-full">{navItems}</ul>
    </nav>
  );
}
