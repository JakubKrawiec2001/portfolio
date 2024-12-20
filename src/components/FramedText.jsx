import border1 from "/icons/border-1.svg";
import border2 from "/icons/border-2.svg";
import border3 from "/icons/border-3.svg";
import border4 from "/icons/border-4.svg";

const FramedText = () => {
  return (
    <div className="relative px-6 py-4 hidden 2lg:block">
      <img src={border1} alt="" className="absolute top-0 left-0" />
      <img src={border2} alt="" className="absolute bottom-0 left-0" />
      <img src={border3} alt="" className="absolute top-0 right-0" />
      <img src={border4} alt="" className="absolute bottom-0 right-0" />
      <p className="font-bitx uppercase text-custom-blue md:text-2xl 2xl:text-3xl">
        Ready to work
      </p>
    </div>
  );
};

export default FramedText;
