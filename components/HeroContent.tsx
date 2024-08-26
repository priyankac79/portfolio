"use client";

import React from "react";
import { motion } from "framer-motion";
import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex md:flex-row flex-col items-center justify-center md:px-20 w-screen z-[20] px-12"
		>
			<div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start text-sm md:text-base">
				<motion.div
					variants={slideInFromTop}
					className="Welcome-box p-3 border border-[#7042f88b] opacity-0.9"
				>
					<SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
					Welcome to My Portfolio
				</motion.div>

				<motion.div
					variants={slideInFromLeft(0.5)}
					className="flex flex-col mt-6 md:text-5xl lg:text-6xl text-white max-w-[600px] w-auto h-auto text-4xl"
					style={{ display: "inline-block" }}
				>
					Nice to meet you!{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf97ff] to-[#b8fbf7] leading-snug">
						I&apos;m Priyanka Chikhale.
					</span>
				</motion.div>

				<motion.p
					variants={slideInFromLeft(0.8)}
					className="lg:text-lg text-gray-200 my-5 max-w-[600px] text-xs md:text-base"
				>
					An aspiring front-end developer, passionate about crafting user
					interfaces that prioritize seamless user experiences.
				</motion.p>

				<div className="flex gap-4">
					<motion.div
						variants={slideInFromLeft(1)}
						className="py-2 px-4 button-primary lg:text-lg text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm"
					>
						<Link href="#projects">Show my work</Link>
					</motion.div>

					<motion.div
						variants={slideInFromLeft(1)}
						className="py-2 px-4 button-primary lg:text-lg text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm"
					>
						<a
							href="https://drive.google.com/file/d/1PwGljJNQuLhxzXah1awf181YMzF9wc_q/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							CV
						</a>
					</motion.div>
				</div>
			</div>

			<motion.div
				variants={slideInFromRight(0.8)}
				className="w-full h-full flex justify-center items-center pt-8 md:pt-0"
			>
				<Image
					src={"/mainIconsdark.svg"}
					alt="Work Icons"
					height={400}
					width={560}
				/>
			</motion.div>
		</motion.div>
	);
};

export default HeroContent;
