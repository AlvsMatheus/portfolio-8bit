import Percentage from "../Percentage.jsx";
import { hardSkills, softSkills } from "../../constants/index.jsx";
import { useTheme } from "../../contexts/ThemeContext.jsx";

const AboutExp = () => {
  const { is8Bit } = useTheme();

  const expColor = is8Bit
    ? "from-[#F9B700] to-[#FFEB50] underline"
    : "from-indigo-600 to-pink-600 font-fair text-2xl uppercase";

  return (
    <div className="flex flex-col gap-10 lg:gap-10 bg-indigo-950/10 border-2 border-indigo-950 shadow-lg shadow-indigo-900/10 rounded-3xl w-full h-[86%] p-10 lg:px-6 lg:py-10">
        <div className="flex flex-col gap-15 text-white">
          <h1 className={`${is8Bit ? 'font-retro text-red-300' : 'font-fair text-indigo-500'} text-3xl text-center  uppercase`}>
            Journey
          </h1>
          <p className="font-sans text-[15px] md:text-[7px] lg:text-[18px] text-center">
            Front End Developer with{" "}
            <strong className="text-indigo-600">hands-on experience</strong>{" "}
            building responsive and user-focused web applications.{" "}
            <strong className="text-indigo-600">Strong background</strong> in{" "}
            <strong className="text-indigo-600">
              React, Next.js, Node.js, and Typescript
            </strong>
            . Proven ability to deliver{" "}
            <strong className="text-indigo-600">freelance projects</strong>.{" "}
            <strong className="text-indigo-600">Fast learner</strong> and
            motivated to grow into{" "}
            <strong className="text-indigo-600">mid-level positions</strong>.
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
                <Percentage label={hard.label} percentage={hard.percentage} />
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
                <Percentage label={soft.label} percentage={soft.percentage} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutExp;
