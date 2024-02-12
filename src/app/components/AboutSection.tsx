"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const info = [
  {
    id: "skills",
    content: (
      <ul>
        <li>React</li>
        <li>Next Js</li>
      </ul>
    ),
  },
  {
    id: "education",
    content: (
      <ul>
        <li>Nucba</li>
        <li>Argentina Programa4.0</li>
      </ul>
    ),
  },
  {
    id: "certifications",
    content: (
      <ul>
        <li>certificado 1</li>
        <li>certificado 2</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [showTab, setShowTab] = useState("skills");
  const t = useTranslations("About");

  function showInfo(id: string) {
    setShowTab(id);
  }
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap sm:py-16 xl:py-16">
        <Image
          src="/images/about-section-img.jpg"
          alt="desktop"
          className="rounded-md"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-semibold mb-4 text-white">
            {t("title")}
          </h2>
          <p className=" lg:text-lg text-left ">{t("description")}</p>
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
              <span
                onClick={() => setShowTab("certifications")}
                className=" mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-[#E45400] cursor-pointer"
              >
                {t("tabs.3")}
              </span>
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
