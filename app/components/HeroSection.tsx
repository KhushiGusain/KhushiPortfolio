import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Animated Background Grid */}
			<div className="absolute inset-0 grid-background-dark opacity-10">
				<div className="grid-overlay animate-pulse-slow"></div>
			</div>

			{/* Floating Tech Icons */}
			<div className="absolute inset-0 overflow-hidden">
				{[
					{ icon: '⚛️', delay: '0s', position: 'top-20 left-1/4' },
					{ icon: '🚀', delay: '2s', position: 'top-40 right-1/3' },
					{ icon: '💻', delay: '1s', position: 'bottom-32 left-1/3' },
					{ icon: '🔥', delay: '3s', position: 'bottom-20 right-1/4' },
				].map((item, index) => (
					<div key={index} className={`absolute ${item.position} animate-float opacity-50`} style={{ animationDelay: item.delay }}>
						<span className="text-4xl">{item.icon}</span>
					</div>
				))}
			</div>

			{/* Floating Activity Icons */}
			<div className="absolute inset-0 overflow-hidden">
				{[
					{ icon: '💻', label: 'Coding', position: 'top-1/4 left-1/3', delay: '0s', rotation: '5deg' },
					{ icon: '📚', label: 'Classes', position: 'top-1/3 right-1/4', delay: '1s', rotation: '-5deg' },
					{ icon: '😴', label: 'Sleeping', position: 'bottom-1/4 left-1/4', delay: '2s', rotation: '3deg' },
				].map((activity) => (
					<div 
						key={activity.label}
						className={`absolute ${activity.position} animate-float-slow opacity-30 hover:opacity-60 transition-all duration-500 group`}
						style={{ 
							animationDelay: activity.delay,
							transform: `rotate(${activity.rotation})`
						}}
					>
						<div className="relative">
							<span className="text-5xl group-hover:scale-110 transition-transform duration-300 inline-block">{activity.icon}</span>
							<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<span className="text-xs font-medium text-gray-600 bg-white/80 px-2 py-1 rounded-full shadow-sm">{activity.label}</span>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Floating Headshot Images */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Left Image */}
				<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 animate-float-slow opacity-80 hover:opacity-100 transition-opacity duration-300">
					<div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
						<div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
							<Image
								src="/WhatsApp Image 2025-06-08 at 02.57.17.jpeg"
								alt="Khushi Gusain - WhatsApp Headshot 1"
								fill
								className="object-cover hover:scale-105 transition-transform duration-500"
								priority
							/>
						</div>
					</div>
				</div>

				{/* Right Image */}
				<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 animate-float-slow-delayed opacity-80 hover:opacity-100 transition-opacity duration-300">
					<div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
						<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
						<div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
							<Image
								src="/WhatsApp Image 2025-04-28 at 11.40.01 PM (1).jpeg"
								alt="Khushi Gusain - WhatsApp Headshot 2"
								fill
								className="object-cover object-right hover:scale-105 transition-transform duration-500 -scale-x-100"
								priority
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Hero Content */}
			<div className="relative z-10 max-w-5xl mx-auto px-4">
				<div className="text-center space-y-6">
					{/* Name Section */}
					<div className="relative inline-block px-4 sm:px-0">
						<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
						<h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 pb-2">
							Khushi Gusain
						</h1>
					</div>

					{/* Role & Description */}
					<div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-3">
								<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
								<h2 className="text-xl sm:text-2xl font-light tracking-wide text-blue-600">Student | Full Stack Developer | Innovator</h2>
								<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
							</div>
							<p className="text-base sm:text-lg text-gray-600 max-w-2xl px-4 sm:px-0">
								Currently pursuing my education at Bennett University, I&apos;m a passionate full stack developer who believes that a great website is not just built — it&apos;s crafted with creativity, innovation, and a deep understanding of user experience.
							</p>
						</div>

						{/* Tech Stack Pills */}
						<div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0">
							{['Next.js', 'React', 'Node.js', 'PostgreSQL', 'DynamoDB', 'AWS', 'AI'].map((tech) => (
								<span
									key={tech}
									className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-500/50 transition-colors"
								>
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-24 sm:mt-32 px-4 sm:px-0">
						<a href="#work" className="group relative inline-flex items-center justify-center">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
							<span className="relative px-6 sm:px-8 py-3 bg-white rounded-full inline-flex items-center justify-center w-full sm:w-auto">
								View My Work
								<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</span>
						</a>
						<a
							href="#contact"
							className="px-6 sm:px-8 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors border border-gray-200 hover:border-gray-300 text-center"
						>
							Get in Touch
						</a>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
						{[
							{ name: 'GitHub', icon: '👩‍💻', href: 'https://github.com/KhushiGusain', position: 'top-40 right-1/3', delay: '2s' },
							{ name: 'WhatsApp', icon: '💬', href: 'https://wa.me/918076592250', position: 'bottom-20 right-1/4', delay: '3s' },
						].map((social) => (
							<a 
								key={social.name} 
								href={social.href} 
								className={`absolute ${social.position} animate-float-slow opacity-40 hover:opacity-80 transition-opacity duration-300 group`} 
								style={{ animationDelay: social.delay }}
								aria-label={social.name}
							>
								<span className="text-4xl group-hover:scale-110 transition-transform duration-300 inline-block">{social.icon}</span>
							</a>
						))}
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
				<span className="text-gray-600 text-sm mb-2 text-center">Scroll to explore</span>
				<svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</div>
	);
};
