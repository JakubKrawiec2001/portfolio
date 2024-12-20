import arrow from "/icons/arrow.svg";

const CustomLink = () => {
  return (
    <a href="#" className="group flex gap-4">
      <div className="flex flex-col gap-1 group-hover:gap-0 transition-all">
        <p className="text-custom-black uppercase font-bitx text-3xl group-hover:text-custom-blue transition-colors">
          github repo
        </p>
        <div className="bg-custom-black w-full h-[3px] group-hover:bg-custom-blue transition-colors" />
      </div>
      <img src={arrow} alt="" className="w-[30px]" />
    </a>
  );
};

export default CustomLink;
