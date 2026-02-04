import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import { skills } from "../../constants/index";
import { Draggable } from "gsap/Draggable";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(Draggable);

const InfiniteSkills = () => {
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
    animation.current?.resume();
  };

  return (
    <div className="relative w-full h-auto mb-2 rounded-md">
      <div className={`overflow-hidden w-full relative`}>
        <div
          ref={trackRef}
          className="flex gap-10 w-max cursor-grab active:cursor-grabbing"
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(skill)}
              className="cursor-pointer bg-gradient-to-b from-indigo-700/20
               to-indigo-700/20 via-transparent border-2 border-indigo-800
                 h-60 w-40 lg:h-90 lg:w-70 flex justify-center items-center
                 rounded-4xl hover:scale-105 transition-transform"
            >
              <img
                src={skill.imgPath}
                alt={`${skill.name}`}
                className="w-1/2"
              />
            </div>
          ))}
        </div>
      </div>

      {/*FOCUSED SECTION */}

      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <button
            onClick={closeModule}
            className="absolute top-10 right-10 text-white text-4xl"
          >
            &times;
          </button>

          {/*3D CARD */}

          <div
            ref={animateEntrance}
            onClick={toggleFlip}
            className="perspective-1000 w-80 h-90 lg:w-96 lg:h-[500px] cursor-pointer"
          >
            <div
              ref={cardRef}
              className="relative w-full h-full transition-transform duration-0 preserve-3d"
            >
              {/*Front side */}

              <div
                className="absolute inset-0 backface-hidden bg-indigo-900 border-4
             border-indigo-500 rounded-3xl flex flex-col items-center justify-center p-6"
              >
                <img src={selectedSkill.imgPath} alt="selectedSkill.name" />
                <h3 className="text-white text-2xl font-bold uppercase">
                  {selectedSkill.name}
                </h3>
                <p className="text-indigo-300 mt-4 text-center">
                  {t("skills.howilearn")}
                </p>
              </div>

              {/*Back side */}

              <div className="absolute inset-0 backface-hidden bg-white rounded-3xl flex flex-col items-center justify-center p-8 rotate-y-180">
                <h3 className="text-indigo-900 text-xl font-bold mb-4">
                  {t("about.journey")}
                </h3>
                <p className="text-gray-800 text-center text-[10px] lg:text-sm leading-5">
                  {t(selectedSkill.descriptionKey)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfiniteSkills;
