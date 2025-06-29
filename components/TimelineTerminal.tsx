"use client";

import {
    AnimatedSpan,
    Terminal,
    TerminalTypingAnimation,
  } from "./magicui/terminal";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
  
  export function TimelineTerminal() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants: Variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          staggerChildren: 0.2,
          ease: "easeOut"
        }
      }
    };

    const itemVariants: Variants = {
      hidden: { opacity: 0, x: -30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    };

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="h-full w-full"
      >
      <Terminal>
          <TerminalTypingAnimation className="text-[#B03052] font-semibold">&gt; cat journey.txt</TerminalTypingAnimation>
  
          <motion.div variants={itemVariants} className="text-[#3D0301]">
            <span className="flex items-center gap-3 group hover:bg-[#F5F5F4] p-2 rounded-lg transition-all duration-300">
              <span className="text-[#B03052] font-mono font-bold text-lg">2022</span>
              <span className="text-[#D76C82] text-xl group-hover:scale-110 transition-transform duration-300">→</span>
              <span className="flex-1">Started B.Tech at Bennett University 🎓</span>
            </span>
          </motion.div>
  
          <motion.div variants={itemVariants} className="text-[#3D0301]">
            <span className="flex items-center gap-3 group hover:bg-[#F5F5F4] p-2 rounded-lg transition-all duration-300">
              <span className="text-[#B03052] font-mono font-bold text-lg">2023</span>
              <span className="text-[#D76C82] text-xl group-hover:scale-110 transition-transform duration-300">→</span>
              <span className="flex-1">Achieved 9+ SGPA in consecutive semesters 🏆</span>
            </span>
          </motion.div>
  
          <motion.div variants={itemVariants} className="text-[#3D0301]">
            <span className="flex items-center gap-3 group hover:bg-[#F5F5F4] p-2 rounded-lg transition-all duration-300">
              <span className="text-[#B03052] font-mono font-bold text-lg">2024</span>
              <span className="text-[#D76C82] text-xl group-hover:scale-110 transition-transform duration-300">→</span>
              <span className="flex-1">Solved 300+ DSA problems & built innovative projects 💻</span>
            </span>
          </motion.div>
  
          <motion.div variants={itemVariants} className="text-[#3D0301]">
            <span className="flex items-center gap-3 group hover:bg-[#F5F5F4] p-2 rounded-lg transition-all duration-300">
              <span className="text-[#B03052] font-mono font-bold text-lg">2024</span>
              <span className="text-[#D76C82] text-xl group-hover:scale-110 transition-transform duration-300">→</span>
              <span className="flex-1">Full Stack Internship at Boloo (International) 🌍</span>
            </span>
          </motion.div>
  
          <motion.div variants={itemVariants} className="text-[#3D0301]">
            <span className="flex items-center gap-3 group hover:bg-[#F5F5F4] p-2 rounded-lg transition-all duration-300">
              <span className="text-[#B03052] font-mono font-bold text-lg">2024</span>
              <span className="text-[#D76C82] text-xl group-hover:scale-110 transition-transform duration-300">→</span>
              <span className="flex-1">Lead Developer Intern at Ezlearn (EdTech) 🚀</span>
            </span>
          </motion.div>
    
          <motion.div variants={itemVariants} className="text-[#3D0301]">
            <span className="flex items-center gap-3 group hover:bg-[#F5F5F4] p-2 rounded-lg transition-all duration-300">
              <span className="text-[#B03052] font-mono font-bold text-lg">2025</span>
              <span className="text-[#D76C82] text-xl group-hover:scale-110 transition-transform duration-300">→</span>
              <span className="flex-1">Continuing to build amazing projects & learn ✨</span>
            </span>
          </motion.div>
    
          <motion.div 
            variants={itemVariants}
            className="mt-4 pt-4 border-t border-[#EBE8DB]"
          >
            <TerminalTypingAnimation className="text-[#B03052] font-semibold">
              ✓ Journey loaded successfully!
            </TerminalTypingAnimation>
          </motion.div>
      </Terminal>
      </motion.div>
    );
  }
  