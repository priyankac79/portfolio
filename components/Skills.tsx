"use client";

import { Backend_skill, Frontend_skill, Other_skill } from "@/data";
import React from "react";
import SkillDataProvider from "./SkillDataProvider";

const Skills = () => {
	return (
		<section
			id="skills"
			className="flex flex-col items-center justify-center gap-4 h-full md:h-screen relative overflow-hidden pb-12"
			style={{ transform: "scale(0.9)" }}
		>
			<div className="text-center mx-auto text-3xl md:text-4xl lg:text-6xl mb-20">
				My Tech Stack
			</div>
			<div className="flex flex-row justify-around flex-wrap gap-5 items-center">
				{Frontend_skill.map((image, index) => (
					<SkillDataProvider
						key={index}
						src={image.Image}
						width={image.width}
						height={image.height}
						index={index}
					/>
				))}
			</div>
			<div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
				{Backend_skill.map((image, index) => (
					<SkillDataProvider
						key={index}
						src={image.Image}
						width={image.width}
						height={image.height}
						index={index}
					/>
				))}
			</div>
			<div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
				{Other_skill.map((image, index) => (
					<SkillDataProvider
						key={index}
						src={image.Image}
						width={image.width}
						height={image.height}
						index={index}
					/>
				))}
			</div>
		</section>
	);
};

export default Skills;
