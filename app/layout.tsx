import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import StarsCanvas from "@/components/ui/StarBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
	title: "Priyanka's Portfolio",
	description: "Streamlined and Modern Developer Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} overflow-x-hidden`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<StarsCanvas />
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
