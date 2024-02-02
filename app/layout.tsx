import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "project amethyst",
	description: "saving lives, one world at a time",
	openGraph: {
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
