import NavLink from "./NavLink";
import { linksData } from "../data/data";

const MenuOverlay = ({
  openNav,
  setOpenNav,
}: {
  openNav: boolean;
  setOpenNav: Function;
}) => {
  return (
    <ul className="flex h-screen z-50  flex-col py-4 items-center">
      {linksData.map((link, index) => (
        <li key={index} onClick={() => setOpenNav(!openNav)}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
