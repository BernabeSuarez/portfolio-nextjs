import Image from "next/image";

interface ICardData {
  imgUrl: string;
  title: string;
  description: string;
  href: string;
}

const ProjectCard = (carData: ICardData) => {
  return (
    <a href={carData.href} target="_blank">
      <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <Image
            src={carData.imgUrl}
            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out p-2 group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 ">
          <h2 className="font-serif text-2xl font-bold text-white shadow-xl">
            {carData.title}
          </h2>

          <p className="text-sm font-light text-gray-200 shadow-xl">
            {carData.description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
