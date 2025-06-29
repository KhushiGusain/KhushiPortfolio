"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
	return (
		<section id="contact" className="py-20 px-4 scroll-mt-20 bg-white dark:bg-gray-900">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center px-4 sm:px-6 mb-16"
				>
					<h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#B03052] to-[#3D0301] bg-clip-text text-transparent">
						Let&apos;s Build Something Amazing
					</h2>
					<div className="w-16 h-0.5 bg-gradient-to-r from-[#B03052] to-[#3D0301] mx-auto rounded-full mb-6"></div>
					<p className="text-lg text-[#3D0301] dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
						Looking for a developer who can create high-performance, interactive web experiences? Let&apos;s connect and bring your ideas to life.
					</p>

					{/* Location Card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#F5F5F4] dark:bg-gray-800 border border-[#EBE8DB] dark:border-gray-700 rounded-xl text-[#3D0301] dark:text-gray-300 mb-12 shadow-sm hover:shadow-md transition-all duration-300"
					>
						<svg className="w-5 h-5 text-[#B03052]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span className="font-medium">Bennett University, Greater Noida</span>
					</motion.div>

					{/* Contact Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
					>
						<a
							href="mailto:gusainkhushii@gmail.com"
							className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold transition-all duration-300 ease-out rounded-xl shadow-lg bg-[#B03052] text-white hover:bg-gradient-to-r hover:from-[#B03052] hover:to-[#3D0301] hover:scale-105 hover:shadow-xl"
						>
							<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-[#3D0301] to-[#B03052] group-hover:translate-x-0 ease">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
							</span>
							<span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Get in Touch</span>
							<span className="relative invisible">Get in Touch</span>
						</a>
						<a
							href="https://drive.google.com/file/d/1N99Uvc-HKfvduIA9falCt_Dpwb3nxbTf/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold transition-all duration-300 ease-out rounded-xl shadow-lg bg-white dark:bg-gray-800 border-2 border-[#EBE8DB] dark:border-gray-700 text-[#3D0301] dark:text-gray-300 hover:border-[#D76C82] dark:hover:border-[#D76C82] hover:bg-[#F5F5F4] dark:hover:bg-gray-700 hover:scale-105 hover:shadow-xl"
						>
							<span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#3D0301] dark:text-gray-300 duration-300 -translate-x-full bg-[#F5F5F4] dark:bg-gray-700 group-hover:translate-x-0 ease">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
										clipRule="evenodd"
									/>
									<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
								</svg>
							</span>
							<span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">View Resume</span>
							<span className="relative invisible">View Resume</span>
						</a>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="flex justify-center gap-6"
					>
						<a
							href="https://github.com/KhushiGusain"
							target="_blank"
							rel="noopener noreferrer"
							className="group p-4 bg-[#F5F5F4] dark:bg-gray-800 border border-[#EBE8DB] dark:border-gray-700 rounded-xl text-[#3D0301] dark:text-gray-300 hover:bg-[#B03052] hover:text-white hover:border-[#B03052] hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
						<a
							href="https://wa.me/918076592250"
							target="_blank"
							rel="noopener noreferrer"
							className="group p-4 bg-[#F5F5F4] dark:bg-gray-800 border border-[#EBE8DB] dark:border-gray-700 rounded-xl text-[#3D0301] dark:text-gray-300 hover:bg-[#B03052] hover:text-white hover:border-[#B03052] hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
								<path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
							</svg>
						</a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};
