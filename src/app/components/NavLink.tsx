import Link from "next/link";

type LinkData = {
  href: string;
  title: string;
};

const NavLink = (linkData: LinkData) => {
  return (
    <Link
      href={linkData.href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-2xl sm:text-xl  md:p-0 hover:text-[#e45400] hover:transition-all  duration-200"
    >
      {linkData.title}
    </Link>
  );
};

export default NavLink;
