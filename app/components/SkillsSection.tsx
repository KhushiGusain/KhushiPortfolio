import React from 'react';
import { TimelineTerminal } from '../../components/TimelineTerminal';
// import { motion } from 'framer-motion';
import { SectionWithPattern } from "@/components/magicui/section-with-pattern";

const categories = [
						{
							category: 'Frontend Development',
							skills: [
			{ name: 'React.js', icon: '⚛️' },
			{ name: 'Next.js', icon: '🚀' },
			{ name: 'Tailwind CSS', icon: '🎨' },
							],
							icon: '🚀',
		gradient: 'from-[#EBE8DB] to-[#D76C82]/30',
						},
						{
							category: 'Backend Development & APIs',
							skills: [
			{ name: 'Node.js', icon: '🖥️' },
			{ name: 'Express.js', icon: '⚡' },
			{ name: 'RESTful APIs', icon: '🔌' },
							],
							icon: '⚡',
		gradient: 'from-[#D76C82]/20 to-[#B03052]/20',
						},
						{
							category: 'Databases',
							skills: [
			{ name: 'MongoDB', icon: '🗄️' },
			{ name: 'PostgreSQL', icon: '📊' },
			{ name: 'DynamoDB', icon: '⚡' },
							],
							icon: '🔥',
		gradient: 'from-[#B03052]/10 to-[#3D0301]/10',
						},
						{
							category: 'Cloud & DevOps',
							skills: [
			{ name: 'AWS', icon: '☁️' },
			{ name: 'Docker', icon: '🐳' },
							],
							icon: '☁️',
		gradient: 'from-[#3D0301]/5 to-[#EBE8DB]',
						},
];

export const SkillsSection = () => {
	return (
		<SectionWithPattern id="skills" className="scroll-mt-20 bg-white dark:bg-gray-900">
			<div className="max-w-7xl mx-auto relative px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#B03052] to-[#3D0301] bg-clip-text text-transparent">
						Technical Expertise
					</h2>
					<div className="w-16 h-0.5 bg-gradient-to-r from-[#B03052] to-[#3D0301] mx-auto rounded-full"></div>
				</div>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
					{categories.map((category, i) => (
						<div
							key={category.category}
							className="group relative flex flex-col bg-white dark:bg-gray-800/90 rounded-2xl border border-[#EBE8DB] dark:border-[#D76C82]/40 shadow-lg hover:shadow-2xl hover:border-[#D76C82]/60 dark:hover:border-[#FFC2BA]/60 hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer dark:shadow-gray-900/50"
						>
							{/* Category Header */}
							<div className={`flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${category.gradient} w-full group-hover:bg-gradient-to-r group-hover:from-[#D76C82]/20 group-hover:to-[#B03052]/20 dark:group-hover:from-[#FFC2BA]/30 dark:group-hover:to-[#D76C82]/30 transition-all duration-300 dark:from-[#D76C82]/20 dark:to-[#B03052]/20`}>
								<span className="text-xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
								<h3 className="text-sm font-semibold text-[#3D0301] dark:text-[#FFC2BA] tracking-wide uppercase group-hover:text-[#B03052] dark:group-hover:text-[#FFC2BA] transition-colors duration-300" style={{fontFamily: 'var(--font-inter)'}}>
									{category.category}
								</h3>
							</div>

							{/* Skills List: Plain text with vertical spacing */}
							<div className="p-4 space-y-3 bg-white dark:bg-gray-800/90">
								{category.skills.map((skill, j) => (
									<div
										key={skill.name}
										className="flex items-center gap-3 text-[#3D0301] dark:text-[#FFC2BA] transition-all duration-200 hover:text-[#B03052] dark:hover:text-[#D76C82] hover:underline hover:underline-offset-4 cursor-default group/skill"
										style={{fontFamily: 'var(--font-inter)'}}
									>
										<span className="text-lg opacity-80 group-hover/skill:opacity-100 transition-opacity duration-200">
											{skill.icon}
										</span>
										<span className="text-base font-medium">
													{skill.name}
												</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Timeline Terminal Section */}
				<div className="mt-16">
					<div className="text-center mb-8">
						<h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#B03052] to-[#3D0301] bg-clip-text text-transparent">
							My Journey
					</h2>
						<div className="w-16 h-0.5 bg-gradient-to-r from-[#B03052] to-[#3D0301] mx-auto rounded-full"></div>
					</div>
					<div className="w-full max-w-3xl mx-auto">
						<div className="aspect-[18/9] rounded-2xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/20">
							<TimelineTerminal />
						</div>
					</div>
				</div>
			</div>
		</SectionWithPattern>
	);
};
