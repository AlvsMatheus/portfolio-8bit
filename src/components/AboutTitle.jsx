import React from 'react'
import { star, aboutimgs } from "../constants/index.jsx";

const AboutTitle = () => {
  return (
    <div className="flex items-center lg:justify-evenly w-full lg:w-[70%] bg-black/30 rounded-3xl">
    <div className="flex flex-col justify-evenly w-full lg:w-full p-2">
        <div className="flex items-center text-sm lg:text-1xl text-white">
        <div className="flex w-full items-center lg:flex-row">
            <div className="flex items-center">
            <div className="flex items-center">
                <img className="w-12 h-10 pe-2" src={aboutimgs.id} alt="id image" />
                <h2 className="text-center lg:text-start">Name:</h2>
            </div>
            </div>
            <p className="text-nowrap text-[10px]">Matheus Alves</p>
        </div>
        </div>
        <div className="flex items-center text-sm lg:text-1xl text-white">
        <div className="flex w-full items-center lg:flex-row">
            <div className="flex items-center">
            <img className="w-10 h-10 " src={aboutimgs.wizard} alt="wizard image" />
            <h2>Class:</h2>
            </div>
            <p className="text-nowrap text-[10px]">front end Developer</p>
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
  )
}

export default AboutTitle
