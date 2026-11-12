import { motion } from "framer-motion";


function Separator() {
  return (
    <motion.section
      className="w-full py-16 px-6 bg-gradient-to-b from-[#00295C]/90 via-[#315b83] to-[#00295C]/95 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="font-serif text-[#faf1e7] text-lg md:text-2xl max-w-xl mx-auto leading-relaxed">
        En este día especial estaremos junto a nuestros seres queridos
      </p>

      <div className="flex justify-center mt-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="origin-center h-[2px] w-40 bg-gradient-to-r from-transparent via-[#D4B088] to-transparent"
        />
      </div>
    </motion.section>
  );
}

export default Separator;
