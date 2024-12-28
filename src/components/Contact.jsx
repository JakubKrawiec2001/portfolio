import lines from "/icons/bordered-lines.svg";

const Contact = () => {
	return (
		<>
			<img src={lines} alt="" className="w-[40%]" />
			<div className="flex flex-col items-center gap-8">
				<span className="text-4xl text-custom-white font-bitx uppercase opacity-50">
					hire me
				</span>
				<h2 className="text-custom-white uppercase text-7xl">{`let's talk`}</h2>
				<p className="text-custom-white text-8xl uppercase font-satoshi-regular">
					kubakrawieckk04@gmail.com
				</p>
			</div>
			;
		</>
	);
};

export default Contact;
