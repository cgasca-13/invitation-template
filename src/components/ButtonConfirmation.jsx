import { motion } from "framer-motion";

export default function ButtonConfirmation() {
  return (
    <section className="relative overflow-hidden bg-[#00295C] px-6 py-20 text-[#faf1e7] md:py-40">

   {/* Decorative horizontal line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-0 h-px w-[80%] origin-center -translate-x-1/2 bg-[#D4B088]/20"
      />


      {/* Burgundy glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#173f6e]/40 blur-[130px]" />




      {/* Decorative circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4B088]/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4B088]/5"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-[#D4B088]" />

          <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4B088]">
            Confirma tu asistencia
          </p>

          <span className="h-px w-8 bg-[#D4B088]" />
        </motion.div>


        {/* Main text */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="font-serif text-5xl leading-tight md:text-7xl"
        >
          ¿Nos vemos
          <br />
          <span className="text-[#D4B088]">
            ahí?
          </span>
        </motion.h2>


        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-7 max-w-md text-sm leading-7 text-[#faf1e7]/55"
        >
     
          Te agradecería confirmar tu asistencia para poder preparar cada detalle y hacer de este momento una celebración para recordar
        </motion.p>


        {/* Button */}
        <motion.a
          href={`https://wa.me/+524431749886?text=${encodeURIComponent(
            "Confirmo mi asistencia, soy [tu nombre] 👑✨👸"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="group relative mt-10 inline-flex items-center gap-5 overflow-hidden border border-[#D4B088]/50 px-8 py-4"
        >

          {/* Hover background */}
          <span className="absolute inset-0 -translate-x-full bg-[#D4B088] transition-transform duration-500 group-hover:translate-x-0" />

          <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-[#D4B088] transition-colors duration-500 group-hover:text-[#00295C]">
            Confirmar asistencia
          </span>

          <span className="relative z-10 text-lg text-[#D4B088] transition-colors duration-500 group-hover:text-[#00295C]">
            →
          </span>

        </motion.a>


        {/* Small detail */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 text-[9px] uppercase tracking-[0.25em] text-[#faf1e7]/25"
        >
          Confirmación vía WhatsApp
        </motion.p>

      </div>
    </section>
  );
}