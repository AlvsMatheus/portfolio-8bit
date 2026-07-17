import ContactForm from "../components/contact/contactForm.jsx";
import ArrowLeft from "../components/ui/ArrowLeft.jsx";
import ArrowRight from "../components/ui/ArrowRight.jsx";
import Logo from "../components/ui/Logo.jsx";
import NavBar from "../components/ui/NavBar.jsx";
import NavBarProf from "../components/ui/NavBarProf.jsx";
import Title from "../components/ui/Title.jsx";
import { arrows, star } from "../constants/index.jsx";
import { useScroll } from "../contexts/Scroll.context.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { aboutRef, footerRef } = useScroll();
  const { is8Bit } = useTheme();
  const { t } = useTranslation();

  const backgroundStyle = is8Bit
    ? "bg-[url('/backgrounds/contact-me.gif')] md:bg-right lg:bg-center"
    : "bg-gradient-to-b from-black via-black to-emerald-700";

  return (
    <section id="contact">
      <div className={`absolute z-0 inset-0 bg-cover bg-no-repeat bg-center ${backgroundStyle}`}>
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="flex flex-col md:flex-row relative z-10 w-full h-screen">
        <div className="child ps-10 flex-col">
          {is8Bit && <Logo img={star.green} />}
          <div className="hidden md:block">
            <ArrowLeft refBack={aboutRef} img={arrows.left} />
          </div>
        </div>

        <div className="child-middle relative z-10 md:overflow-auto lg:overflow-visible lg:pt-7 flex justify-between">
          <div className="max-md:mt-10 max-md:flex">
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
                  <p className="font-fair text-4xl text-emerald-600 font-sans uppercase">
                    {t("titles.contact")}
                  </p>
                }
                gradient="from-transparent via-emerald-700 to-transparent"
                width="w-50 md:w-50 lg:w-100"
              />
            )}
          </div>

          <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full px-5 lg:px-0">
            <div
              className={
                is8Bit
                  ? "relative flex flex-col lg:flex-row w-full lg:h-140 max-w-4xl overflow-hidden rounded-2xl border-2 border-[var(--color-green)]/40 bg-gradient-to-b from-[#04150d] to-black"
                  : "relative flex flex-col lg:flex-row w-full lg:h-140 max-w-4xl overflow-hidden rounded-3xl border border-emerald-500/15 bg-gradient-to-b from-white/[0.05] to-white/[0.015] backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(16,185,129,0.25)]"
              }
            >
              {is8Bit && (
                <>
                  <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(#34d399 1px, transparent 1px), linear-gradient(90deg, #34d399 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  {["top-3 left-3 border-t-2 border-l-2", "top-3 right-3 border-t-2 border-r-2",
                    "bottom-3 left-3 border-b-2 border-l-2", "bottom-3 right-3 border-b-2 border-r-2"
                  ].map((pos, i) => (
                    <span key={i} className={`absolute w-5 h-5 border-[var(--color-green)] z-20 ${pos}`} />
                  ))}
                </>
              )}

              <div className="relative z-10 flex w-full lg:w-[55%] p-6 lg:p-10">
                <ContactForm />
              </div>

              <div
                className="relative hidden lg:block lg:w-[45%] bg-[url('/backgrounds/coffee.png')] bg-cover bg-left"
                style={is8Bit ? { imageRendering: "pixelated" } : {}}
              >
                <div
                  className={
                    is8Bit
                      ? "absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"
                      : "absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="child pe-10 items-end h-auto md:h-full w-full">
          <div className="hidden md:flex md:justify-end">
            <ArrowRight refNext={footerRef} img={arrows.right} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;