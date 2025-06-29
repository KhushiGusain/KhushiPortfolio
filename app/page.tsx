import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { TechStackCarousel } from './components/TechStackCarousel';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './components/ThemeProvider';

export default function WebDeveloperPortfolio() {
	return (
		<ThemeProvider>
			<div className="relative min-h-screen">
				{/* Background Effects */}
				<div className="fixed inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
				<div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent dark:from-blue-400/5 -z-10" />
				<div className="fixed inset-0 bg-grid-pattern opacity-5 dark:opacity-10 -z-10" />
				
				{/* Main Content */}
				<Navbar />
				<main className="relative">
					<div id="home" className="scroll-mt-20">
						<HeroSection />
					</div>
					<div id="skills" className="scroll-mt-20">
						<SkillsSection />
					</div>
					<div id="work" className="scroll-mt-20">
						<ProjectsSection />
					</div>
					<div className="scroll-mt-20">
						<TechStackCarousel />
					</div>
					<div id="contact" className="scroll-mt-20">
						<ContactSection />
					</div>
				</main>

				{/* Footer */}
				<footer className="py-12 bg-[#F5F5F4] dark:bg-gray-900 border-t border-[#EBE8DB] dark:border-gray-700">
					<div className="max-w-6xl mx-auto px-6 lg:px-8">
						<div className="text-center">
							<div className="w-16 h-0.5 bg-gradient-to-r from-[#B03052] to-[#3D0301] mx-auto rounded-full mb-6"></div>
							<p className="text-[#3D0301] dark:text-gray-300 font-medium">
								© {new Date().getFullYear()} Khushi Gusain. All rights reserved.
							</p>
							<p className="text-[#3D0301]/70 dark:text-gray-400 text-sm mt-2">
								Built with passion and modern web technologies
							</p>
						</div>
					</div>
				</footer>
			</div>
		</ThemeProvider>
	);
}
