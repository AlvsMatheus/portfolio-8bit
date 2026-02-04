import Percentage from "../Percentage.jsx";
import { hardSkills, softSkills } from "../../constants/index.jsx";
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
      <div className="flex gap-10 justify-center lg:justify-evenly flex-wrap w-full h-full lg:h-[240px] overflow-auto">
        <div className="red w-[50%] lg:w-[30%]">
          <h1
            className={`bg-gradient-to-r ${expColor} bg-clip-text text-transparent md:text-[10px] lg:text-[14px] text-nowrap`}
          >
            Hard skills
          </h1>
          <ul>
            {hardSkills.map((hard, index) => (
              <li key={index}>
                {" "}
                <Percentage label={t(hard.labelKey)} percentage={hard.percentage} />
              </li>
            ))}
          </ul>
        </div>
        <div className="red w-[50%] lg:w-[30%]">
          <h1
            className={`bg-gradient-to-r ${expColor} bg-clip-text text-transparent md:text-[10px] lg:text-[14px] text-nowrap `}
          >
            Soft skills
          </h1>
          <ul>
            {softSkills.map((soft, index) => (
              <li key={index}>
                {" "}
                <Percentage label={t(soft.labelKey)} percentage={soft.percentage} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutExp;
