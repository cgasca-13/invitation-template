import React from "react";
import { motion } from "framer-motion";

function DressCode() {
  return (
    <section
      className=" 
  w-full py-12 px-6
  bg-gradient-to-b 
  from-[#ead7c0]/80
  via-[#faf1e7] 
  to-[#ead7c0]/80
  text-center
"
    >
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl px-6 "
      >
        <span className="font-serif text-[#00295C] font-semibold">
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
        <span className="text-lg font-serif text-[#806b57] font-normal">
          {" "}
          Norteña
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
          src="/bg/dressCode.png"
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
        <span className="text-lg font-serif text-[#806b57] font-normal">
          {" "}
          Sombrero o Tejana
        </span>
      </motion.p>
    </section>
  );
}

export default DressCode;
