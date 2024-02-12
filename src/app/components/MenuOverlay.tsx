import { useTranslations } from "next-intl";
import LangSelect from "./LangSelect";
import Link from "next/link";

const MenuOverlay = ({
  openNav,
  setOpenNav,
}: {
  openNav: boolean;
  setOpenNav: Function;
}) => {
  const t = useTranslations("Navbar");
  return (
    <ul className="flex h-screen z-50  flex-col py-4 items-center">
      <li onClick={() => setOpenNav(!openNav)}>
        <Link
          href="#about"
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-2xl sm:text-xl  md:p-0 hover:text-[#e45400] hover:transition-all  duration-200"
        >
          {t("1")}
        </Link>
      </li>
      <li onClick={() => setOpenNav(!openNav)}>
        <Link
          href="#projects"
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-2xl sm:text-xl  md:p-0 hover:text-[#e45400] hover:transition-all  duration-200"
        >
          {t("2")}
        </Link>
      </li>
      <li onClick={() => setOpenNav(!openNav)}>
        <Link
          href="#contact"
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-2xl sm:text-xl  md:p-0 hover:text-[#e45400] hover:transition-all  duration-200"
        >
          {t("3")}
        </Link>
      </li>
      <li>
        <LangSelect />
      </li>
    </ul>
  );
};

export default MenuOverlay;
