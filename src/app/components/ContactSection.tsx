"use client";
import LinkedInIcon from "../../../public/linkedin-icon.png";
import GithubIcon from "../../../public/github-icon.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const t = useTranslations("Contact");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Tomar los datos del Form
    if (email.length < 1) {
      toast.error("Por favor ingrese un email");
    } else if (message.length < 1) {
      toast.error("Por favor escriba un mensaje...");
    } else {
      const templateParams = {
        from_name: name,
        message: message,
        user_email: email,
        from_subject: subject,
      };
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? ""
        )
        .then(
          () => {
            toast.success("Mensaje Enviado!"); // Displays a success message
          },
          (error) => {
            console.log("FAILED...", error);
            toast.error("A ocurrido un error!, por favor intente mas tarde");
          }
        );
      setEmail("");
      setMessage("");
      setName("");
      setSubject("");
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
    >
      <div className="mb-12">
        <h2 className="text-xl font-bold my-2 text-white">{t("title")}</h2>
        <p className="text-[#ADB7BE] mb-4 max-w-md">{t("info")}</p>
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-white block text-sm font-medium"
          >
            {t("formLabels.name")}
          </label>
          <input
            name="user_name"
            type="text"
            id="user_name"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder={t("formLabels.plh-name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor="email"
            className="text-white block text-sm font-medium"
          >
            {t("formLabels.email")}
          </label>
          <input
            name="user_email"
            type="email"
            id="user_email"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder={t("formLabels.plh-email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="subject"
            className="text-white mb-1 block text-sm font-medium"
          >
            {t("formLabels.subject")}
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder={t("formLabels.plh-subject")}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <label
            htmlFor="message"
            className="text-white mb-1 block text-sm font-medium"
          >
            {t("formLabels.message")}
          </label>
          <textarea
            name="message"
            id="message"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder={t("formLabels.plh-message")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            id="send-mail"
            type="submit"
            className="bg-[#e45400] hover:bg-[#f24949] text-black rounded-md mt-4 h-10 "
            aria-labelledby="send-form"
            name="send-mail"
          >
            {t("formLabels.btn")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
