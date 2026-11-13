import { motion } from "framer-motion";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const fotos = Array.from({ length: 5 }, (_, index) => `/photos/foto (${index + 1}).jpeg`);
const musica = "/music/Anna of the North - Lovers (from To All the Boys Ive Loved Before).mp3";

export default function Hero() {
  const [fotoActual, setFotoActual] = useState(1);
  const [musicaSilenciada, setMusicaSilenciada] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    fotos.forEach((foto) => {
      const imagen = new Image();
      imagen.src = foto;
    });
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    audio.volume = 0.6;

    const limpiarReintentos = () => {
      audio.removeEventListener("canplay", reproducirMusica);
      window.removeEventListener("pointerdown", reproducirMusica);
      window.removeEventListener("keydown", reproducirMusica);
    };

    const reproducirMusica = () => {
      if (!audio.paused && !audio.muted) {
        limpiarReintentos();
        return;
      }

      audio.muted = false;
      const reproduccion = audio.play();
      if (reproduccion) {
        reproduccion
          .then(limpiarReintentos)
          .catch(() => {
            // Los navegadores móviles bloquean el autoplay con sonido.
            audio.muted = true;
            audio.play().catch(() => {
              // El navegador también puede bloquear el autoplay silencioso.
            });
          });
      }
    };

    audio.addEventListener("canplay", reproducirMusica);
    window.addEventListener("pointerdown", reproducirMusica);
    window.addEventListener("keydown", reproducirMusica);
    audio.load();
    reproducirMusica();

    return () => {
      limpiarReintentos();
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const cambiarFoto = () => {
    setFotoActual((foto) => (foto === fotos.length ? 1 : foto + 1));
  };

  const alternarMusica = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const nuevoEstado = !musicaSilenciada;
    audio.muted = nuevoEstado;
    setMusicaSilenciada(nuevoEstado);

    if (!nuevoEstado) {
      audio.play().catch(() => {
        // El navegador puede requerir una interacción antes de reproducir audio.
      });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#00295C] text-[#faf1e7]">
      <audio ref={audioRef} src={musica} loop preload="auto" autoPlay />

      <button
        type="button"
        onClick={alternarMusica}
        aria-label={musicaSilenciada ? "Activar música" : "Silenciar música"}
        aria-pressed={musicaSilenciada}
        title={musicaSilenciada ? "Activar música" : "Silenciar música"}
        className="fixed right-6 top-6 z-[100] rounded-full border border-[#D4B088]/50 bg-[#00295C]/75 p-3 text-[#D4B088] shadow-lg backdrop-blur-sm transition hover:bg-[#173f6e] focus:outline-none focus:ring-2 focus:ring-[#D4B088]"
      >
        {musicaSilenciada ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
      </button>

      {/* Background burgundy glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,#315b83_0%,#173f6e_30%,#00295C_70%)]" />

      {/* Subtle golden glow */}
      <div className="absolute right-[15%] top-[30%] h-[350px] w-[350px] rounded-full bg-[#D4B088]/10 blur-[130px]" />

      {/* Decorative vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute  left-8 top-24 hidden h-40 w-px origin-top bg-[#D4B088]/50 md:block"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 md:px-12">
        <div className="grid w-full items-center gap-12 text-center md:grid-cols-[1.1fr_0.9fr] md:text-left">
          {/* LEFT SIDE */}
          <div className="relative flex flex-col items-center md:items-start">
            {/* Small technical label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#D4B088]"
            >
              <span className="h-px w-8 bg-[#D4B088] text-center" />
              MiS XV AÑOS 
              <span className="h-px w-8 bg-[#D4B088] text-center" />
            </motion.div>
             

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8"
            >
              <p className="font-script text-5xl text-[#D4B088] md:text-6xl">
                Camila Contreras Rojas
              </p>

              {/* <p className="mt-3 max-w-md text-xs uppercase tracking-[0.22em] text-[#faf1e7]/60">
                - 19 de diciembre del 2026 -
              </p> */}
              <p className="mt-3 max-w-md text-xs uppercase tracking-[0.22em] text-[#faf1e7]/60">
                Con la bendición de dios y el amor de mi familia
              </p>

            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center md:justify-end">
            {/* Decorative circle */}
            <div className="absolute h-[360px] w-[360px] rounded-full border border-[#D4B088]/20 md:h-[450px] md:w-[450px]" />

            {/* Burgundy circle */}
            <div className="absolute h-[280px] w-[280px] rounded-full bg-[#173f6e]/70 blur-sm md:h-[360px] md:w-[360px]" />

            {/* Image */}
            <motion.button
              type="button"
              onClick={cambiarFoto}
              aria-label={`Cambiar foto. Mostrando foto ${fotoActual} de ${fotos.length}`}
              initial={{ opacity: 1, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10 block cursor-pointer border-0 bg-transparent p-0"
            >
              <motion.img
                key={fotoActual}
                initial={{ opacity: 0.4, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                src={fotos[fotoActual - 1]}
                alt="Camila Contreras Rojas"
                className="h-[430px] w-[320px] object-cover object-center grayscale-[3%] brightness-[1.10] contrast-[1.02] md:h-[550px] md:w-[400px]"
              />

              <div className="absolute inset-0 bg-[#00295C]/12" />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00295C]/8 via-transparent to-[#315b83]/4" />

              {/* Click hint */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap bg-[#00295C]/75 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-[#faf1e7]"
              >
                <span className="text-sm text-[#D4B088]">↻</span>
                Toca para cambiar
              </motion.div>

              {/* Golden frame */}
              <div className="absolute -bottom-4 -left-4 h-full w-full border border-[#D4B088]/30" />
            </motion.button>

            {/* Floating number */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-2 top-8 z-20 font-serif text-6xl text-[#D4B088]/60 md:text-8xl"
            >
              XV
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="mb-3 text-[9px] uppercase tracking-[0.35em] text-[#faf1e7]/40">
          Desliza
        </p>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="mx-auto h-8 w-px bg-[#D4B088]/60"
        />
      </motion.div>
    </section>
  );
}
