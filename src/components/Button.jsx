import { useState } from "react";
import { crabanimated, crabwhite } from "../constants";
import { useScroll } from "../contexts/Scroll.context";

const Button = ({ref, phrase, phrasetwo}) => {

  const { scrollTo } = useScroll()

  const [label, setLabel] = useState(phrasetwo);
  const [hovered, setHovered] = useState(false);

  return (
    <button 
    className="hidden md:block"
    onClick={() => scrollTo(ref)}>
      <span
        className="relative hover:cursor-pointer overflow-hidden bg-white flex items-center justify-center rounded-l-full lg:w-50 lg:h-15 w-30 h-10 md:pl-3 pl-5 border border-black"
        onMouseEnter={() => {
          setHovered(true);
          setLabel(phrase);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setLabel(phrasetwo);
        }}
      >
        {/* Background animado preenchendo da esquerda pra direita */}
        <span
          className={` fill ${
            hovered ? "border-[200px] border-black w-full" : "w-[0]"
          }`}
        />

        {/* Conteúdo acima do fundo */}
        <span className="relative z-10 flex items-center w-full">
          {/* Ícone pequeno (exibido em telas menores) */}
          <span className="max-lg:block hidden md:w-10">
            <img
              src={hovered ? crabwhite : crabanimated}
              alt="crab invader"
              className=" transition-all duration-500"
            />
          </span>

          {/* Ícone grande (em telas maiores) */}
          <span className="hidden lg:block md:w-12">
            <img
              src={hovered ? crabwhite : crabanimated}
              alt="crab invader"
              className="transition-all duration-500"
            />
          </span>

          {/* Botão com texto dinâmico */}
          <p
            className={`w-full h-full text-black transition-all duration-500 ease-in-out md:text-[10px] lg:text-[17px] ${
              hovered ? "text-white" : "text-black"
            }`}
          >
            {label}
          </p>
        </span>
      </span>
    </button>
  );
};

export default Button;
