import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Khushi Gusain - Full Stack Developer',
	description:
		'Student | Full Stack Developer | Innovator. Currently pursuing education at Bennett University, crafting modern web experiences with creativity and innovation.',
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-icon.png',
	},
	keywords: [
		'Full Stack Developer',
		'Web Developer',
		'React Developer',
		'Next.js',
		'JavaScript',
		'TypeScript',
		'HTML5',
		'CSS3',
		'Responsive Design',
		'UI/UX',
		'Web Accessibility',
		'Performance Optimization',
		'Modern Web Development',
		'Progressive Web Apps',
		'Khushi Gusain',
	],
	authors: [{ name: 'Khushi Gusain' }],
	creator: 'Khushi Gusain',
	openGraph: {
		title: 'Khushi Gusain - Full Stack Developer Portfolio',
		description: 'Student | Full Stack Developer | Innovator. Passionate about crafting modern and engaging digital experiences.',
		url: 'https://khushigusain.dev',
		siteName: 'Khushi Gusain - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Khushi Gusain - Full Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Khushi Gusain - Full Stack Developer',
		description: 'Student | Full Stack Developer | Innovator. Passionate about crafting modern and engaging digital experiences.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
