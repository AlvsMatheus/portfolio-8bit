import gsap from "gsap";
// Importe o useGSAP do pacote @gsap/react
import { useGSAP } from "@gsap/react";

const ProfessionalWords = () => {
  // Use o hook useGSAP em vez do useEffect
  useGSAP(() => {
    // 1. Crie uma timeline.
    // Adicionamos um pequeno delay (0.2s) para dar tempo à troca de tema.
    const tl = gsap.timeline({
      delay: 0.2,
      defaults: { duration: 0.7, ease: "power3.out" },
    });

    // 2. "Hi" aparece com uma transição pro lado
    tl.fromTo(
      ".prof-line-1",
      { x: -100, opacity: 0 }, // Estado inicial
      { x: 0, opacity: 1 } // Estado final
    );

    // 3. "I'm Matheus" sobe e aparece
    // O "<0.3" significa "comece 0.3s *depois* do início da animação anterior"
    tl.fromTo(
      ".prof-line-2",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
      "<0.5"
    );

    // 4. "Web Developer" sobe e aparece
    tl.fromTo(
      ".prof-line-3",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
      "<0.7"
    );

    // 5. "Welcome to My Portfolio" aparece
    // O "+=0.2" significa "espere 0.2s *depois* que a animação anterior (prof-line-3) TERMINAR"
    tl.fromTo(
      ".prof-welcome",
      { opacity: 0, x:-50 }, // Apenas um fade-in simples
      { opacity: 1, x:0, duration: 1.0 },
      "+=0.2"
    );
  }, []); // O array vazio [] garante que isso rode toda vez que o componente for montado

  return (
    <div className="grid grid-cols-3 justify-center h-full w-full font-sans font-bold">
      {/*
        Note as classes de animação adicionadas abaixo:
        .prof-line-1, .prof-line-2, .prof-line-3, e .prof-welcome
      */}
      <section className="mainwords flex flex-col gap-5 col-span-3 row-start-2">
        <h1 className="text-white lg:text-6xl prof-line-1">Hi</h1>
        <h1 className="lg:text-6xl text-indigo-600 prof-line-2">
          I'm Matheus Alves
        </h1>
        <h1 className="text-white lg:text-6xl prof-line-3">Web Developer</h1>
      </section>
      <section className="prof-welcome col-span-3 row-start-3 w-full">
        <p className="text-4xl text-indigo-400 font-light text-nowrap">
          Welcome to my portfolio
        </p>
      </section>
    </div>
  );
};

export default ProfessionalWords;