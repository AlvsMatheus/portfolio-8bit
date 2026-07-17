import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import { skills } from "../../constants/index";
import { Draggable } from "gsap/Draggable";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";

gsap.registerPlugin(Draggable);

const InfiniteSkills = () => {
  const { is8Bit } = useTheme();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useTranslation();
  const cardRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const duplicatedSkills = [...skills, ...skills];

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    const animation = gsap.to(track, {
      x: -totalWidth,
      duration: 80, 
      ease: "none",
      repeat: -1,
    });

    animationRef.current = animation;

    Draggable.create(track, {
      type: "x",
      inertia: true,

      onPress() {
        animation.pause();
      },

      onRelease() {
        animation.resume();
      },

      onDrag() {
        if (this.x <= -totalWidth) {
          this.x += totalWidth;
        }

        if (this.x >= 0) {
          this.x -= totalWidth;
        }

        gsap.set(track, { x: this.x });
      },
    });
  }, []);

  const handleCardClick = (skill) => {
    animationRef.current?.pause();
    setSelectedSkill(skill);
    setIsFlipped(false);
  };

  const toggleFlip = () => {
    const nextState = !isFlipped;
    setIsFlipped(nextState);
    animateFlip(cardRef.current, nextState);
  };

  const animateFlip = (element, isFlipped) => {
    gsap.to(element, {
      rotationY: isFlipped ? 180 : 0,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  const animateEntrance = (element) => {
    if (!element) return;
    gsap.fromTo(
      element,
      { scale: 0.5, opacity: 0, y: 100 },
      { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
    );
  };

  const closeModule = () => {
    setSelectedSkill(null);
    animationRef.current?.resume(); 
  };

  const handleEnter = (e) => {
  const card = e.currentTarget;
  gsap.to(card.querySelector(".skill-glow"), {
    opacity: 1,
    scale: 1.25,
    duration: 0.6,
    ease: "power2.out",
  });
  gsap.to(card.querySelector(".skill-icon"), {
    y: -6,
    scale: 1.08,
    duration: 0.45,
    ease: "power2.out",
  });
  gsap.to(card.querySelector(".skill-name"), {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "power2.out",
  });
  gsap.to(card, {
    borderColor: "rgba(129,140,248,0.45)",
    boxShadow: "0 25px 45px -15px rgba(99,102,241,0.35)",
    duration: 0.4,
    ease: "power2.out",
  });
};

const handleLeave = (e) => {
  const card = e.currentTarget;
  gsap.to(card.querySelector(".skill-glow"), { opacity: 0, scale: 1, duration: 0.5 });
  gsap.to(card.querySelector(".skill-icon"), { y: 0, scale: 1, duration: 0.4 });
  gsap.to(card.querySelector(".skill-name"), { opacity: 0, y: 8, duration: 0.4 });
  gsap.to(card, {
    rotateX: 0,
    rotateY: 0,
    borderColor: "rgba(99,102,241,0.15)",
    boxShadow: "0 0 0 rgba(0,0,0,0)",
    duration: 0.5,
    ease: "power2.out",
  });
};

const handleMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  gsap.to(card, {
    rotateY: x / 20,
    rotateX: -y / 20,
    duration: 0.5,
    ease: "power2.out",
  });
};

  return (
    <div className="relative w-full h-auto mb-2 rounded-md">
      <div className={`overflow-hidden w-full relative`}>
        <div
          ref={trackRef}
          className="flex gap-10 p-6 w-max cursor-grab active:cursor-grabbing"
        >
          {is8Bit && duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(skill)}
              className="skill-card group relative cursor-pointer overflow-hidden
                h-60 w-40 lg:h-70 lg:w-70 flex flex-col justify-center items-center
                rounded-2xl bg-gradient-to-b from-[#0c0620] to-black
                border border-indigo-800/40 transition-all duration-300
                hover:border-cyan-400/50 hover:-translate-y-1"
            >
              {/* Textura de circuito sutil */}
              <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#818cf8 1px, transparent 1px), linear-gradient(90deg, #818cf8 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />

              {/* Scanline que passa no hover */}
              <div className="scanline absolute left-0 w-full h-8 bg-gradient-to-b from-cyan-400/20 to-transparent pointer-events-none" />

              {/* Cantos tipo HUD */}
              {["top-2 left-2 border-t-2 border-l-2", "top-2 right-2 border-t-2 border-r-2",
                "bottom-2 left-2 border-b-2 border-l-2", "bottom-2 right-2 border-b-2 border-r-2"
              ].map((pos, i) => (
                <span
                  key={i}
                  className={`absolute w-4 h-4 border-cyan-400 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 ${pos}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                />
              ))}

              {/* Ícone */}
              <img
                src={skill.imgPath}
                alt={skill.name}
                className="w-1/2 relative z-10 transition-all duration-300
                  group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
              />

              {/* Nome — sobe no hover */}
              <span
                className="absolute bottom-4 text-[10px] lg:text-xs font-mono uppercase
                  tracking-widest text-cyan-300 opacity-0 translate-y-3
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300 z-10"
              >
                {skill.name}
              </span>
            </div>
          ))}
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(skill)}
              onMouseEnter={handleEnter}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              style={{ transformStyle: "preserve-3d", transformPerspective: 700 }}
              className="relative cursor-pointer overflow-hidden
                h-60 w-40 lg:h-70 lg:w-70 flex flex-col justify-center items-center gap-4
                rounded-2xl border border-indigo-500/15
                bg-gradient-to-b from-white/[0.04] to-white/[0.01]
                backdrop-blur-sm transition-colors"
            >
              {/* Glow de cor atrás do ícone */}
              <div className="skill-glow absolute w-28 h-28 rounded-full bg-indigo-500/40 blur-3xl opacity-0 pointer-events-none" />

              {/* Ícone */}
              <img
                src={skill.imgPath}
                alt={skill.name}
                className="skill-icon w-1/2 relative z-10 pointer-events-none"
              />

              {/* Nome, aparece no hover */}
              <span className="skill-name relative z-10 text-xs lg:text-sm font-medium
                tracking-wide text-indigo-200 opacity-0 translate-y-2 pointer-events-none">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/*FOCUSED SECTION */}

      {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">

            {is8Bit ? (
              <>
                {/* 8-BIT */}
                <button
                  onClick={closeModule}
                  className="absolute top-10 right-10 text-cyan-300 font-mono text-2xl
                    border border-cyan-400/40 w-10 h-10 flex items-center justify-center
                    rounded-lg hover:bg-cyan-400/10 transition-colors"
                >
                  X
                </button>

                <div
                  ref={animateEntrance}
                  onClick={toggleFlip}
                  className="perspective-1000 w-80 h-90 lg:w-96 lg:h-[500px] cursor-pointer"
                >
                  <div
                    ref={cardRef}
                    className="relative w-full h-full transition-transform duration-0 preserve-3d"
                  >
                    {/* Front side */}
                    <div
                      className="absolute inset-0 backface-hidden overflow-hidden
                        bg-gradient-to-b from-[#0c0620] to-black border-2 border-cyan-400/40
                        rounded-2xl flex flex-col items-center justify-center p-6"
                    >
                      {/* Textura de circuito */}
                      <div
                        className="absolute inset-0 opacity-[0.06] pointer-events-none"
                        style={{
                          backgroundImage:
                            "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
                          backgroundSize: "16px 16px",
                        }}
                      />

                      {["top-3 left-3 border-t-2 border-l-2", "top-3 right-3 border-t-2 border-r-2",
                        "bottom-3 left-3 border-b-2 border-l-2", "bottom-3 right-3 border-b-2 border-r-2"
                      ].map((pos, i) => (
                        <span key={i} className={`absolute w-5 h-5 border-cyan-400 ${pos}`} />
                      ))}

                      <img src={selectedSkill.imgPath} alt={selectedSkill.name} className="w-1/3 relative z-10
                        drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                      <h3 className="text-cyan-300 text-xl font-mono uppercase tracking-widest mt-4 relative z-10">
                        {selectedSkill.name}
                      </h3>
                      <p className="text-indigo-300/80 mt-4 text-center text-sm font-mono relative z-10">
                        {t("skills.howilearn")}
                      </p>
                    </div>

                    {/* Back side */}
                    <div
                      className="absolute inset-0 backface-hidden overflow-hidden
                        bg-gradient-to-b from-[#0c0620] to-black border-2 border-cyan-400/40
                        rounded-2xl flex flex-col items-center justify-center p-8 rotate-y-180"
                    >
                      <div
                        className="absolute inset-0 opacity-[0.06] pointer-events-none"
                        style={{
                          backgroundImage:
                            "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
                          backgroundSize: "16px 16px",
                        }}
                      />
                      <h3 className="text-cyan-300 font-mono uppercase tracking-widest text-lg mb-4 relative z-10">
                        {t("about.journey")}
                      </h3>
                      <p className="text-indigo-200 text-center text-sm font-mono leading-6 relative z-10">
                        {t(selectedSkill.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/*  professional */}
                <button
                  onClick={closeModule}
                  className="absolute top-10 right-10 text-white/70 hover:text-white text-3xl
                    w-10 h-10 flex items-center justify-center rounded-full
                    hover:bg-white/10 transition-colors"
                >
                  &times;
                </button>

                <div
                  ref={animateEntrance}
                  onClick={toggleFlip}
                  className="perspective-1000 w-80 h-90 lg:w-96 lg:h-[500px] cursor-pointer"
                >
                  <div
                    ref={cardRef}
                    className="relative w-full h-full transition-transform duration-0 preserve-3d"
                  >
                    {/* Front side */}
                    <div
                      className="absolute inset-0 backface-hidden overflow-hidden
                        rounded-3xl border border-indigo-500/20
                        bg-gradient-to-b from-white/[0.06] to-white/[0.015] backdrop-blur-xl
                        shadow-[0_25px_60px_-15px_rgba(99,102,241,0.35)]
                        flex flex-col items-center justify-center p-8"
                    >
                      <div className="absolute w-40 h-40 rounded-full bg-indigo-500/30 blur-3xl pointer-events-none" />

                      <img src={selectedSkill.imgPath} alt={selectedSkill.name} className="w-1/3 relative z-10" />

                      <h3 className="relative z-10 text-2xl font-semibold tracking-tight mt-6
                        bg-gradient-to-r from-indigo-200 to-white bg-clip-text text-transparent">
                        {selectedSkill.name}
                      </h3>
                      <p className="relative z-10 text-indigo-300/70 mt-3 text-center text-sm">
                        {t("skills.howilearn")}
                      </p>
                    </div>

                    {/* Back side */}
                    <div
                      className="absolute inset-0 backface-hidden overflow-hidden
                        rounded-3xl border border-indigo-500/20
                        bg-gradient-to-b from-white/[0.06] to-white/[0.015] backdrop-blur-xl
                        shadow-[0_25px_60px_-15px_rgba(99,102,241,0.35)]
                        flex flex-col items-center justify-center p-8 rotate-y-180"
                    >
                      <h3 className="text-lg font-semibold tracking-tight mb-4
                        bg-gradient-to-r from-indigo-200 to-white bg-clip-text text-transparent">
                        {t("about.journey")}
                      </h3>
                      <p className="text-indigo-100/80 text-center text-sm leading-6">
                        {t(selectedSkill.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
    </div>
  );
};

export default InfiniteSkills;
