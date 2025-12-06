import React from 'react';
import { motion } from 'framer-motion';

const HeroSlide = () => {
  return (
    <section className="h-screen w-full snap-start flex flex-col justify-center items-center relative overflow-hidden bg-neutral-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-4"
      >
        <motion.div 
          className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full border-4 border-cyan-400 overflow-hidden mb-8 shadow-[0_0_40px_rgba(34,211,238,0.4)]"
          whileHover={{ scale: 1.05, borderColor: '#34d399' }}
        >
          <img src="/harshil.png" alt="Harshil Prajapati" className="w-full h-full object-cover" />
        </motion.div>

        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
          Harshil <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">Prajapati</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm md:text-xl font-mono font-medium tracking-wide">
          <span className="text-emerald-400">Linux Enthusiast</span>
          <span className="text-neutral-600">|</span>
          <span className="text-purple-400">Full Stack Dev</span>
          <span className="text-neutral-600">|</span>
          <span className="text-cyan-400">Android Dev</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSlide;