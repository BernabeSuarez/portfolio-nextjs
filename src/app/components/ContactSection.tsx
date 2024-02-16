import LinkedInIcon from "../../../public/linkedin-icon.png";
import GithubIcon from "../../../public/github-icon.png";
import Image from "next/image";
import { sendMail } from "../lib/mail";
import { useTranslations } from "next-intl";

const handleSubmit = async (formData: FormData) => {
  "use server";
  //Tomar los datos del Form

  await sendMail({
    email: formData.get("email") as string,
    name: formData.get("name") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  });
};

const ContactSection = () => {
  const t = useTranslations("Contact");
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
        <form action={handleSubmit} className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-white block text-sm font-medium"
          >
            {t("formLabels.name")}
          </label>
          <input
            name="name"
            type="text"
            id="name"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder={t("formLabels.plh-name")}
          />
          <label
            htmlFor="email"
            className="text-white block text-sm font-medium"
          >
            {t("formLabels.email")}
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder={t("formLabels.plh-email")}
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
