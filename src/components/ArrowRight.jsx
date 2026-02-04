import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import { useScroll } from "../contexts/Scroll.context";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const ArrowRight = ({refNext,img}) => {
  const tooltipRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const { scrollTo } = useScroll();
  const { is8Bit } = useTheme();
  const { t } = useTranslation();


  useEffect(() => {
    if (tooltipRef.current) {
      if (isHover) {
        gsap.to(tooltipRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.3,
          pointerEvents: "auto",
        });
      } else {
        gsap.to(tooltipRef.current, {
          opacity: 0,
          x: 10,
          duration: 0.3,
          pointerEvents: "none",
        });
      }
    }
  }, [isHover]);


  return (
    
      <div className="rounded-3xl absolute top-1/2 transform -translate-y-1/2 right-4">
        <button 
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => scrollTo(refNext)} 
        className="flex cursor-pointer justify-end md:w-10 lg:w-40 ">
          <div
            ref={tooltipRef}
            style={{ opacity: 0, transform: "translateY(-50%) translateX(-10px)", pointerEvents: "none" }}
            className={`absolute right-14 top-1/2 text-white px-2 py-1 rounded-md shadow-md whitespace-nowrap md:text-[12px] ${!is8Bit && "font-fair md:text-[20px]"}`}
          >
            {t("arrows.next")}
          </div>
          <div className="anim-arrow-right bg-black rounded-full p-2">
            <img
              src={img}
              className="lg:w-[40px] wobble"
              alt="arrow"
            />
          </div>
        </button>
      </div>
    
  )
}

export default ArrowRight
