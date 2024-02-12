import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import Image from "next/image";

const LangSelect = () => {
  //muestra el valor de locale que se encuentra activo
  const localeActive = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //Cambiar el valor del idioma, y reemplazarlo en la url
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <select
      onChange={onSelectChange}
      name="Idioma"
      defaultValue={localeActive}
      disabled={isPending}
      className="bg-transparent py-2 text-[#ADB7BE] text-2xl sm:text-xl "
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
};

export default LangSelect;
