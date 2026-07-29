import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useTranslation } from "react-i18next";

const AboutTitle = () => {
  const { is8Bit } = useTheme();
  const { t } = useTranslation();
  const stack = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind"];

  return (
    <>
      <div className="flex flex-col gap-4">
        <section className={`flex flex-col font-fair justify-center items-center gap-5 w-full h-[50%] lg:w-[50%] shadow-pink-500/40 rounded-3xl ${is8Bit ? 'font-retro' : 'font-fair'}`}>
          <p className={`text-nowrap ${is8Bit ? 'text-red-400 text-nowrap' : 'text-indigo-600 text-4xl'} md:text-3xl uppercase`}>Matheus Alves</p>
          <p className={`text-nowrap ${is8Bit ? 'text-red-200 text-[12px]' : 'text-indigo-300 text-1xl'}`}>{t("about.position")}</p>
        </section>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {stack.map((s) => (
            <span
              key={s}
              className={`text-[10px] px-2 py-1 rounded-full border ${
                is8Bit
                  ? "border-red-300 text-red-200 font-retro"
                  : "border-indigo-500 text-indigo-300"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </>
    
  );
};

export default AboutTitle;
