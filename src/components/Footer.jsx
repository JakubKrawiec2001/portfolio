const Footer = () => {
	return (
		<div className="relative bg-custom-blue text-custom-white font-bitx min-h-[10vh] flex justify-between items-center py-6 px-4 2lg:px-12">
			<p className="text-xl">+48 790-254-380</p>
			<div className="flex items-center gap-12 uppercase">
				<a href="#" className="hover:text-white transition-colors text-xl">
					linkedin
				</a>
				<a href="#" className="hover:text-white transition-colors text-xl">
					github
				</a>
				<a href="#" className="hover:text-white transition-colors text-xl">
					resume
				</a>
			</div>
		</div>
	);
};

export default Footer;
