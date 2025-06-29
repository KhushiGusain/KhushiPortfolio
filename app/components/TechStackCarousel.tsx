"use client";

import React from 'react';
import Image from 'next/image';
import { SectionWithPattern } from "@/components/magicui/section-with-pattern";
import { motion } from 'framer-motion';

const techStacks = [
  { name: 'React', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/react-light.svg' },
  { name: 'Next.js', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/nextjs-light.svg' },
  { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/javascript.svg' },
  { name: 'Node.js', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/nodejs-light.svg' },
  { name: 'Express', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/expressjs-light.svg' },
  { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/mongodb-light.svg' },
  { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/postgressql-light.svg' },
  { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/tailwindcss-light.svg' },
  { name: 'GitHub', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/github-light.svg' },
  { name: 'Docker', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/docker-light.svg' },
  { name: 'AWS', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons%232/aws-light.svg' },
];

export const TechStackCarousel = () => {
  return (
    <SectionWithPattern id="tech-stacks" className="scroll-mt-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto relative px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#B03052] to-[#3D0301] bg-clip-text text-transparent">
            Tech Stacks I Know
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#B03052] to-[#3D0301] mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="relative w-full overflow-hidden py-12">
          <div className="flex animate-scroll-slow">
            <div className="flex space-x-8">
              {techStacks.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center group min-w-[100px]"
                >
                  <div className="w-20 h-20 relative transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B03052]/20 to-[#3D0301]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    
                    <div className="relative w-full h-full p-4 bg-white dark:bg-gray-800 rounded-2xl border border-[#EBE8DB] dark:border-gray-700 shadow-lg group-hover:shadow-2xl group-hover:border-[#D76C82]/60 dark:group-hover:border-[#D76C82]/60 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-[#F5F5F4] dark:group-hover:from-gray-800 dark:group-hover:to-gray-700">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain p-3 transition-all duration-300 group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                  </div>
                  
                  <span className="mt-4 text-sm font-semibold text-[#3D0301] dark:text-gray-300 group-hover:text-[#B03052] dark:group-hover:text-[#D76C82] transition-colors duration-300 tracking-wide">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex space-x-8">
              {techStacks.map((tech, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center group min-w-[100px]"
                >
                  <div className="w-20 h-20 relative transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B03052]/20 to-[#3D0301]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    
                    <div className="relative w-full h-full p-4 bg-white dark:bg-gray-800 rounded-2xl border border-[#EBE8DB] dark:border-gray-700 shadow-lg group-hover:shadow-2xl group-hover:border-[#D76C82]/60 dark:group-hover:border-[#D76C82]/60 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-[#F5F5F4] dark:group-hover:from-gray-800 dark:group-hover:to-gray-700">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain p-3 transition-all duration-300 group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                  </div>
                  
                  <span className="mt-4 text-sm font-semibold text-[#3D0301] dark:text-gray-300 group-hover:text-[#B03052] dark:group-hover:text-[#D76C82] transition-colors duration-300 tracking-wide">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWithPattern>
  );
}; 