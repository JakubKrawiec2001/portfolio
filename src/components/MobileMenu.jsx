import { useState } from "react";
import { navLinks } from "../constansts";
import arrow from "/icons/arrow.svg";

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="flex justify-between items-center md:hidden fixed w-full left-0 top-0 py-3 px-4 z-50 bg-white">
				<div>
					<p className="font-satoshi-black text-custom-blue text-xl">Krawiec</p>
					<p className="text-custom-black font-bitx text-sm">BASED IN POLAND</p>
				</div>
				<div className="flex items-center gap-2 border-[1px] border-custom-black py-1 px-2">
					<svg
						width="64"
						height="64"
						viewBox="0 0 64 64"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="size-[20px]">
						<g>
							<path
								d="M21.3333 -8.51787e-08L0 0L8.51787e-08 21.3333L21.3333 21.3333L21.3333 -8.51787e-08Z"
								fill="#222222"
							/>
							<path
								d="M21.3333 42.667L0 42.667L8.51787e-08 64.0003L21.3333 64.0003L21.3333 42.667Z"
								fill="#222222"
							/>
							<path
								d="M63.9993 -8.51787e-08L42.666 0L42.666 21.3333L63.9993 21.3333L63.9993 -8.51787e-08Z"
								fill="#222222"
							/>
							<path
								d="M42.6673 21.333L21.334 21.333L21.334 42.6663L42.6673 42.6663L42.6673 21.333Z"
								fill="#222222"
							/>
						</g>
						<defs>
							<clipPath id="clip0_467_2">
								<rect width="64" height="64" fill="white" />
							</clipPath>
						</defs>
					</svg>

					<button
						onClick={() => setIsOpen((prev) => !prev)}
						className="text-custom-black font-bitx uppercase text-lg">
						{isOpen ? "close" : "menu"}
					</button>
				</div>
			</div>
			<div
				className={`${
					isOpen ? "translate-y-0" : "-translate-y-full"
				} transition-transform duration-300 fixed inset-0 bg-white flex md:hidden flex-col justify-end gap-10 xs:gap-12 h-[100dvh] px-4 2lg:px-12 pb-12 z-40`}
				onClick={() => setIsOpen(false)}>
				{navLinks.map((link) => {
					return (
						<a
							key={link.id}
							href={link.path}
							className="flex items-center gap-4 xs:gap-6">
							<img src={arrow} alt="" className="w-[25px] xs:w-[30px]" />
							<div className="flex gap-2">
								<p className="text-3xl xs:text-4xl uppercase  text-custom-black font-satoshi-medium">
									{link.label}
								</p>
								<span className="font-bitx text-custom-black xs:text-lg opacity-50">
									0{link.id}
								</span>
							</div>
						</a>
					);
				})}
			</div>
		</>
	);
};

export default MobileMenu;
