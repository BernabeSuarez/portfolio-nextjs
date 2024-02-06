import NavLink from "./NavLink";

interface Links {
  href: string;
  title: string;
}

const MenuOverlay = ({ links }: { links: Array<Links> }) => {
  return (
    <ul className="flex h-screen z-50 bg-[#121212] flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
