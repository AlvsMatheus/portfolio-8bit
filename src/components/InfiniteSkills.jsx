import {skills} from '../constants/index'

const InfiniteSkills = () => {
  return (
    <div className="relative w-full h-auto mb-2 rounded-md">
      <div className="animate-slide-two flex gap-10 w-300 lg:min-w-max">
          <div className="flex gap-10 items-center">
            {skills.map((logo, index) => (
            <div key={index}>
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
