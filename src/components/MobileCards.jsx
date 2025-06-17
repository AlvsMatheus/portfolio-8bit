import {projects} from '../constants/index.jsx'
import { useState } from 'react'
import InfiniteRow from './InfiniteRow.jsx'


const MobileCards = () => {
  
  const [flippedIndex, setFlippedIndex] = useState(null)

  return (
    <div className='flex overflow-hidden md:flex-row justify-center gap-5 w-[340px] h-[400px] md:w-[300px] md:h-[294px] md:mt-10 '>
      <div className='flex flex-col items-center w-full  gap-10 overflow-y-auto px-2'>
          {projects.map((project, index) => (

               <div 
               key={project.name}
               className='perspective flex flex-col items-start  w-[90%]'>

                 <div 
                 style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                 }}
                 onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
                 className={`relative w-full transition-transform duration-500 ease-in-out`}>


                   {/* front of card */}
                   <div
                   className={`backface-hidden shadow-purple relative rounded-2xl flex flex-col items-start bg-cover w-full `}
                   style={{ backgroundImage: `url(${project.img})` }}>
                   <div className="absolute rounded-2xl inset-0 bg-black/20" />
                      <div className='flex flex-col w-full justify-between h-[270px] '>
                        <div className='flex justify-center  '>
                          <h1 className='bg-violet-950/90 shadow-coners p-2 rounded-b-2xl text-white text-[14px] '>{project.name}</h1>
                        </div>
                        <div className='mb-4'>
                          <span>{project.lenguages}</span>
                        </div>
                      </div>
                   </div>
                   
                   {/* back of the card */}
                   <div className='backface-hidden absolute inset-0 rotate-y-180'>
                    <div
                   className={`backface-hidden bg-gradient-to-br from-black to-transparent shadow-purple relative rounded-2xl flex flex-col items-start bg-cover w-full `}>
                   <div className="absolute rounded-2xl inset-0 bg-black/20" />
                      <div className='flex flex-col w-full justify-between h-[270px] '>
                        <div className='flex flex-col justify-center items-center mt-2'>
                          <h1 className='text-purple text-[14px]'>About</h1>
                          <div className='h-[2px] w-full bg-[linear-gradient(to_right,_transparent,_purple,_magenta,_magenta,_purple,_transparent)] mt-1'/>
                        </div>
                        <div className='px-10'>
                          <p className='text-white text-center text-[11px]'>{project.info}</p>
                        </div>
                        <div className='flex w-full justify-center'>

                          <button
                           onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.link, "_blank");
                           }}
                           className="relative z-20 text-white text-[10px] p-2 bg-gradient-to-r border-3 border-black from-purple-900 via-purple-700 to-pink-600 rounded-full "
                          >
                           visit website
                         </button>
                        </div>
                        <div>
                          <InfiniteRow/>
                        </div>
                      </div>
                   </div>
                    
                   </div>
                 </div>

               </div>
             
          ))}
      </div>
    </div>
  )
}

export default MobileCards
