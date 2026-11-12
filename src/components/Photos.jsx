import React from "react";
import { motion } from "framer-motion";

function Photos() {
  return (
    <section className="px-6 text-center bg-[#faf1e7]/70 py-4">
      <p className="font-serif text-xl text-[#00295C]">Comparte tus fotos</p>
      <div className="flex justify-center mt-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="origin-center h-[2px] w-36 bg-gradient-to-r from-transparent via-[#D4B088] to-transparent"
        />
      </div>
      <p className="text-sm text-gray-600 mt-2 max-w-sm mx-auto">
        Queremos ver este día desde tu perspectiva
      </p>

      {/* QR */}
      <div className="flex justify-center mt-6 ">
        <img src="/qr.png" alt="QR para subir fotos" className="w-40 h-40" />
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Escanea el código para subir tus fotos
      </p>
    </section>
  );
}

export default Photos;
