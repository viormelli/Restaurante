"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FamiliaTerra() {
  return (
    <section className="py-10 bg-gradient-to-b from-[#f5f0e6] to-[#fdfaf7]">
      <div className="container">
        <div className="timeline">
          
          {/* Bloco 1 */}
          <motion.div
            className="row align-items-center mb-10"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="col-12 col-md-6">
              <h2 className="text-4xl font-bold text-[#902e00]">O início</h2>
              <p className="mt-4 text-lg text-[#5c2e00] text-justify">
                A Família Terra começou com o sonho de resgatar tradições e unir sabores ancestrais...
              </p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <Image
                src="/OngSaude.svg"
                alt="O início"
                width={400}
                height={400}
                className="rounded-3xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Bloco 2 */}
          <motion.div
            className="row align-items-center mb-10 flex-md-row-reverse"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="col-12 col-md-6">
              <h2 className="text-4xl font-bold text-[#902e00]">Expansão</h2>
              <p className="mt-4 text-lg text-[#5c2e00] text-justify">
                Expandimos nosso projeto, alcançando comunidades indígenas, africanas e asiáticas...
              </p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <Image
                src="/OngCriancasDois.svg"
                alt="Expansão"
                width={400}
                height={400}
                className="rounded-3xl shadow-lg"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
