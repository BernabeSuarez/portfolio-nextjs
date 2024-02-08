"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

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

  function showInfo(id: string) {
    setShowTab(id);
  }
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap sm:py-16 xl:py-16">
        <Image
          src="/images/about-section-img.jpg"
          alt="desktop"
          className="rounded-md"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-semibold mb-4 text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            iusto fugit et sunt libero temporibus, blanditiis quod illum nam
            odit, quidem repellendus doloremque ex dolorem ipsa asperiores quos
            culpa est.
          </p>
          <div className="flex flex-col mt-8">
            <div className="">
              <span
                onClick={() => {
                  setShowTab("skills");
                }}
                className=" mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-[#E45400] cursor-pointer"
              >
                Skills
              </span>
              <span
                onClick={() => setShowTab("education")}
                className=" mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-[#E45400] cursor-pointer"
              >
                Education
              </span>
              <span
                onClick={() => setShowTab("certifications")}
                className=" mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-[#E45400] cursor-pointer"
              >
                Experience
              </span>
            </div>
            <div className="mt-3">
              {info.find((t) => t.id === showTab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
