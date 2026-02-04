import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useTranslation } from "react-i18next";

const AboutTitle = () => {
  const { is8Bit } = useTheme();
  const { t } = useTranslation();

  return (
    <section className={`flex flex-col font-fair justify-center items-center gap-5 w-full h-[50%] lg:w-[50%] shadow-pink-500/40 rounded-3xl ${is8Bit ? 'font-retro' : 'font-fair'}`}>
      <p className={`${is8Bit ? 'text-red-400 text-nowrap' : 'text-indigo-600 text-4xl'} md:text-3xl uppercase`}>Matheus Alves</p>
      <p className={`${is8Bit ? 'text-red-200 text-[12px]' : 'text-indigo-300 text-1xl'}`}>{t("about.position")}</p>
    </section>
  );
};

export default AboutTitle;
