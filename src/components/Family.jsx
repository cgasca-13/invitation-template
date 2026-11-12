import { motion } from "framer-motion";

export default function Family() {
  return (
    <section className="relative overflow-hidden bg-[#00295C] px-6 py-20 text-center md:px-12 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4B088]">
            Mi papá y hermanos
          </p>
          <div className="mx-auto mt-5 h-px w-16 bg-[#D4B088]" />
          <p className="mt-6 font-serif text-xl leading-relaxed text-[#faf1e7] md:text-2xl">
            Ignacio Contreras Guerrero
            <br />
            Fernanda y Osvaldo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4B088]">
            Mis padrinos
          </p>
          <div className="mx-auto mt-5 h-px w-16 bg-[#D4B088]" />
          <p className="mt-6 font-serif text-xl leading-relaxed text-[#faf1e7] md:text-2xl">
            Efraín Villafuerte Hernández
            <br />
            Marisela López Patiño
          </p>
        </motion.div>
      </div>
    </section>
  );
}
