"use client";

import ProjectCard from "./ProjectCard";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

const ProjectsData = [
  {
    id: 1,
    title: "La Otra Junta",
    description: "Pagina web de grupo musical",
    imgUrl: "/images/project-loj.png",
    href: "https://laotrajunta.com.ar/",
  },
  {
    id: 2,
    title: "Angular Weather App",
    description: "Aplicacion del clima",
    imgUrl: "/images/project-angular.png",
    href: "https://angular-weather-app-eight.vercel.app/",
  },
  {
    id: 3,
    title: "Ecommerce",
    description: "Proyecto Integrador NUCBA",
    imgUrl: "/images/ecommerce.png",
    href: "https://tienda-online-nucba.onrender.com/",
  },
  {
    id: 4,
    title: "Django",
    description: "CRUD de tareas en Django",
    imgUrl: "/images/django-crud.png",
    href: "https://django-auth-crud-9mr9.onrender.com/",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "Portfolio personal",
    imgUrl: "/images/web-personal.jpeg",
    href: "https://bernabesuarez.vercel.app/en",
  },
  {
    id: 6,
    title: "Chatbot",
    description: "Chatbot con Python, integrando Gemini AI",
    imgUrl: "/images/project-chat.png",
    href: "https://bernabesuarez-chat-bot-py-geminiai-main-sokymo.streamlit.app/",
  },
  {
    id: 7,
    title: "Transcripciones de voz a texto",
    description:
      "Transcripciones de voz a texto, con opcion de copiar al portapapeles",
    imgUrl: "/images/project-transcript.png",
    href: "https://transcripciones.vercel.app/",
  },
  {
    id: 8,
    title: "Dolar App",
    description:
      "Aplicacion de cotizaciones del dolar en argentina, momentaneamente en prueba cerrada de Google Play Store",
    imgUrl: "/images/react-native.png",
    href: "https://github.com/BernabeSuarez/react-native-dolarApp",
  },
];

//Agregarun filtro por el tipo de proyecto
const cardAnimationVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); //una vez que esta en la vista se vuelve true
  const t = useTranslations("Projects");

  return (
    <section className="flex flex-col justify-center" id="projects">
      <h2 className="text-center text-4xl font-semibold mb-4 text-white">
        {t("title")}
      </h2>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 m-auto">
        {ProjectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardAnimationVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              imgUrl={project.imgUrl}
              description={project.description}
              href={project.href}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
