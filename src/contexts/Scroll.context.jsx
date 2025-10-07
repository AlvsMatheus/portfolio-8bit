import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext(null);

export function ScrollProvider({ children }) {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        headerRef,
        projectsRef,
        skillsRef,
        aboutRef,
        contactRef,
        footerRef,
        scrollTo,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => useContext(ScrollContext);
