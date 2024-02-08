import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section className="flex flex-col justify-center" id="projects">
      <h2 className="text-center text-4xl font-semibold mb-4 text-white">
        My Projects
      </h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectSection;
