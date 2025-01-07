import border1 from "/images/border-1.svg";
import border2 from "/images/border-2.svg";
import border3 from "/images/border-3.svg";
import border4 from "/images/border-4.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FramedText = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#framedText",
      { y: 50, opacity: 0, padding: 0 },
      {
        y: 0,
        opacity: 1,
        paddingRight: "1.5rem",
        paddingLeft: "1.5rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        duration: 1,
        ease: "power3.out",
        delay: 1,
      }
    );
  });
  return (
    <div id="framedText" className="relative px-6 py-4 hidden 2lg:block">
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
