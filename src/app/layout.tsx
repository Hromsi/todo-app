import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
	title: 'Todo app',
	description: 'Todo list application',
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={inter.className}>{children}</body>
			{/* <script src="https://cdn.jsdelivr.net/npm/bubbly-bg@1.0.0/dist/bubbly-bg.js"></script> */}
		</html>
	);
}
