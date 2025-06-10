import { arrows } from "../constants"

const BtnContact = ({ onClick }) => {
  
  return (
    <button onClick={onClick}>
      <div className="cta-button group">
        <div className="bg-circle"/>
        <p className="text-white text-shadow-gray-950 z-10 relative me-15 group-hover:text-green-950">
          Talk to me
        </p>
        <img src={arrows.right} width={40} height={15} alt="arrow right" className="z-10 wobble" />
      </div>
    </button>
  )
}

export default BtnContact
