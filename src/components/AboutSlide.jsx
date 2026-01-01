import React from 'react';
import { motion } from 'framer-motion';

const AboutSlide = () => {
  return (
    <section className="min-h-screen w-full snap-start flex flex-col justify-center items-center px-4 bg-neutral-950 py-20 md:py-0">
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center text-white"
      >
        About <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">Me</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-3xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-xl"
      >
        <div className="relative">
          <div className="absolute -left-2 -top-2 w-20 h-20 bg-cyan-500/10 blur-xl rounded-full" />
          <div className="absolute -right-2 -bottom-2 w-20 h-20 bg-purple-500/10 blur-xl rounded-full" />
          
          <p className="text-lg leading-relaxed text-neutral-300 relative z-10">
            Hi! I'm <span className="text-cyan-400">Harshil</span>, a web and app developer who loves turning ideas into clean, user-friendly interfaces. I enjoy experimenting with design, improving user experiences, and learning new technologies. 
            <br /><br />
            When I'm not coding, you'll find me exploring design trends or brewing the perfect cup of coffee ☕
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
          <span className="text-cyan-400 font-mono text-sm">🎨 Design</span>
        </div>
        <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
          <span className="text-purple-400 font-mono text-sm">💻 Development</span>
        </div>
        <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
          <span className="text-emerald-400 font-mono text-sm">🚀 Innovation</span>
        </div>
      </motion.div>

    </section>
  );
};

export default AboutSlide;
