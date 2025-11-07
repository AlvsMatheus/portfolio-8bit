import { alves } from "../constants/index.jsx";

const Logo = ({ img }) => {
  return (
    // Container principal: Garante que todo o logo (imagem + texto) esteja em um bloco
    // Removi 'w-full h-auto pt-10' para dar mais flexibilidade de layout ao container pai (o Header)
    // Mantive 'pt-10' se você quiser o espaçamento de topo fixo aqui.
    <div className="flex flex-col pt-10 gap-3"> 
      
      {/* 1. Linha do Título (ALVES + Ícone) */}
      <div className="flex items-center">
        
        {/* Imagem "ALVES" */}
        <div className="w-[60px] lg:w-[80px]">
          <img className="relative" src={alves} alt="alves" />
        </div>
        
  
        <div className="w-[20px] h-[40px] ms-2 flex items-center">
          <img src={img} alt="purple star" />
        </div>
      </div>
      
      
      <p className="text-white text-[10px] md:text-[10px] lg:text-[13px] mt-[-10px] md:mt-[-12px] lg:mt-[-15px]">
        web developer
      </p>
    </div>
  );
};

export default Logo;