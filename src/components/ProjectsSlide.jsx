import React from 'react';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaGithub, FaExternalLinkAlt, FaAndroid, FaLinux } from 'react-icons/fa';

const projects = [
  {
    title: "Money Manager",
    desc: "A comprehensive financial tracking Android application built using native Kotlin and Firebase backend. It features real-time data synchronization across devices, multi-account management, and insightful visualization of income versus expenses. Designed with MVVM architecture to ensure clean, scalable code and a seamless, crash-free user experience.",
    link: "https://play.google.com/store/apps/details?id=com.harshilprajapati.moneymanager",
    btnText: "Play Store",
    icon: <FaGooglePlay />,
    platformIcon: <FaAndroid className="text-green-500 text-2xl" />,
    color: "border-green-500",
    shadowColor: "group-hover:shadow-green-500/50",
    textColor: "text-green-400"
  },
  {
    title: "Cash Deposit",
    desc: "A practical utility app designed for Indian shopkeepers and cashiers to quickly tally daily cash denominations. It automatically calculates totals and generates a formatted text summary that can be instantly shared via WhatsApp or SMS. It simplifies end-of-day closing processes and reduces calculation errors.",
    link: "https://play.google.com/store/apps/details?id=com.harshilprajapati.cashdeposit",
    btnText: "Play Store",
    icon: <FaGooglePlay />,
    platformIcon: <FaAndroid className="text-cyan-500 text-2xl" />,
    color: "border-cyan-500",
    shadowColor: "group-hover:shadow-cyan-500/50",
    textColor: "text-cyan-400"
  },
  {
    title: "Track My Funds",
    desc: "A lightweight, CLI-based personal finance tracker tailored for developers who prefer living in the terminal. Built with Python, it utilizes a local JSON file system for secure, offline data storage without needing a database server. It supports category tagging, monthly summaries, and custom reporting scripts, making it fully hackable and open source.",
    link: "https://github.com/harshil-prajapati/track-my-funds",
    btnText: "GitHub CLI",
    icon: <FaGithub />,
    platformIcon: <FaLinux className="text-yellow-500 text-2xl" />,
    color: "border-yellow-500",
    shadowColor: "group-hover:shadow-yellow-500/50",
    textColor: "text-yellow-400"
  }
];

const ProjectsSlide = () => {
  return (
    <section className="min-h-screen w-full snap-start flex flex-col justify-center items-center px-4 md:px-10 bg-neutral-950 relative py-20 md:py-0">
      
      {/* Background Gradient (Subtle Green/Dark) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-900/10 via-neutral-950 to-neutral-950 z-0 pointer-events-none" />
      
      <div className="max-w-7xl w-full z-10 flex flex-col items-center">
        
        {/* Title Section */}
        <motion.h2 
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-white"
        >
          Featured <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]">Projects</span>
        </motion.h2>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`
                bg-neutral-900 p-6 rounded-2xl border-t-4 ${project.color} 
                flex flex-col justify-between h-auto shadow-xl transition-all duration-300 group
                ${project.shadowColor} hover:shadow-2xl relative overflow-hidden
              `}
            >
              {/* Content */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  {project.platformIcon}
                </div>
                
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors text-justify">
                  {project.desc}
                </p>
              </div>
              
              {/* Button */}
              <div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-xl transition-all border border-neutral-700 hover:border-white/20"
                >
                  {project.icon}
                  <span>{project.btnText}</span>
                  <FaExternalLinkAlt className="text-[10px] ml-1 opacity-50"/>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSlide;