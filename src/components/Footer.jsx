const Footer = () => {
	return (
		<div className="relative bg-custom-blue text-custom-white font-bitx min-h-[10vh] flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between items-center py-6 px-4 2lg:px-12">
			<p className="text-xl">+48 790-254-380</p>
			<div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 uppercase">
				<a
					href="https://www.linkedin.com/in/jakub-krawiec-8b9a6b268/"
					target="_blank"
					rel="noreferrer"
					className="hover:text-white transition-colors text-xl">
					linkedin
				</a>
				<a
					href="https://github.com/JakubKrawiec2001"
					target="_blank"
					rel="noreferrer"
					className="hover:text-white transition-colors text-xl">
					github
				</a>
				<a
					href="/files/resume.pdf"
					target="_blank"
					rel="noreferrer"
					className="hover:text-white transition-colors text-xl">
					resume
				</a>
			</div>
		</div>
	);
};

export default Footer;
