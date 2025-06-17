import ArrowLeft from "../components/ArrowLeft.jsx";
import ArrowRight from "../components/ArrowRight.jsx";
import InfiniteSkills from "../components/InfiniteSkills.jsx";
import Logo from "../components/Logo"
import NavBar from "../components/NavBar.jsx";
import Title from "../components/Title.jsx";
import {arrows, star} from '../constants/index.jsx';




const Projects = ({ onScrollBack, onScrollNext }) => {
  return (
    <section id="skills" className="section">
      <div className="absolute z-0 inset-0 bg-[url('/backgrounds/pacman-game.gif')] bg-cover bg-no-repeat bg-center md:bg-right lg:bg-center">
      <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="flex flex-col md:flex-row relative z-10 w-full h-screen">
        <div className="child ps-10 flex-col">
          {/* left side md-lg*/}
          <Logo img={star.blue}/>
            <div className="hidden md:block ">
              <ArrowLeft onScrollBack={onScrollBack} img={arrows.left}/>
            </div>
        </div>
        <div className="child-middle lg:pt-7 flex justify-between">
          {/* middle side pc*/}
          <div className="max-md:mt-10 max-md:flex">
            <NavBar bgColor='bg-[var(--color-blue)]'/>
            <Title
            text={(
            <p className="text-white">
              <span className="text-[var(--color-blue)]">S</span>k<span className="text-[var(--color-blue)]">i</span>ll<span className="text-[var(--color-blue)]">s</span>
            </p>)}
            gradient='from-blue via-blue-400 '
            width='w-50 md:w-50 lg:w-75'/>
          </div>
          <div className="flex justify-center items-center w-full mb-20">
            <div className="overflow-hidden lg:w-[90vw] lg:max-w-[800px]">
              <InfiniteSkills/>
              </div>
          </div>
          {/* middle cell */}
          <div>
            {/* Progress Bar pc */}
            <div className="hidden lg:block bg-pink w-full h-4 mb-10 rounded-2xl">  
            </div>
          </div>
        </div>
        <div className="child pe-10 items-end h-auto md:h-full w-full">
          {/* right side md-lg*/}
          
          <div className="hidden md:flex md:justify-end ">
              <ArrowRight onScrollNext={onScrollNext}  img={arrows.right}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
