import Percentage from "../components/Percentage.jsx";
import { hardSkills, softSkills } from "../constants/index.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";

const AboutExp = () => {
    const { is8Bit } = useTheme()

    const expColor = is8Bit 
    ? "from-[#F9B700] to-[#FFEB50]"
    : "from-indigo-600 to-pink-600"

  return (
    <div className="flex flex-col gap-10 lg:gap-10 bg-black/50 rounded-3xl w-full h-[86%] p-6 lg:p-6">
        {
            is8Bit ?
        <div className="flex flex-col gap-5 md:gap-2 text-white">
        <h1 className="text-sm lg:text-2xl"><strong className="red">J</strong>o<strong className="red">ur</strong>ne<strong className="red">y</strong></h1>
        <p className="text-[10px] md:text-[7px] lg:text-[12px] leading-4 md:leading-3 lg:leading-4">
            Front End Developer with <strong className="red">hands-on experience</strong> building responsive and user-focused web applications. <strong className="red">Strong background</strong> in <strong className="red">React, Next.js, Node.js, and Typescript</strong>. Proven ability to deliver <strong className="red">freelance projects</strong>. <strong className="red">Fast learner</strong> and motivated to grow into <strong className="red">mid-level positions</strong>.
        </p>
        </div>

        :
        <div className="flex flex-col gap-5 md:gap-2 text-white">
        <h1 className="font-fair text-[35px] text-center text-indigo-500 underline-offset-6 underline">Journey</h1>
        <p className="font-fair text-[10px] md:text-[7px] lg:text-[18px] text-center">
            Front End Developer with <strong className="text-indigo-600">hands-on experience</strong> building responsive and user-focused web applications. <strong className="text-indigo-600">Strong background</strong> in <strong className="text-indigo-600">React, Next.js, Node.js, and Typescript</strong>. Proven ability to deliver <strong className="text-indigo-600">freelance projects</strong>. <strong className="text-indigo-600">Fast learner</strong> and motivated to grow into <strong className="text-indigo-600">mid-level positions</strong>.
        </p>
        </div>
        }

        <div className="flex gap-10 justify-center lg:justify-evenly flex-wrap  w-full h-full lg:h-[240px] overflow-auto">
        <div className="red w-[50%] lg:w-[30%]">
            <h1 className={`bg-gradient-to-r ${expColor} bg-clip-text text-transparent underline md:text-[10px] lg:text-[14px] text-nowrap`}>Hard skills</h1>
            <ul>
            {hardSkills.map((hard, index) => (
                <li 
                key={index}> <Percentage label={hard.label} percentage={hard.percentage}/> 
                </li>
            ))}
            </ul>
        </div>
        <div className="red w-[50%] lg:w-[30%]">
            <h1 className={`bg-gradient-to-r ${expColor} bg-clip-text text-transparent underline md:text-[10px] lg:text-[14px] text-nowrap `}>Soft skills</h1>
            <ul>
            {softSkills.map((soft, index) => (
                <li 
                key={index}> <Percentage label={soft.label} percentage={soft.percentage}/> 
                </li>
            ))}
            </ul>
        </div>
        </div>

    </div>
  )
}

export default AboutExp
