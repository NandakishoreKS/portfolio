import { motion } from 'framer-motion';

const Navbar = () => {
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl"
    >
      <div className="glass-panel rounded-full px-6 py-4 flex justify-between items-center shadow-2xl">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm md:text-base font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors relative group"
          >
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
