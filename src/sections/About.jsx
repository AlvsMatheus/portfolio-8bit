import Logo from "../components/Logo";
import NavBar from "../components/NavBar.jsx";
import ArrowLeft from "../components/ArrowLeft.jsx";
import ArrowRight from "../components/ArrowRight.jsx";
import { arrows, star, aboutimgs } from "../constants/index.jsx";
import Title from "../components/Title.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import { useScroll } from "../contexts/Scroll.context.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";
import AboutTitle from "../components/AboutTitle.jsx";
import AboutExp from "../components/AboutExp.jsx";



const About = () => {

  const { skillsRef, contactRef } = useScroll();
  const { is8Bit } = useTheme()

  const backgroundStyle = is8Bit
  ? "bg-[url('/backgrounds/background-about.gif')] md:bg-right lg:bg-center"
  : "bg-[url('/backgrounds/background-prof.png')]"

  return (
    <section id="about">
      <div className={`absolute z-0 inset-0 bg-cover bg-no-repeat bg-center ${backgroundStyle}`}>
      <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="flex flex-col md:flex-row relative z-10 w-full h-screen">
        <div className="child ps-10 flex-col">
          {/* left side md-lg*/}
          <div className="hidden md:block">
            <Logo img={star.red}/>
          </div>
            <div className="hidden md:block ">
              <ArrowLeft refBack={skillsRef} img={arrows.left}/>
            </div>
        </div>
        <div className="child-middle overflow-auto lg:overflow-hidden p-2 lg:pt-7 flex justify-between">
          {/* middle side md-lg*/}
          <div className="max-md:flex mt-10 md:mt-4 lg:mt-0">
            <NavBar bgColor='bg-[var(--color-red)]'/>
            <div className="md:hidden">
              <Title
              text={(
              <p className="text-white">
                <span className="text-[var(--color-red)]">A</span>bo<span className="text-[var(--color-red)]">ut</span> <span className="text-[var(--color-red)]" >M</span>e
              </p>)}
              gradient='from-red-500 via-red-400 '
              width='w-50 md:w-50 lg:w-120'/>
            </div>
          </div>
          {/*middle pc */}
          <div className="grid grid-cols-1 gap-5 lg:gap-0 w-full h-full ">
            <div className="flex items-center lg:gap-0 h-auto">
              {/*img pc*/}
              <div className="hidden md:flex items-center  lg:w-[260px] h-full">
                <img className="md:w-[170px] md:h-[120px]  lg:w-[160px] lg:h-[150px] object-cover rounded-3xl" src={aboutimgs.me} alt="Matheus Alves" />
              </div>
              <AboutTitle />
            </div>
            <AboutExp />
          </div>
          <div>
            {/* Progress Bar pc */}
            <ProgressBar/>
          </div>
        </div>
        <div className="child pe-10 items-end h-auto md:h-full w-full">
          {/* right side md-lg*/}
          
          <div className="hidden md:flex md:justify-end ">
              <ArrowRight refNext={contactRef}  img={arrows.right}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
