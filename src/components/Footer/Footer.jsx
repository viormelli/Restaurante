import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FFF1DC] text-[#5c2c06] pt-1">
      
      {/* Linha Decorativa Colorida */}
      <div className="flex h-1">
        <div className="w-1/4 bg-[#a53f14]" />
        <div className="w-1/2 bg-[#f4a300]" />
        <div className="w-1/4 bg-[#7d3013]" />
      </div>

      {/* Conteúdo do Rodapé */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4">

        {/* Logo + Copyright */}
        <div className="flex items-center space-x-2">
          <Image 
            src="/Logo.svg" 
            alt="Logo Sabores Indígenas" 
            width={50} 
            height={50}
            className="rounded-full"
          />
          <p className="text-sm">© {new Date().getFullYear()} Terra & Essência</p>
        </div>

        {/* Navegação + Contato */}
        <div className="text-center text-sm mt-4 md:mt-0">
          <p>📞 (11) 98765-4321 | ✉️ contato@saboresindigenas.com</p>
          <p>📍 Rua das Tradições, 123 - São Paulo, SP</p>
        </div>

        {/* Redes Sociais */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-[#5c2c06] hover:text-[#a53f14] text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-[#5c2c06] hover:text-[#a53f14] text-2xl">
            <FaWhatsapp />
          </a>
        </div>

      </div>
    </footer>
  );
}
