"use client"
import { socialMedia } from "@/data";
import Image from "next/image";
import React from "react";

const Contact = () => {
		return (
			<div className="w-full p-5 md:px-36 px-8" id="contact">
				<div className="flex md:flex-row flex-col justify-between items-center">
					<p className="md:text-base text-sm md:font-normal font-light">
						Copyright © 2024 Priyanka Chikhale.
					</p>
					<div className="flex items-center md:gap-3 gap-6 mt-2">
						{socialMedia.map((profile) => (
							<div
								key={profile.id}
								className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-[#0f03145e] rounded-lg border border-black-300 mt-2"
							>
								<Image
									src={profile.img}
									alt={profile.img}
									width={20}
									height={20}	
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	};

	export default Contact;
