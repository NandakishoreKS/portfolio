import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Code2 } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="bg-transparent relative z-10 text-white py-24 px-6 md:px-16 lg:px-32 flex justify-center items-center">
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-16 uppercase text-transparent bg-clip-text bg-gradient-to-r from-silver to-white"
        >
          Education & <span className="text-[#06B6D4]">Highlights</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {/* Card 1: Education (Spans 2 columns on desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 neon-glass rounded-3xl p-8 md:p-12 hover:border-[#6366F1]/60 transition-colors flex flex-col justify-between group"
          >
            <div className="bg-gradient-to-br from-[#6366F1]/20 to-[#06B6D4]/20 w-16 h-16 rounded-full flex items-center justify-center mb-12 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <GraduationCap size={32} className="text-[#06B6D4]" />
            </div>
            <div>
              <p className="text-[#A0A0B0] font-mono text-sm mb-4">2023 — 2027</p>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-md">
                B.Tech Computer Science <br />with AI
              </h3>
              <p className="mt-4 text-xl font-bold text-[#6366F1] uppercase">@ MBCCET</p>
            </div>
          </motion.div>

          {/* Card 2: SaaS Launch */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-[#6366F1] to-[#06B6D4] rounded-3xl p-8 md:p-12 flex flex-col justify-between group relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.4)]"
          >
            <div className="absolute -right-10 -top-10 opacity-20 group-hover:scale-150 transition-transform duration-700">
              <Rocket size={200} />
            </div>
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-12 relative z-10 backdrop-blur-md">
              <Rocket size={32} className="text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-4 drop-shadow-lg">
                SaaS Founder
              </h3>
              <p className="text-white/90 font-medium">
                Launched PostPulse as a live SaaS product on web and Android.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Solo Dev across width */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 neon-glass rounded-3xl p-8 md:p-12 hover:border-[#06B6D4]/60 transition-colors flex flex-col md:flex-row items-center justify-between gap-8 group"
          >
            <div className="flex-1">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Code2 size={32} className="text-[#06B6D4]" />
              </div>
              <h3 className="text-3xl md:text-4xl font-black uppercase text-silver max-w-2xl group-hover:text-white transition-colors">
                Built and deployed full-stack AI apps as a solo developer.
              </h3>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
               {/* Abstract circular pattern indicating full-stack cycle */}
               <div className="relative w-32 h-32 md:w-48 md:h-48 border-4 border-dashed border-[#6366F1]/50 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite] shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                 <div className="absolute top-0 w-4 h-4 bg-[#06B6D4] rounded-full shadow-[0_0_20px_#06B6D4]"></div>
                 <div className="absolute right-0 w-4 h-4 bg-[#6366F1] rounded-full shadow-[0_0_20px_#6366F1]"></div>
                 <div className="absolute bottom-0 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#ffffff]"></div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
