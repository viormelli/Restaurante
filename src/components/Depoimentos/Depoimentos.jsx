"use client";

import { useState } from "react";

export default function DepoimentosSection() {
  const depoimentos = [
    {
      nome: "Maria Clara",
      idade: 32,
      profissao: "Empresária",
      texto: "Nunca imaginei que poderia comer algo tão saboroso e, ao mesmo tempo, fazer o bem para o planeta. Cada prato tem uma história, e isso me faz sentir mais conectada com o que estou consumindo. A comida realmente tem o poder de transformar!",
      imagem: "/MulherUm.svg", // Ajuste o caminho da imagem certinho
    },
    {
      nome: "João Pedro",
      idade: 27,
      profissao: "Chef de Cozinha",
      texto: "Comida deliciosa, cheia de propósito e respeito pelas raízes culturais. Amei a experiência!",
      imagem: "/HomemUm.svg",
    },
    {
      nome: "Ana Souza",
      idade: 40,
      profissao: "Nutricionista",
      texto: "Cada prato é uma explosão de sabores autênticos e uma conexão com a natureza.",
      imagem: "/MulherDois.svg",
    }
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? depoimentos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1));
  };

  const depoimentoAtual = depoimentos[index];

  return (
    <div className="bg-[#FFF] py-10 px-6 text-center">
      <h2 className="text-4xl text-orange-400 font-bold mb-8">
        Depoimentos dos nossos clientes
      </h2>

      <div className="relative flex justify-center items-center">
        {/* Botão Anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-transparent border-2 border-orange-400 text-orange-400 rounded-full w-10 h-10 flex items-center justify-center text-2xl"
        >
          ‹
        </button>

        {/* Card de Depoimento */}
        <div className="bg-[#5e6631] p-10 rounded-3xl max-w-4xl w-full flex flex-col items-center">
          <img
            src={depoimentoAtual.imagem}
            alt={depoimentoAtual.nome}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <p className="text-white font-semibold mb-2">
            {depoimentoAtual.nome}, {depoimentoAtual.idade} anos, {depoimentoAtual.profissao}:
          </p>
          <p className="text-white max-w-2xl">
            "{depoimentoAtual.texto}"
          </p>
        </div>

        {/* Botão Próximo */}
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-transparent border-2 border-orange-400 text-orange-400 rounded-full w-10 h-10 flex items-center justify-center text-2xl"
        >
          ›
        </button>
      </div>
    </div>
  );
}
