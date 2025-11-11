import ArrowLeft from "../components/ArrowLeft.jsx";
import ArrowRight from "../components/ArrowRight.jsx";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar.jsx";
import Title from "../components/Title.jsx";
import MobileCards from "../components/MobileCards.jsx";
import InteractiveCards from "../components/InteractiveCards.jsx";
import { arrows, star } from "../constants/index.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import { useScroll } from "../contexts/Scroll.context.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";
import NavBarProf from "../components/NavBarProf.jsx";

const Projects = () => {

  const { headerRef, skillsRef } = useScroll();
  const { is8Bit } = useTheme()

  const backgroundStyle = is8Bit 
  ? "bg-[url('/backgrounds/space-invaders.jpg')] md:bg-right lg:bg-center" 
  : "bg-[url('/backgrounds/background-prof.png')]"

  return (
    <section id="projects">
      <div
        className={`absolute z-0 inset-0 bg-cover bg-no-repeat bg-center  ${backgroundStyle}`}
      >
        <div className={`absolute inset-0 ${is8Bit ? "bg-black/80" : "bg-black/40" } `} />
      </div>
      <div className="flex flex-col md:flex-row relative z-10 w-full h-screen">
        <div className="child ps-10 flex-col">
          {
            is8Bit &&
            <Logo img={star.purple} />
          }
          <div className="hidden md:block ">
            <ArrowLeft refBack={headerRef} img={arrows.left} />
          </div>
        </div>
        <div className="child-middle lg:pt-7 flex gap-40 lg:gap-35 md:gap-10">
          {/* middle side md-lg*/}
          <div className="max-md:mt-10 max-md:flex">
            { is8Bit ?
            <NavBar bgColor="bg-[var(--color-pink)]" />
            :
            <NavBarProf/>
          }
            { is8Bit ?
              <Title
              text={
                <p className="text-white">
                  <span className="text-purple">Pr</span>o
                  <span className="text-purple">j</span>ec
                  <span className="text-purple">t</span>s
                </p>
              }
              gradient="from-purple-600 via-purple-500"
              width="w-50 md:w-50 lg:w-100"
            />
            :
            <Title
              text={
                <p className="text-indigo-600 font-sans uppercase">
                  Projects
                </p>
              }
              gradient="from-transparent via-pink-700 to-transparent"
              width="w-50 md:w-50 lg:w-100"
            />
            }
          </div>
          <div className="hidden lg:flex justify-center items-center w-full">
            <InteractiveCards />
          </div>
          <div className="lg:hidden flex justify-center items-center w-full">
            <MobileCards />
          </div>
        </div>
        <div className="child pe-10 items-end h-auto md:h-full w-full">
          {/* right side md-lg*/}

          <div className="hidden md:flex md:justify-end ">
            <ArrowRight refNext={skillsRef} img={arrows.right} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
