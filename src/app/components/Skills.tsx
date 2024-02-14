"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const icons = [
  {
    url: "/images/svg/astro.svg",
    alt: "Astro Logo",
  },
  {
    url: "/images/svg/css.svg",
    alt: "Css Logo",
  },
  {
    url: "/images/svg/html.svg",
    alt: "HTML Logo",
  },
  {
    url: "/images/svg/JS.svg",
    alt: "Javascript Logo",
  },
  {
    url: "/images/svg/nodejs.svg",
    alt: "Node  Logo",
  },
  {
    url: "/images/svg/python.svg",
    alt: "Python Logo",
  },
  {
    url: "/images/svg/reactjs.svg",
    alt: "React Logo",
  },
  {
    url: "/images/svg/supabase.svg",
    alt: "Supabase Logo",
  },
  {
    url: "/images/svg/typescript.svg",
    alt: "Typescript  Logo",
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className=" flex flex-row  items-center w-96 sm:m-auto"
    >
      {icons.map((icon, index) => (
        <Image
          key={index}
          src={icon.url}
          alt={icon.alt}
          width={35}
          height={35}
        />
      ))}
    </motion.div>
  );
};

export default Skills;
