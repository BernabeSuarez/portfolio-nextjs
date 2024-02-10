"use client";

import LinkedInIcon from "../../../public/linkedin-icon.png";
import GithubIcon from "../../../public/github-icon.png";
import Link from "next/link";
import Image from "next/image";

const handleSubmit = async (e: any) => {
  e.preventDefault();
  //Tomar los datos del Form
  const data = {
    email: e.target.email.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  };
  const JSONdata = JSON.stringify(data);
  const endpoint = "/api/send";

  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: "POST",
    // Tell the server we're sending JSON.
    headers: {
      "Content-Type": "application/json",
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  };

  const response = await fetch(endpoint, options);
  const resData = await response.json();
  console.log(resData);

  if (response.status === 200) {
    console.log("Message sent.");
  }
};

const ContactSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div className="mb-12">
        <h5 className="text-xl font-bold my-2 text-white">Let`s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod
          blanditiis laboriosam tempora eligendi suscipit? Perferendis
          necessitatibus facilis est quibusdam veritatis architecto? Culpa
          maiores exercitationem blanditiis minus, corrupti nulla ad.
        </p>
        <div className="social flex flex-row gap-2">
          <a
            href="https://www.linkedin.com/in/bernabesuarez2022/"
            target="_blank"
          >
            <Image src={LinkedInIcon} alt="In Icon" width={45} height={45} />
          </a>
          <a href="https://github.com/BernabeSuarez" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" width={45} height={45} />
          </a>
        </div>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-white block text-sm font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Example@mail.com"
          />
          <label
            htmlFor="subject"
            className="text-white mb-1 block text-sm font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying Hi!"
          />
          <label
            htmlFor="message"
            className="text-white mb-1 block text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let`s talk about..."
          />
          <button
            type="submit"
            className="bg-[#e45400] hover:bg-[#f24949] text-white rounded-md mt-4 h-10 "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
