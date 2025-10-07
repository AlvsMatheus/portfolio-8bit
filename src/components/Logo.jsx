import { alves } from "../constants/index.jsx";

const Logo = ({ img }) => {
  return (
    <div className="flex flex-col w-full h-auto pt-10">
      <div className="flex">
        <div className="w-[60px] lg:w-[80px]">
          <img className="relative" src={alves} alt="alves" />
        </div>
        <div className="w-[35px] lg:w-[40px] h-[40px] ps-4">
          <img src={img} alt="purple star" />
        </div>
      </div>
      <p className="max-md:mt-2 text-white absolute text-[10px] top-14 left-10 md:top-16 lg:left-10 lg:top-20  md:text-[10px] lg:text-[13px]">
        web developer
      </p>
    </div>
  );
};

export default Logo;
