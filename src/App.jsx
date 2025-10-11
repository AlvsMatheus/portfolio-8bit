import { ScrollProvider, useScroll } from "./contexts/Scroll.context";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const { headerRef, projectsRef, skillsRef, aboutRef, contactRef, footerRef } =
    useScroll();

  return (
    <main className="flex lg:overflow-hidden overflow-y-hidden snap-x snap-mandatory w-screen h-screen scroll-smooth">
      <section ref={headerRef} className="section">
        <Header />
      </section>

      <section ref={projectsRef} className="section">
        <Projects />
      </section>

      <section ref={skillsRef} className="section">
        <Skills />
      </section>

      <section ref={aboutRef} className="section">
        <About />
      </section>

      <section ref={contactRef} className="section">
        <Contact />
      </section>

      <section ref={footerRef} className="section overflow-hidden">
        <Footer />
      </section>
    </main>
  );
}

export default App;
