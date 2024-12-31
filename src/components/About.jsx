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
	useGSAP(() => {
		gsap.fromTo(
			"#aboutText",
			{
				x: 300,
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: "#aboutText",
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
				stagger: 1,
				duration: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: firstAboutTextRef.current,
					start: "+=300 bottom",
					end: "bottom +=300",
					scrub: true,
				},
			}
		);

		const animationTwo = gsap.fromTo(
			secondAboutTextRef.current,
			{ opacity: 0.2 },
			{
				opacity: 1,
				stagger: 0.2,
				duration: 1,
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
			animationOne.revert();
			animationTwo.revert();
		};
	}, []);

	return (
		<div
			id="about"
			className="flex flex-col gap-16 md:gap-28 mt-[8em] md:mt-[12em] pb-28">
			<div className="flex flex-col md:flex-row gap-16 md:gap-0 justify-between items-start">
				<div className="flex gap-6 items-start md:w-[70%] 2lg:w-[60%] order-1 md:order-0">
					<img src={squares1} alt="" className="w-[50px] mt-3" />

					<div className="md:w-[70%] 2lg:w-full leading-10">
						{`I'm a passionate frontend developer with a love for creating beautiful, functional, and responsive web applications. Constantly learning, experimenting, and pushing my skills to the next level. I've successfully completed multiple projects, allowing me to gain
            hands-on experience in technologies like React, Next.js, JavaScript,
            and TypeScript.`
							.split(" ")
							.map((word, index) => (
								<span
									ref={(el) => (firstAboutTextRef.current[index] = el)}
									key={index}
									className="text-lg 2lg:text-2xl font-satoshi-medium text-custom-black uppercase">
									{word}{" "}
								</span>
							))}
					</div>
				</div>
				<h2
					id="aboutHeading"
					className="text-custom-black uppercase text-4xl xs:text-5xl xl:text-6xl 2xl:text-7xl order-0 md:order-1">
					about me
				</h2>
			</div>
			<div className="flex flex-col md:flex-row gap-16 md:gap-0 justify-between items-start">
				<div className="flex flex-col gap-2">
					<AnimatedText
						trigger="#aboutTrigger"
						title="Responsive design"
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
				<div className="flex gap-6 items-start md:w-[50%]" id="aboutText">
					<img src={squares2} alt="" className="md:w-[50px] mt-3" />
					<p className="text-2xl font-satoshi-regular text-custom-black leading-10 ">
						{`My main goal is to grow as a Frontend Developer by gaining new skills and experience with large and interesting projects. I would like to learn from experienced developers, expanding my knowledge and skills. In the future, I dream of reaching a level that will allow me to work as a Fullstack Developer, and I would also like to explore React Native to develop mobile applications.`}
					</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-16 md:gap-0 justify-between items-center md:items-end">
				<div className="flex gap-6 items-start md:w-[70%]">
					<img src={squares1} alt="" className="w-[50px] mt-3" />

					<div className="md:w-[70%] leading-10">
						{`I love the constant challenge and the fact that programming gives you the opportunity to create something from nothing - filling a blank page with code. I want to constantly develop myself, discover new technologies and implement projects that will be a new challenge for me.`
							.split(" ")
							.map((word, index) => (
								<span
									ref={(el) => (secondAboutTextRef.current[index] = el)}
									key={index}
									className="text-2xl font-satoshi-medium text-custom-black uppercase">
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
