// Agrupe externas, depois internas, e remova duplicatas
import Logo from "../components/Logo";
import NavBar from "../components/NavBar.jsx";
import ArrowLeft from "../components/ArrowLeft.jsx";
import ArrowRight from "../components/ArrowRight.jsx";
import Percentage from "../components/Percentage.jsx";

import { arrows, star, aboutimgs, hardSkills, softSkills } from "../constants/index.jsx";
import Title from "../components/Title.jsx";



const Projects = ({ onScrollBack, onScrollNext }) => {
  return (
    <section id="about" className="section">
      <div className="absolute z-0 inset-0 bg-[url('/backgrounds/background-about.gif')] bg-cover bg-no-repeat bg-center md:bg-right lg:bg-center">
      <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="flex flex-col md:flex-row relative z-10 w-full h-screen">
        <div className="child ps-10 flex-col">
          {/* left side md-lg*/}
          <div className="hidden md:block">
            <Logo img={star.red}/>
          </div>
            <div className="hidden md:block ">
              <ArrowLeft onScrollBack={onScrollBack} img={arrows.left}/>
            </div>
        </div>
        <div className="child-middle overflow-auto lg:overflow-hidden p-2 lg:pt-7 flex justify-between">
          {/* middle side md-lg*/}
          <div className="max-md:flex mt-10 md:mt-4 lg:mt-0">
            <NavBar bgColor='bg-[var(--color-red)]'/>
            <div className="md:hidden">
              <Title
              text={(
              <p className="text-white">
                <span className="text-[var(--color-red)]">A</span>bo<span className="text-[var(--color-red)]">ut</span> <span className="text-[var(--color-red)]" >M</span>e
              </p>)}
              gradient='from-red-500 via-red-400 '
              width='w-50 md:w-50 lg:w-120'/>
            </div>
          </div>
          {/*middle pc */}
          <div className="grid grid-cols-1 gap-5 lg:gap-10 w-full h-full lg:h-auto mb-20">
            <div className="flex items-center lg:gap-10 h-auto">
              {/*img pc*/}
              <div className="hidden md:flex items-center  lg:w-[300px] h-full">
                <img className="md:w-[170px] md:h-[120px]  lg:w-[200px] lg:h-[200px] object-cover rounded-3xl" src={aboutimgs.me} alt="Matheus Alves" />
              </div>
              <div className="flex items-center lg:justify-evenly w-full lg:w-[50%] h-auto  bg-black/30 rounded-3xl">
                <div className="flex flex-col justify-evenly w-full lg:w-full p-2">
                  <div className="flex items-center text-sm lg:text-1xl text-white">
                    <div className="flex w-full items-center lg:flex-row">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <img className="w-12 h-10 pe-2" src={aboutimgs.id} alt="id image" />
                          <h2 className="text-center lg:text-start">Name:</h2>
                        </div>
                      </div>
                      <p className="text-nowrap text-[10px] lg:text-sm">Matheus Alves</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm lg:text-1xl text-white">
                    <div className="flex w-full items-center lg:flex-row">
                      <div className="flex items-center">
                        <img className="w-10 h-10 " src={aboutimgs.wizard} alt="wizard image" />
                        <h2>Class:</h2>
                      </div>
                      <p className="text-nowrap text-[10px] lg:text-sm">front end Developer</p>
                    </div>
                  </div>
                  <div className="flex text-sm lg:text-1xl text-white">
                    <div className="flex w-full lg:justify-start items-center lg:flex-row">
                      <div className="flex items-center">
                        <img className="w-6 h-6 me-2" src={aboutimgs.heart} alt="heart image" />
                        <h2>Lv:</h2>
                      </div>
                      <div className="relative">
                        <p
                        className="font-bold text-[10px] bg-gradient-to-b from-[#F9B700] to-[#FFEB50] bg-clip-text text-transparent">
                        19
                        </p>
                        <img className="absolute -top-2 left-7 w-4 h-4" src={star.white} alt="White Star" />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:gap-10 bg-black/50 rounded-3xl w-full h-[86%] lg:h-auto p-4 lg:p-10">
             <div className="flex flex-col gap-5 md:gap-2 text-white">
                <h1 className="text-sm lg:text-2xl"><strong className="red">J</strong>o<strong className="red">ur</strong>ne<strong className="red">y</strong></h1>
                <p className="text-[10px] md:text-[7px] lg:text-[12px] leading-4 md:leading-3 lg:leading-5">I started learning programming at <strong className="red">16 years old</strong>  through structured <strong className="red">courses</strong> and <strong className="red">self-directed study.</strong> I’ve built a <strong className="red">solid foundation</strong> in web development with <strong className="red">HTML, CSS, JavaScript, React, and others frameworks</strong>, and gained hands-on experience through personal projects. I'm currently seeking my first opportunity as a <strong className="red">junior developer or an intership.</strong></p>
             </div>
             <div className="flex justify-center lg:justify-evenly flex-wrap  w-full h-full lg:h-[300px] ">
                <div className="red w-[50%] lg:w-[30%]">
                  <h1 className="bg-gradient-to-r from-[#F9B700] to-[#FFEB50] bg-clip-text text-transparent underline md:text-[10px] lg:text-2xl text-nowrap">Hard skills</h1>
                  <ul>
                    {hardSkills.map((hard, index) => (
                      <li 
                      key={index}> <Percentage label={hard.label} percentage={hard.percentage}/> 
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="red w-[50%] lg:w-[30%]">
                  <h1 className="bg-gradient-to-r from-[#F9B700] to-[#FFEB50] bg-clip-text text-transparent underline md:text-[10px] lg:text-2xl text-nowrap">Soft skills</h1>
                  <ul>
                    {softSkills.map((soft, index) => (
                      <li 
                      key={index}> <Percentage label={soft.label} percentage={soft.percentage}/> 
                      </li>
                    ))}
                  </ul>
                </div>
             </div>
            </div>
          </div>
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
