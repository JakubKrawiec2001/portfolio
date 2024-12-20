import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedText = ({ title, containerClass, delay = 0 }) => {
  const letterRefs = useRef([]);

  useEffect(() => {
    const animation = gsap.fromTo(
      letterRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        delay: delay,
      }
    );

    return () => {
      animation.kill();
    };
  }, [delay]);

  return (
    <div className={`font-medium ${containerClass}`}>
      {title.split("").map((char, index) => (
        <span
          key={index}
          ref={(el) => (letterRefs.current[index] = el)}
          className="letter"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
