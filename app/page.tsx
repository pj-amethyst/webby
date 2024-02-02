"use client";
import { animated } from "@react-spring/three";
import { useSpring, easings } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Koulen } from "next/font/google";

import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/Addons.js";

function Amethyst(props: any) {
	console.log(props);

	const fbx = useLoader(FBXLoader, "/source/Amethyst.fbx");
	return <primitive object={fbx} />;
}

const koulen = Koulen({
	weight: "400",
	subsets: ["latin"],
});

export default function Home() {
	const [canvasExists, setCanvasExists] = useState(false);

	const { rotate, scale } = useSpring({
		rotate: canvasExists ? (Math.PI * 3) / 2 : 0,
		scale: canvasExists ? 0.05 : 0,
		config: {
			duration: 2500,
			easing: easings.easeOutExpo,
		},
		onChange: (event) => {
			console.log(event);
		},
	});

	return (
		<>
			<div className="absolute top-0 left-0 opacity-75 -z-10 h-full w-full">
				<Canvas
					onCreated={(state) => {
						setCanvasExists(true);
					}}
				>
					<ambientLight intensity={2} />
					<animated.mesh
						rotation-y={rotate}
						scale={scale}
						position={[0, -2, 0]}
					>
						<Amethyst canvasExists />
					</animated.mesh>
				</Canvas>
			</div>
			{canvasExists && (
				<div className="h-screen grid place-items-center">
					<h1 className={"text-6xl " + koulen.className}>
						project
						<span className="text-purple-400 tracking-wide">
							amethyst
						</span>
					</h1>
				</div>
			)}
		</>
	);
}
