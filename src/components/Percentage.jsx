import { useTheme } from "../contexts/ThemeContext.jsx";

const Percentage = ({ label, percentage }) => {

  const { is8Bit } = useTheme()

    const expColor = is8Bit 
    ? "from-[#F9B700] to-[#FFEB50]"
    : "from-indigo-600 to-pink-600"

  return (
    <div>
      <div className="flex justify-between text-white text-[10px] lg:text-[12px] mt-2">
        <span className="leading-5">{label}</span>
      </div>
      <div className="w-[90%] lg:w-full h-2 bg-gray-700 rounded-full">
        <div
          className={` h-2 m bg-gradient-to-r ${expColor} rounded-full transition-all duration-500 `}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Percentage;
