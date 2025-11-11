import gsap from "gsap";
import Logo from "../components/Logo";
import ArrowLeft from "../components/ArrowLeft";
import Button from "../components/Button.jsx";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { arrows, star, github, linkedin } from "../constants/index.jsx";
import { useScroll } from "../contexts/Scroll.context.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx"; 

const Footer = () => {
  const { contactRef, headerRef } = useScroll();
  const { is8Bit } = useTheme();
  const moonRef = useRef(null);
  const [afterMoon, setAfterMoon] = useState(false);


  useGSAP(() => {
    if (!moonRef.current) return;

    moonRef.current.addEventListener("click", () => {
      gsap.fromTo(
        moonRef.current,
        { scale: 1 },
        {
          scale: 1.2,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        }
      );
    });
  }, []);

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
      }
    );
  }, []);

  return (
    <section id="footer" className="overflow-hidden">
      {
        is8Bit ?

      <div className="absolute inset-0 bg-violet-950 bg-cover bg-no-repeat bg-center md:bg-right lg:bg-center">
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute z-10 top-10 -left-260 w-1000 h-960 xl:w-1200 rounded-full bg-[url('/backgrounds/star-background.png')] bg-bottom" />
        <div
          ref={moonRef}
          onClick={() => setAfterMoon((prev) => !prev)}
          className={`absolute cursor-pointer z-10 xl:left-[10%]  lg:w-100 lg:h-100 bg-[url('/backgrounds/moon-8bit.png')] bg-cover bg-center
        ${afterMoon ? "xl:-bottom-[20%]" : "xl:top-[15%] "} transition-all duration-700 ease-in-out
      `}
        />
      </div>
      :

      <div className="absolute inset-0 bg-[url('/backgrounds/background-prof.png')] bg-cover bg-no-repeat bg-center md:bg-right lg:bg-center">

      </div>
      }

      <div className="flex flex-col md:flex-row relative z-10 w-full h-screen">
        <div className="child ps-10 flex-col">
          {/* left side md-lg*/}
          <Logo img={star.purple} />
          <div className="hidden md:block ">
            <ArrowLeft refBack={contactRef} img={arrows.left} />
          </div>
        </div>
        <div className="flex flex-col justify-evenly md:gap-20 lg:gap-0 h-full md:w-1/2 lg:pt-7">
          <div className="flex justify-center">
            <div className="flex items-center flex-col">
              <p className="text-3xl md:text-4xl lg:text-[90px] text-violet-700/90 whitespace-nowrap backdrop-blur-md bg-gray-950/60 p-5 rounded-3xl border-b border-white/20 ">
                THE END
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[100%] h-40 gap-10 text-center justify-center text-violet-700/70 lg:whitespace-nowrap backdrop-blur-md bg-gray/70 p-5 border-white/20">
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-sm">Matheus Alves</p>
              <p>All rights reserved © 2025</p>
            </div>
            <div className="flex justify-center gap-10 h-20 w-[100%]">
              <a target="_blank" href="https://github.com/AlvsMatheus">
                <img
                  className="w-12 h-12 hover:scale-140 transition-all ease-in-out duration-200"
                  src={github}
                  alt=""
                />
              </a>
              <a
                target="_black"
                href="https://www.linkedin.com/in/alvmatheuus/"
              >
                <img
                  className="w-12 h-12 hover:scale-140 transition-all ease-in-out duration-200"
                  src={linkedin}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="child items-end h-auto md:h-full w-full">
          {/* right side md-lg*/}

          <div className="hidden h-full md:flex md:justify-end ">
            <Button
              ref={headerRef}
              phrase={"Let's Go!"}
              phrasetwo={"Back journey?"}
              img={arrows.right}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
