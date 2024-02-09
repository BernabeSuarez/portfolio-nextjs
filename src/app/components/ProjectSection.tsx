import ProjectCard from "./ProjectCard";

const ProjectsData = [
  {
    id: 1,
    title: "Proyecto n1",
    description: "PAGINA WEB DE GRUPO MUSICAL",
    imgUrl: "/images/about-section-img.jpg",
    href: "https://laotrajunta.com.ar/",
  },
  {
    id: 2,
    title: "Proyecto n2",
    description: "PAGINA WEB DE GRUPO MUSICAL",
    imgUrl: "/images/about-section-img.jpg",
    href: "",
  },
  {
    id: 4,
    title: "Proyecto n4",
    description: "PAGINA WEB DE GRUPO MUSICAL",
    imgUrl: "/images/about-section-img.jpg",
    href: "",
  },
  {
    id: 1,
    title: "Proyecto n4",
    description: "PAGINA WEB DE GRUPO MUSICAL",
    imgUrl: "/images/about-section-img.jpg",
    href: "",
  },
];

//Agregarun filtro por el tipo de proyecto

const ProjectSection = () => {
  return (
    <section className="flex flex-col justify-center" id="projects">
      <h2 className="text-center text-4xl font-semibold mb-4 text-white">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-8">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imgUrl={project.imgUrl}
            description={project.description}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
