import { motion } from "framer-motion";

export default function Ceremony({ nombre }) {
  const partesNombre = nombre.trim().split(/\s+/);
  const primerNombre = partesNombre.shift();

  return (
    <section className="relative overflow-hidden bg-[#00295C]  px-6 py-18 md:py-36">

      {/* Invitation card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-2xl"
      >

        {/* Outer border */}
        <div className="relative border border-[#D4B088]/40 bg-[#faf1e7] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">

          {/* Inner border */}
          <div className="relative border border-[#D4B088]/30 px-8 py-16 md:px-16 md:py-20">

            {/* Decorative corner */}
            <span className="absolute left-3 top-3 h-8 w-8 border-l border-t border-[#D4B088]/60" />
            <span className="absolute right-3 top-3 h-8 w-8 border-r border-t border-[#D4B088]/60" />
            <span className="absolute bottom-3 left-3 h-8 w-8 border-b border-l border-[#D4B088]/60" />
            <span className="absolute bottom-3 right-3 h-8 w-8 border-b border-r border-[#D4B088]/60" />


            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#00295C]">
                Ceremonia de titulación
              </p>

              <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#D4B088]/60" />

                <span className="text-sm text-[#D4B088]">
                  ✦
                </span>

                <span className="h-px w-10 bg-[#D4B088]/60" />
              </div>

            </motion.div>


            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >

              <p className="li font-script text-4xl text-[#00295C] md:text-6xl">
                <span className="block">{primerNombre}</span>
                <span className="block">{partesNombre.join(" ")}</span>
              </p>

              <p className="mx-auto mt-5 max-w-md font-serif text-lg leading-relaxed text-[#00295C]/70">
                Me encantará contar con tu presencia
                en este momento tan especial.
              </p>

            </motion.div>


            {/* Date */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >

              <div className="flex items-center justify-center gap-4">

                <span className="h-px w-12 bg-[#D4B088]/40" />

                <p className="font-serif text-xl tracking-[0.18em] text-[#00295C]">
                  15 · OCTUBRE · 2026
                </p>

                <span className="h-px w-12 bg-[#D4B088]/40" />

              </div>

              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#00295C]/50">
                Jueves · 12 pm
              </p>

            </motion.div>


            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.20 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >

              <p className="text-[9px] uppercase tracking-[0.35em] text-[#00295C]/40">
                Instituto Tecnológico de Morelia
              </p>

              <p className="mt-1 font-serif text-lg italic text-[#00295C]">
                “Edificio J”
              </p>

            
            </motion.div>


            {/* Location button */}
            <motion.a
              href="https://www.google.com/maps/place/19%C2%B043'20.8%22N+101%C2%B011'09.3%22W/@19.7225813,-101.1863455,19.55z/data=!4m12!1m7!3m6!1s0x842d0e40be8f4d3b:0xf001c256ae856856!2sInstituto+Tecnol%C3%B3gico+de+Morelia!8m2!3d19.7229386!4d-101.1858201!16s%2Fm%2F03nnzh3!3m3!8m2!3d19.722455!4d-101.185929?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mx-auto mt-8 flex w-fit items-center gap-3 border-b border-[#00295C]/40 pb-2 text-[9px] uppercase tracking-[0.3em] text-[#00295C]"
            >
              Ver ubicación
              <span className="text-sm">→</span>
            </motion.a>


            {/* Bottom text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 text-center font-script text-2xl text-[#D4B088]"
            >
              Te espero con mucha ilusión
            </motion.p>

          </div>
        </div>

    
      </motion.div>
     

    </section>
  );
}