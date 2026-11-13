import { motion } from "framer-motion";

export default function Date() {
  return (
    <section className="relative overflow-hidden bg-[#00295C] px-6 py-24 text-[#faf1e7] md:px-12 md:py-36">

      {/* Burgundy glow */}
      <div className="absolute left-[-150px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#173f6e]/40 blur-[120px]" />

      {/* Golden glow */}
      <div className="absolute right-[-100px] top-[20%] h-[250px] w-[250px] rounded-full bg-[#D4B088]/10 blur-[100px]" />

      {/* Decorative horizontal line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-12 h-px w-[80%] origin-center -translate-x-1/2 bg-[#D4B088]/20"
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-[#D4B088]" />

          <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4B088]">
            FECHA Y LUGAR
          </p>

          <span className="h-px w-8 bg-[#D4B088]" />
        </motion.div>


        {/* Main information */}
        <div className="grid items-center gap-16 md:grid-cols-[1fr_auto_1fr] md:gap-12">

          {/* DATE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >

            <div className="flex flex-col items-center md:items-end">

              <span className="font-serif text-8xl leading-none text-[#faf1e7] md:text-9xl">
                19
              </span>

              <span className="mt-2 font-serif text-3xl tracking-[0.15em] text-[#D4B088]">
                DICIEMBRE
              </span>

              <span className="mt-2 text-xs uppercase tracking-[0.35em] text-[#faf1e7]/50">
                SÁBADO · 2:00 PM
              </span>

            </div>
          </motion.div>


          {/* CENTER DECORATION */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden h-40 w-px origin-top bg-[#D4B088]/30 md:block"
          />

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#faf1e7]/40">
              Misa
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#faf1e7] md:text-5xl">
              Parroquia
              <br />
              <span className="text-3xl text-[#D4B088]/80">
                de la Santa Cruz
              </span>
            </h2>

            <p className="mt-4 text-sm text-[#faf1e7]/50">
              Zinapécuaro, Michoacán
            </p>

            <motion.a
              href="https://maps.app.goo.gl/NvYd87F17USmFyW58"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="mt-7 inline-flex items-center gap-3 border-b border-[#D4B088]/40 pb-2 text-[10px] uppercase tracking-[0.25em] text-[#D4B088]"
            >
              Ver iglesia en Maps
              <span className="text-base">→</span>
            </motion.a>

            <p className="my-3 mt-8 text-[10px] uppercase tracking-[0.35em] text-[#faf1e7]/40">
              Recepción
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#faf1e7] md:text-5xl">
              Salón Los Parajes
              <br />
              <span className="text-3xl text-[#D4B088]/80">
                Col. Félix Ireta, calle Nardos
              </span>
            </h2>

            <motion.a
              href="https://maps.app.goo.gl/YbKXLCviUcHQ1RVj8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="mt-4 inline-flex items-center gap-3 border-b border-[#D4B088]/40 pb-2 text-[10px] uppercase tracking-[0.25em] text-[#D4B088]"
            >
              Ver salón en Maps
              <span className="text-base">→</span>
            </motion.a>

          </motion.div>

        </div>


    
      </div>
    </section>
  );
}