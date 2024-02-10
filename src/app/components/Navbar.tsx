"use client";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const linksData = [
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-30 bg-[#121212] bg-opacity-85 backdrop-blur-sm">
      <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src="/images/logo-web.png" alt="logo" width={70} height={70} />
        </Link>
        <div className="mobile-menu block md:hidden">
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
          <ul className="flex p-4 md:p-0 md:flex-row justify-between md:space-x-8">
            {linksData.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {openNav ? <MenuOverlay links={linksData} /> : null}
    </nav>
  );
};

export default Navbar;
