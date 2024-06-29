"use client"

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./3d-pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
	return (
		<div className="py-20" id="projects">
			<h1 className="text-3xl md:text-5xl lg:text-6xl text-center">
				Here&apos;s a glimpse of some recent projects
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
				{projects.map(({ id, title, des, img, iconLists, link }) => (
					<div
						key={id}
						className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
					>
						<PinContainer title={link} href={link}>
							<div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
								<div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
									<Image src="/bg.png" alt="bg-img" fill />
								</div>
								<div>
									<Image
										src={img}
										alt={title}
										fill
										className="z-10 absolute bottom-0"
									/>
								</div>
							</div>
							<h1 className="md:text-xl text-base line-clamp-1">
								{title}
							</h1>
							<p className="lg:text-base font-light sm:text-sm text-[0.60rem] line-clamp-2 mt-2">
								{des}
							</p>
							<div className="flex items-center justify-between mt-7 mb-3">
								<div className="flex items-center">
									{iconLists.map((icon, index) => (
										<div
											key={(icon)}
											className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
											style={{ transform: `translateX(-${5 * index * 2}px)` }}
										>
											<Image
												src={icon}
												alt={icon}
												width={100}
												height={100}
												className="p-2"
											/>
										</div>
									))}
								</div>

                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-base md:text-sm text-xs text-[#d3fff6]">Check Live Site</p>
                                    <FaLocationArrow className="ms-3" color="#fff" />
                                </div>
							</div>
						</PinContainer>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentProjects;
