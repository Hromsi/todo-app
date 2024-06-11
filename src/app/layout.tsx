import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/styles.scss';
import StoreProvider from '@/components/StoreProvider';
import BackgroundAnimation from '@/components/BackgroundAnimation/index';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
	title: 'Приложение для задач',
	description: 'Простое приложение для управления списком задач.',
	icons: {
		icon: '/todo.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<StoreProvider>
				<body className={inter.className} suppressHydrationWarning={true}>
					{children}
					<BackgroundAnimation/>
				</body>
			</StoreProvider>
		</html>
	);
}
