"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ImageCarousel } from './ImageCarousel';

const projects = [
	{
		title: 'Dynamic Blog Post Generator',
		description: 'A comprehensive blog management system with dynamic routing, rich text editing, and SEO optimization for content creators.',
		tech: [
			'Dynamic Route Handling in Next.js',
			'Rich Text Editor Integration',
			'SEO Optimization for each blog page',
			'API integration for blog creation and editing',
		],
		images: [
			'/ezlearn/ez1.png',
			'/ezlearn/ez2.png',
			'/ezlearn/ez3.png',
			'/ezlearn/ez4.png',
		],
		github: 'https://github.com/KhushiGusain/Dynamic-Blog-Post-with-Admin-Portal-and-Authentication',
		website: 'https://dynamic-blog-post-with-admin-portal-brown.vercel.app/',
	},
	{
		title: 'DSAverse',
		description: 'An AI-powered learning platform that provides personalized DSA roadmaps and real-time progress tracking for students.',
		tech: [
			'Student Progress Tracker',
			'AI Integration for Roadmap Suggestions',
			'Real-time Data Sync',
			'Personalized Dashboard Design',
		],
		images: [
			'/dsaverse/Screenshot 2025-06-08 154748.png',
			'/dsaverse/Screenshot 2025-06-08 154734.png',
			'/dsaverse/Screenshot 2025-06-08 154720.png',
			'/dsaverse/Screenshot 2025-06-08 154642.png',
			'/dsaverse/Screenshot 2025-06-08 154606.png'
		],
		github: 'https://github.com/KhushiGusain/DSAverse',
		website: 'https://dsaverse-1k1e.vercel.app/login',
	},
	{
		title: 'TaskHive',
		description: 'A collaborative SaaS platform featuring Kanban boards, AI-powered queries, and real-time project management tools.',
		tech: [
			'Drag-and-Drop Kanban Board (Priority and Status based)',
			'Multi-user Project Collaboration',
			'AI Chat Integration for Project & Task Data Queries',
			'Real-time Project Status Updates',
		],
		images: [
			'/Screenshot 2025-06-08 021911.png',
			'/Screenshot 2025-06-08 021931.png',
			'/Screenshot 2025-06-08 022013.png',
			'/Screenshot 2025-06-08 021946.png'
		],
		github: 'https://github.com/KhushiGusain/TaskHive',
		website: 'https://task-hive-otaa.vercel.app/',
	},
];

export const ProjectsSection = () => {
	const [selected, setSelected] = useState<number | null>(null);
	const [carouselIdx, setCarouselIdx] = useState(0);

	useEffect(() => {
		if (selected !== null) {
			document.body.classList.add('modal-open');
		} else {
			document.body.classList.remove('modal-open');
		}
		return () => document.body.classList.remove('modal-open');
	}, [selected]);

	const handleOpen = (idx: number) => {
		setSelected(idx);
		setCarouselIdx(0);
	};

	const handleClose = () => {
		setSelected(null);
		setCarouselIdx(0);
	};

	const selectedProject = selected !== null ? projects[selected] : null;

	return (
		<section id="work" className="bg-white dark:bg-gray-900 py-20 scroll-mt-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#B03052] to-[#3D0301] bg-clip-text text-transparent">
						Featured Projects
					</h2>
					<div className="w-16 h-0.5 bg-gradient-to-r from-[#B03052] to-[#3D0301] mx-auto rounded-full"></div>
					<p className="text-[#3D0301] dark:text-gray-300 max-w-2xl mx-auto mt-6">
						Here are some of my recent projects that showcase my skills and experience in web development.
					</p>
				</motion.div>

				{/* Modern Project Card Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							whileHover={{ 
								scale: 1.02, 
								y: -8,
								boxShadow: '0 20px 40px rgba(176,48,82,0.15)' 
							}}
							className="group bg-white dark:bg-gray-800 border border-[#D6D3D1] dark:border-gray-700 rounded-2xl shadow-lg cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#D76C82]/30 dark:hover:border-[#FFC2BA]/30 relative"
							onClick={() => handleOpen(idx)}
						>
							{/* Gradient overlay on hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-[#3D0301]/5 dark:from-[#D76C82]/10 dark:to-[#FFC2BA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
							
							{/* Image container with modern styling */}
							<div className="relative h-48 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-[#EBE8DB] to-[#D76C82]/20 dark:from-gray-700 to-[#D76C82]/20 z-0" />
								<Image 
									src={project.images[0]} 
									alt={project.title} 
									fill 
									className="object-cover transition-transform duration-700 group-hover:scale-110 z-10" 
								/>
								{/* Overlay gradient */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20" />
							</div>
							
							{/* Content */}
							<div className="p-6 relative z-20">
								<h3 className="text-xl font-bold text-[#27272A] dark:text-[#FFC2BA] mb-3 group-hover:text-[#B03052] dark:group-hover:text-[#D76C82] transition-colors duration-300">
									{project.title}
								</h3>
								
								{/* Project introduction */}
								<p className="text-[#27272A]/70 dark:text-gray-300/80 text-sm mb-4 leading-relaxed">
									{project.description}
								</p>
								
								{/* View button */}
								<div className="flex justify-between items-center">
									<button className="px-6 py-2 rounded-full bg-[#B03052] text-white font-medium text-sm shadow-md hover:bg-gradient-to-r hover:from-[#B03052] hover:to-[#3D0301] hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
										View Details
									</button>
									<div className="flex gap-2">
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											onClick={(e) => e.stopPropagation()}
											className="p-2 rounded-full bg-[#F5F5F4] dark:bg-gray-700 text-[#27272A] dark:text-gray-300 hover:bg-[#B03052] hover:text-white transition-all duration-300"
										>
											<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
											</svg>
										</a>
										<a
											href={project.website}
											target="_blank"
											rel="noopener noreferrer"
											onClick={(e) => e.stopPropagation()}
											className="p-2 rounded-full bg-[#F5F5F4] dark:bg-gray-700 text-[#27272A] dark:text-gray-300 hover:bg-[#B03052] hover:text-white transition-all duration-300"
										>
											<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Modal Overlay for Project Details */}
				<AnimatePresence>
					{selectedProject && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.25, ease: 'easeInOut' }}
							className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-8"
							style={{ backdropFilter: 'blur(4px)' }}
							onClick={handleClose}
						>
							<motion.div
								initial={{ rotateY: -90, opacity: 0 }}
								animate={{ rotateY: 0, opacity: 1 }}
								exit={{ rotateY: 90, opacity: 0 }}
								transition={{ type: 'spring', stiffness: 320, damping: 28 }}
								style={{ perspective: 1200 }}
								className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] p-6 sm:p-8 relative border border-[#D6D3D1] dark:border-gray-700 flex flex-col gap-6 overflow-y-auto"
								onClick={e => e.stopPropagation()}
							>
								<button onClick={handleClose} className="absolute top-4 right-4 text-[#B03052] dark:text-[#D76C82] hover:text-[#3D0301] dark:hover:text-[#FFC2BA] text-xl font-bold transition-colors duration-300">×</button>

								{/* Image Carousel */}
								<div className="w-full h-80 sm:h-[28rem] relative rounded-xl overflow-visible mb-2 flex items-center justify-center">
									{/* Gradient/Blurred Background */}
									<div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-br from-[#EBE8DB] via-white to-[#D76C82]/10 dark:from-gray-700 dark:via-gray-800 dark:to-[#D76C82]/20 blur-[2px]" />

									{/* Left Arrow Button */}
									{selectedProject.images.length > 1 && (
										<button
											onClick={e => { e.stopPropagation(); setCarouselIdx(idx => Math.max(0, idx - 1)); }}
											disabled={carouselIdx === 0}
											className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 dark:bg-gray-700/90 border border-[#D6D3D1] dark:border-gray-600 shadow-lg transition-all duration-200 hover:bg-[#B03052] hover:text-white hover:scale-110 ${carouselIdx === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:border-[#B03052]'}`}
											aria-label="Previous image"
										>
											<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
											</svg>
										</button>
									)}

									<AnimatePresence initial={false}>
										<motion.div
											key={carouselIdx}
											initial={{ opacity: 0, scale: 0.96 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.96 }}
											transition={{ duration: 0.35, ease: 'easeInOut' }}
											className="absolute inset-0 flex items-center justify-center z-10"
											whileHover={{ scale: 1.025, boxShadow: '0 8px 32px 0 rgba(176,48,82,0.15)' }}
										>
											<Image
												src={selectedProject.images[carouselIdx]}
												alt={selectedProject.title}
												fill
												className="rounded-xl shadow-xl border border-[#D6D3D1] dark:border-gray-600 bg-white dark:bg-gray-700 object-contain sm:object-cover"
												priority
											/>
										</motion.div>
									</AnimatePresence>

									{/* Right Arrow Button */}
									{selectedProject.images.length > 1 && (
										<button
											onClick={e => { e.stopPropagation(); setCarouselIdx(idx => Math.min(selectedProject.images.length - 1, idx + 1)); }}
											disabled={carouselIdx === selectedProject.images.length - 1}
											className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 dark:bg-gray-700/90 border border-[#D6D3D1] dark:border-gray-600 shadow-lg transition-all duration-200 hover:bg-[#B03052] hover:text-white hover:scale-110 ${carouselIdx === selectedProject.images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:border-[#B03052]'}`}
											aria-label="Next image"
										>
											<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
											</svg>
										</button>
									)}
								</div>

								{/* Project Details */}
								<div>
									<h3 className="text-2xl font-bold text-[#27272A] dark:text-[#FFC2BA] mb-2 bg-gradient-to-r from-[#B03052] to-[#3D0301] dark:from-[#D76C82] dark:to-[#FFC2BA] bg-clip-text text-transparent">
										{selectedProject.title}
									</h3>
									<p className="text-[#27272A]/80 dark:text-gray-300/80 text-base mb-4">
										{selectedProject.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{selectedProject.tech.map((tech, i) => (
											<span key={i} className="px-3 py-1 text-xs font-medium bg-[#F5F5F4] dark:bg-gray-700 text-[#27272A] dark:text-gray-300 border border-[#D6D3D1] dark:border-gray-600 rounded-full hover:bg-[#D76C82]/10 dark:hover:bg-[#D76C82]/20 hover:border-[#D76C82]/30 dark:hover:border-[#D76C82]/40 transition-all duration-300">
												{tech}
											</span>
										))}
									</div>
									<div className="flex gap-3">
										<a
											href={selectedProject.github}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-[#3D0301] dark:bg-[#B03052] text-white hover:bg-[#B03052] dark:hover:bg-[#D76C82] hover:scale-105 shadow-md transition-all"
										>
											<svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
											</svg>
											Code
										</a>
										<a
											href={selectedProject.website}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-[#B03052] dark:bg-[#D76C82] text-white hover:bg-gradient-to-r hover:from-[#B03052] hover:to-[#3D0301] dark:hover:from-[#D76C82] dark:hover:to-[#FFC2BA] hover:scale-105 shadow-md transition-all"
										>
											<svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
											Demo
										</a>
									</div>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};
