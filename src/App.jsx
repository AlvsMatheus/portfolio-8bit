import { useRef } from 'react'
import Header from './sections/Header'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


function App() {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <main className='overflow-x-auto lg:overflow-x-hidden overflow-y-hidden scroll-smooth snap-x snap-mandatory flex w-screen h-screen bg-purple-200'>
        <section 
        ref={headerRef}
        className='snap-start'
        ><Header onScrollNext={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}/></section>

        <section
        ref={projectsRef}
        className='snap-start'
        ><Projects
         onScrollNext={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}
         onScrollBack={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}
         /></section>

        <section 
        ref={skillsRef}
        className='snap-start'
        ><Skills
         onScrollNext={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}
         onScrollBack={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
        />
        </section>

        <section 
        ref={aboutRef}
        className='snap-start'
        ><About
        onScrollNext={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
        onScrollBack={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}
        />
        </section>

        <section 
        ref={contactRef}
        className='snap-start'
        ><Contact
        onScrollNext={() => footerRef.current.scrollIntoView({ behavior: 'smooth' })}
        onScrollBack={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}
        />
        </section>

        <section 
        ref={footerRef}
        className='snap-start'
        ><Footer
        onScrollNext={() => headerRef.current.scrollIntoView({ behavior: 'smooth'})}
        onScrollBack={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
        />
        </section>

      </main>
    </>
  )
}

export default App
