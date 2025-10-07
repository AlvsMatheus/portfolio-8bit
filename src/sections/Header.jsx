 import Logo from '../components/Logo'
 import Button from '../components/Button'
 import gsap from 'gsap';
 import { useGSAP } from '@gsap/react';
 import {star} from '../constants/index.jsx'; 
 import AnimatedWords from '../components/AnimatedWords.jsx';
 import { useScroll } from '../contexts/Scroll.context.jsx';


 
 const Header = () => {
  const { projectsRef } = useScroll()

  useGSAP(() => {
    gsap.fromTo('.animatedwords', {
      opacity: 0,
      x: -50,
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    } )
  }, [])

  useGSAP(() => {
    gsap.fromTo('.animatedbutton', {
      opacity: 0,
      scale: 0,
      blur: 10,
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power2.inOut',
      blur: 0,
    })
  })

  

  return (
    <header id="home">
      <div className="absolute inset-0 bg-[url('/backgrounds/purple-house.gif')] bg-cover bg-no-repeat bg-center md:bg-right lg:bg-center">
      <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className='flex flex-col w-full min-h-screen justify-start px-10 md:pe-0 relative z-10 gap-80 md:gap-0'>
        <Logo 
        className="logo" 
        img={star.purple}/>
        <div className='md:mt-36 lg:mt-120 flex max-md:flex-col gap-20 md:gap-0 '>
          <AnimatedWords/>
          {/*Desktop*/}
          <Button
           phrase={'Click Here'}
           phrasetwo={'Start'}
           ref={projectsRef}
           />
          
        <div className='md:hidden flex justify-center h-15 w-full '>
            <div className='button-wrapper'>
              <button
              onClick={() => scrollTo(projectsRef)}
              className='animatedbutton button-shine button-front'>
                Start
              </button>
              <button 
              onClick={() => scrollTo(projectsRef)}
              className='animatedbutton button-shine button-back'>
                Start
              </button>
            </div>

          </div>
        </div>
        
        {/*Mobile*/}
        
        </div>  
    </header>
  )
}

export default Header
 