"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";

const info = [
  {
    id: "skills",
    content: (
      <ul>
        <li>React</li>
        <li>Next Js</li>
        <li>Python</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    id: "education",
    content: (
      <ul>
        <li>Nucba</li>
        <li>Argentina Programa4.0</li>
        <li>Codo a Codo</li>
        <li>FreeCodeCamp</li>
      </ul>
    ),
  },
  // {
  //   id: "certifications",
  //   content: (
  //     <ul>
  //       <li>certificado 1</li>
  //       <li>certificado 2</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [showTab, setShowTab] = useState("skills");
  const t = useTranslations("About");

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  function showInfo(id: string) {
    setShowTab(id);
  }
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-1 md:px-4 xl:gap sm:py-16 xl:py-16">
        <Image
          src="/images/hero-vector.svg"
          alt="desktop"
          className=""
          width={480}
          height={480}
          data-aos="fade-down-right"
        />
        <div
          className="mt-4 md:mt-0 md:text-left text-center flex flex-col h-full"
          data-aos="fade-down-left"
        >
          <h2 className="text-4xl font-semibold mb-4 text-white">
            {t("title")}
          </h2>
          <p className=" lg:text-lg text-justify md:text-left">
            {t("description")}
          </p>
          <div className="flex flex-col mt-8">
            <div className="">
              <span
                onClick={() => {
                  setShowTab("skills");
                }}
                className=" mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-[#E45400] cursor-pointer"
              >
                {t("tabs.1")}
              </span>
              <span
                onClick={() => setShowTab("education")}
                className=" mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-[#E45400] cursor-pointer"
              >
                {t("tabs.2")}
              </span>
              {/* <span
                onClick={() => setShowTab("certifications")}
                className=" mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-[#E45400] cursor-pointer"
              >
                {t("tabs.3")}
              </span> */}
            </div>
            <div className="mt-3">
              {info.find((t) => t.id === showTab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
