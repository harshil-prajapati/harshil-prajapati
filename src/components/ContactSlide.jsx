import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSlide = () => {
  return (
    <section className="h-screen w-full snap-start flex flex-col justify-center items-center px-4 bg-neutral-950 relative overflow-hidden">
      
      {/* Background Ambience (Subtle Red Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl z-10"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tighter">
          Let's <span className="text-emerald-500 drop-shadow-[0_0_25px_rgba(16,185,129,0.6)]">Connect</span>
        </h2>
        
        <p className="text-lg md:text-xl text-neutral-400 mb-10 font-light px-4">
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        {/* Location Link */}
        <motion.a 
          whileHover={{ scale: 1.05 }}
          href="https://www.google.com/maps/place/Mehsana,+Gujarat" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 text-lg group"
        >
          <FaMapMarkerAlt className="text-yellow-500 group-hover:text-yellow-400 transition-colors" /> 
          <span className="border-b border-transparent group-hover:border-white">Mehsana, Gujarat, India</span>
        </motion.a>

        <div className="flex flex-col items-center gap-10">
          
          {/* Email Button (Text) 
              - Default: Neutral Grey (Matches icons)
              - Hover: Red Text & Border (Matches your request)
          */}
          <a 
            href="mailto:mr.harshilprajapati@gmail.com" 
            className="flex items-center gap-3 px-8 py-4 border border-neutral-700 text-neutral-400 rounded-full text-lg font-bold transition-all 
            hover:border-red-600 hover:text-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:scale-105 bg-neutral-900/50"
          >
            <FaEnvelope /> mr.harshilprajapati@gmail.com
          </a>

          {/* Social Icons */}
          <div className="flex gap-12">
             <a 
               href="https://github.com/harshil-prajapati" 
               target="_blank"
               rel="noreferrer"
               className="text-5xl text-neutral-600 hover:text-white transition-all hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
             >
               <FaGithub />
             </a>
             <a 
               href="https://www.linkedin.com/in/harshilprajapati/" 
               target="_blank"
               rel="noreferrer"
               className="text-5xl text-neutral-600 hover:text-blue-600 transition-all hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]"
             >
               <FaLinkedin />
             </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSlide;