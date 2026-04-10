import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-transparent relative z-10 text-white pt-24 pb-12 px-6 md:px-16 lg:px-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black mb-16 uppercase tracking-tighter"
        >
          LET'S GET IN <span className="text-[#06B6D4] outline-none drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">TOUCH</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-24">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b-2 border-white/20 py-4 text-xl md:text-2xl font-mono text-silver placeholder-[#A0A0B0] focus:outline-none focus:border-[#06B6D4] focus:shadow-[0_10px_10px_-10px_rgba(6,182,212,0.5)] transition-all"
                  required
                />
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  id="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b-2 border-white/20 py-4 text-xl md:text-2xl font-mono text-silver placeholder-[#A0A0B0] focus:outline-none focus:border-[#06B6D4] focus:shadow-[0_10px_10px_-10px_rgba(6,182,212,0.5)] transition-all"
                  required
                />
              </div>
              <div className="relative group">
                <textarea 
                  id="message"
                  placeholder="Your Message"
                  rows={3}
                  className="w-full bg-transparent border-b-2 border-white/20 py-4 text-xl md:text-2xl font-mono text-silver placeholder-[#A0A0B0] focus:outline-none focus:border-[#06B6D4] focus:shadow-[0_10px_10px_-10px_rgba(6,182,212,0.5)] transition-all resize-none"
                  required
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mt-4 self-start flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] text-white font-black tracking-widest uppercase rounded-full border border-white/20 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all drop-shadow-md group"
                type="submit"
              >
                Send Message <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Connect Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-1/2 flex flex-col justify-end lg:items-end"
          >
            <div className="space-y-8 flex flex-col items-start lg:items-end w-full">
              <h3 className="text-3xl md:text-4xl font-black uppercase text-white drop-shadow-md">Connect With Me</h3>
              <p className="text-[#A0A0B0] font-mono text-sm md:text-base uppercase max-w-sm text-left lg:text-right">
                Feel free to reach out for collaborations or just a friendly chat.
              </p>
              
              <div className="flex gap-4 sm:gap-6 mt-4 flex-wrap">
                <a 
                  href="mailto:nandakishoreks2004@gmail.com" 
                  className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#06B6D4] text-white hover:text-[#06B6D4] transition-all hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] group"
                  aria-label="Email"
                >
                  <Mail size={28} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="tel:8848830195" 
                  className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#06B6D4] text-white hover:text-[#06B6D4] transition-all hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] group"
                  aria-label="Phone"
                >
                  <Phone size={28} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#6366F1] text-white hover:text-[#6366F1] transition-all hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] group"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#6366F1] text-white hover:text-[#6366F1] transition-all hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] group"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/10 flex justify-center items-center">
          <p className="font-mono text-[#A0A0B0] text-sm text-center">
            © {new Date().getFullYear()} NANDAKISHORE. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;

