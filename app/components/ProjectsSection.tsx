"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { SectionWithPattern } from "@/components/magicui/section-with-pattern";
import { ImageCarousel } from './ImageCarousel';

const projects = [
	{
		title: 'Dynamic Blog Post Generator',
		description: 'Created a dynamic blog post system that generates new blog pages with unique slugs and rich text formatting for Ezlearn.in/[slug].',
		tech: [
			'Dynamic Route Handling in Next.js',
			'Rich Text Editor Integration',
			'SEO Optimization for each blog page',
			'API integration for blog creation and editing',
		],
		images: [
			'/Screenshot 2025-06-08 034521.png',
			'/Screenshot 2025-06-08 034507.png',
			'/Screenshot 2025-06-08 034452.png'
		],
		github: 'https://github.com/KhushiGusain/Dynamic-Blog-Post-with-Admin-Portal-and-Authentication',
		website: 'https://dynamic-blog-post-with-admin-portal-brown.vercel.app/',
	},
	{
		title: 'Dsaverse',
		description: 'Developed a platform for students to track their DSA progress with AI-powered personalized roadmaps and real-time performance analysis.',
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
		description: 'Built a SaaS platform for project and task management with real-time collaboration, Kanban boards, and AI-powered data queries.',
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
	return (
		<SectionWithPattern id="work" className="scroll-mt-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
						<TypingAnimation className="text-2xl sm:text-3xl">Featured Projects</TypingAnimation>
					</h2>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Here are some of my recent projects that showcase my skills and experience in web development.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
						>
							{project.images ? (
								<ImageCarousel images={project.images} alt={project.title} />
							) : (
								<div className="relative w-full h-64 bg-gray-100 dark:bg-gray-700">
									<Image
										src={project.image}
										alt={project.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										className="object-cover transition-transform duration-300 group-hover:scale-105"
										priority={index === 0}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
							)}

							<div className="p-8">
								<h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
								{(project.title === 'TaskHive' || project.title === 'Dynamic Blog Post Generator' || project.title === 'Dsaverse') && (
									<div className="mb-4 flex flex-col items-start gap-2">
										<span className="inline-block px-3 py-1 text-sm font-bold bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded-full animate-pulse shadow-md">✨ Wow! ✨</span>
										<span className="inline-block text-sm text-blue-700 dark:text-blue-300 font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-lg shadow-sm">Use the <strong>demo account available</strong> at login to experience all features live!</span>
										<span className="inline-block text-xs text-yellow-700 dark:text-yellow-300 font-medium bg-yellow-50 dark:bg-yellow-900/30 px-3 py-1 rounded-lg shadow-sm border border-yellow-200 dark:border-yellow-700">Loading and processing may be slow due to website hosted on 3rd party website.</span>
									</div>
								)}
								<p className="text-gray-600 dark:text-gray-400 mb-6 text-base">{project.description}</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.tech.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex flex-wrap gap-4">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center px-6 py-3 font-medium transition-colors duration-300 rounded-lg shadow-md bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-gray-800"
									>
										<svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
										</svg>
										View Code
									</a>
									<a
										href={project.website}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center px-6 py-3 font-medium transition-colors duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-600"
									>
										<svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
										Live Demo
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</SectionWithPattern>
	);
};
