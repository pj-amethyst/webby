"use client";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="h-screen grid place-items-center">
			<motion.h1
				animate={{
					scale: 1,
				}}
				initial={{
					scale: 0,
				}}
				transition={{
					duration: 3,
					ease: "easeOut",
				}}
				className="text-4xl"
			>
				<span className="text-fuchsia-500">project</span>
				amethyst
			</motion.h1>
		</div>
	);
}
