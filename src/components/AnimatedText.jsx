import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedText = ({ title, containerClass, delay = 0, duration }) => {
  const letterRefs = useRef([]);

  useEffect(() => {
    const animation = gsap.fromTo(
      letterRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: duration,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: letterRefs.current,
          start: "top bottom",
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [delay, duration]);

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
