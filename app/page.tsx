"use client";

import { Canvas } from "@react-three/fiber";

export default function Home() {
	return (
		<>
			<div className="absolute top-0 left-0 -z-10 h-full w-full">
				<Canvas>
					<ambientLight intensity={0.1} />
					<directionalLight color="purple" position={[0, 0, 5]} />
					<mesh>
						<boxGeometry />
						<meshStandardMaterial />
					</mesh>
				</Canvas>
			</div>
			<div className="h-screen grid place-items-center">
				<h1 className="text-6xl tracking-wide">
					project<span className="text-purple-400">amethyst</span>
				</h1>
			</div>
		</>
	);
}
