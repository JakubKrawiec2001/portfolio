import { navLinks } from "../constansts";
import square2 from "/icons/squares-2.svg";
import square from "/icons/squares-1.svg";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-0 h-16 py-10 bg-[#f9f9f9] border-b-2 border-custom-black hidden md:flex items-center justify-between z-50 ${
        isScrolled
          ? "mx-0 md:px-4 lg:px-12 transition-all duration-300"
          : "lg:mx-12 md:px-4 lg:px-0 transition-all duration-300"
      }`}
    >
      <div className="flex items-center gap-6 2lg:gap-12">
        <img src={square2} alt="square" className="" />
        {navLinks.map((link) => {
          return (
            <a
              href={link.path}
              key={link.id}
              className="font-bitx text-custom-black uppercase lg:text-lg hover:text-custom-blue transition-colors"
            >
              {link.label}
            </a>
          );
        })}
      </div>
      <div className="flex flex-col items-end">
        <p className="text-custom-blue font-satoshi-black text-lg lg:text-xl">
          JAKUB KRAWIEC
        </p>
        <p className="text-custom-black font-bitx lg:text-lg">
          BASED IN POLAND [WROCŁAW]
        </p>
      </div>
      <img src={square} alt="square" className="absolute right-0 top-[100%]" />
    </header>
  );
};

export default Nav;
