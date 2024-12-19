import FramedText from "./FramedText";
import blueSquares from "/icons/blue-squares.svg";
import avatar from "/images/avatar.png";

const Hero = () => {
  return (
    <div className="h-dvh flex flex-col justify-end relative gap-16">
      <div className="flex items-end gap-4 absolute top-[40%] right-0 rotate-[-90deg] translate-x-[40%] translate-y-[-50%]">
        <div className="flex items-center gap-2 opacity-30 mb-1">
          <div className="bg-custom-black w-[10px] h-[5px]" />
          <div className="bg-custom-black w-[10px] h-[5px]" />
          <div className="bg-custom-black w-[10px] h-[5px]" />
        </div>
        <p className="font-bitx uppercase text-custom-black opacity-40 md:text-xl 2xl:text-2xl leading-7">
          welcome to <br /> my portfolio 2024
        </p>
      </div>
      <div className="bg-custom-gray relative w-[40%] h-[35%] flex justify-end translate-x-[-10%] rounded-2xl">
        <p className="absolute text-custom-black opacity-40 font-bitx left-[10%] top-[-10%] text-2xl">
          WEB DEVELOPMENT...
        </p>
        <img
          src={avatar}
          alt="Jakub Krawiec"
          className="w-[50%] object-contain absolute bottom-0 right-8"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-end mx-4 mb-[-1.8em]">
          <div>
            <img
              src={blueSquares}
              alt="blue squares"
              className="mb-[0.5em] 2lg:w-[40px]"
            />
            <p className="font-bitx uppercase md:text-5xl 2xl:text-6xl">
              Hello World
            </p>
          </div>
          <FramedText />
        </div>
        <h1 className="md:text-[6.2vw] xl:text-[6.3vw] 2xl:text-[6.4vw] font-medium">
          FRONTEND DEVELOPER
        </h1>
      </div>
    </div>
  );
};

export default Hero;
