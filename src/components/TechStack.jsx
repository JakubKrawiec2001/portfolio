import { useGSAP } from "@gsap/react";
import { techStack } from "../constansts";
import CustomLink from "./CustomLink";
import compass from "/icons/compass.svg";
import gsap from "gsap";
import { useRef } from "react";

const TechStack = () => {
	const techRef = useRef();

	useGSAP(() => {
		gsap.fromTo(
			"#techHeading",
			{ x: "-100%", opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 0.5,
				ease: "circ.inOut",
				scrollTrigger: {
					trigger: "#techHeading",
					start: "bottom bottom",
				},
			}
		);
		gsap.fromTo(
			"#techSectionOne",
			{ x: "100%", opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 0.5,
				delay: 0.5,
				ease: "circ.inOut",
				scrollTrigger: {
					trigger: "#techSectionOne",
					start: "bottom bottom",
				},
			}
		);

		gsap.fromTo(
			"#techSectionTwo",
			{ opacity: 0, x: "-100%" },
			{
				opacity: 1,
				x: 0,
				duration: 0.5,
				delay: 0.5,
				ease: "circ.inOut",
				scrollTrigger: {
					trigger: "#techSectionTwo",
					start: "bottom bottom",
				},
			}
		);
	});
	return (
		<>
			<div ref={techRef} className="flex justify-between items-center">
				<div
					id="techHeading"
					className="flex items-center justify-center gap-6">
					<img src={compass} alt="" className="size-[80px]" />
					<h2 className="text-custom-black uppercase text-7xl">tech stack</h2>
				</div>
				<CustomLink
					label="see more"
					link="https://github.com/JakubKrawiec2001"
					containerClass="text-custom-black"
					lineClass="bg-custom-black"
				/>
			</div>
			<div className="flex flex-col gap-10">
				<div className="h-[2px] w-full bg-custom-white" />
				<div id="techSectionOne" className="flex justify-between">
					{techStack.slice(0, 9).map((tech, i) => {
						return (
							<p
								key={i}
								className="font-satoshi-medium uppercase text-[2rem] text-custom-black">
								{tech}
							</p>
						);
					})}
				</div>
				<div className="h-[2px] w-full bg-custom-white" />
				<div id="techSectionTwo" className="flex justify-between">
					{techStack.slice(10, 17).map((tech, i) => {
						return (
							<p
								key={i}
								className="font-satoshi-medium uppercase text-[2rem] text-custom-black">
								{tech}
							</p>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default TechStack;
