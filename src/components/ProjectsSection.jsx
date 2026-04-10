import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    num: "01",
    title: "PostPulse",
    subtitle: "AI Instagram Reel Analyzer",
    desc: "Full Stack SaaS built with React, Node.js, React Native, Supabase, Groq AI. Gives creators viral scores and re-edit action plans.",
    color: "from-[#6366F1]/40 to-[#06B6D4]/40",
    accent: "text-[#06B6D4]",
  },
  {
    num: "02",
    title: "Driver Drowsiness",
    subtitle: "Real-time fatigue monitoring",
    desc: "Built with Python, OpenCV, CNN. Monitors eye closure rate and yawning with audio alerts.",
    color: "from-[#06B6D4]/40 to-[#6366F1]/30",
    accent: "text-[#6366F1]",
  },
  {
    num: "03",
    title: "AI Chatbot",
    subtitle: "NLP-powered conversational agent",
    desc: "Built with Python, TensorFlow, Keras. Features intent classification and entity recognition.",
    color: "from-[#3B82F6]/40 to-[#06B6D4]/40",
    accent: "text-[#06B6D4]",
  }
];

const ProjectsSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="projects" className="relative w-full min-h-screen bg-transparent text-silver py-24 object-cover overflow-hidden z-10 transition-colors duration-500">
      
      {/* Background Hover Effect */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 z-0 bg-gradient-to-tr ${projects[hoveredIdx].color} mix-blend-screen pointer-events-none filter blur-xl`}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 px-6 md:px-16 lg:px-32 max-w-7xl mx-auto h-full flex flex-col justify-center">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-16 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A0A0B0]"
        >
          Featured <span className="text-[#6366F1]">Projects</span>
        </motion.h2>

        <div className="flex flex-col w-full gap-6 lg:gap-8 group/list">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative p-8 md:p-12 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredIdx === index 
                  ? "bg-white/10 border-white/30 backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.3)]" 
                  : "bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between z-10 relative pointer-events-none">
                <div className="flex items-center gap-6 md:gap-12 transition-transform duration-500 group-hover:translate-x-4 md:w-[60%]">
                  <span className={`text-xl md:text-3xl font-mono transition-colors duration-300 ${hoveredIdx === index ? project.accent : "text-white/30"}`}>
                    {project.num}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-silver group-hover:text-white transition-colors duration-300 drop-shadow-md">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end w-full md:w-[40%] transition-all duration-500">
                  <p className={`text-lg md:text-2xl font-bold transition-colors duration-300 ${hoveredIdx === index ? "text-white" : "text-[#A0A0B0]"}`}>
                    {project.subtitle}
                  </p>
                  
                  {/* Reveal detail description on hover */}
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: hoveredIdx === index ? "auto" : 0, 
                      opacity: hoveredIdx === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden w-full md:text-right"
                  >
                    <p className="mt-4 text-sm md:text-base font-mono text-silver bg-black/40 p-4 rounded-xl backdrop-blur-md border border-white/10 ml-auto inline-block">
                      {project.desc}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
