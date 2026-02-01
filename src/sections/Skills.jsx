import ArrowLeft from "../components/ArrowLeft.jsx";
import ArrowRight from "../components/ArrowRight.jsx";
import InfiniteSkills from "../components/skills/InfiniteSkills.jsx";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar.jsx";
import NavBarProf from "../components/NavBarProf.jsx";
import Title from "../components/Title.jsx";
import { arrows, star } from "../constants/index.jsx";
import { useScroll } from "../contexts/Scroll.context.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";

const Skills = () => {
  const { projectsRef, aboutRef } = useScroll();
  const { is8Bit } = useTheme()

  const backgroundStyle = is8Bit 
  ? "bg-[url('/backgrounds/pacman-game.gif')] bg-cover bg-no-repeat bg-center md:bg-right lg:bg-center" 
  : "bg-gradient-to-b from-black via-black to-indigo-800"

  return (
    <section id="skills" >
      <div className={`absolute z-0 inset-0 ${backgroundStyle} `} >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="flex flex-col md:flex-row relative z-10 w-full h-screen">
        <div className="child ps-10 flex-col">
          {/* left side md-lg*/}
          {
            is8Bit &&
            <Logo img={star.blue} />
          }
          <div className="hidden md:block ">
            <ArrowLeft refBack={projectsRef} img={arrows.left} />
          </div>
        </div>
        <div className="child-middle lg:pt-7 flex justify-between">
          {/* middle side pc*/}
          <div className="max-md:mt-10 max-md:flex">

            {
              is8Bit ?
              <NavBar bgColor="bg-[var(--color-blue)]" />
              :
              <NavBarProf bgColor="from-indigo-950 to-black text-indigo-600"/>
            }
            {

              is8Bit ?
            <Title
              text={
                <p className="text-white">
                  <span className="text-[var(--color-blue)]">S</span>k
                  <span className="text-[var(--color-blue)]">i</span>ll
                  <span className="text-[var(--color-blue)]">s</span>
                </p>
              }
              gradient="from-blue via-blue-400 "
              width="w-50 md:w-50 lg:w-75"
            />
            :
            <Title
              text={
                <p className="font-fair text-indigo-600 font-sans text-5xl uppercase">
                  Skills
                </p>
              }
              gradient="from-transparent via-indigo-700 to-transparent"
              width="w-50 md:w-50 lg:w-100"
            />
            }

          </div>
          <div className="flex justify-center items-center w-full mb-70 md:mb-10 lg:mb-70">
            <div className="overflow-hidden lg:w-[90vw] lg:max-w-[800px]">
              <InfiniteSkills />
            </div>
          </div>
          {/* middle cell */}
          
        </div>
        <div className="child pe-10 items-end h-auto md:h-full w-full">
          {/* right side md-lg*/}

          <div className="hidden md:flex md:justify-end ">
            <ArrowRight refNext={aboutRef} img={arrows.right} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
