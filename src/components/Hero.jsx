import FramedText from "./FramedText";
import blueSquares from "/icons/blue-squares.svg";
import avatar from "/images/avatar.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedText from "./AnimatedText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const avatarContainerRef = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline();

    const avatarContainer = avatarContainerRef.current;
    const targetWidth = window.getComputedStyle(avatarContainer).width;

    timeline.fromTo(
      "#h1",
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "circ.inOut",
      }
    );
    timeline.fromTo(
      "#avatarContainer",
      { x: -100, width: "0%" },
      {
        width: targetWidth,
        duration: 1.5,
        ease: "power1.out",
      }
    );
    timeline.fromTo(
      "#avatarContainerText",
      { opacity: 0 },
      {
        opacity: 0.4,
        duration: 1.5,
        ease: "power1.out",
      }
    );

    gsap.fromTo(
      "#portfolioText",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  });
  useGSAP(() => {
    gsap.fromTo(
      "#h1",
      {
        x: 0,
      },
      {
        x: 100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#h1",
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#h1TextContainer",
      {
        x: 0,
      },
      {
        x: -100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#h1",
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });

  return (
    <div className="h-dvh flex flex-col justify-end relative gap-20 xs:gap-28 lg:gap-36 2lg:gap-16 pb-4 md:pb-0">
      <div
        className="flex items-end gap-4 lg:gap-6 2lg:gap-4 absolute top-[40%] right-0 rotate-[-90deg] translate-x-[40%] translate-y-[-50%]"
        id="portfolioText"
      >
        <div className="flex items-center gap-2 opacity-30 mb-1">
          <div className="bg-custom-black w-[10px] h-[5px]" />
          <div className="bg-custom-black w-[10px] h-[5px]" />
          <div className="bg-custom-black w-[10px] h-[5px]" />
        </div>
        <p className="font-bitx uppercase text-custom-black opacity-40 text-sm md:text-xl lg:text-2xl leading-4 md:leading-7">
          welcome to <br /> my portfolio 2024
        </p>
      </div>
      <div
        ref={avatarContainerRef}
        id="avatarContainer"
        className="bg-custom-gray relative w-[90%] 2lg:w-[70%] xl:w-[55%] 2xl:w-[40%] h-[30%] 2lg:h-[35%] flex justify-end  md:translate-x-[-10%] rounded-2xl"
      >
        <p
          id="avatarContainerText"
          className="absolute text-custom-black opacity-40 font-bitx left-[10%] top-[-8%] lg:top-[-10%] lg:text-2xl hidden md:block"
        >
          WEB DEVELOPMENT...
        </p>
        <img
          src={avatar}
          alt="Jakub Krawiec"
          className="w-[70%] md:w-[60%] 2lg:w-[50%] object-contain absolute bottom-0 right-4 md:right-8"
        />
      </div>

      <div className="flex flex-col gap-2 md:gap-6 2lg:gap-0">
        <div
          id="h1TextContainer"
          className="flex justify-between items-end md:mx-4 2xl:mb-[-1em]"
        >
          <div className="flex flex-row 2lg:flex-col gap-2 md:gap-4 2lg:gap-0">
            <img
              src={blueSquares}
              alt="blue squares"
              className="2lg:mb-[0.5em] w-[25px] md:w-[40px]"
            />

            <AnimatedText
              title="Hello World"
              duration={0.6}
              containerClass="font-bitx uppercase text-2xl md:text-5xl 2xl:text-6xl"
              delay={1}
            />
          </div>
          <FramedText />
        </div>
        <h1
          id="h1"
          className="text-[12vw] leading-[45px] xs:leading-[50px] md:leading-[100px] lg:leading-[120px] 2lg:leading-normal 2lg:text-[6.2vw] xl:text-[6.3vw] 2xl:text-[6.4vw] font-medium"
        >
          FRONTEND DEVELOPER
        </h1>
      </div>
    </div>
  );
};

export default Hero;
