"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

export default function PatrocinadoresCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 30,
        },
      },
    },
  });

  const patrocinadores = [
    {
      nome: "McDonald's",
      imagem: "/MC.svg",
      fundo: "#d2b48c",
      ajuda: "Ajuda com doações de alimentos e apoio logístico.",
    },
    {
      nome: "Nestlé",
      imagem: "/Nestle.svg",
      fundo: "#8B2500",
      ajuda: "Fornece produtos alimentícios para eventos beneficentes.",
    },
    {
      nome: "Mococa",
      imagem: "/Mococa.svg",
      fundo: "#2E4A1C",
      ajuda: "Ajuda com doações de leite e derivados para comunidades.",
    },
    {
      nome: "Brastemp",
      imagem: "/Brastemp.svg",
      fundo: "#F4A300",
      ajuda: "Oferece eletrodomésticos para cozinhas solidárias.",
    },
    {
      nome: "Coca-Cola",
      imagem: "/Coca.svg",
      fundo: "#E27522",
      ajuda: "Distribui bebidas em campanhas de arrecadação.",
    },
    {
      nome: "Pão de Açúcar",
      imagem: "/Pao.svg",
      fundo: "#E27522",
      ajuda: "Apoia com cartões de compra para famílias em vulnerabilidade.",
    },
  ];

  const [virados, setVirados] = useState(Array(patrocinadores.length).fill(false));

  const virarCard = (index) => {
    setVirados((prev) => {
      const novo = [...prev];
      novo[index] = !novo[index];
      return novo;
    });
  };

  const nextSlide = () => {
    instanceRef.current?.next();
  };

  const prevSlide = () => {
    instanceRef.current?.prev();
  };

  return (
    <div className="container mx-auto my-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10" style={{ color: "#8B2500" }}>
        Patrocinadores
      </h2>

      <div className="relative">
        {/* Botão Voltar */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#8B2500] text-white p-2 rounded-full hover:bg-[#6e1d00]"
        >
          &#8592;
        </button>

        {/* Carrossel */}
        <div ref={sliderRef} className="keen-slider">
          {patrocinadores.map((patrocinador, index) => (
            <div key={index} className="keen-slider__slide flex justify-center">
              <div
                onClick={() => virarCard(index)}
                className="flip-card cursor-pointer"
                style={{ width: "160px", height: "200px", perspective: "1000px" }}
              >
                <div
                  className={`flip-card-inner ${virados[index] ? "is-flipped" : ""}`}
                  style={{ width: "100%", height: "100%" }}
                >
                  {/* Frente */}
                  <div
                    className="flip-card-front rounded-2xl p-3 flex items-center justify-center"
                    style={{
                      backgroundColor: patrocinador.fundo,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={patrocinador.imagem}
                      alt={patrocinador.nome}
                      width={150}
                      height={150}
                      style={{ objectFit: "contain", width: "100%", height: "100%" }}
                    />
                  </div>

                  {/* Verso */}
                  <div
                    className="flip-card-back rounded-2xl p-3 flex flex-col justify-center items-center text-white text-center"
                    style={{
                      backgroundColor: patrocinador.fundo,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <h5 className="text-lg font-bold mb-2">{patrocinador.nome}</h5>
                    <p className="text-sm">{patrocinador.ajuda}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Avançar */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#8B2500] text-white p-2 rounded-full hover:bg-[#6e1d00]"
        >
          &#8594;
        </button>
      </div>

      {/* Estilos extras */}
      <style jsx>{`
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .is-flipped {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
