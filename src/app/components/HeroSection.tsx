import Image from "next/image";

export default function Hero() {
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold text-center lg:text-left">
            Hello I`m Bernabé
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            laborum esse, repellat quo molestiae vero. Vel ullam vero deleniti
            beatae, laborum quia dicta sit ipsa quidem in, corrupti, doloremque
            id.
          </p>
          <div>
            <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 border bg-white text-black hover:bg-slate-200 mb-6 mt-6">
              Contactarme
            </button>
            <button
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 
            border  bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white "
            >
              Descargar CV
            </button>
          </div>
        </div>
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
          <div className="rounded-full">
            <Image
              src="/images/hero-image.jpg"
              alt="Hero Image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
