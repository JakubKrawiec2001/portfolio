import squaresWhite from "/icons/squares-3-white.svg";
import squaresBlack from "/icons/squares-3-black.svg";
import lines from "/icons/lines.svg";
import { projects } from "../constansts";
import CustomLink from "./CustomLink";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	const projectsSectionRef = useRef(null);
	const projectsContainerRef = useRef(null);
	const projectsCurrentElementRef = useRef([]);

	useGSAP(() => {
		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: "#projects",
				start: "center center",
				end: "+=800 center",
				scrub: 0.5,
				pin: true,
				pinSpacing: true,
			},
		});

		clipAnimation.fromTo(
			projectsSectionRef.current,
			{
				clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
				borderRadius: "0% 0% 40% 10%",
			},
			{
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				borderRadius: "0% 0% 0% 0%",
				width: "100vw",
				height: "100vh",
			}
		);
	});

	useGSAP(() => {
		gsap.to(".main-projects", {
			x: "-150%",
			scrollTrigger: {
				trigger: projectsContainerRef.current,
				start: "center center",
				end: "bottom top",
				scrub: 0.5,
			},
		});
	});

	useGSAP(() => {
		gsap.to(projectsCurrentElementRef.current, {
			xPercent: -120 * (projectsCurrentElementRef.current.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: projectsContainerRef.current,
				start: "top +=50",
				end: "+=" + projectsContainerRef.current.offsetWidth,
				scrub: 0.5,
				pin: true,
				anticipatePin: 1,
			},
		});
		return () => {
			ScrollTrigger.getAll().forEach((st) => st.kill());
		};
	});
	return (
		<div className="overflow-x-hidden md:mt-[6em]">
			<div id="projects" className="relative h-[80vh]">
				<div className="flex items-center justify-center gap-2 md:gap-6 absolute top-20 left-1/2 -translate-x-1/2">
					<img
						src={squaresBlack}
						alt=""
						className="size-[40px] md:size-[60px]"
					/>
					<h2 className="text-custom-black uppercase text-4xl xs:text-5xl xl:text-6xl 2xl:text-7xl">
						Projects
					</h2>
				</div>
				<div
					ref={projectsSectionRef}
					className="bg-custom-black absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden px-4 2lg:px-12 py-12 md:py-24">
					<div className="flex items-center justify-center gap-2 md:gap-6 absolute top-20 left-1/2 -translate-x-1/2">
						<img
							src={squaresWhite}
							alt=""
							className="size-[40px] md:size-[60px]"
						/>
						<h2 className="text-custom-white uppercase text-4xl xs:text-5xl xl:text-6xl 2xl:text-7xl">
							Projects
						</h2>
					</div>
				</div>
			</div>

			<div
				className="bg-custom-black px-4 2lg:px-12 hidden 2lg:flex items-center flex-nowrap space-x-10 min-h-screen"
				ref={projectsContainerRef}>
				<div className="main-projects">
					<h2 className="text-custom-white uppercase text-4xl xs:text-5xl xl:text-6xl 2xl:text-7xl">
						Main Projects
					</h2>
					<CustomLink
						label="more projects"
						link="https://github.com/JakubKrawiec2001"
						containerClass="text-custom-white mt-6"
						lineClass="bg-custom-white"
					/>
				</div>
				{projects.map((project, index) => {
					return (
						<div
							ref={(el) => (projectsCurrentElementRef.current[index] = el)}
							key={project.id}
							className="flex flex-col gap-[4em] p-[3em] relative bg-black rounded-[50px] overflow-hidden w-[80vw] shrink-0">
							<div className="absolute bottom-[10%] left-1/2 translate-x-[-50%] bg-white blur-[100px]  opacity-30 size-[50%] rounded-full" />

							<div className="flex justify-between items-start">
								<div className="flex flex-col gap-4">
									<h3 className="text-custom-white text-4xl">
										<span className="text-custom-white opacity-50 font-bitx">
											#0{index + 1}
										</span>{" "}
										{project.label}
									</h3>
									<div className="flex flex-wrap content-center gap-x-8 gap-y-4 xl:w-[80%] mt-6">
										{project.tech.map((item, i) => {
											return (
												<p
													key={i}
													className="uppercase font-bitx text-custom-white text-xl">
													{item}
												</p>
											);
										})}
									</div>
								</div>
								<img src={lines} alt="" className="w-[30%]" />
							</div>
							<div className="flex justify-start relative">
								<img
									src={project.img}
									alt=""
									className="2lg:w-[60%] object-contain rounded-[5px] shadow-lg"
								/>
								<div className="absolute bottom-0 right-0">
									<CustomLink
										label="live website"
										link={project.link}
										containerClass="text-custom-white"
										lineClass="bg-custom-white"
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="bg-custom-black px-4 2lg:px-12 flex 2lg:hidden flex-col gap-6">
				<div className="main-projects mb-6">
					<h2 className="text-custom-white uppercase text-4xl xs:text-5xl xl:text-6xl 2xl:text-7xl">
						Main Projects
					</h2>
					<CustomLink
						label="more projects"
						link="https://github.com/JakubKrawiec2001"
						containerClass="text-custom-white mt-6"
						lineClass="bg-custom-white"
					/>
				</div>
				{projects.map((project, index) => {
					return (
						<div
							key={project.id}
							className="flex flex-col gap-[4em] p-[2.2em] md:p-[3em]  relative bg-black rounded-[20px] overflow-hidden">
							<div className="absolute bottom-[10%] left-1/2 translate-x-[-50%] bg-white blur-[100px]  opacity-30 size-[50%] rounded-full" />

							<div className="flex flex-col gap-6 md:gap-8">
								<h3 className="text-custom-white text-3xl md:text-4xl">
									<span className="text-custom-white opacity-50 font-bitx">
										#0{index + 1}
									</span>{" "}
									{project.label}
								</h3>
								<div className="flex flex-wrap content-center gap-x-4 md:gap-x-8 gap-y-4">
									{project.tech.map((item, i) => {
										return (
											<p
												key={i}
												className="uppercase font-bitx text-custom-white md:text-xl">
												{item}
											</p>
										);
									})}
								</div>
							</div>
							<div className="flex flex-col justify-center gap-8 relative">
								<img
									src={project.img}
									alt=""
									className="object-contain rounded-[5px] shadow-lg"
								/>
								<CustomLink
									label="live website"
									link={project.link}
									containerClass="text-custom-white"
									lineClass="bg-custom-white"
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
