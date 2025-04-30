import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-1" style={{backgroundColor: '#FFF1DC', color:'#5c2c06'}}>
      
      {/* Linha Decorativa Colorida */}
      <div className="flex h-1">
        <div className="w-1/4" style={{backgroundColor: '#a53f14'}}/>
        <div className="w-1/2" style={{backgroundColor: '#f4a300'}}/>
        <div className="w-1/4" style={{backgroundColor: '#7d3013'}}/>
      </div>

      {/* Conteúdo do Rodapé */}
      <div className=" col max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4">

        {/* Logo + Copyright */}
        <div className=" row-2 flex items-center space-x-2">
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
          <p>(11) 98765-4321 | contato@saboresindigenas.com</p>
          <p>Rua das Tradições, 123 - São Paulo, SP</p>
        </div>

        {/* Redes Sociais */}
        <div className=" flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#a53f14] text-2xl" style={{color:'#5c2c06'}}>
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#a53f14] text-2xl" style={{color:'#5c2c06'}}>
            <FaWhatsapp />
          </a>
        </div>

      </div>
    </footer>
  );
}
