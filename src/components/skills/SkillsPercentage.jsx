import React from "react";
import { hardSkills, softSkills } from "../../constants/index.jsx";
import Percentage from "../ui/Percentage.jsx";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useTranslation, Trans } from "react-i18next";

const SkillsPercentage = () => {
  const { is8Bit } = useTheme();
  const { t } = useTranslation();

  const expColor = is8Bit
    ? "from-[#F9B700] to-[#FFEB50] underline"
    : "from-indigo-600 to-pink-600 font-fair text-2xl uppercase";

  const scrollbarStyle = is8Bit
    ? "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-cyan-400/60 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-transparent"
    : "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-indigo-500/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent";

  return (
    <div
      className={`flex gap-10 justify-center lg:justify-evenly flex-wrap w-full
        h-full max-h-[38vh] lg:max-h-none lg:h-[240px]
        overflow-y-auto lg:overflow-visible
        pr-2 lg:pr-0
        ${scrollbarStyle}`}
    >
      <div className="red w-[50%] lg:w-[30%]">
        <h1
          className={`bg-gradient-to-r ${expColor} bg-clip-text text-transparent md:text-[10px] lg:text-[14px] text-nowrap`}
        >
          Hard skills
        </h1>
        <ul>
          {hardSkills.map((hard, index) => (
            <li key={index}>
              <Percentage label={t(hard.labelKey)} percentage={hard.percentage} />
            </li>
          ))}
        </ul>
      </div>
      <div className="red w-[50%] lg:w-[30%]">
        <h1
          className={`bg-gradient-to-r ${expColor} bg-clip-text text-transparent md:text-[10px] lg:text-[14px] text-nowrap`}
        >
          Soft skills
        </h1>
        <ul>
          {softSkills.map((soft, index) => (
            <li key={index}>
              <Percentage label={t(soft.labelKey)} percentage={soft.percentage} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsPercentage;