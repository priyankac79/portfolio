import React from "react";

const Navbar = () => {
	return (
		<div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
			<div className="w-full h-full flex flex-row items-center justify-center mx-auto px-[10px]">
				<div className="flex items-center justify-between border border-[#7042f861] bg-[#0f03145e] px-[20px] py-[10px] rounded-xl text-gray-100 space-x-7 md:space-x-14">
					<a href="#about" className="cursor-pointer">
						About
					</a>
					<a href="#skills" className="cursor-pointer">
						Skills
					</a>
					<a href="#projects" className="cursor-pointer">
						Projects
					</a>
					<a href="#contact" className="cursor-pointer">
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
