"use client";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import LangSelect from "./LangSelect";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const t = useTranslations("Navbar");
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-30 bg-[#121212] bg-opacity-85 backdrop-blur-sm">
      <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src="/images/logo-web.png" alt="logo" width={70} height={70} />
        </Link>
        <div className="mobile-menu block md:hidden ">
          {!openNav ? (
            <button
              id="hamb-menu-open"
              onClick={() => setOpenNav(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              id="hamb-menu-close"
              onClick={() => setOpenNav(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row justify-between md:space-x-8 items-center">
            <li>
              <Link
                href="#about"
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-2xl sm:text-xl  md:p-0 hover:text-[#e45400] hover:transition-all  duration-200"
              >
                {t("1")}
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-2xl sm:text-xl  md:p-0 hover:text-[#e45400] hover:transition-all  duration-200"
              >
                {t("2")}
              </Link>
            </li>
            <li>
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
        </div>
      </div>
      {openNav ? (
        <MenuOverlay openNav={openNav} setOpenNav={setOpenNav} />
      ) : null}
    </nav>
  );
};

export default Navbar;
