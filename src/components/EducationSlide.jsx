import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';

const educationData = [
  {
    uni: "Ganpat University",
    degree: "B.Sc (CA & IT)",
    year: "2023 - 2026",
    score: "CGPA: 8.5",
    desc: ""
  },
];

const certificationsData = [
  { 
    title: "Python Pro Bootcamp", 
    src: "Udemy (Jun 2023)", 
    color: "border-yellow-400", 
    link: "https://www.udemy.com/certificate/UC-7e77bd42-e3a9-4454-82f3-03b9ddbad70c/"
  },
  { 
    title: "Web Development 2024", 
    src: "Udemy (Sep 2024)", 
    color: "border-cyan-400", 
    link: "https://www.udemy.com/certificate/UC-ed0510f0-5ac9-493d-bd26-ec959cd40709/"
  },
  { 
    title: "Decode Python with DSA", 
    src: "PW Skills (Jan 2025)", 
    color: "border-emerald-400", 
    link: "https://pwskills.com/learn/certificate/9a3d5fbb-416f-4cb6-95c2-e7e46bde24b9/"
  },
];

const EducationSlide = () => {
  return (
    <section className="min-h-screen w-full snap-start flex flex-col justify-center items-center px-4 bg-neutral-950 py-20 md:py-0">
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center text-white"
      >
        Education & <span className="text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]">Certifications</span>
      </motion.h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-start">
        
        {/* LEFT COLUMN: EDUCATION */}
        <div className="flex-1 w-full flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-white mb-2 ml-2 flex items-center gap-2">
             <FaGraduationCap className="text-purple-400"/> Academic History
          </h3>
          
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-neutral-900 to-black p-6 md:p-8 rounded-3xl border border-neutral-800 shadow-[0_0_20px_rgba(168,85,247,0.1)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="space-y-2 relative z-10">
                <h4 className="text-xl md:text-2xl font-bold text-white">{edu.uni}</h4>
                <p className="text-purple-400 font-mono text-sm md:text-base">{edu.degree}</p>
                {edu.desc && <p className="text-neutral-400 text-sm mt-2">{edu.desc}</p>}
                
                <div className="flex justify-between text-neutral-500 mt-4 text-sm border-t border-neutral-800 pt-4">
                  <span>{edu.year}</span>
                  <span className="text-white font-bold">{edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT COLUMN: CERTIFICATIONS */}
        <div className="flex-1 w-full flex flex-col gap-4">
           <h3 className="text-2xl font-bold text-white mb-4 ml-2">Certifications</h3>
           
           <div className="flex flex-col gap-4">
             {certificationsData.map((cert, i) => (
               <motion.a 
                 key={i}
                 href={cert.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 whileHover={{ x: 10, scale: 1.02 }}
                 className={`
                    block p-5 rounded-2xl bg-neutral-900 border-l-4 ${cert.color} 
                    hover:bg-neutral-800 transition-all cursor-pointer shadow-md group
                 `}
               >
                  <div className="flex justify-between items-center">
                    <div>
                        <h4 className="font-bold text-white text-sm md:text-base group-hover:text-cyan-400 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs md:text-sm text-neutral-500">{cert.src}</p>
                    </div>
                    <FaExternalLinkAlt className="text-neutral-600 group-hover:text-white transition-colors text-xs" />
                  </div>
               </motion.a>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSlide;