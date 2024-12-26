import squares from "/icons/squares-3-white.svg";
import bg from "/icons/project-bg.svg";
import lines from "/icons/lines.svg";
import { projects } from "../constansts";
import CustomLink from "./CustomLink";

const Projects = () => {
	return (
		<div className="mt-[12em] bg-custom-black min-h-[50vh]">
			<div className="px-4 2lg:px-12 py-24">
				<div className="flex items-center justify-center gap-6 mb-24">
					<img src={squares} alt="" className="size-[60px]" />
					<h2 className="text-custom-white uppercase text-7xl">Projects</h2>
				</div>
				{projects.map((project) => {
					return (
						<div
							key={project.id}
							className="flex flex-col gap-[6em] p-[4em]  relative bg-black rounded-[50px] overflow-hidden">
							<img
								src={bg}
								alt=""
								className="absolute w-full top-[-20%] right-0 blur-[130px] opacity-20 rotate-12"
							/>
							<div className="flex justify-between items-start">
								<div className="flex flex-col gap-4">
									<h3 className="text-custom-white text-6xl">
										{project.label}
									</h3>
									<div className="flex flex-wrap content-center gap-x-8 gap-y-4 w-[60%] mt-6">
										{project.tech.map((item, i) => {
											return (
												<p
													key={i}
													className="uppercase font-bitx text-custom-white text-2xl">
													{item}
												</p>
											);
										})}
									</div>
								</div>
								<img src={lines} alt="" />
							</div>
							<div className="flex justify-center gap-8 relative">
								<img
									src={project.img}
									alt=""
									className="w-[50%] object-contain"
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
		</div>
	);
};

export default Projects;
