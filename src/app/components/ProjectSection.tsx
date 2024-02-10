import ProjectCard from "./ProjectCard";

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
    title: "Angula Weather App",
    description: "Aplicacion del clima",
    imgUrl: "/images/project-angular.png",
    href: "https://angular-weather-app-eight.vercel.app/",
  },
  {
    id: 4,
    title: "Ecommerce",
    description: "Proyecto Integrador NUCBA",
    imgUrl: "/images/ecommerce.png",
    href: "https://tienda-online-nucba.onrender.com/",
  },
  {
    id: 1,
    title: "Django",
    description: "CRUD de tareas en Django",
    imgUrl: "/images/django-crud.png",
    href: "https://django-auth-crud-9mr9.onrender.com/",
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
