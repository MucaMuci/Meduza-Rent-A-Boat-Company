import { useRouter } from "next/router";
import { navigationItems } from "../const/navbarList_user";
import Link from "next/link";

const NavBarUser = () => {
  const router = useRouter();

  return (
    <nav className="flex list-none bg-hci-header">
      {navigationItems.map((link, index) => (
        <ul
          className={
            router.pathname == link.path
              ? "bg-white text-hci-modra px-[10px] mx-1 my-2 rounded-3xl hover:cursor-pointer"
              : "text-white mx-2 my-2 hover:cursor-pointer "
          }
          key={index}
        >
          <Link href={link.path}>
            <li className="  self-end text-lg">{link.name}</li>
          </Link>
        </ul>
      ))}
    </nav>
  );
};

export default NavBarUser;
