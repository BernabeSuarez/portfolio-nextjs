import Link from "next/link";

type LinkData = {
  href: string;
  title: string;
};

const NavLink = (linkData: LinkData) => {
  return (
    <Link
      href={linkData.href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {linkData.title}
    </Link>
  );
};

export default NavLink;
