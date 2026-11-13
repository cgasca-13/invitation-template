import React from "react";
import { motion } from "framer-motion";

function DressCode() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#00295C] px-6 py-16 text-center text-[#faf1e7]"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-0 h-px w-[80%] origin-center -translate-x-1/2 bg-[#D4B088]/20"
      />

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#173f6e]/50 blur-[100px]" />

      <div className="relative z-10">
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl px-6 "
      >
        <span className="font-serif font-semibold text-[#D4B088]">
          {" "}
          Código de vestimenta
        </span>
      </motion.p>
      <div className="flex justify-center mt-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="origin-center h-[2px] w-36 bg-gradient-to-r from-transparent via-[#D4B088] to-transparent"
        />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className=" md:text-xl px-6 mt-1"
      >
        <span className="text-lg font-serif font-normal text-[#faf1e7]/70">
          {" "}
          Formal / Elegante
        </span>
      </motion.p>
      <div className="flex justify-center mt-1">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/bg/dresscode.png"
          alt="Código de vestimenta"
          className="max-w-xs w-full h-auto"
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
          viewport={{ once: true }}
        />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className=" md:text-xl px-6 mt-1"
      >
        <span className="text-lg font-serif font-normal text-[#faf1e7]/70">
          {" "}
          El color azul marino se reserva únicamente para la quinceañera
        </span>
      </motion.p>
      </div>
    </section>
  );
}

export default DressCode;
