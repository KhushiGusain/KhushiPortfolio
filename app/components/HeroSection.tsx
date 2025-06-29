"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SiNextdotjs, SiReact, SiNodedotjs, SiPostgresql, SiAmazon } from "react-icons/si";
import React from 'react';

export const HeroSection = () => {
	const techStack = [
		{ name: "Next.js", icon: <SiNextdotjs className="text-lg mr-2" /> },
		{ name: "React", icon: <SiReact className="text-lg mr-2" /> },
		{ name: "Node.js", icon: <SiNodedotjs className="text-lg mr-2" /> },
		{ name: "PostgreSQL", icon: <SiPostgresql className="text-lg mr-2" /> },
		{ name: "DynamoDB", icon: <SiAmazon className="text-lg mr-2" /> },
		{ name: "AWS", icon: <SiAmazon className="text-lg mr-2" /> },
		{ name: "AI", icon: <span className="text-lg mr-2">🤖</span> },
	];

	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-12 lg:pt-24 lg:pb-16">
			{/* Animated Background Grid */}
			<div className="absolute inset-0 grid-background-dark opacity-5 dark:opacity-10">
				<div className="grid-overlay animate-pulse-slow"></div>
			</div>

			{/* Hero Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
					{/* Left Content */}
					<motion.div 
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
						className="flex-1 text-left max-w-2xl mt-4 lg:mt-12"
					>
						{/* Name Section */}
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
							className="mb-6"
						>
							<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-[#B03052] to-[#3D0301] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-dancing-script)' }}>
								Khushi Gusain
							</h1>
							<div className="h-1 w-20 bg-gradient-to-r from-[#B03052] to-[#3D0301] rounded-full"></div>
						</motion.div>

						{/* Role & Description */}
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
							className="space-y-6 mb-8"
						>
							<h2 className="text-xl lg:text-2xl font-semibold text-[#3D0301] dark:text-gray-300">
								<span className="bg-gradient-to-r from-[#B03052] to-[#3D0301] dark:from-[#D76C82] dark:to-[#FFC2BA] bg-clip-text text-transparent">Software Developer | Innovator | Problem Solver</span>
							</h2>
							<p className="text-lg text-[#3D0301] dark:text-gray-300 leading-relaxed">
								I'm a passionate software developer currently pursuing my education at
								<span className="font-semibold bg-gradient-to-r from-[#B03052] to-[#3D0301] dark:from-[#D76C82] dark:to-[#FFC2BA] bg-clip-text text-transparent"> Bennett University</span>.
								I believe that exceptional websites are not just built—they are thoughtfully crafted with creativity, innovation, and a strong focus on user experience.
								I love building interactive, scalable, and efficient solutions that make a real impact.
							</p>
						</motion.div>

						{/* Tech Stack Pills */}
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
							className="flex flex-nowrap gap-3 mb-8 -ml-10"
						>
							{techStack.map((tech, index) => (
								<motion.span
									key={tech.name}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 1.2 + index * 0.1, duration: 0.4, ease: "easeOut" }}
									whileHover={{
										scale: 1.06,
										boxShadow: "0 2px 12px 0 rgba(176,48,82,0.10)",
										background: "#EBE8DB",
										borderColor: "#B03052"
									}}
									className="
										flex items-center
										px-3 py-1.5
										rounded-full
										font-medium
										text-[#3D0301] dark:text-gray-300
										text-sm
										bg-[#EBE8DB] dark:bg-gray-800
										border border-[#EBE8DB] dark:border-gray-700
										shadow
										transition-all
										duration-300
										cursor-pointer
										hover:shadow-lg
										hover:bg-[#D76C82]/20 dark:hover:bg-[#D76C82]/10
										whitespace-nowrap
									"
								>
									{React.cloneElement(tech.icon, { className: 'text-base mr-2 group-hover:bg-gradient-to-r group-hover:from-[#B03052] group-hover:to-[#3D0301] group-hover:text-transparent group-hover:bg-clip-text' })}
									{tech.name}
								</motion.span>
							))}
						</motion.div>
					</motion.div>

					{/* Photo Section - Right Side */}
					<motion.div 
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="flex-shrink-0 mt-4 lg:mt-8 relative"
					>
						<div className="relative w-64 h-64 lg:w-80 lg:h-80">
							{/* New arrow pointing from photo to hero section - only visible on desktop */}
							<div className="hidden lg:block absolute" style={{ top: '30%', left: '-140px', zIndex: 20, pointerEvents: 'none', transform: 'translateY(-50%)' }}>
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
								>
									<svg width="160" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
										{/* Curved arrow path */}
										<path 
											d="M150 30 Q80 -5 10 20" 
											stroke="#D76C82" 
											strokeWidth="3" 
											strokeLinecap="round"
											fill="none"
											className="opacity-80"
										/>
										{/* Arrow head */}
										<path 
											d="M10 20 L18 12 M10 20 L18 28"
											stroke="#D76C82" 
											strokeWidth="3" 
											strokeLinecap="round" 
											strokeLinejoin="round"
											className="opacity-80"
										/>
									</svg>
								</motion.div>
							</div>
							
							{/* Main Photo with Framer Motion hover effect */}
							<motion.div
								whileHover={{ scale: 1.07, rotate: -2, boxShadow: '0 8px 32px 0 rgba(124,43,192,0.18)' }}
								transition={{ type: 'spring', stiffness: 300, damping: 20 }}
								className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white cursor-pointer"
							>
								<img 
									src="/WhatsApp Image 2025-06-08 at 02.57.17.jpeg" 
									alt="Khushi Gusain" 
									className="w-full h-full object-cover"
								/>
							</motion.div>
						</div>
						{/* CTA Button below the photo, centered and modern */}
						<div className="flex justify-center mt-16 mb-8">
							<motion.a 
								href="#work" 
								className="group relative inline-flex items-center justify-center"
								whileHover={{ scale: 1.06 }}
								whileTap={{ scale: 0.98 }}
							>
								<span className="relative px-7 py-2.5 bg-[#B03052] rounded-full inline-flex items-center justify-center w-full sm:w-auto text-white font-bold text-base shadow-lg hover:bg-gradient-to-r hover:from-[#B03052] hover:to-[#3D0301] transition-all duration-300">
									View My Work
									<svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
								</span>
							</motion.a>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
				className="absolute bottom-8 inset-x-0 flex flex-col items-center"
			>
				<span className="text-[#B03052] text-sm mb-2 font-medium">Scroll to explore</span>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
				>
					<svg className="w-6 h-6 text-[#B03052]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</motion.div>
			</motion.div>
		</div>
	);
};