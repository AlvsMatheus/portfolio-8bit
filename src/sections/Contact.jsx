import { useState } from "react";
import ContactForm from "../components/contact/contactForm.jsx";
import ArrowLeft from "../components/ArrowLeft.jsx";
import ArrowRight from "../components/ArrowRight.jsx";
import BtnContact from "../components/BtnContact.jsx";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar.jsx";
import NavBarProf from "../components/NavBarProf.jsx";
import Title from "../components/Title.jsx";
import { arrows, star, pcImg } from "../constants/index.jsx";
import { useScroll } from "../contexts/Scroll.context.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";

const Contact = () => {
  const { aboutRef, footerRef } = useScroll();
  const { is8Bit } = useTheme();

  const backgroundStyle = is8Bit
    ? "bg-[url('/backgrounds/contact-me.gif')] md:bg-right lg:bg-center "
    : "bg-gradient-to-b from-black via-black to-emerald-700";

  const [messageCase, setMessageCase] = useState(false);


  return (
    <section id="contact">
      <div
        className={`absolute z-0 inset-0 bg-cover bg-no-repeat bg-center ${backgroundStyle}`}
      >
        <div
          className={
            messageCase
              ? `absolute inset-0 bg-black/90 transition-all duration-700 ease`
              : `absolute inset-0 bg-black/70 transition-all duration-700 ease`
          }
        />
      </div>
      <div className="flex flex-col md:flex-row relative z-10 w-full h-screen">
        <div className="child ps-10 flex-col">
          {/* left side md-lg*/}
          {is8Bit && <Logo img={star.green} />}
          <div className="hidden md:block ">
            <ArrowLeft refBack={aboutRef} img={arrows.left} />
          </div>
        </div>
        <div className="child-middle relative z-10 md:overflow-auto lg:overflow-visible lg:pt-7 flex justify-between">
          {/* middle side md-lg*/}
          <div className="max-md:mt-10 max-md:flex">
            {!messageCase && (
              <>
                {is8Bit ? (
                  <NavBar bgColor="bg-[var(--color-green)]" />
                ) : (
                  <NavBarProf bgColor="text-emerald-600 from-emerald-950 to-black" />
                )}
                {is8Bit ? (
                  <Title
                    text={
                      <p className="text-white">
                        <span className="text-[var(--color-green)]">C</span>on
                        <span className="text-[var(--color-green)]">t</span>a
                        <span className="text-[var(--color-green)]">ct</span>{" "}
                        <span className="text-[var(--color-green)]">M</span>e
                      </p>
                    }
                    gradient="from-green-300 via-green"
                    width="w-50 md:w-50 lg:w-120"
                  />
                ) : (
                  <Title
                    text={
                      <p className="font-fair text-emerald-600 font-sans uppercase">
                        Contact me
                      </p>
                    }
                    gradient="from-transparent via-emerald-700 to-transparent"
                    width="w-50 md:w-50 lg:w-100"
                  />
                )}
              </>
            )}
          </div>
          <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
            {messageCase ? (
              <div className="relative flex bg-emerald-950 rounded-4xl lg:h-160 w-full justify-center items-center transition-all duration-400 ease-in-out shadow-lg shadow-indigo-500/10">
                <div
                  onClick={() => setMessageCase(false)}
                  className="absolute z-100 cursor-pointer -right-6 -top-10"
                >
                  <img
                    className="w-20 h-20 lg:w-25 lg:h-25"
                    src={pcImg}
                    alt="pc logo"
                  />
                </div>
                <div className="flex lg:w-[50%] h-full lg:pt-10 px-5">
                  <ContactForm />
                </div>
                <div className="w-[50%] h-[100%] rounded-new bg-[url('/backgrounds/coffee.png')] md:center lg:bg-left bg-cover"></div>
              </div>
            ) : (
              <BtnContact onClick={() => setMessageCase(true)} />
            )}
          </div>
        </div>
        <div className="child pe-10 items-end h-auto md:h-full w-full">
          {/* right side md-lg*/}

          <div className="hidden md:flex md:justify-end ">
            <ArrowRight refNext={footerRef} img={arrows.right} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
