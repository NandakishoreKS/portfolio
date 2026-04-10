import { motion } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "FULL STACK DEVELOPMENT",
    desc: "React, React Native, Node.js, Express, Next.js, Supabase.",
  },
  {
    num: "02",
    title: "ARTIFICIAL INTELLIGENCE",
    desc: "Python, Machine Learning, Deep Learning, TensorFlow, Keras.",
  },
  {
    num: "03",
    title: "COMPUTER VISION",
    desc: "OpenCV, CNNs, Real-time object and facial analysis.",
  },
  {
    num: "04",
    title: "APP & GAME DEVELOPMENT",
    desc: "Cross-platform mobile development and interactive experiences.",
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full bg-transparent text-silver py-24 px-6 md:px-16 lg:px-32 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-16 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A0A0B0]"
        >
          My Services // <span className="text-[#06B6D4]">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#6366F1]/50 hover:bg-[#6366F1]/10 transition-all duration-500 cursor-default hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl md:text-6xl font-mono font-bold text-white/20 group-hover:text-[#06B6D4] transition-colors duration-500">
                  {service.num}
                </span>
                {/* Decorative dot */}
                <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#6366F1] group-hover:shadow-[0_0_10px_#6366F1] transition-all duration-500" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 text-white tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-[#A0A0B0] font-mono text-sm md:text-base leading-relaxed mt-auto">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
