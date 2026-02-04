import InfiniteRow from "./InfiniteRow.jsx";
import { useState } from "react";
import { projects } from "../../constants/index.jsx";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useTranslation } from "react-i18next";

const Card = ({
  index,
  hoveredIndex,
  setHoveredIndex,
  flippedIndex,
  setFlippedIndex,
  name,
  bg,
  resource,
  descriptionKey,
  link,
}) => {
  const isHovered = hoveredIndex === index;
  const isFlipped = flippedIndex === index;
  const { is8Bit } = useTheme();
  const { t } = useTranslation();

  const backBorderCard = is8Bit ? "gradient-border" : "gradient-border-prof";

  const handleFlip = (e) => {
    const tag = e.target.tagName.toLowerCase();
    if (tag === "button" || tag === "a") return;
    setFlippedIndex(isFlipped ? null : index);
  };

  return (
    <div
      className={`
        lg:overflow-hidden relative cursor-pointer rounded-xl transition-all duration-500 ease-in-out perspective
        h-[200px] md:h-[250px] lg:h-[400px]
        ${isHovered ? "w-[800px] scale-105 z-10 shadow-purplee" : "w-[80px]"}
        ${hoveredIndex !== null && !isHovered ? "opacity-50 scale-90" : ""}
      `}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={handleFlip}
    >
      <div
        className={`
          w-full h-full absolute transition-transform duration-500 [transform-style:preserve-3d]
          ${isFlipped ? "rotate-y-180" : ""}
        `}
      >
        {/* Front of card */}
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className={`
            group absolute w-full h-full bg-cover bg-center 
            text-black rounded-4xl shadow-md [backface-visibility:hidden]
          `}
        >
          {/* black filter */}
          <div
            className={`
              absolute inset-0 rounded-4xl transition-opacity duration-500 ease-in
              bg-black/60 ${isHovered ? "opacity-0" : "opacity-100"}
              pointer-events-none
            `}
          />
          {isHovered && (
            <div className="relative z-10 flex flex-col h-full w-full p-4">
              <div className="flex w-full h-[50%]">
                <div>
                  <h1 className={`${is8Bit ? 'font-retro' : 'font-fair'} text-white p-2 bg-black/40 rounded-2xl underline`}>
                    {name}
                  </h1>
                </div>
              </div>
              <span className="flex items-end mb-2 gap-5 p-1 w-full h-[50%]">
                {resource}
              </span>
            </div>
          )}
        </div>

        {/* Back of card */}
        <div
          className={`${backBorderCard} absolute w-full h-full text-white rounded-4xl shadow-md [backface-visibility:hidden] rotate-y-180 flex items-center justify-center font-bold text-xs md:text-base z-10`}
        >
          <div className="gradient-content flex flex-col justify-between h-full w-full">
            {isHovered && (
              <div>
                <div className="flex flex-col justify-center p-3 w-full h-auto">
                  <div className="text-center pb-2">
                    <h1
                      className={`text-2xl ${is8Bit ? "font-retro text-purple" : "font-fair text-pink-700 uppercase"}`}
                    >
                      {t("projectcard.about")}
                    </h1>
                    <div
                      className={`h-[2px] w-full mt-1 ${is8Bit ? "bg-[linear-gradient(to_right,_transparent,_purple,_magenta,_magenta,_purple,_transparent)]" : "bg-[linear-gradient(to_right,_transparent,_indigo,_purple,_purple,_indigo,_transparent)]"}   `}
                    />
                  </div>
                  <div className="flex w-full h-auto">
                    <p className="text-md mt-5 text-gray-400 text-center leading-normal">
                      {descriptionKey}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-center items-center mb-4 relative z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(link, "_blank");
                    }}
                    className="cursor-pointer text-md p-2 bg-gradient-to-r border-3 border-black from-purple-900 via-purple-700 to-pink-600 rounded-full"
                  >
                    {t("projectcard.visit")}
                  </button>
                </div>

                {is8Bit && (
                  <div className="flex justify-center items-center w-full h-auto mb-2">
                    <InfiniteRow />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractiveCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const { t } = useTranslation();

  return (
    <div className="anim-cards flex flex-row items-center justify-center gap-4 h-full w-full px-4 ">
      {projects.map((project, index) => (
        <Card
          key={project.name}
          index={index}
          name={project.name}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          flippedIndex={flippedIndex}
          setFlippedIndex={setFlippedIndex}
          bg={project.img}
          resource={project.lenguages}
          descriptionKey={t(project.descriptionKey)}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default InteractiveCards;
