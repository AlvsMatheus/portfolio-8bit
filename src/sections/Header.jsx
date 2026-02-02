import Button from "../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedWords from "../components/hero/AnimatedWords.jsx";
import { useScroll } from "../contexts/Scroll.context.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";
import headerVideo from "../assets/videos/header.mp4";
import ProfessionalWords from "../components/header/ProfessionalWords.jsx";

const Header = () => {
  const { scrollTo } = useScroll();
  const { projectsRef } = useScroll();
  const { is8Bit, toggleTheme } = useTheme();

  const handleClick = () => {
    scrollTo(projectsRef);
  };

  const backgroundStyle = is8Bit
    ? "bg-[url('/backgrounds/purple-house.gif')] bg-cover bg-no-repeat bg-center md:bg-right lg:bg-center"
    : " w-full h-full object-cover";

  const middleContentStyle = is8Bit
    ? "md:row-start-2 md:self-center flex max-md:flex-col gap-20 md:gap-0  md:grid md:grid-cols-2 md:items-center"
    : "md:row-start-2 md:self-center flex max-md:flex-col gap-20 md:gap-0 h-full  md:grid md:grid-cols-2 md:items-center";

  useGSAP(() => {
    gsap.fromTo(
      ".animatedwords",
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      },
    );
  }, [is8Bit]);

  useGSAP(() => {
    gsap.fromTo(
      ".animatedbutton",
      {
        opacity: 0,
        scale: 0,
        blur: 10,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.inOut",
        blur: 0,
      },
    );
  }, [is8Bit]);

  return (
    <header className="relative" id="home">
      {/* Fundo Condicional */}

      {is8Bit ? (
        <div className={`absolute inset-0 ${backgroundStyle}`}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ) : (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 ${backgroundStyle}`}
          >
            <source src={headerVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70" />
        </>
      )}

      {/* Container Principal com Estrutura Grid (Desktop) / Flex (Mobile) */}
      <div
        className={`flex flex-col ${is8Bit ? "max-md:justify-center" : "max-md:justify-center"} w-full min-h-screen px-10 md:pe-0 relative z-10 gap-80 md:gap-0 
                     md:grid md:grid-rows-[auto_1fr] md:p-10`}
      >
        {/* Toggle de Tema no Topo e Canto Direito absolute*/}
        <button
          onClick={toggleTheme}
          className={`absolute top-20 left-10 md:top-10 lg:top-15 lg:left-20 w-30 p-2 cursor-pointer text-white border-2 z-20 transition-all duration-300 
                     ${is8Bit ? "bg-purple-700 border-white font-retro text-[10px] rounded-full" : "font-fair bg-transparent border-pink-500 rounded-full font-sans text-sm text-nowrap"}`}
        >
          {is8Bit ? "main theme" : "retro theme"}
        </button>
        {/* Fim Toggle de Tema no Topo e Canto Direito */}

        {/* 2. MEIO: Conteúdo Principal (Centralizado Verticalmente) */}
        <div className={`${middleContentStyle}`}>
          {/* Título Condicional */}
          {is8Bit ? <AnimatedWords /> : <ProfessionalWords />}

          <div className="md:col-start-2 flex justify-end">
            {/* Botão Condicional (Desktop) */}
            <div className="hidden md:block">
              {is8Bit ? (
                <Button
                  phrase={"Click Here"}
                  phrasetwo={"Start"}
                  ref={projectsRef}
                />
              ) : (
                <button
                  onClick={handleClick}
                  className="font-fair px-8 py-3 bg-pink-600 text-white font-extralight font-sans rounded-l-full shadow-xl hover:bg-pink-800 transition"
                >
                  View Projects
                </button>
              )}
            </div>

            {/* Botão Mobile (Mantido 8-bit, mas você deve criar a versão condicional aqui também) */}
            <div
              className={`md:hidden flex justify-center h-15 w-full ${!is8Bit && "items-center"}`}
            >
              {is8Bit ? (
                <div className="button-wrapper ">
                  <button
                    onClick={handleClick}
                    className="animatedbutton font-retro button-shine button-front"
                  >
                    Start
                  </button>
                  <button
                    onClick={handleClick}
                    className="animatedbutton font-retro button-shine button-back"
                  >
                    Start
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleClick}
                  className="p-2 rounded-3xl border-2 text-white border-pink-500 w-[50%] font-fair"
                >
                  View Projects
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
