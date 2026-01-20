import ArrowLeft from "../components/ArrowLeft.jsx";
import ArrowRight from "../components/ArrowRight.jsx";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar.jsx";
import Title from "../components/Title.jsx";
import MobileCards from "../components/MobileCards.jsx";
import InteractiveCards from "../components/InteractiveCards.jsx";
import { arrows, star } from "../constants/index.jsx";
import { useScroll } from "../contexts/Scroll.context.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";
import NavBarProf from "../components/NavBarProf.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



const Projects = () => {
  const { headerRef, skillsRef } = useScroll();
  const { is8Bit } = useTheme();

  const backgroundStyle = is8Bit
    ? "bg-[url('/backgrounds/space-invaders.jpg')] md:bg-right lg:bg-center"
    : "bg-gradient-to-b from-black via-black to-pink-700";


  useGSAP(() => {
  // timeline inicial PAUSADA
  const tl = gsap.timeline({ paused: true });

  tl.fromTo(".anim-logo", 
    { opacity: 0, y: -30, filter: "blur(10px)" }, 
    { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }
  )
  .fromTo(".anim-navbar", 
    { opacity: 0, y: -20 }, 
    { opacity: 1, y: 0, duration: 0.7 }, "<0.1"
  )
  .fromTo(".anim-title", 
    { opacity: 0, scale: 0.8, filter: "blur(10px)" }, 
    { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1 }, "<0.1"
  )
  .fromTo(".anim-cards",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
    "<0.2"
  )
  .fromTo(".anim-arrow-left",
    { opacity: 0, x: -40 },
    { opacity: 1, x: 0, duration: 0.6 },
    "<0.2"
  )
  .fromTo(".anim-arrow-right",
    { opacity: 0, x: 40 },
    { opacity: 1, x: 0, duration: 0.6 },
    "<0.1"
  );

  // deixa disponível globalmente
  window.projectsEnterAnimation = tl;
}, []);


  return (
    <section id="projects">
      <div
        className={`absolute z-0 inset-0 bg-cover bg-no-repeat bg-center  ${backgroundStyle}`}
      >
        <div
          className={`absolute inset-0 ${is8Bit ? "bg-black/80" : "bg-black/40"} `}
        />
      </div>
      <div className="flex flex-col md:flex-row relative z-10 w-full h-screen">
        <div className="child ps-10 flex-col">
          {is8Bit && <Logo img={star.purple} />}
          <div className="hidden md:block ">
            {is8Bit ? (
              <ArrowLeft refBack={headerRef} img={arrows.left} />
            ) : (
              <ArrowLeft refBack={headerRef} img={arrows.left2} />
            )}
          </div>
        </div>
        <div className="child-middle lg:pt-7 flex gap-40 lg:gap-35 md:gap-10">
          {/* middle side md-lg*/}
          <div className="max-md:mt-10 max-md:flex">
            {is8Bit ? (
              <NavBar  bgColor="bg-[var(--color-pink)]" />
            ) : (
              <NavBarProf bgColor="from-pink-950 to-black text-pink-600" />
            )}
            {is8Bit ? (
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
            ) : (
              <Title
                text={
                  <p className="font-fair text-pink-600 font-sans uppercase">
                    Projects
                  </p>
                }
                gradient="from-transparent via-pink-700 to-transparent"
                width="w-50 md:w-50 lg:w-100"
              />
            )}
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
            {is8Bit ? (
              <ArrowRight  refNext={skillsRef} img={arrows.right} />
            ) : (
              <ArrowRight  refNext={skillsRef} img={arrows.right2} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
