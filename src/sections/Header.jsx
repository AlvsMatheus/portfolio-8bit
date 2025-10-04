 import Logo from '../components/Logo'
 import Button from '../components/Button'
 import gsap from 'gsap';
 import { useGSAP } from '@gsap/react';
 import {star} from '../constants/index.jsx'; 
 import AnimatedWords from '../components/AnimatedWords.jsx';

 
 const Header = ({onScrollNext}) => {

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
    <header id="home" className='section '>
      <div className="absolute inset-0 bg-[url('/backgrounds/purple-house.gif')] bg-cover bg-no-repeat bg-center md:bg-right lg:bg-center">
      <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className='flex flex-col w-full h-full justify-between md:justify-start px-10 md:pe-0 relative z-10'>
        <Logo 
        className="logo" 
        img={star.purple}/>
        <div className='md:mt-36 lg:mt-120 flex max-md:flex-col '>
          <AnimatedWords/>
          {/*Desktop*/}
          <Button
           phrase={'Click Here'}
           phrasetwo={'Start'}
           onScrollNext={onScrollNext}/>
        </div>
        {/*Mobile*/}
        <div className='md:hidden flex justify-center h-15 w-full mb-60 '>
            <div className='button-wrapper'>
              <button
              onClick={onScrollNext}
              className='animatedbutton button-shine button-front'>
                Start
              </button>
              <button 
              onClick={onScrollNext}
              className='animatedbutton button-shine button-back'>
                Start
              </button>
            </div>

          </div>
        </div>  
    </header>
  )
}

export default Header
 