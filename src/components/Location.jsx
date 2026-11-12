import React from "react";
import { motion } from "framer-motion";
function Location() {
  return (
    <section className="py-8">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[50px] md:text-5xl font-serif text-[#D4B088] mt-4"
        >
          <span className="font-script">Te esperamos</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl px-6 mt-6"
        >
          <span className="font-serif text-[#00295C] font-semibold">
            {" "}
            Salón "Arcoiris"
          </span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" md:text-xl px-6 mt-"
        >
          <span className="text-lg font-serif text-[#7a5738] font-normal">
            {" "}
            Recepción 10:00 pm
          </span>
          <br />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Antiguo+Camino+a+la+Huerta+909,+Granjas+de+la+Huerta,+58195+Morelia,+Mich."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-4 py-2 text-sm font-serif  text-[#D4B088] hover:text-[#00295C] transition-colors duration-200"
          >
            Ver ubicación
          </a>
        </motion.p>
      </div>
    </section>
  );
}

export default Location;
