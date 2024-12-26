import arrow from "/icons/arrow.svg";

const CustomLink = ({ label, link, containerClass, lineClass }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={`group flex gap-4 ${containerClass}`}>
			<div className="flex flex-col gap-1 group-hover:gap-0 transition-all">
				<p className="uppercase font-bitx text-3xl group-hover:text-custom-blue transition-colors">
					{label}
				</p>
				<div
					className={`w-full h-[3px] group-hover:bg-custom-blue transition-colors ${lineClass}`}
				/>
			</div>
			<img src={arrow} alt="" className="w-[30px]" />
		</a>
	);
};

export default CustomLink;
