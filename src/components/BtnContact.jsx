import { arrows } from "../constants"
import { useTheme } from "../contexts/ThemeContext"

const BtnContact = ({ onClick }) => {
  const {is8Bit} = useTheme()
  
  return (
    <button onClick={onClick}>
      <div className="cta-button group">
        <div className="bg-circle"/>
        <p className={`${is8Bit ? 'font-retro text-white' : 'font-fair text-white uppercase'} font-extrabold text-shadow-gray-950 z-10 relative me-15 group-hover:text-emerald-200`}>
          Talk to me
        </p>
        <img src={arrows.right} width={40} height={15} alt="arrow right" className="z-10 wobble" />
      </div>
    </button>
  )
}

export default BtnContact
