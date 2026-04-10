import { motion } from 'framer-motion';
import { Brain, Code, Smartphone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden bg-[#050505]">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] text-gray-400"
        >
          <Code size={80} strokeWidth={1} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[15%] text-gray-500"
        >
          <Brain size={100} strokeWidth={1} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] right-[20%] text-gray-600"
        >
          <Smartphone size={60} strokeWidth={1} />
        </motion.div>
      </div>

      <div className="z-10 max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-[10vw] md:text-8xl font-black mb-12 tracking-tight text-white/5"
        >
          <span className="relative inline-block">
            ABOUT ME
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl md:text-7xl w-full">
              ABOUT ME
            </span>
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-3xl font-medium leading-relaxed text-gray-300 md:leading-snug"
        >
          I am an aspiring <span className="text-white font-bold">AI Engineer</span> and <span className="text-white font-bold">Full Stack Developer</span> currently pursuing my B.Tech in Computer Science with AI. I specialize in building intelligent applications that bridge the gap between machine learning and seamless web/mobile experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
