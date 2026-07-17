import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useTranslation, Trans } from "react-i18next";

const AboutExp = () => {
  const { is8Bit } = useTheme();
  const { t } = useTranslation();

  const expColor = is8Bit
    ? "from-[#F9B700] to-[#FFEB50] underline"
    : "from-indigo-600 to-pink-600 font-fair text-2xl uppercase";

  return (
    <div className="flex flex-col gap-10 lg:gap-10 bg-indigo-950/10 border-2 border-indigo-950 shadow-lg shadow-indigo-900/10 rounded-3xl w-full h-[86%] p-10 lg:px-6 lg:py-10">
        <div className="flex flex-col gap-15 text-white">
          <h1 className={`${is8Bit ? 'font-retro text-red-300' : 'font-fair text-indigo-500'} text-3xl text-center  uppercase`}>
            {t("about.journey")}
          </h1>
          <p className="font-sans text-[15px] md:text-[7px] lg:text-[18px] text-center">
            <Trans
              i18nKey="about.text"
              components={{
              strong: <strong className="text-indigo-600 font-semibold" />
              }}
            />
          </p>
        </div>
      
    </div>
  );
};

export default AboutExp;
