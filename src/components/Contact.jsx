import { useGSAP } from "@gsap/react";
import lines from "/images/bordered-lines.svg";
import gsap from "gsap";
import { useRef } from "react";

const Contact = () => {
	const contactRef = useRef();

	useGSAP(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: contactRef.current,
				start: "center bottom",
			},
		});

		timeline.fromTo(
			"#hireMe",
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 0.5,
				duration: 0.3,
				ease: "circ.inOut",
			}
		);
		timeline.fromTo(
			"#contactHeading",
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.3,
				ease: "circ.inOut",
			}
		);

		timeline.fromTo(
			"#mail",
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 0.3,
				ease: "circ.inOut",
			}
		);
		timeline.fromTo(
			"#borderedLines",
			{ opacity: 0, x: -300 },
			{
				opacity: 1,
				x: 0,
				duration: 0.5,
				ease: "circ.inOut",
			}
		);
	});
	return (
		<div
			id="contact"
			className="md:relative bg-custom-black 2lg:min-h-[90vh] flex flex-col justify-center gap-12 md:gap-24 z-20 pt-8 xs:pt-12 lg:pt-16 2lg:pt-0 md:py-12 px-4 2lg:px-12">
			<img
				id="borderedLines"
				src={lines}
				alt=""
				className="md:w-[60%] 2lg:w-[50%] 2xl:w-[40%]"
			/>
			<div
				ref={contactRef}
				className="flex flex-col items-center gap-3 md:gap-8">
				<span
					id="hireMe"
					className="md:text-4xl text-custom-white font-bitx uppercase opacity-50">
					hire me
				</span>
				<h2
					id="contactHeading"
					className="text-custom-white uppercase text-3xl xs:text-4xl xl:text-6xl 2xl:text-7xl">{`let's talk`}</h2>
				<p
					id="mail"
					className="text-custom-white xs:text-2xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl uppercase font-satoshi-regular">
					kubakrawieckk04@gmail.com
				</p>
			</div>
			;
		</div>
	);
};

export default Contact;
