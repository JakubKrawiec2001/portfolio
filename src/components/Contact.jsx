import { useGSAP } from "@gsap/react";
import lines from "/icons/bordered-lines.svg";
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
		<>
			<img id="borderedLines" src={lines} alt="" className="w-[40%]" />
			<div ref={contactRef} className="flex flex-col items-center gap-8">
				<span
					id="hireMe"
					className="text-4xl text-custom-white font-bitx uppercase opacity-50">
					hire me
				</span>
				<h2
					id="contactHeading"
					className="text-custom-white uppercase text-7xl">{`let's talk`}</h2>
				<p
					id="mail"
					className="text-custom-white text-8xl uppercase font-satoshi-regular">
					kubakrawieckk04@gmail.com
				</p>
			</div>
			;
		</>
	);
};

export default Contact;
