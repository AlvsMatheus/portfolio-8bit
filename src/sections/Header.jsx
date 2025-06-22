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

  return (
    <header id="home" className='section '>
      <div className="absolute inset-0 bg-[url('/backgrounds/purple-house.gif')] bg-cover bg-no-repeat bg-center md:bg-right lg:bg-center">
      <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className='flex flex-col w-full h-full justify-between md:justify-start px-10 md:pe-0 relative z-10'>
        <Logo className="logo" img={star.purple}/>
        <div className='md:mt-100 lg:mt-120 flex max-md:flex-col '>
          <AnimatedWords/>
          <Button
           phrase={'Click Here'}
           phrasetwo={'Start'}
           onScrollNext={onScrollNext}/>
        </div>
        <div className='flex justify-center w-full h-auto md:hidden mb-50'>
            <button 
            onClick={onScrollNext}
            className=' bg-white rounded-2xl p-4'>
              Start
            </button>
          </div>
      </div>  
    </header>
  )
}

export default Header
 