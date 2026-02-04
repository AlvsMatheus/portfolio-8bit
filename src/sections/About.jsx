import Logo from "../components/Logo";
import NavBar from "../components/NavBar.jsx";
import ArrowLeft from "../components/ArrowLeft.jsx";
import ArrowRight from "../components/ArrowRight.jsx";
import AboutTitle from "../components/about/AboutTitle.jsx";
import AboutExp from "../components/about/AboutExp.jsx";
import NavBarProf from "../components/NavBarProf.jsx";
import { arrows, star, aboutImgs } from "../constants/index.jsx";
import { useScroll } from "../contexts/Scroll.context.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";

const About = () => {
  const { skillsRef, contactRef } = useScroll();
  const { is8Bit } = useTheme();

  const backgroundStyle = is8Bit
    ? "bg-[url('/backgrounds/background-about.gif')] md:bg-right lg:bg-center"
    : "bg-gradient-to-b from-black via-black to-purple-950";

  return (
    <section id="about">
      <div
        className={`absolute z-0 inset-0 bg-cover bg-no-repeat bg-center ${backgroundStyle}`}
      >
        <div
          className={`absolute inset-0 ${is8Bit ? "bg-black/70" : "bg-black/40"} `}
        />
      </div>
      <div className="flex flex-col md:flex-row relative z-10 w-full h-screen">
        <div className="child ps-10 flex-col">
          {/* left side md-lg*/}
          {is8Bit && (
            <div className="hidden md:block">
              <Logo img={star.red} />
            </div>
          )}
          <div className="hidden md:block ">
            <ArrowLeft refBack={skillsRef} img={arrows.left} />
          </div>
        </div>
        <div className="child-middle overflow-auto lg:overflow-hidden p-2 lg:pt-7 flex justify-between">
          {/* middle side md-lg*/}
          <div className="max-md:flex mt-10 mb-10 md:mt-4 lg:mt-0">
            {is8Bit ? (
              <NavBar bgColor="bg-[var(--color-red)]" />
            ) : (
              <NavBarProf bgColor="text-purple from-purple-950 to-black" />
            )}
            
          </div>
          {/*middle pc */}
          <div className="grid grid-cols-1 gap-20 lg:gap-0 w-full h-full ">
            <div className="flex justify-center items-center gap-15 h-auto">
              {/*img pc*/}
              <div className="hidden md:flex items-center h-full">
                <img
                  className={`md:w-[170px] md:h-[120px] lg:w-[160px] lg:h-[150px] object-cover rounded-full border-3 ${is8Bit ? 'border-red' : 'border-indigo-500'}`}
                  src={`${is8Bit ? aboutImgs.me8bit : aboutImgs.me}`}
                  alt="Matheus Alves"
                />
              </div>
              <AboutTitle />
            </div>
            <AboutExp />
          </div>
        </div>
        <div className="child pe-10 items-end h-auto md:h-full w-full">
          {/* right side md-lg*/}

          <div className="hidden md:flex md:justify-end ">
            <ArrowRight refNext={contactRef} img={arrows.right} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
