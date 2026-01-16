import { skills } from '../constants/index'
import { useState } from 'react'

const InfiniteSkills = () => {

  const [aboutSkill, setAboutSkill] = useState(true)

  const handleCard = () => {
    setAboutSkill(!aboutSkill)
  }

  const toggleAnimate = aboutSkill ? "" : "animation-paused"

  return (
    <div className="relative w-full h-auto mb-2 rounded-md">
      <div className={`animate-slide-two ${toggleAnimate} flex gap-10 w-300 lg:min-w-max`}>
          <div className="flex gap-10 items-center ">
            {skills.map((logo, index) => (
            <div
             onClick={handleCard}
             className='bg-gradient-to-b from-indigo-700/20 to-indigo-700/20 via-transparent border-2 border-indigo-800  h-90 w-60 md:h-60  lg:h-90 lg:w-70 flex justify-center items-center rounded-4xl'
             key={index}>
             <img 
                src={logo.imgPath} 
                alt={`logo ${logo.name}`} 
            />
            </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default InfiniteSkills
