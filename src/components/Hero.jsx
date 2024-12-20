import FramedText from "./FramedText";
import blueSquares from "/icons/blue-squares.svg";
import avatar from "/images/avatar.png";

const Hero = () => {
  return (
    <div className="h-dvh flex flex-col justify-end relative gap-20 xs:gap-28 lg:gap-36 2lg:gap-16 pb-4 md:pb-0">
      <div className="flex items-end gap-4 lg:gap-6 2lg:gap-4 absolute top-[40%] right-0 rotate-[-90deg] translate-x-[40%] translate-y-[-50%]">
        <div className="flex items-center gap-2 opacity-30 mb-1">
          <div className="bg-custom-black w-[10px] h-[5px]" />
          <div className="bg-custom-black w-[10px] h-[5px]" />
          <div className="bg-custom-black w-[10px] h-[5px]" />
        </div>
        <p className="font-bitx uppercase text-custom-black opacity-40 text-sm md:text-xl lg:text-2xl leading-4 md:leading-7">
          welcome to <br /> my portfolio 2024
        </p>
      </div>
      <div className="bg-custom-gray relative w-[70%] xl:w-[55%] 2xl:w-[40%] h-[30%] 2lg:h-[35%] flex justify-end translate-x-[-15%] md:translate-x-[-10%] rounded-2xl">
        <p className="absolute text-custom-black opacity-40 font-bitx left-[10%] top-[-8%] lg:top-[-10%] lg:text-2xl hidden md:block">
          WEB DEVELOPMENT...
        </p>
        <img
          src={avatar}
          alt="Jakub Krawiec"
          className="w-[80%] md:w-[70%] 2lg:w-[50%] object-contain absolute bottom-0 right-4 md:right-8"
        />
      </div>

      <div className="flex flex-col gap-2 md:gap-6 2lg:gap-0">
        <div className="flex justify-between items-end md:mx-4 2xl:mb-[-1em]">
          <div className="flex flex-row 2lg:flex-col gap-2 md:gap-4 2lg:gap-0">
            <img
              src={blueSquares}
              alt="blue squares"
              className="2lg:mb-[0.5em] w-[25px] md:w-[40px]"
            />
            <p className="font-bitx uppercase text-2xl md:text-5xl 2xl:text-6xl">
              Hello World
            </p>
          </div>
          <FramedText />
        </div>
        <h1 className="text-[12vw] leading-[45px] xs:leading-[50px] md:leading-[100px] lg:leading-[120px] 2lg:leading-normal 2lg:text-[6.2vw] xl:text-[6.3vw] 2xl:text-[6.4vw] font-medium">
          FRONTEND DEVELOPER
        </h1>
      </div>
    </div>
  );
};

export default Hero;
