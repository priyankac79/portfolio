import React from "react";
import { Spotlight } from "./ui/Spotlight";
import HeroContent from "./HeroContent";

const Hero = () => {
	return (
		<div className="relative flex flex-col h-full w-full pb-20 pt-32" id="about">
			<div className="max-w-7xl">
				<Spotlight
					className="-top-10 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="top-10 left-full h-[80vh] w-[50vw]"
					fill="purple"
				/>
				<Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="indigo" />
			</div>
			
				<HeroContent />
		</div>
	);
};

export default Hero;
