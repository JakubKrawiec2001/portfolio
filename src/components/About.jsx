import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText";
import CustomLink from "./CustomLink";
import squares1 from "/icons/squares-1.svg";
import squares2 from "/icons/squares-2.svg";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const firstAboutTextRef = useRef([]);
	const secondAboutTextRef = useRef([]);

	useGSAP(() => {
		gsap.fromTo(
			"#aboutHeading",
			{
				x: 300,
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: "#aboutHeading",
					start: "bottom bottom",
				},
			}
		);
	});

	useEffect(() => {
		const animationOne = gsap.fromTo(
			firstAboutTextRef.current,
			{ opacity: 0.2 },
			{
				opacity: 1,
				stagger: 0.1,
				duration: 0.3,
				ease: "power1.out",
				scrollTrigger: {
					trigger: firstAboutTextRef.current,
					start: "bottom bottom",
					end: "center center",
					scrub: true,
				},
			}
		);

		const animationTwo = gsap.fromTo(
			secondAboutTextRef.current,
			{ opacity: 0.2 },
			{
				opacity: 1,
				stagger: 0.1,
				duration: 0.3,
				ease: "power1.out",
				scrollTrigger: {
					trigger: secondAboutTextRef.current,
					start: "top bottom",
					end: "center center",
					scrub: true,
				},
			}
		);

		return () => {
			animationOne.kill();
			animationTwo.kill();
		};
	}, []);

	return (
		<div className="flex flex-col gap-28 mt-[12em]">
			<div className="flex justify-between items-start">
				<div className="flex gap-6 items-start w-[70%]">
					<img src={squares1} alt="" className="w-[50px] mt-3" />

					<div className="w-[70%]">
						{`I'm a passionate frontend developer with a love for creating beautiful, functional, and responsive web applications. Constantly learning, experimenting, and pushing my skills to the next level.`
							.split(" ")
							.map((word, index) => (
								<span
									ref={(el) => (firstAboutTextRef.current[index] = el)}
									key={index}
									className="text-2xl font-satoshi-medium text-custom-black uppercase leading-10">
									{word}{" "}
								</span>
							))}
					</div>
				</div>
				<h2 id="aboutHeading" className="text-custom-black uppercase text-7xl">
					about me
				</h2>
			</div>
			<div className="flex justify-between items-start">
				<div className="flex flex-col gap-2">
					<AnimatedText
						trigger="#aboutTrigger"
						title="Solid"
						containerClass="font-bitx uppercase text-2xl"
						duration={0.1}
					/>
					<AnimatedText
						trigger="#aboutTrigger"
						title={`Don’t Repeat Yourself`}
						containerClass="font-bitx uppercase text-2xl"
						duration={0.1}
					/>
					<AnimatedText
						trigger="#aboutTrigger"
						title="Keep It Simple, Stupid"
						containerClass="font-bitx uppercase text-2xl"
						duration={0.1}
					/>
				</div>
				<div className="flex gap-6 items-start w-[50%]">
					<img src={squares2} alt="" className="w-[50px] mt-3" />
					<p className="text-2xl font-satoshi-regular text-custom-black leading-10 ">
						{`I've successfully completed multiple projects, allowing me to gain
            hands-on experience in technologies like React, Next.js, JavaScript,
            and TypeScript. Every project I undertake is built with a commitment
            to clean, maintainable code and a focus on delivering an outstanding
            user experience.`}
					</p>
				</div>
			</div>
			<div className="flex justify-between items-end">
				<div className="flex gap-6 items-start w-[70%]">
					<img src={squares1} alt="" className="w-[50px] mt-3" />

					<div className="w-[70%]">
						{`I'm a passionate frontend developer with a love for creating beautiful, functional, and responsive web applications. Constantly learning, experimenting, and pushing my skills to the next level.`
							.split(" ")
							.map((word, index) => (
								<span
									ref={(el) => (secondAboutTextRef.current[index] = el)}
									key={index}
									className="text-2xl font-satoshi-medium text-custom-black uppercase leading-10">
									{word}{" "}
								</span>
							))}
					</div>
				</div>
				<CustomLink
					label="github repo"
					link="https://github.com/JakubKrawiec2001"
					containerClass="text-custom-black"
					lineClass="bg-custom-black"
				/>
			</div>
		</div>
	);
};

export default About;
