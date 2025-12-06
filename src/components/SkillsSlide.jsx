import React from 'react';
import { motion } from 'framer-motion';
import { FaLinux, FaAws, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiFirebase, SiKotlin } from 'react-icons/si';

const skills = [
  { name: "Linux", icon: <FaLinux className="text-yellow-400" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "React / Node", icon: <FaNodeJs className="text-green-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
];

const SkillsSlide = () => {
  return (
    <section className="h-screen w-full snap-start flex flex-col justify-center items-center bg-neutral-950 px-4 md:px-20 relative overflow-hidden">
      
      {/* 1. TITLE (Always at the top) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl z-10 mb-6 md:mb-12 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Profile & <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.6)]">Skills</span>
        </h2>
      </motion.div>

      {/* 2. CONTENT CONTAINER 
          - Mobile: Flex-Col-Reverse (Puts 2nd Item [Terminal] on Top, 1st Item [Skills] on Bottom)
          - Desktop: Grid (Side-by-side, 1st Item Left, 2nd Item Right)
      */}
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl w-full items-center z-10 h-auto">
        
        {/* ITEM 1: SKILLS GRID (Bottom on Mobile, Left on Desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(52, 211, 153, 0.1)' }}
                className="p-3 md:p-5 rounded-2xl border border-neutral-800 bg-neutral-900/80 flex items-center gap-3 md:gap-4 cursor-default shadow-lg backdrop-blur-sm"
              >
                <span className="text-2xl md:text-4xl">{skill.icon}</span>
                <span className="text-sm md:text-lg font-semibold text-neutral-200">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ITEM 2: TERMINAL (Top on Mobile, Right on Desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          {/* Responsive Terminal Size */}
          <div className="w-full h-[220px] md:h-[400px] bg-[#0d1117] rounded-xl border border-neutral-700 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden font-mono text-[11px] md:text-sm flex flex-col">
            
            {/* Terminal Header */}
            <div className="bg-neutral-800 px-4 py-2 flex gap-2 items-center border-b border-neutral-700 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-3 text-neutral-400 opacity-75">harshil@linux:~</span>
            </div>

            {/* Terminal Body */}
            <div className="p-4 text-emerald-400 space-y-2 overflow-y-auto no-scrollbar">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <span className="text-blue-400">➜</span> <span className="text-cyan-300">~</span> neofetch
              </motion.div>
              
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.0 }} className="text-neutral-300 leading-relaxed">
                <p>OS: Arch Linux <span className="text-neutral-500 text-xs">(Btw)</span></p>
                <p>Host: Harshil Prajapati</p>
                <p>Kernel: Full_Stack_Dev_v2.0</p>
                <p>Uptime: 24/7 (Coding Mode)</p>
                <p>Shell: zsh</p>
              </motion.div>
              
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }} className="mt-2">
                <span className="text-blue-400">➜</span> <span className="text-cyan-300">~</span> <span className="animate-pulse">_</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSlide;