"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Skills from "./Skills";

export default function Hero() {
  const t = useTranslations("Hero");
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center sm:text-left "
        >
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold text-center lg:text-left">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBE98] to bg-[#E45400]">
              {t("title")}{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Bernabé",
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1500,
                "Python Developer",
                1500,
                "FullStack Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {t("description")}
          </p>
          <Skills />
          <div>
            <a href="https://wa.me/5492364513422" target="_blank">
              <button
                aria-labelledby="contact-btn"
                name="contact-btn"
                id="contact-btn"
                className="px-4 inline-block py-2.5 w-full sm:w-fit  sm:rounded-md rounded-full mr-4  bg-gradient-to-br from-[#FFBE98] via-[#e45400] to bg-[#F24949] text-black mb-2 mt-6"
              >
                {t("btnContact")}
              </button>
            </a>
            <a href="/BernabeSuarez.pdf" download="BernabeSuarez.pdf">
              <button
                aria-labelledby="download-cv"
                name="dwnl-cv"
                id="dwnl-cv"
                className="px-0.5 inline-block py-0.5 w-full sm:w-fit  sm:rounded-md rounded-full mr-4  bg-gradient-to-br from-[#FFBE98] via-[#e45400] to bg-[#F24949] text-white mb-6 mt-6"
              >
                <span className="h-full w-full block bg-[#121212] hover:bg-slate-800 rounded-full md:rounded-md px-5 py-2">
                  {t("btnDownload")}
                </span>
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.jpg"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full "
              width={350}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
