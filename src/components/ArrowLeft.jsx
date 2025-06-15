import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const ArrowLeft = ({ onScrollBack, img }) => {
  const [isHover, setIsHover] = useState(false);
  const tooltipRef = useRef(null);

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
          x: -10,
          duration: 0.3,
          pointerEvents: "none",
        });
      }
    }
  }, [isHover]);

  return (
    <div className="rounded-3xl absolute top-1/2 transform -translate-y-1/2 left-4">
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onScrollBack}
        className="relative flex cursor-pointer md:w-10 lg:w-40 "
      >
        <div className=" bg-black rounded-full p-2">
          <img
            src={img}
            className="lg:w-[40px] wobble"
            alt="arrow"
          />
        </div>

        <div
          ref={tooltipRef}
          style={{ opacity: 0, transform: "translateY(-50%) translateX(-10px)", pointerEvents: "none" }}
          className="absolute left-14 top-1/2 text-white px-2 py-1 rounded-md shadow-md whitespace-nowrap md:text-[12px]"
        >
          Back
        </div>
      </button>
    </div>
  );
};

export default ArrowLeft;
