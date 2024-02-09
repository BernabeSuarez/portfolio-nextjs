const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="text-center lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © {date} Bernabe Suarez
      </div>
    </footer>
  );
};

export default Footer;
