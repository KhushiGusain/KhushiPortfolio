"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Get all sections
            const sections = ['home', 'skills', 'work', 'contact'];
            const scrollPosition = window.scrollY + 100; // Offset for navbar height
            
            // Find which section is currently in view
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Projects', href: '#work', id: 'work' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 py-2 sm:py-4">
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={
                    `w-full max-w-6xl rounded-2xl sm:rounded-3xl border border-[#EBE8DB] dark:border-gray-700 ` +
                    `bg-white dark:bg-gray-900 shadow-xl ` +
                    `transition-all duration-300`
                }
            >
                <div className="px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            className="flex items-center space-x-2 sm:space-x-3 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Logo Icon */}
                            <div className="relative">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#B03052] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#B03052] group-hover:to-[#3D0301]">
                                    {/* Modern code/dev icon */}
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                                    </svg>
                                </div>
                                {/* Accent dot */}
                                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#D76C82] rounded-full shadow-md animate-pulse"></div>
                            </div>
                            {/* Logo Text */}
                            <div className="flex flex-col justify-center">
                                <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#B03052] to-[#3D0301] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-dancing-script)' }}>
                                    Khushi Gusain
                                </span>
                                <span className="text-[8px] sm:text-[10px] font-medium tracking-widest uppercase text-[#3D0301] dark:text-gray-300 mt-0.5" style={{ fontFamily: 'var(--font-inter)' }}>
                                    Software Developer
                                </span>
                            </div>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className={`text-[#3D0301] dark:text-gray-300 hover:text-[#B03052] dark:hover:text-[#D76C82] transition-colors relative group focus:outline-none focus:ring-2 focus:ring-[#B03052] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 px-1.5 py-2 rounded font-medium flex items-center justify-center min-h-[44px] ${activeSection === item.id ? 'text-[#B03052] dark:text-[#D76C82]' : ''}`}
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#B03052] to-[#3D0301] transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#B03052] text-white font-bold shadow-lg border border-[#B03052] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B03052] hover:to-[#3D0301] focus:outline-none focus:ring-2 focus:ring-[#B03052] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 hover:scale-105 hover:shadow-xl text-sm sm:text-base flex items-center justify-center min-h-[44px]"
                                style={{ fontFamily: 'var(--font-inter)' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get in Touch
                            </motion.a>
                            {/* Theme Toggle Button */}
                            <motion.button
                                onClick={toggleTheme}
                                className="ml-2 sm:ml-4 p-2 sm:p-2.5 rounded-full border border-[#EBE8DB] dark:border-gray-700 bg-white dark:bg-gray-800 shadow transition-all duration-300 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#B03052]/10 hover:to-[#3D0301]/10 dark:hover:from-[#D76C82]/10 dark:hover:to-[#B03052]/10 focus:outline-none focus:ring-2 focus:ring-[#B03052] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 min-h-[44px] min-w-[44px]"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#B03052]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#3D0301]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                                    </svg>
                                )}
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-[#EBE8DB] dark:hover:bg-gray-700 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6 text-[#B03052]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-[#EBE8DB]/80 dark:border-gray-700/80"
                        >
                            <div className="px-4 sm:px-6 py-3 sm:py-4 space-y-3 sm:space-y-4">
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        className={`block text-[#3D0301] dark:text-gray-300 hover:text-[#B03052] dark:hover:text-[#D76C82] transition-colors font-medium text-sm sm:text-base py-2 px-3 rounded-lg hover:bg-[#EBE8DB]/50 dark:hover:bg-gray-700/50 ${activeSection === item.id ? 'text-[#B03052] dark:text-[#D76C82] bg-[#EBE8DB]/30 dark:bg-gray-700/30' : ''}`}
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                        whileHover={{ x: 10 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                                <motion.a
                                    href="#contact"
                                    className="block px-4 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#B03052] text-white text-center font-bold hover:bg-gradient-to-r hover:from-[#B03052] hover:to-[#3D0301] transition-all shadow-lg text-sm sm:text-base"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get in Touch
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}; 