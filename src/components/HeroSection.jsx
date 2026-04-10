import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-30 pointer-events-none">
        <motion.div 
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full border border-gray-700 blur-[2px]"
        />
        <motion.div 
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-48 h-48 md:w-72 md:h-72 border border-gray-600 rotate-45"
        />
        <motion.div 
          animate={{
            x: [0, 40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-72 h-72 md:w-[500px] md:h-[500px] rounded-full border border-gray-800 border-dashed blur-[1px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-black leading-none tracking-tighter w-full text-transparent bg-clip-text bg-gradient-to-r from-silver to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          HI, I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4] filter drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]">NANDAKISHORE</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 md:mt-8 text-sm sm:text-base md:text-xl font-mono text-[#A0A0B0] bg-[#030305]/80 backdrop-blur-sm border border-[#6366F1]/20 px-6 py-3 rounded-tr-xl rounded-bl-xl shadow-[0_0_15px_rgba(99,102,241,0.15)]"
        >
          Aspiring AI Engineer | Full Stack Developer
        </motion.p>

        <motion.a 
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          className="mt-12 px-10 py-5 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] text-white font-black tracking-widest uppercase rounded-full border border-white/20 neon-glow transition-all"
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
